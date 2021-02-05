

// Question 2

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const resultsContainer = document.querySelector(".results");

function displayError(message = "Unknown error") {
    return `<div>${message}</div>`;
}


async function makeApiCall() {
    try {
        const response = await fetch(url);

        const results = await response.json();

        const resultObjects = results.results;

        console.log(resultObjects[1]);

        resultsContainer.innerHTML = "";

        for (let i = 0; i < resultObjects.length; i++) {
            if (i === 8) {
                break;
            }
            resultsContainer.innerHTML += `<div class="result"><b>name:</b> ${resultObjects[i].name} <br> <b>rating:</b> ${resultObjects[i].rating} <br> <b>tags:</b> ${resultObjects[i].tags.length}</div>`;
            console.log(resultObjects[i].name);
        }
        

    } catch (error) {
        console.log(error);
        resultsContainer.innerHTML = displayError();
    }
}

makeApiCall();