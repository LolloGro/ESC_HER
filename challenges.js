
createChallengesList();
createRooms();

const challengesList = [];
async function createChallengesList(){
    const response = await fetch('https://lernia-sjj-assignments.vercel.app/api/challenges');
    const data = await response.json();
    challengesList.length = 0;    

    data.challenges.forEach((challenge) => {
        challengesList.push(challenge);
    });

}

async function createRooms(){
    const roomContainer = document.querySelector(".book__div")
    await createChallengesList();

    challengesList.forEach((challenge) => {
        const roomTile = document.createElement("div");
        roomTile.className = "book__div__room challenge";
        roomTile.setAttribute("data-type", challenge.type);
        roomContainer.appendChild(roomTile);

        const roomName = document.createElement("h2");
        roomName.className = "book__div__titel";
        roomTile.appendChild(roomName);
        roomName.innerHTML = challenge.title + " (" + challenge.type + ")";
        
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
        bookBtn.style.marginRight= "10px";

        if (challenge.type == "online"){
            bookBtn.innerHTML = "Take challenge online"
        } 
        else 
        {
            bookBtn.innerHTML = "Book this room"
        }
        
    const bookStars = document.createElement("div");
    roomTile.appendChild(bookStars);
    bookStars.classList.add("book__stars");

    const bookStarOne=document.createElement("i");
    bookStars.appendChild(bookStarOne);
    bookStarOne.style.color="#E3170A";

    const bookStarTwo=document.createElement("i");
    bookStars.appendChild(bookStarTwo);
    bookStarTwo.style.color="#E3170A";

    const bookStarThree=document.createElement("i");
    bookStars.appendChild(bookStarThree);
    bookStarThree.style.color="#E3170A";

    const bookStarFour=document.createElement("i");
    bookStars.appendChild(bookStarFour);
    bookStarFour.style.color="#E3170A";

    const bookStarFive=document.createElement("i");
    bookStars.appendChild(bookStarFive);
    bookStarFive.style.color="#E3170A";

    switch(challenge.rating){
        case 5:
            bookStarOne.className="fa fa-star";
            bookStarTwo.className="fa fa-star";
            bookStarThree.className="fa fa-star";
            bookStarFour.className="fa fa-star";
            bookStarFive.className="fa fa-star";
        case 4.5:
            bookStarOne.className="fa fa-star";
            bookStarTwo.className="fa fa-star";
            bookStarThree.className="fa fa-star";
            bookStarFour.className="fa fa-star";
            bookStarFive.className="fa fa-star-half-stroke";
            break;
        case 4:
            bookStarOne.className="fa fa-star";
            bookStarTwo.className="fa fa-star";
            bookStarThree.className="fa fa-star";
            bookStarFour.className="fa fa-star";
            bookStarFive.className="fa-regular fa-star";
            break;
        case 3.5:
            bookStarOne.className="fa fa-star";
            bookStarTwo.className="fa fa-star";
            bookStarThree.className="fa fa-star";
            bookStarFour.className="fa fa-star-half-stroke";
            bookStarFive.className="fa-regular fa-star";
            break;
        case 3:
            bookStarOne.className="fa fa-star";
            bookStarTwo.className="fa fa-star";
            bookStarThree.className="fa fa-star";
            bookStarFour.className="fa-regular fa-star";
            bookStarFive.className="fa-regular fa-star";
            break;
        case 2.5:
            bookStarOne.className="fa fa-star";
            bookStarTwo.className="fa fa-star";
            bookStarThree.className="fa fa-star-half-stroke";
            bookStarFour.className="fa-regular fa-star";
            bookStarFive.className="fa-regular fa-star";
            break;
        case 2:
            bookStarOne.className="fa fa-star";
            bookStarTwo.className="fa fa-star";
            bookStarThree.className="fa-regular fa-star";
            bookStarFour.className="fa-regular fa-star";
            bookStarFive.className="fa-regular fa-star";
            break;
        case 1.5:
            bookStarOne.className="fa fa-star";
            bookStarTwo.className="fa fa-star-half-stroke";
            bookStarThree.className="fa-regular fa-star";
            bookStarFour.className="fa-regular fa-star";
            bookStarFive.className="fa-regular fa-star";
            break;
        case 1:
            bookStarOne.className="fa fa-star";
            bookStarTwo.className="fa-regularfa-star";
            bookStarThree.className="fa-regular fa-star";
            bookStarFour.className="fa-regular fa-star";
            bookStarFive.className="fa-regular fa-star";
            break;
        case 0.5:
            bookStarOne.className="fa fa-star-half-stroke";
            bookStarTwo.className="fa-regular fa-star";
            bookStarThree.className="fa-regular fa-star";
            bookStarFour.className="fa-regular fa-star";
            bookStarFive.className="fa-regular fa-star";
            break;
        case 0:
            bookStarOne.className="fa-regular fa-star";
            bookStarTwo.className="fa-regular fa-star";
            bookStarThree.className="fa-regular fa-star";
            bookStarFour.className="fa-regular fa-star";
            bookStarFive.className="fa-regular fa-star";
            break;
    }
    });
}