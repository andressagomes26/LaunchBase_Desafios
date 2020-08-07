const modalOverlay = document.querySelector('.modal-overlay')
const modal = document.querySelector('.modal')
const conts = document.querySelectorAll('.cont')
const close = document.querySelector('#botao')
const max = document.querySelector('#max')

for(let cont of conts){
    cont.addEventListener('click', function(){
        const videoId = cont.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('iframe').src= `https://rocketseat.com.br/${videoId}`
    })
}

close.addEventListener('click', function(){
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('iframe').src =''
})

max.addEventListener('click', function(){
    if(modal.classList.contains('max') == true){
        modal.classList.remove('max')
    }else{
        modal.classList.add('max')
    }
})