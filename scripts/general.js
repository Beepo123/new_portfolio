const scriptURL = 'https://script.google.com/macros/s/AKfycbwJe4U4jdILNU1qoey_YWeNCjT8aQgRN9u4yactDIHZnZBFsqnRW4FTE2FReYIGz4j-/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
    .finally(()=>{document.getElementById("submit-to-google-sheet").reset();})
})