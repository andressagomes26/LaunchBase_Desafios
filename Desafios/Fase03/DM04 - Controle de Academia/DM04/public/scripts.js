const cards = document.querySelectorAll(".card")

for(let card of cards){
    card.addEventListener('click', function(){
        const idIframe = card.getAttribute("id")
        window.location.href = `/course/${idIframe}`
    })
}