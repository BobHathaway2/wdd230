
const ul = document.getElementById('learning');
const fileName = 'data/assignment.json';

function insertLinks(data) {
    console.log(JSON.parse(data));
    data.forEach((element) => {
        console.log(element);
        console.log(JSON.parse(element));
    });
}

    // currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    // const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    // let desc = data.weather[0].description;
    // weatherIcon.setAttribute('src', iconsrc);
    // weatherIcon.setAttribute('alt', desc);
    // captionDesc.textContent = `${desc}`;


async function apiFetch() {
    try {
      const response = await fetch(fileName);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        insertLinks(data.weeks);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  

  apiFetch();