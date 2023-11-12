function temperature() {
    // Get the input elements by their IDs
    var cElement = document.getElementById("c");
    var fElement = document.getElementById("f");

    // Convert Celsius to Fahrenheit
    if (cElement.value !== '') {
        cElement = cElement.value; // Parse input as a float
        fElement = (cElement * 9/5) + 32;
        document.getElementById('f').value = fElement.toFixed(4);
        document.getElementById('c').value = null;
        // f.toFixed(2); // Display the result with two decimal places
    }
    // Convert Fahrenheit to Celsius
    else if (fElement.value !== '') {
        fElement = fElement.value; // Parse input as a float
        cElement = (fElement - 32) * 5/9;
        document.getElementById('c').value = cElement.toFixed(4);
        document.getElementById('f').value = null
    }
}

function weight() {
    // Get the input elements by their IDs
    var kgElement = document.getElementById("kg");
    var pElement = document.getElementById("p");

    // Convert Celsius to Fahrenheit
    if (kgElement.value !== '') {
        kgElement = kgElement.value; // Parse input as a float
        pElement = kgElement * 2.2
        document.getElementById('p').value = pElement.toFixed(4);
        document.getElementById('kg').value = null
        
        // f.toFixed(2); // Display the result with two decimal places
    }
    // Convert Fahrenheit to Celsius
    else if (pElement.value !== '') {
        pElement = pElement.value; // Parse input as a float
        kgElement = pElement/2.2
        document.getElementById('kg').value = kgElement.toFixed(4);
        document.getElementById('p').value = null
        
    }

}

function distance() {
    // Get the input elements by their IDs
    var kmElement = document.getElementById("km");
    var mElement = document.getElementById("m");

    // Convert Celsius to Fahrenheit
    if (kmElement.value !== '') {
        kmElement = kmElement.value; // Parse input as a float
        mElement = kmElement * 0.62137
        document.getElementById('m').value = mElement.toFixed(4);
        document.getElementById('km').value = null

        // f.toFixed(2); // Display the result with two decimal places
    }
    // Convert Fahrenheit to Celsius
    else if (mElement.value !== '') {
        mElement = mElement.value; // Parse input as a float
        kmElement = mElement / 0.62137
        document.getElementById('km').value = kmElement.toFixed(4);
        document.getElementById('m').value = null

    }
}
