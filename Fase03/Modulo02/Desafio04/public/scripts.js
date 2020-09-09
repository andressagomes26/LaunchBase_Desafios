// Responsável por ativar o menu
const pageAtual = location.pathname
const menuItems = document.querySelectorAll('header .links a')

for(item of menuItems){
    if(pageAtual.includes(item.getAttribute("href"))){
        item.classList.add('active')
    }
}


// Função que implementa a lógica da paginação
function paginate(totalPage, selectedPage){
    let pages = []
    let oldPage 
    
    for(let currentPage = 1; currentPage <= totalPage; currentPage++){
        
        const firstAndLastPage = currentPage == 1 || currentPage == totalPage 
        const firstAndLastPage2 = currentPage == 2 || currentPage == totalPage - 1 
        const pagesAfterSelectedPage = currentPage <= selectedPage + 1 
        const pagesBeforeSelectedPage = currentPage >= selectedPage - 1
    
        if(totalPage > 7 && firstAndLastPage || firstAndLastPage2 || pagesAfterSelectedPage && pagesBeforeSelectedPage){
            if(oldPage && currentPage - oldPage > 2){
                pages.push("...")
            }
            if(oldPage && currentPage - oldPage == 2){        
                pages.push(oldPage + 1)
            }
            pages.push(currentPage)
    
            oldPage = currentPage
        }
        else if(totalPage < 7){
            pages.push(currentPage)
        }
    }

    return pages
    
    //console.log(`paginas ${pages}`)
}

function createPagination(pagination){
    
    const page = +pagination.dataset.page
    const total = +pagination.dataset.total
    const filter = +pagination.dataset.filter

    const pages = paginate(total, page)

    let elements = ""

    for(let page of pages){
        if(String(page).includes('...')){
            elements += `<span>${page}</span>`
        }else{
            if(filter){
                elements += `<a href="?page=${page}&filter=${filter}">${page}</a>`
            }else{
                elements += `<a href="?page=${page}">${page}</a>`
            }
        }
    }

    pagination.innerHTML = elements
}

const pagination = document.querySelector('.pagination')

if(pagination){
    createPagination(pagination)
}