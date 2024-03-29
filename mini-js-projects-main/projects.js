const scrollContainer = document.querySelector(".gallery");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (event) => {
  scrollContainer.style.scrollBehavior = "auto"
  event.preventDefault();
  scrollContainer.scrollLeft += event.deltaY;
});

nextBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth"
  scrollContainer.scrollLeft += 300;
});

backBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth"
  scrollContainer.scrollLeft -= 300;
});
