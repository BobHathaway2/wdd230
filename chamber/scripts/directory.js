const jsonFile = 'data/directory.json';
const cards = document.querySelector('#directoryMainDiv');

let results = null;

async function apiFetch() {
    try {
      const response = await fetch(jsonFile);
      if (response.ok) {
        const data = await response.json();
        displayBusinesses(data.businesses);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  const displayBusinesses = (businesses) => {
    businesses.forEach((business) => {
        const card = document.createElement("section");
        card.classList.add("business","card");
        const name = document.createElement("h3");
        const portraitDiv = document.createElement("div");
        portraitDiv.classList.add("sameHeight");
        const portrait = document.createElement("img");
        const address = document.createElement("p");
        address.classList.add("dirAddress");
        const phone = document.createElement("p");
        phone.classList.add("dirPhone");
        const webp = document.createElement("p");
        webp.classList.add("dirWeb");
        const webAddress = document.createElement("a");
        name.textContent = business.name;
        address.textContent = `${business.address}, ${business.city}, ${business.state} ${business.zip}`;
        phone.textContent = business.phone;
        webAddress.setAttribute("href", business.website);
        webAddress.setAttribute("target", "none");
        webAddress.textContent = "website";
        portrait.setAttribute("src", business.image);
        portrait.setAttribute("alt", `${business.name} icon`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("height", "180");  
        portrait.setAttribute("width", "400");  
        card.appendChild(name);
        card.appendChild(portraitDiv);
        portraitDiv.appendChild(portrait);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(webp);
        webp.appendChild(webAddress);
        cards.appendChild(card);
    })
  }

apiFetch();