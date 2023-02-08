const weather = document.getElementById('weather');
const myAppId = "606d616f01a6a87fef728d7258b2b35f";
const tlat = "40.53027036721598";
const tlon = "-112.29888255735193";
const gmtOffset = 7;
const url = `//api.openweathermap.org/data/2.5/forecast?lat=${tlat}&lon=${tlon}&appid=${myAppId}&units=imperial`



function displayWeather(data) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday","Saturday"]
    let dayCount = 0;
    let mst = new Date();
    let thisDay = mst.getDay();
    for (var i = 0; i < data.list.length; i++) {
        gmt = new Date(data.list[i].dt_txt);
        forecastDay = new Date(gmt.setHours(gmt.getHours() - gmtOffset)).getDay();
        let forecastHour = gmt.getHours();
        let display = (((forecastHour >= 15 && forecastHour <= 17) && (thisDay != forecastDay) ) || (i == 0) | (i == data.list.length - 1));
        if (display) {
            dayCount += 1;
            const iconsrc = `https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}.png`;
            const weatherSection = document.createElement("div");
            weatherSection.classList.add("weather-section");
            const dayOfWeek = document.createElement("h4");
            dayOfWeek.classList.add('day-of-week');
            const description = document.createElement("p");
            const wxIcon = document.createElement("img");
            
            let desc = data.list[i].weather[0].description;
            if (i == 0) {
                dayOfWeek.innerText = `Current:`;
            } else {
                dayOfWeek.innerText = `${days[forecastDay]}:`
            }
            wxIcon.setAttribute('src', iconsrc);
            wxIcon.setAttribute('alt', desc);
            description.innerHTML = `${desc} and ${data.list[i].main.temp}&deg;F`;
            weatherSection.appendChild(wxIcon); 
            weatherSection.appendChild(description);
            weather.appendChild(dayOfWeek);
            weather.appendChild(weatherSection);
            if (dayCount >= 4) {
                break;
            }
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
