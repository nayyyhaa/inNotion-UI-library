/*----------TRANSITION ALERT------------*/
const transitionAlert = document.querySelector(".transition-alert");
const demoClose = document.querySelector(".demo-close");
const reopenBtn = document.querySelector(".reopen-alert");

demoClose.addEventListener("click", () => {
  transitionAlert.classList.add("removeTransition");
  transitionAlert.addEventListener("transitionend", (e) => {
    transitionAlert.style.display = "none";
  });
});

reopenBtn.addEventListener("click", () => {
  transitionAlert.classList.remove("removeTransition");
  transitionAlert.style.display = "flex";
});

/*-----------TOGGLE + HEART BADGE---------------------*/

// toggle badge
const toggleBadgeBtn = document.querySelector(".toogle-badge-btn");
const toggleBadge = document.querySelector(".toogle-badge-btn .badge");

toggleBadgeBtn.addEventListener("click", () => {
  toggleBadge.classList.toggle("hide");
});

// toggle icon badge
const toggleIconBadgeBtn = document.querySelector(".toogle-icon-badge-btn");
const iconBadgeBtn = document.querySelector(".toogle-icon-badge-btn i");
const toggleIconBadge = document.querySelector(".toogle-icon-badge-btn .badge");

toggleIconBadgeBtn.addEventListener("click", () => {
  let isLiked = iconBadgeBtn.classList.contains("fa-heart-o");
  iconBadgeBtn.className = isLiked ? "fa fa-heart" : "fa fa-heart-o";
  toggleIconBadge.textContent = isLiked ? +toggleIconBadge.innerText + 1 : +toggleIconBadge.innerText - 1;
});

/*-----------FORM VALIDATION---------------------*/

const validateForm = document.querySelectorAll(".validate-form");

validateForm.forEach((form) => {
  form.addEventListener(
    "submit",
    (e) => {
      if (!form.checkValidity()) e.preventDefault();
      e.preventDefault();
      form.classList.add("form-validated");
    },
    false
  );
});
