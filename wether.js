async function getWeather() {
  let city = document.getElementById("city").value;
  let apiKey = "5f19d4ffcb6e4ff444f5dd89f00eb4be";

  if (!city) {
    document.getElementById("result").innerHTML = "Please enter a city name 📍";
    return;
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    let res = await fetch(url);
    let data = await res.json();

    console.log(data); // Debugging

    if (data.cod == 200) {
      document.getElementById("result").innerHTML = `
        <h2>${data.name}</h2>
        <p class="temp">${data.main.temp} °C</p>
        <p class="desc">${data.weather[0].main}</p>
      `;
      
      
      changeBackground(data.weather[0].main);

    } else {
      document.getElementById("result").innerHTML = "City not found ❌";
     
      document.body.className = ""; 
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
    document.getElementById("result").innerHTML = "Something went wrong 🌐";
  }
}


function changeBackground(weatherStatus) {
 
  document.body.className = ""; 

  let status = weatherStatus.toLowerCase();

  if (status === "clear") {
    document.body.classList.add("hot");
  } else if (status === "rain" || status === "drizzle") {
    document.body.classList.add("rainy");
  } else if (status === "snow" || status === "clouds" || status === "haze" || status === "mist") {
    document.body.classList.add("cold");
  }
}
