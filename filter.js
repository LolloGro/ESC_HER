const closeButton = document.querySelector(".alternative__close");
const filterMenu = document.querySelector(".filter__alternative");

closeButton.addEventListener("click", () => {
    filterMenu.setAttribute("class", "close");
    openButton.setAttribute("class", "filter__button");
});

const openButton = document.querySelector(".filter__button")

openButton.addEventListener("click", () => {

    filterMenu.setAttribute("class", "filter__alternative--open");
    openButton.setAttribute("class", "close");
});

const starFrom = document.querySelectorAll(".star__from");
let starFromValue = 0;

starFrom.forEach((star, index) => {
    star.addEventListener("click", () => {
        console.log("index", index);
        starFromValue = index;
        starFrom.forEach((star, secondIndex) => {
            if (index == 0){
                const log = star.getAttribute("class");
                if(log == "rating__star star__from fa-solid fa-star rating__star--filled"){
                    star.classList.remove("rating__star--filled");
                }else if (index >= secondIndex){
                    star.classList.add("rating__star--filled");
                }
            }
            else if (index >= secondIndex) {
                star.classList.add("rating__star--filled");
            } else {
                star.classList.remove("rating__star--filled");
            }
        });         
    });
});

const starTo = document.querySelectorAll(".star__to");
let starToValue = 0;

starTo.forEach((stars, place) => {
    stars.addEventListener("click", () => {
        console.log(place);
        starToValue = place; 
        starTo.forEach((stars, secondPlace) => {
            if(place == 0){
                const check = stars.getAttribute("class");
                if(check == "rating__star star__to fa-solid fa-star rating__star--filled"){
                    stars.classList.remove("rating__star--filled"); 
                }
                else if(place >= secondPlace){
                    stars.classList.add("rating__star--filled");
                }
            }
            else if(place >= secondPlace){
                stars.classList.add("rating__star--filled");
            }else{
                stars.classList.remove("rating__star--filled");
            }
        });
    });
}); 

const taged = document.querySelectorAll(".tags__label"); 
console.log(taged);

taged.forEach((tags, index) =>{
    tags.addEventListener("click", () => {
        console.log(index); 
        if(index == 0){ 
            tags.classList.toggle("tags__label--clicked");
        }
        if(index == 1){
            tags.classList.toggle("tags__label--clicked");
        }
        if(index == 2){
            tags.classList.toggle("tags__label--clicked");
        }
        if(index == 3){
            tags.classList.toggle("tags__label--clicked");
        }
        if(index == 4){
            tags.classList.toggle("tags__label--clicked");
        }
        if(index == 5){
            tags.classList.toggle("tags__label--clicked");
        }
    });
});

document.querySelector(".type__online").addEventListener("click", ()=>{console.log("online")}); 

document.querySelector(".type__onSite").addEventListener("click", ()=>{console.log("onsite")}); 

document.querySelector(".keyword__input").addEventListener("keyup", () => {console.log("key")}); 

