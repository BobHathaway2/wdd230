const weather = document.getElementById('weather');
const weatherSection = document.createElement("section");
const description = document.createElement("p");
const wxIcon = document.createElement("img");
const myAppId = "606d616f01a6a87fef728d7258b2b35f";
const tlat = "40.53027036721598";
const tlon = "-112.29888255735193";
const url = `//api.openweathermap.org/data/2.5/weather?lat=${tlat}&lon=${tlon}&appid=${myAppId}&units=imperial`

function displayResults(data) {
    weatherSection.classList.add("weather-section");
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    wxIcon.setAttribute('src', iconsrc);
    wxIcon.setAttribute('alt', desc);
    description.innerHTML = `${desc} and ${data.main.temp}&deg; F`;
    weatherSection.appendChild(wxIcon);
    weatherSection.appendChild(description);
    weather.after(weatherSection);
    weather.textContent = `${data.name} Weather`;
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

