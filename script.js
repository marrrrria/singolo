const MENU = document.querySelector(".navigation");

MENU.addEventListener("click", event => {
  if (event.target.tagName !== "UL") {
    MENU.querySelectorAll("li").forEach(el =>
      el.classList.remove("item-selected")
    );
    event.target.parentNode.classList.add("item-selected");
  }
});
