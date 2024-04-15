const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '1f88fd8075msh879d5e17005d4ffp1bd8a8jsn7532f245f4e6',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
let cityName = "Delhi"
let currentCity = document.getElementsByClassName("cityNaam")[0];
let myinp = document.getElementById("inp-city")
let imageW = document.querySelector(".imgweath");

let searchBtn = document.getElementById("btnS")

searchBtn.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(myinp.value)


})

function getWeather(cityName) {

    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=` + cityName, options)
        .then(response => response.json())
        .then((response) => {


            document.getElementById("errtext").style.display = "none";
            console.log(response)

            Temp.innerHTML = `${response.temp} `;
            Humidity.innerHTML = `${response.humidity} %`;
            Wind_speed.innerHTML = `${response.wind_speed} km/h`;
            currentCity.innerHTML = `${cityName}`
            cityName = null;

            let cloud = response.cloud_pct;

            if (cloud < 30) {
                imageW.src = "images/clear.png"
            }
            else if (cloud > 30 && cloud < 50) {
                imageW.src = "images/clouds.png"
            }
            else if (cloud > 50 && cloud < 70) {
                imageW.src = "images/drizzle.png"
            }
            else if (cloud > 70 && cloud < 80) {
                imageW.src = "images/rain.png"
            }
            else {
                imageW.src = "images/snow.png"

            }
        })

        .catch(err => console.error("hello"));
}
