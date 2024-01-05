import { DivComponent } from "../../common/div-component";

export class Header extends DivComponent {
    constructor(appState){
        super();
        this.appState = appState;
    }

    render() {
        this.el.innerHTML = '';
        this.el.classList.add('header');
        this.el.innerHTML = `
            <div>
                <img src='/static/logo.svg' alt='logo'/>
            <div/>
            <div class='menu'>
                <a class='menu__item' href='#'>
                    <img src='/static/search.svg' alt='search logo'/>
                    search book
                </a>
                <a class='menu__item' href='#'>
                    <img src='/static/favorites.svg' alt='favorites logo'/>
                    favorites
                    <div>
                        ${this.appState.favorites.lenght}
                    </div>
                </a>
            </div>
        `;
        return this.el;
    }
}