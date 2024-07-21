// Here we use date object with the help of it we can make the countdown.
const endDate= "29 July 2024 12:00 AM "; // This line show the end date which we want to display.
document.getElementById("end-date").innerText = endDate; // This line show the end date which we want to display.

const inputs = document.querySelectorAll("input"); // Here we are making the inputs of selectors

function clock(){ // Here we make the function which variable name is clock().
    const end= new Date(endDate) // Here we convert end date in millisecond.
    const now= new Date() // It mean, what time is now or current date.
    console.log(end) // Here we print the end date.
    console.log(now) // Here we print the current date.
    //const differ=end-now; // This line helps to find the difference b/w end date and current date in millisecond.
    const differ=(end-now)/1000; // This line helps to find the difference b/w end date and current date in second.
    console.log(differ)
    // const differ = Math.floor(differ / 3600 /24) // This line helps to convert the time in Seconds to Days.
    
    inputs[0].value= Math.floor(differ / 3600 /24) //  This line is helps to print the Days on the webpage.
    // Here we put the value of Days at 0th index with the help of .value
    // .value is the way to put the values.
    inputs[1].value= Math.floor(differ / 3600)%24; // This line is helps to print the Hours on the webpage.
    // Here we put the value od Hours at 1th index with the help of .value
    inputs[2].value= Math.floor(differ / 60) % 60; // This line is helps to print the Minutes on the webpage
    inputs[3].value= Math.floor (differ) % 60; // This line is helps to print the Seconds on the webpage
}
clock() // Here we are calling the clock name function.