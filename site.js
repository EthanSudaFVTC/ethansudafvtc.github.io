console.log('Test') // Tests to see if site.js is linked correctly

const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

const welcomeMessage = document.getElementById('welcome') // puts welcome div in variable

// checks times to add correct message
if (isMorning)
{
    welcomeMessage.textContent = "Good Morning"
}
else if (isAfternoon)
{
        welcomeMessage.textContent = "Good Afternoon"
}
else if (isEvening)
{
    welcomeMessage.textContent = "Good Evening"
}