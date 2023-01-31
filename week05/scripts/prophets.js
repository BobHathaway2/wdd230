const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

let results = null;

async function getProphetData(url) {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayProphets(data.prophets);   
    }
}

function suffix(order) {
    let orderSuffix;
    switch (order) {
        case 1:
            orderSuffix = 'st';
            break;
        case 2:
            orderSuffix = 'nd';
            break;
        case 3:
            orderSuffix = 'rd';
            break;
        default :
            orderSuffix = 'th';
            break;
    }
    return orderSuffix;
}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        const card = document.createElement("section");
        const fullName = document.createElement("h2");
        const dob = document.createElement("p");
        const pob = document.createElement("p");
        const portrait = document.createElement("img");
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        dob.textContent = `Date of Birth: ${prophet.birthdate}`;
        pob.textContent =  `Place of Birth: ${prophet.birthplace}`;
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `The Prophet ${prophet.name} ${prophet.lastname}. ${prophet.order}${suffix(prophet.order)} Latter-day President`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height", "440");    
        card.appendChild(fullName);
        card.appendChild(dob);
        card.appendChild(pob);
        card.appendChild(portrait);
        cards.appendChild(card);
    });
}

getProphetData(url);