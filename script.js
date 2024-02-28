const btnJoke = document.getElementById("btn");
const jokeEl = document.getElementById("joke")

const apiKey = "tIv95Jh5AGc/tW6oM08Sfg==swk4iC2u0AiG0ZhY";

const options = {
    method: "GET",
    headers: {
        "X-API-Key": apiKey, 
    }
}

const apiURL = "https://api.api-ninjas.com/v1/jokes?limit=1";

async function getJoke(){
    try {
        jokeEl.innerText = "Loading...";
    btnJoke.disabled = true;
    btnJoke.innerText = "Waiting...";
    const response = await fetch(apiURL, options)
    const data = await response.json()

    btnJoke.disabled = false;
    btnJoke.innerText = "CRACK A JOKE";

    jokeEl.innerHTML = data[0].joke
    } catch (error) {
        jokeEl.innerText = "We have an error try again later";
        btnJoke.disabled = false;
        btnJoke.innerText = "CRACK A JOKE";
        console.log("Error")
    }
}



btnJoke.addEventListener("click", getJoke);