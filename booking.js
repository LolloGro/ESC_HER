const apiDate = "https://lernia-sjj-assignments.vercel.app//api/booking/available-date=2022-12-12&challenge=3" 
async function availableDate(){
    const res = await fetch(apiDate)
    const data = await res.json();
    printData(data)
}

function printData(){

}
-----------------------------------

const openModalBtn = document.createElement('button');
openModalBtn.textContent = 'Check Available Dates';
document.body.appendChild(openModalBtn);

const modal = document.createElement('div');
modal.id = 'modal';
document.body.appendChild(modal);

const closeModalBtn = document.createElement('span');
closeModalBtn.textContent = '×';
closeModalBtn.id = 'closeModalBtn';
modal.appendChild(closeModalBtn);

const modalTitle = document.createElement('h2');
modalTitle.textContent = 'Available Dates';
modal.appendChild(modalTitle);

const datesContainer = document.createElement('div');
datesContainer.id = 'datesContainer';
modal.appendChild(datesContainer);

openModalBtn.addEventListener('click', async () => {
  datesContainer.innerHTML = 'Loading...';

  try {
    const response = await fetch('https://lernia-sjj-assignments.vercel.app/api/booking/available-times?date=2024-12-12&challenge=3');
    const data = await response.json();

    datesContainer.innerHTML = '';

    if (data.availableTimes && data.availableTimes.length > 0) {
      data.availableTimes.forEach((time) => {
        const timeOption = document.createElement('p');
        timeOption.textContent = new Date(time).toLocaleString(); 
        datesContainer.appendChild(timeOption);
      });
    } else {
      datesContainer.textContent = 'No available dates found.';
    }

    modal.style.display = 'block';
  } catch (error) {
    datesContainer.textContent = 'Failed to load available dates.';
    console.error('Error fetching data:', error);
  }
});

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});