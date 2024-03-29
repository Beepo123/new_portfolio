import { generateWeakPass, generateAvgPass, generateStrongPass } from "./utils.js";

let password = '';

document.querySelector(".container").addEventListener("click", (event) => {
  if (event.target.closest(".button")) {
    const passStrength = event.target.classList[0]
    if(passStrength === 'weak'){
      password = generateWeakPass();
    } else if (passStrength === 'average'){
      password = generateAvgPass();
    } else {
      password = generateStrongPass();
    }

    displayGeneratedPass(password);
  }

  if (event.target.closest('.copy-image')){
    document.querySelector('input').select();
    navigator.clipboard.writeText(password)
  }
});

function displayGeneratedPass(pass){
  document.querySelector('input').value = pass;
}