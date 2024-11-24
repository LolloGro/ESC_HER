const openModalBtn = document.querySelector(".bookingModal__open");
const datesContainer = document.querySelector(".bookingModal_noTime");
const bookModal = document.querySelector(".bookRoom");
let dateValue = ""
let bookingId = ""
let test = ""
let minPart = 0; //ersätt med min värde frånhämtad array till klickat kort
let maxPart = 0; //ersätt med max värde från hämtade array till klickat kort
const bookDate = document.querySelector(".bookingModal__input");
const timesToBook = [];

bookDate.addEventListener("change", () => {
  const dateToBook = bookDate.value;
  console.log(dateToBook);
  dateValue = dateToBook;
});

//När man klickar på att boka måste man skicka med array från kort
//Hämtar nu lediga tider för datum 24-12-12 samt kort med id 3 
//Ersätt datum med ${dateToBook}?
//den måste ta med ID från den challenges man har tryckt på då det behöver skickas med i URL när man fetchar från API, ersätta 3 med ${varibelnamn}
//Data från kort ska även användas som text i bokningsrutorna 

openModalBtn.addEventListener('click', async () => {

  try {
    const url = "https://lernia-sjj-assignments.vercel.app/api/booking/available-times?";
    const urlWithParam = url + "date=" + dateValue + "&challenge=" + bookingId;
    test = urlWithParam;
    const response = await fetch(urlWithParam);
    const data = await response.json();
    const date = data.slots;
    console.log(data);
    console.log(data.slots)
    timesToBook.length = 0;
    data.slots.forEach(time => {
      timesToBook.push(time);      
      console.log(timesToBook);
    });
    creatTimeList(timesToBook); //moved here so it creates time list after array has times
    creatPartList(participants); //moved here so it creates PartList after it has participants

    if (date.length > 0) {
      //Justera för att inte kunna öppna om man inte har valt ett datum
      bookModal.style.display = 'block';
    } else {
      datesContainer.textContent = 'No available dates found.';
    }
  } catch (error) {
    datesContainer.textContent = 'Failed to load available dates.';
    console.error('Error fetching data:', error);
  }
});

const bookingModal = document.querySelector(".bookingModal");
const closeModalBtn = document.querySelector(".bookingModal__close");
closeModalBtn.addEventListener('click', () => {
  bookingModal.style.display = 'none';
});

const closeBookRoom = document.querySelector(".bookRoom__close");
closeBookRoom.addEventListener("click", ()=> {
  bookModal.style.display = "none"; 
}); 

//ersätter tider med tider från hämtad array till klickat kort 

const bookTime = document.querySelector(".bookRoom__input__time"); 
const selTime = document.getElementById("selTime");

function creatTimeList(time){
  time.forEach(t =>{
    const times = document.createElement("option");
    times.innerHTML = t;
    selTime.appendChild(times);
  }); 
}

 

bookTime.addEventListener("input", ()=> {
 const timeToBook = inputTime.value;
 console.log("time to book", timeToBook); 
});


const interval = 1; 
const length = (maxPart - minPart)  / interval +1;
const participants = Array.from({length}, (_,i) =>  minPart + i *interval);
console.log("delP", participants); 
 
const inputParticipants = document.getElementById("participants"); 
const partList = document.getElementById("selPart");

function creatPartList (part) {
  part.forEach(delt => {
    const option = document.createElement("option");
    option.innerHTML = delt;
    partList.appendChild(option); 
    
  });
}

 

const thankYou = document.querySelector(".submitBooking");

const submitBooking = document.querySelector(".bookRoom__submit");

submitBooking.addEventListener("click", () => {
  thankYou.style.display = 'block'; 
  //kontrollera att alla rutor är ifyllda för att kunna boka 
});
