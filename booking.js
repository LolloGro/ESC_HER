const openModalBtn = document.querySelector(".bookingModal__open");
const datesContainer = document.querySelector(".bookingModal_noTime");
const bookModal = document.querySelector(".bookRoom");
let dateValue = ""
let bookingId = ""
let test = ""
const bookDate = document.querySelector(".bookingModal__input");
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

    if (date.length > 0) {
      console.log("TID?")
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

const submitBooking = document.querySelector(".bookRoom__submit");
submitBooking.addEventListener("click", () => {
  //kontrollera att alla rutor är ifyllda för att kunna boka 
  console.log("JA");
});
