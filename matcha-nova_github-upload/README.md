# Matcha Nova – landingspagina

Statische website (HTML, CSS, JS) voor GitHub Pages. Geen build-stap nodig.

## Inhoud

| Sectie | Wat |
|---|---|
| Hero | Kernboodschap "Jouw ochtend, in het groen." + Firefly-video (`assets/video/matcha-nova_hero.mp4`) |
| Ons verhaal | Merkverhaal + ritueel in 3 stappen, visual met de 4 doosjes |
| Smaken | Ceremonial Matcha, Matcha Honey Glow, Matcha Ginger Boost, Matcha Berry Bloom (foto's met Matcha Nova-label) |
| Inschrijven | MailerLite-formulier (voornaam, e-mail, opt-in) |
| Footer | Privacy (GDPR) en transparantie over AI |

## Mappen

```
04_landingspagina/
├── index.html
├── css/style.css
├── js/main.js
├── assets/fonts/   Space Grotesk + DM Serif Display (lokaal, geen Google Fonts-call)
├── assets/img/     6 visuals uit 03_output/visuals/media/post (verkleind voor het web): 4 smaken, 1 merkverhaal, 1 nieuwsbrief
├── assets/video/   hero-video (720 px breed, 1,1 MB) + posterbeeld
└── .nojekyll
```

## MailerLite-formulier

De echte embed staat erin: het script "MailerLite Universal" (account 2785739) in de `<head>` en `<div class="ml-embedded" data-form="seCkho">` tussen `MAILERLITE-EMBED START` en `EINDE` in `index.html`. Wil je een ander formulier, dan pas je alleen `data-form` aan.

## Publiceren op GitHub Pages

1. Maak op GitHub een nieuwe repository, bv. `matcha-nova`.
2. Upload de **inhoud** van deze map (index.html staat in de root van de repo).
3. Settings → Pages → Source: *Deploy from a branch*, branch `main`, map `/ (root)` → Save.
4. Na ±1 minuut staat de site op `https://<gebruikersnaam>.github.io/matcha-nova/`.
