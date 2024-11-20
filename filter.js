const closeButton = document.querySelector(".alternative__close");
const filterMenu = document.querySelector(".filter__alternative");
import { createRooms } from "./challenges.js";

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
export let starFromValue = 0;

starFrom.forEach((star, index) => {
    star.addEventListener("click", () => {
        console.log("index", index);
        starFromValue = index;
        starFrom.forEach((star, secondIndex) => {
            if (index == 0) {
                const log = star.getAttribute("class");
                if (log == "rating__star star__from fa-solid fa-star rating__star--filled") {
                    star.classList.remove("rating__star--filled");
                } else if (index >= secondIndex) {
                    star.classList.add("rating__star--filled");
                }
            }
            else if (index >= secondIndex) {
                star.classList.add("rating__star--filled");
            } else {
                star.classList.remove("rating__star--filled");
            }
        });
        createRooms();         
    });
});

const starTo = document.querySelectorAll(".star__to");
export let starToValue = 0;

starTo.forEach((stars, place) => {
    stars.addEventListener("click", () => {
        console.log(place);
        starToValue = place; 
        starTo.forEach((stars, secondPlace) => {
            if (place == 0) {
                const check = stars.getAttribute("class");
                if (check == "rating__star star__to fa-solid fa-star rating__star--filled") {
                    stars.classList.remove("rating__star--filled");
                }
                else if (place >= secondPlace) {
                    stars.classList.add("rating__star--filled");
                }
            }
            else if (place >= secondPlace) {
                stars.classList.add("rating__star--filled");
            } else {
                stars.classList.remove("rating__star--filled");
            }
        });
        createRooms();
    });
});

const taged = document.querySelectorAll(".tags__label");

const filterTaged = [];


document.querySelector(".type__online").addEventListener("change", (event) => {
    const challenges = document.querySelectorAll(".challenge");

    if (event.target.checked) {
        challenges.forEach((challenge) => {
            if (challenge.getAttribute("data-type") === "online") {
                challenge.style.display = "grid"; 
            } else {
                challenge.style.display = "none"; 
            }
        });
    } else {
        challenges.forEach((challenge) => {
            challenge.style.display = "grid"; 
        });
    }
});

document.querySelector(".type__onSite").addEventListener("change", (event) => {
    const challenges = document.querySelectorAll(".challenge");

    if (event.target.checked) {
        challenges.forEach((challenge) => {
            if (challenge.getAttribute("data-type") === "onsite") {
                challenge.style.display = "grid"; 
            } else {
                challenge.style.display = "none"; 
            }
        });
    } else {
        challenges.forEach((challenge) => {
            challenge.style.display = "grid"; 
        });
    }
});

for (let i = 0; i < taged.length; i++) {
    taged[i].addEventListener("click", () => {
        const checkLabel = taged[i].getAttribute("class");
        const controllLabel = "tags__label";
        const newLabel = "tags__label--clicked";

        if (taged[i] == taged[0]) {
            const innerTage = taged[i].getHTML();
            if (checkLabel == controllLabel) {
                taged[i].classList.add(newLabel);
                
                filterTaged.push(innerTage.toLowerCase());
            } else {
                taged[i].classList.remove(newLabel);
                const j = filterTaged.indexOf(innerTage.toLowerCase());
                filterTaged.splice(j, 1);
            }
        } else if (taged[i] == taged[1]) {
            const innerTage = taged[i].getHTML();
            if (checkLabel == controllLabel) {
                taged[i].classList.add(newLabel);
                filterTaged.push(innerTage.toLowerCase());
            } else {
                taged[i].classList.remove(newLabel);
                const j = filterTaged.indexOf(innerTage.toLowerCase());
                filterTaged.splice(j, 1);
            }
        } else if (taged[i] == taged[2]) {
            const innerTage = taged[i].getHTML();
            if (checkLabel == controllLabel) {
                taged[i].classList.add(newLabel);
                filterTaged.push(innerTage.toLowerCase());
            } else {
                taged[i].classList.remove(newLabel);
                const j = filterTaged.indexOf(innerTage.toLowerCase());
                filterTaged.splice(j, 1);
            }
        }else if(taged[i] == taged[3]){ 
            const innerTage = taged[i].getHTML();
            if (checkLabel == controllLabel) {
            taged[i].classList.add(newLabel);
            filterTaged.push(innerTage.toLowerCase());
            } else {
            taged[i].classList.remove(newLabel);
            const j = filterTaged.indexOf(innerTage.toLowerCase());
            filterTaged.splice(j, 1);
            }
        }else if(taged[i] == taged[4]){
            const innerTage = taged[i].getHTML();
            if (checkLabel == controllLabel) {
                taged[i].classList.add(newLabel);
                filterTaged.push(innerTage.toLowerCase());
                } else {
                taged[i].classList.remove(newLabel);
                const j = filterTaged.indexOf(innerTage.toLowerCase());
                filterTaged.splice(j, 1);
                }
        }else if(taged[i] == taged[5]){
            const innerTage = taged[i].getHTML();
            if (checkLabel == controllLabel) {
                taged[i].classList.add(newLabel);
                filterTaged.push(innerTage.toLowerCase());
                } else {
                taged[i].classList.remove(newLabel);
                const j = filterTaged.indexOf(innerTage.toLowerCase());
                filterTaged.splice(j, 1);
                }
        }else if(taged[i] == taged[6]){
            const innerTage = taged[i].getHTML();
            if (checkLabel == controllLabel) {
                taged[i].classList.add(newLabel);
                filterTaged.push(innerTage.toLowerCase());
                } else {
                taged[i].classList.remove(newLabel);
                const j = filterTaged.indexOf(innerTage.toLowerCase());
                filterTaged.splice(j, 1);
                }
        }else if(taged[i] == taged[7]){
            const innerTage = taged[i].getHTML();
            if (checkLabel == controllLabel) {
                taged[i].classList.add(newLabel);
                filterTaged.push(innerTage.toLowerCase());
                } else {
                taged[i].classList.remove(newLabel);
                const j = filterTaged.indexOf(innerTage.toLowerCase());
                filterTaged.splice(j, 1);
                }
        }else if( taged[i]== taged[8]){
            const innerTage = taged[i].getHTML();
            if (checkLabel == controllLabel) {
                taged[i].classList.add(newLabel);
                filterTaged.push(innerTage.toLowerCase());
                } else {
                taged[i].classList.remove(newLabel);
                const j = filterTaged.indexOf(innerTage.toLowerCase());
                filterTaged.splice(j, 1);
                }
        }else if(taged[i] == taged[9]){
            const innerTage = taged[i].getHTML();
            if (checkLabel == controllLabel) {
                taged[i].classList.add(newLabel);
                filterTaged.push(innerTage.toLowerCase());
                } else {
                taged[i].classList.remove(newLabel);
                const j = filterTaged.indexOf(innerTage.toLowerCase());
                filterTaged.splice(j, 1);
                }
        }
        const tagedFilterd = challengesList.filter(n => n.labels.some(m => filterTaged.includes(m)));
        console.log(tagedFilterd); 
    });  
}

document.querySelector(".type__online").addEventListener("click", () => { console.log("online") });

document.querySelector(".type__onSite").addEventListener("click", () => { console.log("onsite") });

document.querySelector(".keyword__input").addEventListener("keyup", () => { console.log("key") });
