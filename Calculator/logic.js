const display = document.getElementById("display");

function handleEventClick(buttons) {    
    const val = buttons.value;
    if (val === "=") {
        try {
            display.value = eval(display.value);  // Note: Use eval with caution.
        } catch (error) {
            display.value = 'Error';
        }
    } else if (val === "AC") {
        display.value = '';
    } else if (val === "del") {
        display.value = display.value.slice(0, -1);
    } else {
        // Clear error if present
        if (display.value === 'Error') {
            display.value = '';
        }
        // Handle input
        display.value += val;
    }
}

function modeChange() {
    const body = document.body;
    const buttons = document.querySelectorAll("input[type='button']");
    const img = document.getElementById("modeChainge");

    body.classList.toggle("dark-mode");
    
    if (body.classList.contains("dark-mode")) {
        img.src = "sun.png"; // Change icon to sun
        img.alt = "Light Mode";
        display.classList.add("dark-mode");
        buttons.forEach(button => button.classList.add("dark-mode"));
    } else {
        img.src = "moon.png"; // Change icon back to moon
        img.alt = "Dark Mode";
        display.classList.remove("dark-mode");
        buttons.forEach(button => button.classList.remove("dark-mode"));
    }
}

function handleKeyPress(event) {
    const key = event.key;

    // Clear the display if an error is detected
    if (display.value === 'Error') {
        display.value = '';
    }

    // Handle Enter key press
    if (key === "Enter") {
        event.preventDefault();  // Prevent default behavior (like form submission)
        try {
            display.value = eval(display.value);  // Note: Use eval with caution.
        } catch (error) {
            display.value = 'Error';
        }
    } 
    // Handle numeric and operator keys
    else if (/[\d\+\-\*\/\.\(\)]/.test(key)) {
        // Ensure that invalid input does not cause errors
        if (display.value === '' && /[\+\-\*\/\.\(\)]/.test(key)) {
            // Do not allow operators at the start
            return;
        }
        display.value += key;
    } 
    // Handle Backspace key
    else if (key === "Backspace") {
        display.value = display.value.slice(0, -1);
    }
}

// Focus on the display when the page loads
window.addEventListener("load", () => {
    display.focus();
});

// Attach event listener for keypress on the document
document.addEventListener("keydown", handleKeyPress);
