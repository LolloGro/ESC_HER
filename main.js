const mainLink = document.querySelector(".main__open");
const menu = document.querySelector(".main__nav");

setHomePageCards();

mainLink.addEventListener("click", (e) => {

    e.preventDefault();
    menu.setAttribute("class", "main__nav--open");
    console.log("click");
}); 

const mainClose = document.querySelector(".main__close");

mainClose.addEventListener("click", () => {
    menu.setAttribute("class", "main__nav");
}); 

async function getAPI(){
    const response = await('https://lernia-sjj-assignments.vercel.app/api/challanges');
    const date = await response.json();
}

async function setHomePageCards(){
    const response = await fetch('https://lernia-sjj-assignments.vercel.app/api/challenges');
    const data = await response.json();
   
    data.challenges.sort((a,b) =>b.rating - a.rating);
    data.challenges.forEach(challenge => {
        console.log(challenge.rating);
    });
}