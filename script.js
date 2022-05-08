const hamburger = document.getElementById("hamburger");
const slideMenu = document.getElementById("menu");
const mobileMenuBtn = document.getElementById("menu__btn");
const secondaryMenu = document.getElementById("menu-secondary");
const secondaryMenuBtn = document.getElementById("secondaryMenuBtn");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is-toggled");
    slideMenu.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll")

    if(!hamburger.classList.contains("is-toggled")){
        secondaryMenu.classList.add("is-hidden");
    }
});

mobileMenuBtn.addEventListener("click", () => {
    secondaryMenu.classList.remove("is-hidden");
});

secondaryMenuBtn.addEventListener("click", () =>{
    secondaryMenu.classList.add("is-hidden");
})

//Accordion
const accordionItem = document.getElementsByClassName("accordion__item");

for(i = 0; i < accordionItem.length; i++){
    accordionItem[i].addEventListener("click", show)

    function show(){
        this.children[0].classList.toggle("rotate");
        this.children[1].classList.toggle("is-expanded");
        
    }
    
};

