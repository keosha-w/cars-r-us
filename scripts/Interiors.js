import { getInteriors } from "./database.js";

export const Interiors = getInteriors()

export const InteriorsHTML = () => {
    let html = `<select id='interior__options' name='interior__options'>
    <label for='interior__options'>Choose interior options:</label>`

    const listItems = Interiors.map(interior => {
        return `<option value="${interior.fabricAndColor}">${interior.fabricAndColor}</option>`
    })
    html += listItems.join("")
    html += "</select>"
    return html
}