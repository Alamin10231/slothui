document.querySelectorAll(".question-content").forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

const scrollButton = document.getElementById("scrollToTop");

scrollButton.addEventListener("click", function () {
  console.log("kanamiya");
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
