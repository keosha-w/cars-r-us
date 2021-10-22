import { getPaintColors } from "./database.js";

const paints  = getPaintColors()

export const PaintsHTML = () => {
    let html = "<ul>"

    for (const paint of paints) {
        html += `<li id="paint">${paint.paintColor}</li>`
    }
    html += "</ul>"
    return html
}