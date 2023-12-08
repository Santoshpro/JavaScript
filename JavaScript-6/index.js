// 2nd step
const temperatureField = document.querySelector(".temp");
const cityField = document.querySelector(".temp_location p");
const dateField = document.querySelector(".temp_location span");
const emojiField = document.querySelector(".weather_condition img");
const weatherField = document.querySelector(".weather_condition span");
const searchField = document.querySelector(".searchField");
const form = document.querySelector("form");

let cityName='pune'



// 3rd step
form.addEventListener('submit', function(event){
    
    event.preventDefault()
   const cityName=searchField.value
   getWeatherInfo(cityName)
})








// 1st step
async function getWeatherInfo(cityName){
    try {
        const response = await fetch( `https://api.weatherapi.com/v1/current.json?key=e61a77b745b048e5897120316230712&q=${cityName}&aqi=yes`);
const weatherData= await response.json();
console.log(weatherData);// console.log(response)

//4th step
let temp=weatherData.current.temp_c;
let name= weatherData.location.name;
let condition=weatherData.current.condition.text
let url= weatherData.current.condition.icon
let date=weatherData.current.last_updated

console.log(temp, name, condition,url,date)

//split date and time
let splitTime= date.split(" ")
console.log(splitTime)

//need date andb time
let exactDate=splitTime[0]
let exactTime=splitTime[1]
// /ccreate date obj
const d= new Date(exactDate);
console.log(d)//extract day from date obj
console.log(d.getDay())

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day=weekday[d.getDay()]
console.log(day)


temperatureField.innerText=temp;
cityField.innerText= name
dateField.innerText=  `${exactDate} ${day} ${exactTime}` //date
emojiField.src=url
weatherField.innerText= condition

        
    } 
    catch (error) {
       console.log("I am catching my error", error)
       console.log('some logic to handle eror')
    }


}
getWeatherInfo(cityName)
























// steps for making weather api
//  1) calling fetch function
//   2) aSking it to await
//   3)fetch function returning a response
//   4) that response is converted into json




