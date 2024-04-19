const input = document.querySelector("#input")
const error = document.querySelector("#error")
const form = document.querySelector("#form")

form.addEventListener('submit', (e) => {
  
  e.preventDefault()

  const pattern =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
  
  if (!input.value) {
    error.textContent = "Whoops! It looks like you forgot to add your email"
    input.classList.add('data-input--error')
    error.classList.add('show-error')
  }
  else if (!pattern.test(input.value)) {
    error.textContent ="Please provide a valid email address"
    input.classList.add('data-input--error')
    error.classList.add('show-error')
  } else {
    error.classList.remove('show-error')
    input.classList.remove('data-input--error')
    error.textContent = ""
  }
})