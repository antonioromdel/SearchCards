import {names, createCard} from "./names.js"

document.addEventListener("DOMContentLoaded", () => {
    
    const mainLayout = document.querySelector(".layout__main")
    createCard(names, mainLayout) 

    
    let input = document.querySelector(".header__input")


    function filterIcons(searchQuery){
        const card = document.querySelectorAll(".main__card")
        const nothingFound = document.querySelector("#nothingFound")
        let number = 0

        card.forEach(element => {
            let name = element.querySelector(".main__title-card").textContent.toLowerCase()
            
            if(name.includes(searchQuery.toLowerCase())) {
                nothingFound.style.display = "none"
                element.style.display = "flex"
                number++
            } else {
                element.style.display = "none"
            }
        })
        if (number == 0){
            nothingFound.style.display = "block"
        }
    }

    

    input.addEventListener('input', () => {
        const searchQuery = input.value.trim().toLowerCase()
        filterIcons(searchQuery)
    })

})

