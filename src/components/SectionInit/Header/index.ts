const navBurger = document.querySelector("#navBurger");
const navMenu = document.querySelector("#navMenu");

navBurger?.addEventListener("click", () => {
  if (navMenu?.classList.contains("hidden")) {
    navMenu.classList.remove("hidden");
  } else {
    navMenu?.classList.add("hidden");
  }
});

const smoothScroll = (target: string) => {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const applySmoothScrollToLinks = (navElement: HTMLElement | null) => {
  if (navElement) {
    navElement.addEventListener("click", (event: MouseEvent) => {
      event.preventDefault();
      const targetLink = event.target as HTMLAnchorElement;
      if (targetLink.tagName === "A") {
        const href = targetLink.getAttribute("href");
        if (href) {
          smoothScroll(href);
        }
      }
    });
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const headerNavMenu = document.getElementById("navMenu");
  applySmoothScrollToLinks(headerNavMenu);
});

document.addEventListener("DOMContentLoaded", () => {
  const footerNavMenu = document.getElementById("footer");
  applySmoothScrollToLinks(footerNavMenu);
});
