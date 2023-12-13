// submit Function

function onSubmit(e) {
	e.preventDefault();
	const form = e.target;
	const formData = new FormData(form);
	const data = Object.fromEntries(formData);
	console.log(data);
	console.log("Data Sent");
}

const form = document.getElementById("form");
form.addEventListener("submit", onSubmit);

// handle disable button
const submitButton = document.getElementById("submitButton");

function checkForm() {
	if (
		document.getElementById("name").value == "" ||
		document.getElementById("email").value == "" ||
		document.getElementById("date").value == ""
	) {
		submitButton.disabled = true;
	} else {
		submitButton.disabled = false;
	}
}

setInterval(checkForm, 100);
setInterval(() => {
	if (submitButton.disabled == false) {
		submitButton.style.cursor = "pointer";
	} else {
		submitButton.style.cursor = "not-allowed";
	}
}, 100);

//display values

const rangeValue = document.getElementById("rangeValue");
const range = document.getElementById("range");
rangeValue.innerHTML = range.value;
range.oninput = function () {
	rangeValue.innerHTML = this.value;
};

const color = document.getElementById("color");
const colorValue = document.getElementById("colorValue");
colorValue.innerHTML = color.value;
color.oninput = function () {
	colorValue.innerHTML = this.value;
};

const date = document.getElementById("date");
const dateValue = document.getElementById("dateValue");
dateValue.innerHTML = date.value;
date.oninput = function () {
	dateValue.innerHTML = this.value;
};
