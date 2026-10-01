export const locales = ["nl", "fr", "en"] as const;

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  nl: "Nederlands",
  fr: "Français",
  en: "English",
};

const nl = {
  metaDescription: "AYV WRLD bouwt websites voor iedereen die er een nodig heeft.",
  skip: "Ga naar de inhoud",
  languageLabel: "Taal",
  back: "Terug naar websites",
  nav: {
    websites: "Websites",
    work: "Werk",
    product: "Automatisering",
    course: "Cursus",
    about: "Over",
    contact: "Neem contact op",
    openMenu: "Menu openen",
    closeMenu: "Menu sluiten",
    primary: "Hoofdmenu",
    mobile: "Mobiel menu",
  },
  hero: {
    eyebrow: "Websites · België",
    subtext:
      "Ik bouw websites voor iedereen die er een nodig heeft. Duidelijk, snel, en gemaakt zodat mensen je vinden en contact opnemen.",
    primary: "Een website laten maken",
    secondary: "Bekijk het werk",
  },
  websites: {
    label: "Websites",
    title: "Een website, als je er een nodig hebt.",
    intro:
      "Voor een persoon, een winkel of een bedrijf. Jij zegt wat de site moet doen. Ik ontwerp ze, schrijf ze en zet ze online.",
    points: [
      {
        title: "Duidelijk op een telefoon",
        body: "Mensen zoeken je op hun telefoon. De site is daar eerst voor gebouwd.",
      },
      {
        title: "Over wat je doet",
        body: "Wat je aanbiedt, waar je werkt, en waarom iemand contact moet opnemen. Geen vulpagina's.",
      },
      {
        title: "Een manier om je te bereiken",
        body: "Een contactformulier of een knop die in je inbox belandt. Je antwoordt van daar.",
      },
    ],
    stepsTitle: "Hoe het werkt",
    steps: [
      {
        n: "01",
        title: "We praten",
        body: "Wat je doet, voor wie de site is, en wat er moet gebeuren als iemand langskomt.",
      },
      {
        n: "02",
        title: "Ik bouw ze",
        body: "Je ziet de site voor ze online gaat. Tekst en foto's kunnen nog veranderen.",
      },
      {
        n: "03",
        title: "Ze gaat live",
        body: "Ik koppel het domein en je houdt een site over die je naar mensen kunt sturen.",
      },
    ],
    note: "Je krijgt een vaste prijs na het eerste gesprek. Geen prijs op deze pagina tot we weten wat je nodig hebt.",
    cta: "Neem contact op",
  },
  work: {
    label: "Werk",
    title: "Een site die ik al gebouwd heb.",
    client: "Klantenwerk",
    description:
      "Een website voor een schildersbedrijf in Vlaanderen. Dit is het soort site dat ik kan bouwen.",
    meta: "Vlaanderen · Binnen en buiten · Kleur met klasse",
    cta: "Bekijk de live site",
    alt: "Homepage van Dili Paints",
  },
  product: {
    section: "Project",
    label: "Een project",
    pitch:
      "Een project dat ik bouw voor verwarmingsinstallateurs in Vlaanderen. Het heeft een eigen site. Deze pagina verwijst alleen daarheen.",
    cta: "Bekijk het product",
    newTab: "(opent in een nieuw tabblad)",
  },
  course: {
    section: "Cursus",
    title: "Leer hoe ik solo SaaS-producten bouw en lanceer.",
    description:
      "Een cursus in stappen over de apps en tools waarmee ik SaaS-producten bouw en lanceer, van idee tot betalende klant.",
    steps: [
      "Kies een probleem waar iemand voor wil betalen",
      "Bouw het product met een kleine, gerichte stack",
      "Lanceer en bereik de eerste betalende klant",
    ],
    cta: "Bekijk de cursus",
  },
  about: {
    section: "Over",
    title: "Gebouwd door één persoon.",
    bio: "Ik ben Aron. AYV WRLD is waar ik websites maak. Als je er een nodig hebt, schrijf of bel.",
    contact: "Contact",
    name: "Naam",
    email: "E-mail",
    message: "Bericht",
    submit: "Neem contact op",
    opened: "Je mailapp zou open moeten staan met dit bericht.",
    hint: "Opent je mailapp. Er wordt niets op deze site bewaard.",
  },
};

const fr = {
  metaDescription: "AYV WRLD crée des sites web pour toute personne qui en a besoin.",
  skip: "Aller au contenu",
  languageLabel: "Langue",
  back: "Retour aux sites",
  nav: {
    websites: "Sites",
    work: "Travail",
    product: "Automatisation",
    course: "Cours",
    about: "À propos",
    contact: "Me contacter",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    primary: "Menu principal",
    mobile: "Menu mobile",
  },
  hero: {
    eyebrow: "Sites web · Belgique",
    subtext:
      "Je crée des sites pour toute personne qui en a besoin. Clairs, rapides, et faits pour que les gens vous trouvent et vous contactent.",
    primary: "Faire un site",
    secondary: "Voir le travail",
  },
  websites: {
    label: "Sites",
    title: "Un site, si vous en avez besoin.",
    intro:
      "Pour une personne, un commerce ou une entreprise. Vous dites ce que le site doit faire. Je le conçois, je l'écris et je le mets en ligne.",
    points: [
      {
        title: "Clair sur un téléphone",
        body: "Les gens vous cherchent sur leur téléphone. Le site est d'abord fait pour ça.",
      },
      {
        title: "À propos de ce que vous faites",
        body: "Ce que vous proposez, où vous travaillez, et pourquoi quelqu'un devrait vous contacter. Pas de pages de remplissage.",
      },
      {
        title: "Un moyen de vous joindre",
        body: "Un formulaire ou un bouton qui arrive dans votre boîte mail. Vous répondez depuis là.",
      },
    ],
    stepsTitle: "Comment ça se passe",
    steps: [
      {
        n: "01",
        title: "On parle",
        body: "Ce que vous faites, pour qui est le site, et ce qui doit se passer quand quelqu'un arrive.",
      },
      {
        n: "02",
        title: "Je le construis",
        body: "Vous voyez le site avant qu'il soit en ligne. Le texte et les photos peuvent encore changer.",
      },
      {
        n: "03",
        title: "Il est en ligne",
        body: "Je relie le domaine et vous gardez un site que vous pouvez envoyer aux gens.",
      },
    ],
    note: "Vous recevez un prix fixe après la première conversation. Pas de prix sur cette page tant qu'on ne sait pas ce qu'il vous faut.",
    cta: "Me contacter",
  },
  work: {
    label: "Travail",
    title: "Un site que j'ai déjà construit.",
    client: "Travail client",
    description:
      "Un site pour une entreprise de peinture en Flandre. C'est le genre de site que je peux construire.",
    meta: "Flandre · Intérieur et extérieur · Kleur met klasse",
    cta: "Voir le site en ligne",
    alt: "Page d'accueil de Dili Paints",
  },
  product: {
    section: "Projet",
    label: "Un projet",
    pitch:
      "Un projet que je construis pour les installateurs de chauffage en Flandre. Il a son propre site. Cette page ne fait que renvoyer là.",
    cta: "Voir le produit",
    newTab: "(s'ouvre dans un nouvel onglet)",
  },
  course: {
    section: "Cours",
    title: "Apprenez comment je construis et lance des produits SaaS en solo.",
    description:
      "Un cours étape par étape sur les applications et les outils pour construire et lancer des produits SaaS, de l'idée au premier client payant.",
    steps: [
      "Choisir un problème que quelqu'un paiera pour résoudre",
      "Construire le produit avec une petite stack précise",
      "Lancer et atteindre le premier client payant",
    ],
    cta: "Voir le cours",
  },
  about: {
    section: "À propos",
    title: "Construit par une seule personne.",
    bio: "Je suis Aron. AYV WRLD est l'endroit où je fais des sites. Si vous en avez besoin, écrivez ou appelez.",
    contact: "Contact",
    name: "Nom",
    email: "E-mail",
    message: "Message",
    submit: "Me contacter",
    opened: "Votre application mail devrait être ouverte avec ce message.",
    hint: "Ouvre votre application mail. Rien n'est enregistré sur ce site.",
  },
};

const en = {
  metaDescription: "AYV WRLD builds websites for anyone who needs one.",
  skip: "Skip to content",
  languageLabel: "Language",
  back: "Back to websites",
  nav: {
    websites: "Websites",
    work: "Work",
    product: "Automation",
    course: "Course",
    about: "About",
    contact: "Get in touch",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    primary: "Primary",
    mobile: "Mobile",
  },
  hero: {
    eyebrow: "Websites · Belgium",
    subtext:
      "I build websites for anyone who needs one. Clear, fast, and made so people can find you and get in touch.",
    primary: "Get a website",
    secondary: "See the work",
  },
  websites: {
    label: "Websites",
    title: "A website, if you need one.",
    intro:
      "For a person, a shop, or a company. You tell me what the site has to do. I design it, write it, and put it online.",
    points: [
      {
        title: "Clear on a phone",
        body: "People look you up on their phone. The site is built for that first.",
      },
      {
        title: "About what you do",
        body: "What you offer, where you work, and why someone should contact you. No filler pages.",
      },
      {
        title: "A way to reach you",
        body: "A contact form or a button that lands in your inbox. You can answer from there.",
      },
    ],
    stepsTitle: "How it works",
    steps: [
      {
        n: "01",
        title: "We talk",
        body: "What you do, who the site is for, and what should happen when someone visits.",
      },
      {
        n: "02",
        title: "I build it",
        body: "You see the site before it goes online. Text and photos can still change.",
      },
      {
        n: "03",
        title: "It goes live",
        body: "I connect the domain and leave you with a site you can send to people.",
      },
    ],
    note: "You get a fixed price after the first conversation. No price on this page until we know what you need.",
    cta: "Get in touch",
  },
  work: {
    label: "Work",
    title: "A site I already built.",
    client: "Client work",
    description:
      "A website for a painting business in Flanders. This is the kind of site I can build.",
    meta: "Flanders · Interior and exterior · Kleur met klasse",
    cta: "View live site",
    alt: "Dili Paints homepage",
  },
  product: {
    section: "Project",
    label: "A project",
    pitch:
      "A project I'm building for heating installers in Flanders. It has its own site. This page only points there.",
    cta: "Visit the product",
    newTab: "(opens in a new tab)",
  },
  course: {
    section: "Course",
    title: "Learn how I build and ship SaaS products solo.",
    description:
      "A step-by-step course teaching the exact apps and tools used to build and launch SaaS products, from idea to paying customer.",
    steps: [
      "Choose a problem someone will pay to solve",
      "Build the product with a small, specific stack",
      "Launch and reach the first paying customer",
    ],
    cta: "Explore the course",
  },
  about: {
    section: "About",
    title: "Built by one person.",
    bio: "I'm Aron. AYV WRLD is where I make websites. If you need one, write or call.",
    contact: "Contact",
    name: "Name",
    email: "Email",
    message: "Message",
    submit: "Get in touch",
    opened: "Your email app should be open with this message.",
    hint: "Opens your email app. Nothing is stored on this site.",
  },
};

export type Copy = typeof nl;
export const copy: Record<Locale, Copy> = { nl, fr, en };
