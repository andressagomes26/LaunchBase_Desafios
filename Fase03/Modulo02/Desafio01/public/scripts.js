// Responsável por ativar o menu
const pageAtual = location.pathname
const menuItems = document.querySelectorAll('header .links a')

for(item of menuItems){
    if(pageAtual.includes(item.getAttribute("href"))){
        item.classList.add('active')
    }
}