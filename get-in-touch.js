
const typingText = document.getElementById("get-in-touch-title");
const text = "GET IN TOUCH";
let index = 0;
let currentSpeed = 200; // start slower
const maxSpeed = 40;    // fastest typing

function typeText() {
    if (index < text.length) {
        typingText.innerHTML += text.charAt(index);
        index++;

        // Increase typing speed gradually
        if (currentSpeed > maxSpeed) {
            currentSpeed -= 20; // adjust acceleration
        }

        setTimeout(typeText, currentSpeed);
    } else {
        // Done typing
        index = 0;
        // Optional: restart after delay
        // setTimeout(() => {
        //     typingText.innerHTML = "";
        //     currentSpeed = 200;
        //     typeText();
        // }, 2000);
    }
}

// Start typing
typeText();
