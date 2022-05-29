/* Global Variables */
// const zip = document.getElementById('zip')
let zip = 11432
let temp = ''
const btn = document.getElementById('generate')

// Personal API Key for OpenWeatherMap API
const apiKey = '38291b0a7dea99d63631951d24246b2e&units=imperial';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// get api link
async function getLink() {
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}`
    return url
}

// fetch API data
async function getData(url) {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        temp = data
        console.log(temp)
    })
    .catch(err => {
        console.log(err)
    })
}

// assgin function to button
btn.addEventListener('click', generateEnv)

async function generateEnv() {
   const url = await getLink()
   const temp = await getData(url)
}