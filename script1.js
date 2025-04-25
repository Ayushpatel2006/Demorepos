function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

// Function to calculate the result
function calculateResult() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch (error) {
        alert("Invalid Expression");
    }
}

// Function to clear the display
function clearDisplay() {
    document.getElementById("display").value = "";
}

