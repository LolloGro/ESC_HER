const closeButton = document.querySelector(".alternative__close");
const filterMenu = document.querySelector(".filter__alternative");
import { challengesList } from "./challenges.js";

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
export let starFromValue = null;

starFrom.forEach((star, index) => {
    star.addEventListener("click", () => {
        console.log("index", index);
        starFromValue = index + 1;
        starFrom.forEach((star, secondIndex) => {
            if (index == 0) {
                const log = star.getAttribute("class");
                if (log == "rating__star star__from fa-solid fa-star rating__star--filled") {
                    star.classList.remove("rating__star--filled");
                    starFromValue = null;
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
        createByRatingArray();
    });
});

const starTo = document.querySelectorAll(".star__to");
export let starToValue = null;

starTo.forEach((stars, place) => {
    stars.addEventListener("click", () => {
        console.log(place);
        starToValue = place + 1;
        starTo.forEach((stars, secondPlace) => {
            if (place == 0) {
                const check = stars.getAttribute("class");
                if (check == "rating__star star__to fa-solid fa-star rating__star--filled") {
                    stars.classList.remove("rating__star--filled");
                    starToValue = null;
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
        createByRatingArray();
    });
});

const onSiteCheckbox = document.querySelector(".type__onsite")
document.querySelector(".type__online").addEventListener("change", (event) => {
    const challenges = document.querySelectorAll(".challenge");

    if (event.target.checked) {
        document.querySelector(".type__onSite").checked = false;
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
        document.querySelector(".type__online").checked = false;
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

const taged = document.querySelectorAll(".tags__label");

const filterTaged = [];

taged.forEach(tag => {
    tag.addEventListener("click", () => {
        const checkLabel = tag.getAttribute("class");
        const controllLabel = "tags__label"
        const newLabel = "tags__label--clicked";
        const innerTage = tag.textContent.toLowerCase();

        if (checkLabel === controllLabel) {
            tag.classList.add(newLabel);
            filterTaged.push(innerTage);
        } else {
            tag.classList.remove(newLabel);
            const index = filterTaged.indexOf(innerTage);
            filterTaged.splice(index, 1);
        }

        const tagedFilterd = challengesList.filter(challenge => challenge.labels.some(label => filterTaged.includes(label)));
        filterByTaged(tagedFilterd);
    });
});

filterByTaged();

function filterByTaged(f) {
}


document.querySelector(".type__online").addEventListener("click", () => { console.log("online") });


document.querySelector(".keyword__input").addEventListener("keyup", () => { console.log("key"); filterText() });

async function filterText() {
    await createChallengesList();
    const input = document.querySelector(".keyword__input");
    const text = input.value;
    console.log(text);
    const filteredChallenges = [];
    challengesList.forEach(challenge => {
        if (challenge.title.toLowerCase().includes(text.toLowerCase()) || challenge.description.toLowerCase().includes(text.toLowerCase())) {
            filteredChallenges.push(challenge);
            console.log(challenge.title + " - " + challenge.description);
        }
    });
}

document.querySelector(".type__onSite").addEventListener("click", () => { console.log("onsite") });


document.querySelector(".keyword__input").addEventListener("keyup", () => { console.log("key") });

//filter by stars using staFromValue and starToValue: 
const filterByRating = []

async function createByRatingArray() {

    filterByRating.length = 0;
    challengesList.forEach(challenge => {
        if (challenge.rating >= starFromValue && challenge.rating <= starToValue) {
            filterByRating.push(challenge);
            console.log("this works");
        }
    });
    window.filterByRating = filterByRating;
};


