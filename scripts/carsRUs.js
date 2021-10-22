import { Interiors, InteriorsHTML } from "./Interiors.js"
import { PaintsHTML } from "./Paints.js"
import { TechnologiesHTML } from "./Technologies.js"
import { WheelsHTML } from "./Wheels.js"




// this module is responsible for generating the overall HTML structure for the app
export const CarsAreUs = () => {
    return `
        <h1>Cars R Us</h1>

        <article class="choices">
            <section class="choices_interiors options">
                <h2>Interiors</h2>
                ${InteriorsHTML()}
                </section>
            <section class="choices_paints options">
                <h2>Paints</h2>
                ${PaintsHTML()}
                </section>
            <section class="choices_technologies options">
                <h2>Technologies</h2>
                ${TechnologiesHTML()}
                </section>
            <section class="choices_wheels options">
                <h2>Wheels</h2>
                ${WheelsHTML()}
                </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders>
            <h2> Custom Car Orders</h2>
        </article>
    `
}