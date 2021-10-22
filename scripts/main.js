import { CarsAreUs } from "./carsRUs.js";

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = CarsAreUs()
}

renderAllHTML()