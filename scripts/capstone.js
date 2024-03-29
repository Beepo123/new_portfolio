// this file will generate space to display content of capstone when clicked

document.querySelector(".capstone-list").addEventListener("click", handleClick);
function handleClick(event) {
  const clickedDiv = event.target.closest("div");

  if (clickedDiv && clickedDiv.matches(".prototype-div, .implementation-div, .output-div")) {
    const contentContainer = document.querySelector(".capstone-content-container");

    if (!contentContainer.classList.contains("capstone-content-active")) {
      activateContentContainer(contentContainer);
      setTimeout(() => {
        updateContent(clickedDiv, contentContainer);
      }, 1000);
    } else {
      updateContent(clickedDiv, contentContainer);
    }
  }
}

async function updateContent(clickedDiv, contentContainer) {
  let html = ``;

  if (clickedDiv.classList.contains("prototype-div") || clickedDiv.classList.contains("output-div")) {
    const videoSrc = clickedDiv.classList.contains("prototype-div") ? "https://www.youtube.com/embed/0w_a6PsW4qE?autoplay=1" : "https://www.youtube.com/embed/87AXgy5VolQ?autoplay=1";
    html = `<iframe src="${videoSrc}" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>`;
  }

  if (clickedDiv.classList.contains("implementation-div")) {
    contentContainer.innerHTML = ``;
    for (let i = 1; i <= 10; i++) {
      const image = await createImage(i);
      contentContainer.appendChild(image);
    }
    return;
  }

  contentContainer.innerHTML = html;
}

function createImage(index) {
  return new Promise((resolve, reject) => {
    const source = `../images/implementation/${index}.jpg`;
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(source);
    img.src = source;
  }).catch((error) => {
    console.error('Error loading image:', error);
  });
}

function activateContentContainer(container) {
  container.classList.add("capstone-content-active");
  container.scrollIntoView({ behavior: "smooth", block: "center" });
}
