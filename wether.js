async function getWeather() {
  let city = document.getElementById("city").value;
  let apiKey = "5f19d4ffcb6e4ff444f5dd89f00eb4be";

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  let res = await fetch(url);
  let data = await res.json();

  console.log(data); // 🔥 check this

  if (data.cod == 200) {
    document.getElementById("result").innerHTML = `
      <h2>${data.name}</h2>
      <p>Temp: ${data.main.temp} °C</p>
      <p>${data.weather[0].main}</p>
    `;
  } else {
    document.getElementById("result").innerHTML = "City not found ❌";
  }
}
