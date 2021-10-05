const cards = document.querySelectorAll(".card")
const modalOverlay = document.querySelector(".modal-overlay")
const modal = document.querySelector(".modal")

const iframe = document.querySelector('iframe')
const close = document.querySelector('#close')
const maximize = document.querySelector('#maximize')


for(let card of cards){
    card.addEventListener('click', function(){
        const idIframe = card.getAttribute("id")
        modalOverlay.classList.add('active')
        iframe.src = `https://blog.rocketseat.com.br/${idIframe}`
        
        modal.classList.remove('maximize-active') 
    })
}

close.addEventListener('click', function(){
    modalOverlay.classList.remove('active')
})

maximize.addEventListener('click', function(){
    if(modal.classList.contains('maximize-active')){
        modal.classList.remove('maximize-active')
    }else(
        modal.classList.add('maximize-active')
    )
})