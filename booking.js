
const openModalBtn = document.createElement('button');// Change later to the red book btn
document.body.appendChild(openModalBtn);

const modal = document.createElement('div');
modal.classList = 'bookingModal';
document.body.appendChild(bookingModal);

const closeModalBtn = document.createElement('span');
closeModalBtn.textContent = '×';
closeModalBtn.id = 'closeModalBtn';
bookingModal.appendChild(closeModalBtn);

const modalTitle = document.createElement('h2');
modalTitle.textContent = 'Available Dates';
bookingModal.appendChild(modalTitle);

const datesContainer = document.createElement('div');
datesContainer.id = 'datesContainer';
bookingModal.appendChild(datesContainer);

openModalBtn.addEventListener('click', async () => {

  try {
    const response = await fetch('');
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