const closeButton = document.querySelector(".alternative__close");
const filterMenu = document.querySelector(".filter__alternative");
const filteredByAll = [];
import {challengesList, createRooms, createChallengesList} from "./challenges.js";

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
let starFromValue = null;

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
let starToValue = null;

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

/*const onSiteCheckbox = document.querySelector(".type__onsite")

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
});*/

const taged = document.querySelectorAll(".tags__label");

const filterTaged = [];
let tagedFilterd = [];
taged.forEach(tag => {
    tag.addEventListener("click", async () => {
        await createChallengesList();
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

        tagedFilterd = challengesList.filter(challenge => challenge.labels.some(label => filterTaged.includes(label)));
        filterByTaged(tagedFilterd);
        filterChallenges();
    });
});

filterByTaged();

function filterByTaged(f) {
}






//By-text filter
document.querySelector(".keyword__input").addEventListener("keyup", () => {console.log("key"); filterText()}); 
const filteredByText=[]; 

async function filterText() {
    await createChallengesList();
    const input = document.querySelector(".keyword__input");
    const text = input.value;
    console.log(text);
    filteredByText.length=0;
    challengesList.forEach(challenge => {
        if(challenge.title.toLowerCase().includes(text.toLowerCase()) || challenge.description.toLowerCase().includes(text.toLowerCase())){
            filteredByText.push(challenge);
        }
    });
    console.log("text filter array ");
    filteredByText.forEach(challenge => {
        console.log(challenge.title);
    })
    filterChallenges();
}

//filter by stars using staFromValue and starToValue: 
const filterByRating = []

async function createByRatingArray() {
    await createChallengesList();
    filterByRating.length = 0;
    challengesList.forEach(challenge => {
        if (challenge.rating >= starFromValue && challenge.rating <= starToValue) {
            filterByRating.push(challenge);
            console.log("this works");
        }
    });
    window.filterByRating = filterByRating;
    filterChallenges();
};

const bytypeArray = [];

document.querySelector(".type__online").addEventListener("click",  () => { console.log("online");  bytypeFilter(); });
document.querySelector(".type__onSite").addEventListener("click",  () => { console.log("onsite");  bytypeFilter(); });

async function bytypeFilter() {
    await createChallengesList();
    bytypeArray.length = 0; 
  // console.log("type array length: "+bytypeArray.length)
    const onlineChecked = document.querySelector(".type__online").checked;
    const onsiteChecked = document.querySelector(".type__onSite").checked;

    console.log("Online Checked:", onlineChecked, "Onsite Checked:", onsiteChecked); 

    challengesList.forEach(challenge => {
        if ((onlineChecked && challenge.type === "online") || 
            (onsiteChecked && challenge.type === "onsite")) {
            bytypeArray.push(challenge); 
        }
    });
    
    console.log("Filtered Array:", bytypeArray);
    filterChallenges();
}
async function filterChallenges(){
   // await createChallengesList();
    console.log("in filter all");
    console.log("type array length in filterChallenges "+bytypeArray.length);
    //tagedFilterd.forEach(challenge => {console.log(challenge.title);});
    
    filteredByAll.length = 0;
    challengesList.forEach(challenge =>{
       if(!filteredByText.includes(challenge) && filteredByText.length != 0){
        filteredByAll.push(challenge);
       }
       if(!filterByRating.includes(challenge) && filterByRating.length != 0){
        filteredByAll.push(challenge);
       }
       if(!tagedFilterd.includes(challenge) && filterTaged.length != 0){
        filteredByAll.push(challenge);
       }
       if(!bytypeArray.includes(challenge) && bytypeArray.length != 0){
        filteredByAll.push(challenge);
        console.log("hiding by type");
       }
     
    })
    filteredByAll.forEach(challenge => {
        const x = challengesList.indexOf(challenge);
        challengesList.splice(x, 1);
    })
    if(challengesList.length == 0){
        const container = document.querySelector(".book__div");
        const noMatchesText = document.createElement("h2");
        noMatchesText.innerHTML = "No matching challenges";
        container.appendChild(noMatchesText);

    }
    createRooms();
    console.log("challenges array length: "+challengesList.length);
    console.log("filtered array length: "+filteredByAll.length);
}
