const img = document.querySelector("img");
const refreshBtn = document.querySelector("#refresh-btn");
const searchBtn = document.querySelector("#search-btn");
const errorMessage = document.querySelector("#error-message");
let searchInput = document.querySelector("#search-input");

function fetchCatGif() {
    fetch("https://api.giphy.com/v1/gifs/translate?api_key=jrGcC2NtaNw49N2MXYDQWT9tIEy5ZMom&s=cats", {mode: "cors"})
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            img.src = response.data.images.original.url;
    });
}

function refresh() {
    refreshBtn.addEventListener("click", () => {
        return fetchCatGif();
    });
}

function search() {
    searchBtn.addEventListener("click", () => {
    clearErrorMessage();
        fetch(`https://api.giphy.com/v1/gifs/translate?api_key=jrGcC2NtaNw49N2MXYDQWT9tIEy5ZMom&s=${searchInput.value}`, {mode: "cors"})
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            img.src = response.data.images.original.url;
        })
        .catch(function(response) {
            errorMessage.textContent = response;
        });
    });
}

function clearErrorMessage() {
    errorMessage.textContent = "";
}

fetchCatGif();
refresh();
search();