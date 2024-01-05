import { DivComponent } from "../../common/div-component";
import './search.css';

export class Search extends DivComponent {
    constructor(state){
        super();
        this.state = state;
    }

    search(){
        const value = document.querySelector('input').value;
        this.state.searchQuery = value;
    }

    render() {
        this.el.classList.add('search');
        this.el.innerHTML = `
            <div class='search__wrapper'>
                <input 
                    type='text' 
                    placeholder='search book or author' 
                    class='search__input' 
                    value='${this.state.searchQuery??''}'/>
                <img class='search__icon' src='/static/search.svg' alt='icon find' width='24' heigth='24'/>
            </div>
            <button aria-label='search' class='search__button'>
                <img src='/static/search-white.svg' alt='search icon' width='32' heigth='32'/>
            </button>
        `;

        this.el.querySelector('button').addEventListener('click', this.search.bind(this));
        this.el.querySelector('input').addEventListener('keydown', (event) => {
            if(event.code === 'Enter'){
                this.search();
            }

        });
        return this.el;
    }
}