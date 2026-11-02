# Coming soon – Oscar France

A simple one-page "coming soon" website for Oscar's upcoming French site. It shows a group of three Oscar cars (truck, van, car) in the middle, the headline under them, and the outline of northern France in Oscar blue behind it all at the bottom – with a FR / EN language switch at the top. French is the default.

## See it on your computer

1. Open the **Terminal** app.
2. Paste this and press Enter:
   ```
   cd ~/Desktop/"Coming soon FR" && python3 -m http.server 8080
   ```
3. Open http://localhost:8080 in your browser.
4. To stop it, go back to Terminal and press `Ctrl + C`.

You can also just double-click `index.html` – it works without the server too.

## Change things

- **Text (French and English):** edit `assets/i18n.js` – each language has its own block.
- **The France outline:** drawn in `index.html` (the `<svg class="france">`), from free Natural Earth map data. Its colours are the three `stop-color` values in the same place; its size and position are `.france` and `.land` in `assets/style.css`. The cars and the text always stand inside France (`--map-depth` sets how deep).
- **The cars:** the originals are in `fr images/`. The page uses smaller, trimmed copies in `assets/img/cars/`. Position and size of each car are set in `assets/style.css` (look for `.truck`, `.van`, `.sedan`). They are set as shares of one box, so the group looks the same on every screen size.
- **Colours and sizes:** `assets/style.css` (uses the official Oscar brand colours).

## Versions

- `index.html` – the current page, **light theme** in the style of the partner site (partenaire.oscarlocation.fr), with a photo of Grand Place, Lille behind France (`assets/img/bg-1.jpg`, set at `.bg-v1` in `assets/style.css`). It is a licensed Adobe Stock photo: only the resized copy is published; the full-size originals (`AdobeStock_*.jpeg`) stay on this computer and are kept out of GitHub by `.gitignore`. The other candidate photos (`bg-2.jpg` … `bg-5.jpg`) are kept in `assets/img`.
- `index-v2-dark.html` – the saved dark version with the Lille photo (its own copy of the styles: `assets/style-v2-dark.css`).
- `index-v1-france-map.html` – the saved dark version without the Lille photo (`assets/style-v1-france-map.css`).

Open a saved version the same way, e.g. http://localhost:8080/index-v2-dark.html. To make one the live page again, rename it to `index.html` (and its stylesheet to `assets/style.css`, or keep the link as it is).

Online preview (GitHub Pages): https://patrickgammelmark.github.io/oscar-coming-soon-fr/

## Put it online

The whole folder is plain files – no build step, no running costs. Drag the folder into a free static host such as Netlify Drop (app.netlify.com/drop), Cloudflare Pages or Vercel, then point the French domain at it.

## Files

```
index.html          the page
assets/i18n.js      all text in FR + EN
assets/style.css    look and layout
assets/img/hero.jpg old background photo (no longer used)
assets/img/cars/    the Oscar cars
fr images/          original car images
assets/fonts/       Oscar fonts (Silka + Inter)
```
