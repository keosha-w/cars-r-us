import { getTechnologies } from "./database.js";

const technologies = getTechnologies()

export const TechnologiesHTML = () => {
    let html = "<ul>"

    for (const technology of technologies) {
        html += `<li id="technology">${technology.package}</li>`
    }
    html += "</ul>"
    return html
}