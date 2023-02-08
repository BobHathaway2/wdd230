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
    let i = 3;
    businesses.forEach((business) => {
    
        const h3 = document.querySelector(`section.card:nth-child(${i}) h3`)
        h3.textContent = business.name;

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