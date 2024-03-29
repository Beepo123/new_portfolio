const url = "https://api.quotable.io/random";

async function getQuote() {
  const response = await fetch(url);
  return await response.json();

}

function renderQuote(data){
  document.querySelector('blockquote').innerHTML = data.content;
  document.querySelector('span').innerHTML = data.author;
}

function error(err){
  console.log(`error connecting to server: ${err}`)
}

document.querySelector('.quote-button')
  .addEventListener('click', ()=>{
    getQuote()
    .then(renderQuote)
    .catch(error)
  })