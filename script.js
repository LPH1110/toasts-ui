const removeToastBtns = document.querySelectorAll(".toast_remove");
const toasts = document.querySelectorAll(".toast");

removeToastBtns.forEach((btn, index) => {
  btn.onclick = () => {
    toasts[index].style.animation = "0.5s fadeOut ease forwards";
  };
});
