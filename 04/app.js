function activeState(id) {
    const socialBox = document.querySelector(`#${id}`);
    const active = document.querySelector(".active");
    if (active) {
        active.classList.remove("active");
    }
    socialBox.classList.add("active");
}
