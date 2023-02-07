const jsonFile = 'data/directory.json';

function randomizeBusinesses() {

    const spotlightSpots = 3;

    let threeToSpotlight = [];
    let businessesToHighlight = [3, 4, 8, 9];
    let businessesArray = ['b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9', 'b10'];
    // let spotlightedCounts = [0, 0, 0, 0];
    let spotlightedCounts = JSON.parse(localStorage.getItem("spotLightedCounts"));
    // let chooseFrom = [];
    let randomBusiness;

    for (i = 0; i < spotlightSpots; i++) {
        let min = Math.min(...spotlightedCounts)
        let chooseFrom = [];
        for (j = 0; j < spotlightedCounts.length; j++) {
            if (spotlightedCounts[j] == min) {
                chooseFrom.push(j);
            }
        }
        randomBusiness = chooseFrom[Math.floor(Math.random()*(chooseFrom.length - 1))];
        threeToSpotlight[i] = businessesArray[randomBusiness];
        console.log(randomBusiness);
        spotlightedCounts[randomBusiness] += 1;
        localStorage.setItem("businessesArray", JSON.stringify(businessesArray));
        localStorage.setItem("businessesToHighlight", JSON.stringify(businessesToHighlight));
        localStorage.setItem("spotLightedCounts", JSON.stringify(spotlightedCounts));
    }
    // console.log(spotlightedCountArray);
    // console.log(threeToSpotlight);
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

randomizeBusinesses();