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

starFrom.forEach((star, index) => {
    star.addEventListener("click", () => {
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
    });
});

const starTo = document.querySelectorAll(".star__to");

starTo.forEach((stars, place) => {
    stars.addEventListener("click", () => {
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
    });
});

const taged = document.querySelectorAll(".tags__label");
console.log(taged);

taged.forEach((tags, index) => {
    tags.addEventListener("click", () => {
        console.log("index", index);
        const filterTaged = [];
        console.log("filterd", filterTaged); 
        if (index == 0) {
            tags.classList.toggle("tags__label--clicked");
            const vad = tags.getAttribute("class");
            if (vad == "tags__label tags__label--clicked") {
                filterTaged.push("bash");
            } else {
                const i = filterTaged.indexOf("bash");
                return filterTaged.splice(i, 1);
            }
        }
        else if (index == 1) {
            tags.classList.toggle("tags__label--clicked");
            if (tags.getAttribute("class") == "tags__label tags__label--clicked") {
                filterTaged.push("coding");
            } else {
                const i = filterTaged.indexOf("coding");
                return filterTaged.splice(i, 1);
            }
        }
        else if (index == 2) {
            tags.classList.toggle("tags__label--clicked");
        }
        else if (index == 3) {
            tags.classList.toggle("tags__label--clicked");
        }
        else if (index == 4) {
            tags.classList.toggle("tags__label--clicked");
        }
        else if (index == 5) {
            tags.classList.toggle("tags__label--clicked");
        }
        return filterTaged;
    });
});


document.querySelector(".type__online").addEventListener("click", () => { console.log("online") });

document.querySelector(".type__onSite").addEventListener("click", () => { console.log("onsite") });

document.querySelector(".keyword__input").addEventListener("keyup", () => { console.log("key") });