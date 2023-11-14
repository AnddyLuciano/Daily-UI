const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");

const rates = [one, two, three, four, five];

const submit = document.getElementById("submit");

var value;

submit.disabled = true;

function handleClick(current) {
    const active = document.querySelector(".active");
    if (active) {
        active.classList.remove("active");
    }
    current.classList.add("active");
    value = current.value;
    submit.disabled = false;
}

function handleSubmit() {
    const active = document.querySelector(".active");
    if (!active) {
        return;
    }
    if (value) {
        window.location.href = `https://anddyluciano.github.io/Daily-UI/02/thank-you?rating=${value}`;
    }
}
