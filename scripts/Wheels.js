import { getWheels } from "./database.js";

const wheels = getWheels()

export const WheelsHTML = () => {
    let html = "<ul>"

    for (const wheel of wheels) {
        html += `<li id="wheels">${wheel.package}</li>`
    }
    html += "</ul>"
    return html
}