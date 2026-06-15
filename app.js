const screens = Array.from(document.querySelectorAll(".screen"));
const navItems = Array.from(document.querySelectorAll(".nav-item"));
const gotoButtons = Array.from(document.querySelectorAll("[data-goto]"));

const navMap = {
  ecosystem: "ecosystem",
  challenge: "challenge",
  knowing: "knowing",
  diagnostic: "diagnostic",
  intelligence: "intelligence",
  dashboard: "dashboard",
  profile: "dashboard",
  evidence: "dashboard",
  attributes: "dashboard",
  planner: "response",
  response: "response",
  practice: "practice",
  projects: "practice",
  limits: "limits"
};

function setActiveScreen(targetId) {
  const target = document.getElementById(targetId);
  if (!target) return;

  screens.forEach((screen) => {
    screen.classList.toggle("active", screen.id === targetId);
  });

  const navTarget = navMap[targetId] || targetId;
  navItems.forEach((item) => {
    item.classList.toggle("active", item.dataset.goto === navTarget);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
  history.replaceState(null, "", `#${targetId}`);
}

gotoButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setActiveScreen(button.dataset.goto);
  });
});

window.addEventListener("hashchange", () => {
  const targetId = window.location.hash.replace("#", "");
  if (targetId) setActiveScreen(targetId);
});

const initialId = window.location.hash.replace("#", "");
if (initialId && document.getElementById(initialId)) {
  setActiveScreen(initialId);
}
