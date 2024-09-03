export const names = [
    "BMW",
    "PEUGEOT",
    "SEAT",
    "CHEVROLET",
    "HIUNDAY",
    "VOLKSWAGEN",
    "FERRARI",
    "MERCEDES",
    "KIA",
    "AUDI",
    "DACIA",
    "OPEL"
]

export function createCard(names, mainLayout) {

    names.forEach(element => {
        let myCard = `
            <div class="main__card"><h2 class="main__title-card">${element}</h2></div>
        `
        mainLayout.innerHTML += myCard
        
    });


}