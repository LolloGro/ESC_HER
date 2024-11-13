const mainLink = document.querySelector(".main__open");
const menu = document.querySelector(".main__nav");


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
    const response = await fetch('https://lernia-sjj-assignments.vercel.app/api/challenges');
    const data = await response.json();

    data.challenges.forEach(console.log(data.challenges))

}


async function createRooms(){
    const response = await fetch('https://lernia-sjj-assignments.vercel.app/api/challenges');
    const data = await response.json();
    const roomContainer = document.querySelector(".book__div")

    data.challenges.forEach((challenge) => {
        const roomTile = document.createElement("div");
        roomTile.className = "book__div__room";
        roomContainer.appendChild(roomTile);

        const roomName = document.createElement("h2");
        roomName.className = "dook__div__titel";
        roomTile.appendChild(roomName);
        roomName.innerHTML = challenge.title + "(" + challenge.type + ")";

        const img = document.createElement("img");
        img.className = "book__div__img";
        img.src = challenge.image;
        roomTile.appendChild(img);

        const participants = document.createElement("p");
        participants.className = "book__div__participants"
        participants.innerHTML = challenge.minParticipants + "-" + challenge.maxParticipants + " participants"
        roomTile.appendChild(participants);

        const description = document.createElement("p");
        description.className = "book__div__text";
        description.innerHTML = challenge.description;
        roomTile.appendChild(description);

        const bookBtn = document.createElement("a");
        bookBtn.className = "red__link"
        roomTile.appendChild(bookBtn);
        if (challenge.type == "online"){
            bookBtn.innerHTML == "Take challenge online"
        } 
        else 
        {
            bookBtn.innerHTML = "Book this room"
        }        
    });
}