const openModalBtn = document.querySelector(".bookingModal__open");
const datesContainer = document.querySelector(".bookingModal_noTime");
const bookModal = document.querySelector(".bookRoom");

const bookDate = document.querySelector(".bookingModal__input");
bookDate.addEventListener("change", () => {
  const dateToBook = bookDate.value;
  console.log(dateToBook);
});

//När man klickar på att boka måste man skicka med array från kort
//Hämtar nu lediga tider för datum 24-12-12 samt kort med id 3 
//Ersätt datum med ${dateToBook}?
//den måste ta med ID från den challenges man har tryckt på då det behöver skickas med i URL när man fetchar från API, ersätta 3 med ${varibelnamn}
//Data från kort ska även användas som text i bokningsrutorna 

openModalBtn.addEventListener('click', async () => {

  try {
    const response = await fetch('https://lernia-sjj-assignments.vercel.app/api/booking/available-times?date=2024-12-12&challenge=3');
    const data = await response.json();
    const date = data.slots;
    console.log(data);

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

//Lägga till funktion för att boka tid och välja deltagare 

const closeBookRoom = document.querySelector(".bookRoom__close");
closeBookRoom.addEventListener("click", ()=> {
  bookModal.style.display = "none"; 
})

const thankYou = document.querySelector(".submitBooking");

const submitBooking = document.querySelector(".bookRoom__submit");

submitBooking.addEventListener("click", () => {
  thankYou.style.display = 'block'; 
  //kontrollera att alla rutor är ifyllda för att kunna boka 
});
