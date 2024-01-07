import { DivComponent } from "../../common/div-component.js";
import { Card } from "../card/card.js";
import './card-list.css';

export class CardList extends DivComponent {
    constructor(appState, state){
        super();
        this.appState = appState
        this.state = state;
    }


    render() {
        if(this.state.loading){
            this.el.innerHTML = `
                <div class='card_list__loader'>
                    Loading...
                </div>
            `
            return this.el;
        }
        this.el.classList.add('card_list');
        this.el.innerHTML = `
        <h1>${this.state.numFound} books found</h1>
        `
        for (const card of this.state.list){
            this.el.append(new Card(this.appState, card).render())
        }
        return this.el;
    }
}