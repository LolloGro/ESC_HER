const closeButton = document.querySelector(".alternative__close");
const filterMenu = document.querySelector(".filter__alternative");

closeButton.addEventListener("click", () => {
    console.log("click");
    filterMenu.setAttribute("class", "close");
    openButton.setAttribute("class", "filter__button");
}); 

const openButton = document.querySelector(".filter__button")

openButton.addEventListener("click", () => {
    
    filterMenu.setAttribute("class", "filter__alternative--open");
    openButton.setAttribute("class", "close");  
});

const star = document.querySelector(".rating__star");
star.addEventListener("click", ()=>{

    star.classList.toggle("rating__star--filled"); 
}); 