const MENU = document.querySelector(".navigation");
const FORM_SUBMIT = document.getElementById("submit");
const CLOSE_BUTTON = document.getElementById("close-btn");
const TURN_OF_VERTICAL_BUTTON = document.getElementById("iphoneV_button");
const TURN_OF_HORIZONTAL_BUTTON = document.getElementById("iphoneH_button");
const TURN_OF_SLIDE2 = document.getElementById("circle");
const PORTFOLIO = document.getElementById("portfolio_projects");
const PORTFOLIO_TABS = document.getElementById("portfolio_tabs");
const portfolioImages = [];
let sliderItems = document.querySelectorAll(".carousel--item");
let currentItem = 0;
let isEnabled = true;

document.addEventListener("scroll", onScroll);

MENU.addEventListener("click", event => {
  if (event.target.tagName !== "UL" && event.target.tagName !== "LI") {
    MENU.querySelectorAll("li").forEach(el =>
      el.classList.remove("item-selected")
    );

    event.target.parentNode.classList.add("item-selected");
  }
});

function onScroll() {
  const curPos = window.scrollY;
  const parts = document.querySelectorAll(".one_part");

  parts.forEach(el => {
    if (el.offsetTop <= curPos && el.offsetTop + el.offsetHeight >= curPos) {
      MENU.querySelectorAll("a").forEach(link => {
        link.parentNode.classList.remove("item-selected");
        console.log(el.getAttribute("id"));
        if (el.getAttribute("id") === link.getAttribute("href").substring(1)) {
          link.parentNode.classList.add("item-selected");
        }
      });
    }
  });
}

function changeCurrentItem(n) {
  currentItem = (n + sliderItems.length) % sliderItems.length;
}

function hideItem(direction) {
  isEnabled = false;
  sliderItems[currentItem].classList.add(direction);
  sliderItems[currentItem].addEventListener("animationend", function() {
    this.classList.remove("active", direction);
  });
}

function showItem(direction) {
  sliderItems[currentItem].classList.add("next", direction);
  sliderItems[currentItem].addEventListener("animationend", function() {
    this.classList.remove("next", direction);
    this.classList.add("active");
    isEnabled = true;
  });
}

function previousItem(n) {
  hideItem("to-right");
  changeCurrentItem(n - 1);
  showItem("from-left");
}

function nextItem(n) {
  hideItem("to-left");
  changeCurrentItem(n + 1);
  showItem("from-right");
}

document.querySelector(".control.left").addEventListener("click", function() {
  if (isEnabled) {
    previousItem(currentItem);
  }
});

document.querySelector(".control.right").addEventListener("click", function() {
  if (isEnabled) {
    nextItem(currentItem);
  }
});

PORTFOLIO.querySelectorAll("li").forEach(el => {
  portfolioImages.push(el);
});

TURN_OF_VERTICAL_BUTTON.addEventListener("click", event => {
  document.getElementById("iphoneV_turn_of").classList.toggle("hidden");
});
TURN_OF_HORIZONTAL_BUTTON.addEventListener("click", event => {
  document.getElementById("iphoneH_turn_of").classList.toggle("hidden");
});
TURN_OF_SLIDE2.addEventListener("click", event => {
  document.getElementById("iphone_slide2--turn_of").classList.toggle("hidden");
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
      document.getElementById("result-subject").innerText = `Subject: ${topic}`;
    } else {
      document.getElementById("result-subject").innerText = "Without subject ";
    }

    const describe = document.getElementById("comment").value.toString();
    if (describe) {
      document.getElementById(
        "result-comment"
      ).innerText = `Description: ${describe}`;
    } else {
      document.getElementById("result-comment").innerText =
        "Without description";
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
