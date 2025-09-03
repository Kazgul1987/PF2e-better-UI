const BADGE_CLASS_MAP = {
  success: "pf2e-badge-success",
  danger: "pf2e-badge-danger",
  warning: "pf2e-badge-warning",
  info: "pf2e-badge-info",
};

function applyBadgeClasses(html) {
  html.find("[data-badge-type]").each((_, element) => {
    const type = element.dataset.badgeType;
    const cls = BADGE_CLASS_MAP[type];
    if (cls) {
      element.classList.add("pf2e-badge", cls);
    }
  });
}

Hooks.on("renderTokenHUD", (_hud, html) => {
  applyBadgeClasses(html);
});

Hooks.on("renderActorSheet", (_app, html) => {
  applyBadgeClasses(html);
});
