module.exports = {
  // Path to the homepage hero image. The headline text is baked into
  // the image itself, so this is the whole hero, nothing overlaid.
  heroImage: "/images/hero.jpg",
  heroAlt: "Live more. Spend less. Quit nursing.",

  // Sidebar countdown. Change these two lines when your plan changes
  // (for example, after re-running the Quit Calculator). Everything else
  // counts down on its own.
  quitDate: "2041-08-28",   // target quit date, YYYY-MM-DD
  shiftsPerWeek: 3,         // average shifts you work per week until then

  // Starting values written into the page at build time. The browser
  // recalculates them from today's date when the page loads.
  get yearsToGo() {
    const years = (new Date(this.quitDate) - new Date()) / (365.25 * 864e5);
    return String(Math.max(0, Math.round(years)));
  },
  get shiftsToWork() {
    const weeks = (new Date(this.quitDate) - new Date()) / (7 * 864e5);
    return String(Math.max(0, Math.round(weeks * this.shiftsPerWeek)));
  },
};