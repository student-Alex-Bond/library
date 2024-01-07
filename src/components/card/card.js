
import { DivComponent } from "../../common/div-component";
import './card.css';

export class Card extends DivComponent {
    constructor(appState, cardState){
        super();
        this.appState = appState
        this.cardState = cardState;
    }


    render() {
        this.el.classList.add('card');
        const existInFovorites = this.appState.favorites.find(
            book => book.key == this.cardState.key 
        )
        this.el.innerHTML = `
            <div class='card__image'>
                <img src="https://covers.openlibrary.org/b/olid/${this.cardState.cover_edition_key}-M.jpg" alt='covet'/>
            </div>
            <div class='card__info'>
                <div class='card__tag'>
                    ${this.cardState.subject ? this.cardState.subject[0] : 'not specified'}
                </div>
                <div class='card__name'>
                    ${this.cardState.title ? this.cardState.title : 'not specified title'}
                </div>
                <div class='card__author'>
                    ${this.cardState.author_name ? this.cardState.author_name[0] : 'not specified author'}
                </div>
                <div class='card__footer'>
                    <button class='button__add ${existInFovorites ? 'button__active' : ''}'>
                        ${
                            existInFovorites 
                                ? '<img src="/static/favorites.svg" alt="icon favorites"/>'
                                :  '<img src="/static/favorites-white.svg" alt="icon favorites"/>'
                        }
                    </button>
                </div>
            </div>
        `
        return this.el;
    }
}