const container = document.querySelector(".container");
const successContainer = document.querySelector(".success-container");
const mailInput = document.getElementById("mail-input");
const mailSubmit = document.getElementById("mail-submit");
const mailProvided = document.querySelector(".mail-provided");
const dismissMessage = document.getElementById("dismiss-message");
function handleSubmit(event) {
    const value = mailInput.value;
    if (!value) {
        event.preventDefault();
        return;
    }
    mailProvided.innerHTML = value;
    container.style.display = "none";
    successContainer.style.display = "flex";
    event.preventDefault();
}

function handleDismiss(event) {
    mailInput.value = "";
    container.style.display = "flex";
    successContainer.style.display = "none";
    event.preventDefault();
}

mailSubmit.addEventListener("click", handleSubmit);
dismissMessage.addEventListener("click", handleDismiss);
