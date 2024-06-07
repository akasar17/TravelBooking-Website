const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const checkInInput = document.querySelector('#check-in');
const checkOutInput = document.querySelector('#check-out');
const roomTypeInput = document.querySelector('#room-type');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', e => {
	e.preventDefault();

	const formData = {
		name: nameInput.value,
		email: emailInput.value,
		checkIn: checkInInput.value,
		checkOut: checkOutInput.value,
		roomType: roomTypeInput.value,
		message: messageInput.value
	};

	console.log(formData);

	// Add code to submit the form data to a server or API here
});


