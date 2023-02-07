const weather = document.getElementById('weather');
const myAppId = "606d616f01a6a87fef728d7258b2b35f";
const tlat = "40.53027036721598";
const tlon = "-112.29888255735193";
const gmtOffset = 7;
const url = `//api.openweathermap.org/data/2.5/forecast?lat=${tlat}&lon=${tlon}&appid=${myAppId}&units=imperial`



function displayWeather(data) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday","Saturday"]
    let mst = new Date();
    let thisDay = mst.getDay();
    let displayForecast = true;
    for (var i = 0; i < data.list.length; i++) {
        gmt = new Date(data.list[i].dt_txt);
        nextDay = new Date(gmt.setHours(gmt.getHours() - gmtOffset)).getDay();
        if ((thisDay != nextDay) || (i == 0) || i == data.list.length - 1) {
            thisDay = nextDay;
            const iconsrc = `https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}.png`;
            const weatherSection = document.createElement("div");
            weatherSection.classList.add("weather-section");
            const forecast = document.createElement("h4");
            const dayOfWeek = document.createElement("h5");
            dayOfWeek.classList.add('day-of-week');
            const description = document.createElement("p");
            const wxIcon = document.createElement("img");
            
            let desc = data.list[i].weather[0].description;
            if (i == 0) {
                forecast.innerText = `Current Weather:`;
            } else {
                if ((i > 0) && displayForecast) {
                    forecast.innerText = `Five Day Forecast:`;
                    dayOfWeek.innerText = `${days[thisDay]}`
                    displayForecast = false;
                } else {
                    dayOfWeek.innerText = `${days[thisDay]}`
                }
            }
            wxIcon.setAttribute('src', iconsrc);
            wxIcon.setAttribute('alt', desc);
            description.innerHTML = `${desc} and ${data.list[i].main.temp}&deg; F`;
            weatherSection.appendChild(wxIcon); 
            weatherSection.appendChild(description);
            weather.appendChild(forecast);
            weather.appendChild(dayOfWeek);
            weather.appendChild(weatherSection);
        }
    }
  }

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        displayWeather(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  

    apiFetch();
