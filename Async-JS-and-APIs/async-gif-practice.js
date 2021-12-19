const img = document.querySelector("img");
const refreshBtn = document.querySelector("#refresh-btn");
const searchBtn = document.querySelector("#search-btn");
const errorMessage = document.querySelector("#error-message");
const div = document.querySelector("div");
const h1 = document.querySelector("h1");
const input = document.querySelector("input");
const buttons = document.querySelectorAll("button");
let searchInput = document.querySelector("#search-input");

(function setStyles() {
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.textAlign = "center";
    div.style.padding = ".5em 25em .5em 25em";
    h1.style.margin = ".5em .5em .5em .5em";
    input.style.margin = ".5em .5em .5em .5em";
    buttons.forEach((btn) => {
        btn.style.margin = ".5em .5em .5em .5em";
    });
})();

async function fetchCatGif() {
    let response = await fetch("https://api.giphy.com/v1/gifs/translate?api_key=jrGcC2NtaNw49N2MXYDQWT9tIEy5ZMom&s=cats", {mode: "cors"});
    let catGif = await response.json();
    return img.src = catGif.data.images.original.url;
}

function refresh() {
    refreshBtn.addEventListener("click", () => {
        return fetchCatGif();
    });
}

function search() {
    searchBtn.addEventListener("click", async () => {
        clearErrorMessage();
        let response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=jrGcC2NtaNw49N2MXYDQWT9tIEy5ZMom&s=${searchInput.value}`, {mode: "cors"});
        let GIF = await response.json();
        return img.src = GIF.data.images.original.url;
    });
}

function clearErrorMessage() {
    errorMessage.textContent = "";
}

fetchCatGif();
refresh();
search();