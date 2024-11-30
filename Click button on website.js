function clickButtonWhenAvailable() {
    var buttonSelector = 'button.tut-slides-next'; //Put your CSS selector for the button here
    var button = document.querySelector(buttonSelector);
    
    if (button) {
        console.log("Button found, clicking...");
        button.click();
        // Check again after 1 second in case the button is re-rendered
        setTimeout(clickButtonWhenAvailable, 1000);
    } else {
        // Try again in 500 milliseconds
        setTimeout(clickButtonWhenAvailable, 500);
    }
}

// Ensure the script runs only after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    clickButtonWhenAvailable();
});
