document.querySelector("#header ul").addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    const id = event.target.dataset.link;
    
    const pageSection = document.getElementById(id);
    pageSection.scrollIntoView({ behavior: 'smooth', block: 'start'})
  }
});
