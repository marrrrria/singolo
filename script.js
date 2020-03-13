const MENU = document.querySelector(".navigation");
const FORM_SUBMIT = document.getElementById("submit");
const CLOSE_BUTTON = document.getElementById("close-btn");
const TURN_OF_VERTICAL_BUTTON = document.getElementById("iphoneV_button");
const TURN_OF_HORIZONTAL_BUTTON = document.getElementById("iphoneH_button");
const PORTFOLIO = document.getElementById("portfolio_projects");
const PORTFOLIO_TABS = document.getElementById("portfolio_tabs");
const portfolioImages = [];

PORTFOLIO.querySelectorAll("li").forEach(el => {
  portfolioImages.push(el);
});

MENU.addEventListener("click", event => {
  if (event.target.tagName !== "UL" && event.target.tagName !== "LI") {
    MENU.querySelectorAll("li").forEach(el =>
      el.classList.remove("item-selected")
    );

    event.target.parentNode.classList.add("item-selected");
  }
});

TURN_OF_VERTICAL_BUTTON.addEventListener("click", event => {
  document.getElementById("iphoneV_turn_of").classList.toggle("hidden");
});
TURN_OF_HORIZONTAL_BUTTON.addEventListener("click", event => {
  document.getElementById("iphoneH_turn_of").classList.toggle("hidden");
});

PORTFOLIO_TABS.addEventListener("click", event => {
  if (
    event.target.tagName === "SPAN" &&
    !event.target.classList.contains("tag-selected")
  ) {
    PORTFOLIO_TABS.querySelectorAll("span").forEach(el =>
      el.classList.remove("tag-selected")
    );
    event.target.classList.add("tag-selected");
    portfolioImages.push(portfolioImages.shift());
    PORTFOLIO.innerHTML = "";
    portfolioImages.forEach(el => {
      PORTFOLIO.appendChild(el);
    });
  }
});

PORTFOLIO.addEventListener("click", event => {
  PORTFOLIO.querySelectorAll("img").forEach(el => {
    el.classList.remove("project-selected");
  });
  if (event.target.tagName !== "UL" && event.target.tagName !== "LI") {
    event.target.classList.add("project-selected");
  }
});

FORM_SUBMIT.addEventListener("click", event => {
  event.preventDefault();

  if (
    document.getElementById("name").value.toString() !== "" &&
    document.getElementById("email").value.toString() !== ""
  ) {
    const topic = document.getElementById("subject").value.toString();
    if (topic) {
      document.getElementById("result-subject").innerText = `Тема: ${topic}`;
    } else {
      document.getElementById("result-subject").innerText = "Без темы";
    }

    const describe = document.getElementById("comment").value.toString();
    if (describe) {
      document.getElementById(
        "result-comment"
      ).innerText = `Описание: ${describe}`;
    } else {
      document.getElementById("result-comment").innerText = "Без описания";
    }

    document.getElementById("message-block").classList.remove("hidden");
  }
  // else {
  //   document.getElementById("result-comment").innerText = "Заполните форму!";
  //   document.getElementById("message-block").classList.remove("hidden");
  // }
});

CLOSE_BUTTON.addEventListener("click", event => {
  document.getElementById("result-comment").innerText = "";
  document.getElementById("result-subject").innerText = "";
  document.getElementById("message-block").classList.add("hidden");
});
