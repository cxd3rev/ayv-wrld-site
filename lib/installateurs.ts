/**
 * Dutch copy for /installateurs: the website service for heating installers,
 * and how it leads into the product.
 *
 * Search for "PLACEHOLDER" to find lines you should check before launch
 * (prices, counts, promises).
 */

import { links, product } from "@/lib/site";

const mail = (subject: string) =>
  `mailto:${links.email}?subject=${encodeURIComponent(subject)}`;

export const installateurs = {
  meta: {
    title: "Websites voor verwarmingsinstallateurs — AYV WRLD",
    description:
      "Duidelijke websites voor verwarmingsinstallateurs in Vlaanderen, met onderhoudsaanvragen ingebouwd.",
  },

  hero: {
    eyebrow: "Voor verwarmingsinstallateurs in Vlaanderen",
    title: "Een website die onderhoudsaanvragen binnenhaalt.",
    intro:
      "Je klanten zoeken op hun gsm naar iemand voor hun ketel. Ik bouw een duidelijke site waarop ze meteen zien wat je doet en waar je werkt, en waarop ze een onderhoud aanvragen zonder te bellen.",
    primary: { label: "Plan een gratis gesprek", href: mail("Website voor mijn installatiebedrijf") },
    secondary: { label: "Bekijk de pakketten", href: "#pakketten" },
  },

  why: {
    label: "Wat je krijgt",
    title: "Gemaakt voor één vak.",
    items: [
      {
        title: "Gevonden in je regio",
        body: "Een pagina per gemeente waar je werkt en een verzorgd Google Bedrijfsprofiel. Zo vind je klanten die 'ketelonderhoud' en hun gemeente zoeken.",
      },
      {
        title: "Aanvragen zonder telefoontjes",
        body: "Een formulier dat vraagt wat jij nodig hebt: type ketel, brandstof, adres en een voorkeursmoment. Alles komt netjes in je mailbox.",
      },
      {
        title: "Vertrouwen op het eerste zicht",
        body: "Je erkenningen, je werkgebied, foto's van echte installaties en reviews. Snel en duidelijk op elke gsm.",
      },
    ],
  },

  packages: {
    label: "Pakketten",
    title: "Duidelijke prijzen.",
    // PLACEHOLDER: these are starting prices. Adjust them after your first talks.
    note: "Richtprijzen. Na het eerste gesprek krijg je altijd een vaste offerte.",
    items: [
      {
        name: "Site",
        price: "vanaf €750",
        period: "eenmalig",
        highlight: false,
        features: [
          "Tot 5 pagina's, gemaakt voor gsm",
          "Contact- en aanvraagformulier",
          "Google Bedrijfsprofiel op orde",
          "Domeinnaam en e-mail gekoppeld",
        ],
      },
      {
        name: "Site + onderhoudsaanvragen",
        price: "vanaf €1.200",
        period: "eenmalig",
        highlight: true,
        features: [
          "Alles uit Site",
          // PLACEHOLDER: check that 10 municipality pages is what you want to offer.
          "Pagina's per gemeente in je werkgebied (tot 10)",
          "Aanvraagformulier voor onderhoud: ketel, brandstof, laatste beurt",
          "Automatische bevestigingsmail naar je klant",
        ],
      },
      {
        name: "Onderhoud",
        price: "€35",
        period: "per maand",
        highlight: false,
        features: [
          "Hosting en beveiligingsupdates",
          "Kleine tekstwijzigingen inbegrepen",
          "Eén vast aanspreekpunt",
        ],
      },
    ],
  },

  product: {
    label: "Een project dat ik bouw",
    body: `Los van deze websites bouw ik ${product.name}, een apart project voor dezelfde installateurs. Het staat op zijn eigen site.`,
    cta: "Bekijk het product",
    href: product.href,
  },

  process: {
    label: "Werkwijze",
    title: "Drie stappen.",
    steps: [
      {
        n: "01",
        title: "Kennismaking",
        body: "Een gratis gesprek van 30 minuten, bij jou of online. Wat doe je, waar werk je, en wat moet de site opleveren?",
      },
      {
        n: "02",
        title: "Ontwerp en teksten",
        body: "Jij levert foto's en de praktische info. Ik schrijf de teksten en bouw de site. Je ziet alles voor het online gaat.",
      },
      {
        n: "03",
        title: "Live en opvolging",
        body: "We zetten de site online, koppelen je domein en ik volg de eerste aanvragen mee op.",
      },
    ],
  },

  work: {
    label: "Eerder gemaakt",
    name: "Dili Paints",
    body: "Website voor een schildersbedrijf in Vlaanderen. Dezelfde aanpak: duidelijk, snel op gsm, en gericht op aanvragen.",
    href: links.diliPaints,
    cta: "Bekijk de site",
  },

  faq: {
    label: "Vragen",
    title: "Kort beantwoord.",
    items: [
      {
        q: "Wat kost het?",
        a: "Een site begint vanaf €750. Na het eerste gesprek krijg je een vaste prijs, zonder verrassingen achteraf.",
      },
      {
        q: "Hoe snel staat mijn site online?",
        a: "Dat hangt vooral af van hoe snel de teksten en foto's er zijn. Na het eerste gesprek krijg je een concrete planning.",
      },
      {
        q: "Heb ik al een domeinnaam nodig?",
        a: "Nee. Heb je er een, dan koppel ik die. Zo niet, dan help ik je er een kiezen.",
      },
      {
        q: "Kan ik later iets laten aanpassen?",
        a: "Kleine tekstwijzigingen zitten in het onderhoudspakket. Grotere wijzigingen doen we in overleg, met een prijs vooraf.",
      },
      {
        q: `Moet ik ${product.name} ook nemen?`,
        a: "Nee. De site staat volledig los van het product. Je kunt het later altijd toevoegen.",
      },
    ],
  },

  contact: {
    title: "Klaar om te starten?",
    body: "Stuur een mail of bel. Je krijgt binnen twee werkdagen antwoord.",
    // PLACEHOLDER: only keep "binnen twee werkdagen" if you can really promise it.
    cta: { label: "Plan een gratis gesprek", href: mail("Website voor mijn installatiebedrijf") },
  },

  back: "Terug naar AYV WRLD",
};
