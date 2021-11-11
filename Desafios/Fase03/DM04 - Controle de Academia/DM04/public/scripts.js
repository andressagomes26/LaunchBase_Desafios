const locationMenu = location.pathname
const MenuAtivo = document.querySelectorAll(".headerLinks a")

for(menu of MenuAtivo){
    if(locationMenu.includes(menu.getAttribute('href'))){
        menu.classList.add('active')
    }
}
