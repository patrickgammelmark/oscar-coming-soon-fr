// All page text lives here. Edit the wording in this file.
const TEXT = {
  fr: {
    pageTitle: "Oscar – Bientôt en France",
    title: '<span class="pre">La location de voitures Oscar</span> <span class="accent">arrive en France.</span>',
    lead: "Louez une voiture près de chez vous en quelques clics. Dès 2027.",
  },
  en: {
    pageTitle: "Oscar – Coming soon to France",
    title: '<span class="pre">Oscar Car Rental is</span> <span class="accent">on its way to France.</span>',
    lead: "Rent a car near you in a few clicks. Coming in 2027.",
  },
};

function setLang(lang) {
  if (!TEXT[lang]) lang = "fr";
  const t = TEXT[lang];
  document.documentElement.lang = lang;
  document.title = t.pageTitle;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.innerHTML = t[el.dataset.i18n];
  });
  document.querySelectorAll("[data-set-lang]").forEach((btn) => {
    btn.setAttribute("aria-pressed", btn.dataset.setLang === lang);
  });
  try { localStorage.setItem("lang", lang); } catch (e) {}
}

document.querySelectorAll("[data-set-lang]").forEach((btn) => {
  btn.addEventListener("click", () => setLang(btn.dataset.setLang));
});

// French by default; ?lang=en in the URL or an earlier choice switches to English
let saved = null;
try { saved = localStorage.getItem("lang"); } catch (e) {}
setLang(new URLSearchParams(location.search).get("lang") || saved || "fr");

document.getElementById("year").textContent = new Date().getFullYear();
