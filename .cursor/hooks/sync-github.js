const { execSync } = require("child_process");

function git(command) {
  return execSync(command, {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  });
}

function finish() {
  process.stdout.write("{}\n");
}

let raw = "";
process.stdin.setEncoding("utf8");
process.stdin.on("data", (chunk) => {
  raw += chunk;
});
process.stdin.on("end", () => {
  try {
    const status = git("git status --porcelain").trim();
    if (!status) {
      finish();
      return;
    }

    git("git add -A");
    git('git commit -m "Update the AYV WRLD site from Cursor."');

    let hasUpstream = true;
    try {
      git("git rev-parse --abbrev-ref --symbolic-full-name @{u}");
    } catch {
      hasUpstream = false;
    }

    if (hasUpstream) {
      git("git push");
    } else {
      git("git push -u origin HEAD");
    }
  } catch {
    // Leave the working tree as-is if git or GitHub is unavailable.
  }

  finish();
});
