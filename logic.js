// Get references to the dropdown and <p> tag
var licensedropdown = document.getElementById("license-drp");
var licensecontentDisplay = document.getElementById("license-name");

// Add an event listener to the dropdown
licensedropdown.addEventListener("change", function () {
    // Get the selected option value
    var selectedOption = licensedropdown.value;
    console.log(selectedOption);

    // Update the <p> tag content based on the selected option
    if (selectedOption === "Regular") {
        licensecontentDisplay.textContent = "Regular";
    } else if (selectedOption === "Extended") {
        licensecontentDisplay.textContent = "Extended";
    } 
});



//prices

// Get references to the dropdown and <p> tag
var pricedropdown = document.getElementById("price-drp");
var pricecontentDisplay = document.getElementById("moth-support");
var contentDisplayprice = document.getElementById("price");

// Add an event listener to the dropdown
pricedropdown.addEventListener("change", function () {
    // Get the selected option value
    var selectedOption = pricedropdown.value;

    // Update the <p> tag content based on the selected option
    if (selectedOption === "6 month support") {
        pricecontentDisplay.textContent = "6 month support";
        contentDisplayprice.textContent = "$950";
        
    } else if (selectedOption === "12 month support") {
        pricecontentDisplay.textContent = "12 month support";
        contentDisplayprice.textContent = "$1231.25";
    } 
});




