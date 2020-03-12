const MENU = document.querySelector(".navigation");
const FORM_SUBMIT = document.getElementById("submit");
const CLOSE_BUTTON = document.getElementById("close-btn");
const TURN_OF_VERTICAL_BUTTON = document.getElementById("iphoneV_button");
const TURN_OF_HORIZONTAL_BUTTON = document.getElementById("iphoneH_button");
const PORTFOLIO = document.getElementById("portfolio_projects");

MENU.addEventListener("click", event => {
  if (event.target.tagName !== "UL") {
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

PORTFOLIO.addEventListener("click", event => {
  PORTFOLIO.querySelectorAll("img").forEach(el => {
    // console.log(el.target);
    el.classList.remove("project-selected");
  });
  if (event.target.tagName !== "UL" && event.target.tagName !== "LI") {
    event.target.classList.add("project-selected");
  }
});

FORM_SUBMIT.addEventListener("click", event => {
  event.preventDefault();
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
});

CLOSE_BUTTON.addEventListener("click", event => {
  document.getElementById("result-comment").innerText = "";
  document.getElementById("result-subject").innerText = "";
  document.getElementById("message-block").classList.add("hidden");
});
