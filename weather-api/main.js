const apiKey = "fb0ee7f8d2f367aea305e4662a0c1a30";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
	try {
	const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
	var data = await response.json();

	console.log(data);

	// when you go to the console you will get the below info i.e. name, main.temp, main.humidity and wind.speed
	document.querySelector(".city").innerHTML = data.name;
	document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°C";
	document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
	document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
	} catch (error) {
		console.error("Error fetching weather data;", error);
	}
}

searchBtn.addEventListener("click", ()=>{
	checkWeather(searchBox.value);
});
