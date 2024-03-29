const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll(".card")
const closeModal = document.querySelector(".close-modal")
const iframe = modalOverlay.querySelector("iframe")

for(let card of cards){
    card.addEventListener("click", function(){
        const videoId = card.getAttribute("id")
        modalOverlay.classList.add("active")
        iframe.src = `https://www.youtube.com/embed/${videoId}`
    })
}

closeModal.addEventListener("click", function(){
    modalOverlay.classList.remove('active')
    iframe.src = ""
})

