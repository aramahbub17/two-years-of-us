const pin = document.getElementById("pin");
const enter = document.getElementById("enter");
const dots = document.querySelectorAll(".dots span");

const correctPassword = "091721";


/* Number input */

pin.addEventListener("input", () => {

    pin.value = pin.value.replace(/\D/g, "");

    dots.forEach((dot, index) => {

        if (index < pin.value.length) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }

    });

});


/* Enter */

enter.addEventListener("click", checkPassword);


/* Keyboard Enter */

pin.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        checkPassword();
    }

});


function checkPassword() {

    if (pin.value === correctPassword) {

        // Unlock
        document.body.style.transition =
            "opacity 1.2s ease";

        document.body.style.opacity = "0";

        setTimeout(() => {

            window.location.href = "unlocked.html";

        }, 1200);

    } else {

        // Wrong password
        window.location.href = "error.html";

    }

}
