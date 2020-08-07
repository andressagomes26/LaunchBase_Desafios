const conts = document.querySelectorAll('.cont')

for(let cont of conts){
    cont.addEventListener('click', function(){
        const pageId = cont.getAttribute("id")
        window.location.href = `/courses/${pageId}`
    })
}
