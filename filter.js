createChallengesList();
const challengesList = []; 

async function createChallengesList(){
    const response = await fetch('https://lernia-sjj-assignments.vercel.app/api/challenges');
    const data = await response.json();
    challengesList.length = 0;    

    data.challenges.forEach((challenge) => {
        challengesList.push(challenge);
    });

}

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

const filterTaged = [];

for (let i = 0; i < taged.length; i++) {
    taged[i].addEventListener("click", () => {
        const checkLabel = taged[i].getAttribute("class");
        const controllLabel = "tags__label";
        const newLabel = "tags__label--clicked";

        if (taged[i] == taged[0]) {
            if (checkLabel == controllLabel) {
                taged[i].classList.add(newLabel);
                filterTaged.push("bash");
            } else {
                taged[i].classList.remove(newLabel);
                const j = filterTaged.indexOf("bash");
                filterTaged.splice(j, 1);
            }
        } else if (taged[i] == taged[1]) {
            if (checkLabel == controllLabel) {
                taged[i].classList.add(newLabel);
                filterTaged.push("coding");
            } else {
                taged[i].classList.remove(newLabel);
                const j = filterTaged.indexOf("coding");
                filterTaged.splice(j, 1);
            }
        } else if (taged[i] == taged[2]) {
            if (checkLabel == controllLabel) {
                taged[i].classList.add(newLabel);
                filterTaged.push("web");
            } else {
                taged[i].classList.remove(newLabel);
                const j = filterTaged.indexOf("web");
                filterTaged.splice(j, 1);
            }
        }else if(taged[i] == taged[3]){ 
            if (checkLabel == controllLabel) {
            taged[i].classList.add(newLabel);
            filterTaged.push("ssh");
            } else {
            taged[i].classList.remove(newLabel);
            const j = filterTaged.indexOf("ssh");
            filterTaged.splice(j, 1);
            }
        }else if(taged[i] == taged[4]){
            if (checkLabel == controllLabel) {
                taged[i].classList.add(newLabel);
                filterTaged.push("ctf");
                } else {
                taged[i].classList.remove(newLabel);
                const j = filterTaged.indexOf("ctf");
                filterTaged.splice(j, 1);
                }
        }else if(taged[i] == taged[5]){

            if (checkLabel == controllLabel) {
                taged[i].classList.add(newLabel);
                filterTaged.push("javascript");
                } else {
                taged[i].classList.remove(newLabel);
                const j = filterTaged.indexOf("javascript");
                filterTaged.splice(j, 1);
                }
        }else if(taged[i] == taged[6]){
            if (checkLabel == controllLabel) {
                taged[i].classList.add(newLabel);
                filterTaged.push("phreaking");
                } else {
                taged[i].classList.remove(newLabel);
                const j = filterTaged.indexOf("phreaking");
                filterTaged.splice(j, 1);
                }
        }else if(taged[i] == taged[7]){
            if (checkLabel == controllLabel) {
                taged[i].classList.add(newLabel);
                filterTaged.push("electronics");
                } else {
                taged[i].classList.remove(newLabel);
                const j = filterTaged.indexOf("electronics");
                filterTaged.splice(j, 1);
                }
        }else if( taged[i]== taged[8]){
            if (checkLabel == controllLabel) {
                taged[i].classList.add(newLabel);
                filterTaged.push("hacking");
                } else {
                taged[i].classList.remove(newLabel);
                const j = filterTaged.indexOf("hacking");
                filterTaged.splice(j, 1);
                }
        }else if(taged[i] == taged[9]){
            if (checkLabel == controllLabel) {
                taged[i].classList.add(newLabel);
                filterTaged.push("linux");
                } else {
                taged[i].classList.remove(newLabel);
                const j = filterTaged.indexOf("linux");
                filterTaged.splice(j, 1);
                }
        }

        const OKO = challengesList.filter(n => n.labels.some(m => filterTaged.includes(m)));
        console.log(OKO); 
    });  
}

document.querySelector(".type__online").addEventListener("click", () => { console.log("online") });

document.querySelector(".type__onSite").addEventListener("click", () => { console.log("onsite") });

document.querySelector(".keyword__input").addEventListener("keyup", () => { console.log("key") });
