const endDate= "29 July 2024 12:00 AM ";
document.getElementById("end-date").innerText = endDate;

const inputs = document.querySelectorAll("input"); 

function clock(){
    const end= new Date(endDate) // Here we convert end date in millisecond.
    const now= new Date()  // It mean, what time is now or current date.
    console.log(end)
    console.log(now)
    const differ=(end-now)/1000; // It helps to find the diff b/w end date and current date in second.
    console.log(differ)
    
    inputs[0].value= Math.floor(differ / 3600 /24);//  This line is helps to print the Days on the webpage.
    inputs[1].value= Math.floor(differ / 3600)%24;//  This line is helps to print the Hours on the webpage.
    inputs[2].value= Math.floor(differ / 60) % 60; //  This line is helps to print the Minutes on the webpage.
    inputs[3].value= Math.floor (differ) % 60; //  This line is helps to print the Seconds on the webpage.
}

clock()
