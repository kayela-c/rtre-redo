

let cookieModal = document.getElementById('cookies');
let acceptBtn = document.getElementById('accept-btn');

acceptBtn.addEventListener('click', function(){
  cookieModal.classList.remove('active')
  localStorage.setItem('cookieAccepted', 'yes')
})

setTimeout(function (){
  let cookieAccepted = localStorage.getItem('cookieAccepted')
  if (cookieAccepted != 'yes'){
    cookieModal.classList.add('active')
  }
  cookieModal.classList.add('active')
}, 2000) 