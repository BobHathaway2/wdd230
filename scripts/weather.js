const weather = document.getElementById('weather');
const weatherSection = document.createElement("section");
const description = document.createElement("p");
const wxIcon = document.createElement("img")
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Tooele,ut,us&units=imperial&APPID=606d616f01a6a87fef728d7258b2b35f';

function displayResults(data) {
    weatherSection.classList.add("weather-section");
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    wxIcon.setAttribute('src', iconsrc);
    wxIcon.setAttribute('alt', desc);
    description.innerHTML = `${data.main.temp}&deg; F,  ${desc}`;
    weatherSection.appendChild(wxIcon);
    weatherSection.appendChild(description);
    weather.after(weatherSection);
    
  }

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  

  apiFetch();

