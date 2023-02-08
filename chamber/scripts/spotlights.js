const jsonFile = 'data/directory.json';

function getGoldAndSilver (businesses) {
    let i = 0;
    let businessesArray = [];
    businesses.forEach((business) => {
        if (business.level == "Gold" || business.level == "Silver") {
            businessesArray[i] = business;
            i = i + 1;
        }
    })
    return businessesArray;
}

function buildSpotlightCards(businesses) {
    let i = 4;
    businesses.forEach((business) => {
        const card = document.querySelector(`section.card:nth-child(${i})`)
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
        name.textContent = business.name;
        address.textContent = `${business.address}, ${business.city}, ${business.state} ${business.zip}`;
        phone.textContent = business.phone;
        webAddress.setAttribute("href", business.website);
        webAddress.textContent = "website";
        portrait.setAttribute("src", business.image);
        portrait.setAttribute("alt", `${business.name} icon`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("height", "180");    
        card.appendChild(name);
        card.appendChild(portraitDiv);
        portraitDiv.appendChild(portrait);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(webp);
        webp.appendChild(webAddress);
        i += 1;
    })
}

function randomizeBusinesses(businesses) {

    businessesToHighlight = getGoldAndSilver(businesses);

    const spotlightSpots = 3;

    let threeToSpotlight = [];
    let threeToSpotlightIndexes = [];
    let spotlightedCounts = JSON.parse(localStorage.getItem("spotLightedCounts"));
    // let chooseFrom = [];
    let randomBusiness;
    let chooseFrom = [];
    for (i = 0; i < spotlightSpots; i++) {
        let min = Math.min(...spotlightedCounts)
        chooseFrom = [];
        for (j = 0; j < spotlightedCounts.length; j++) {
            if (spotlightedCounts[j] == min) {
                if (threeToSpotlightIndexes.indexOf(j) == -1) {
                    chooseFrom.push(j);
                }
            }
        }
        randomBusiness = chooseFrom[Math.floor(Math.random()*(chooseFrom.length))];
        threeToSpotlightIndexes[i] = randomBusiness;
        // console.log(businessesToHighlight);
        // console.log(spotlightedCounts);
        // console.log(threeToSpotlight);
        // console.log(chooseFrom);
        // console.log(i);
        // console.log(j);
        spotlightedCounts[randomBusiness] += 1;
        localStorage.setItem("spotLightedCounts", JSON.stringify(spotlightedCounts));
    }
    threeToSpotlightIndexes.forEach((index) => {
        threeToSpotlight.push(businessesToHighlight[index])
    })
    buildSpotlightCards(threeToSpotlight);
}

async function apiFetch() {
    try {
      const response = await fetch(jsonFile);
      if (response.ok) {
        const data = await response.json();
        randomizeBusinesses(data.businesses);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();