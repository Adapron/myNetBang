import { IdManager } from './idManager.js';


export class MyElement{
    id;
    element;

    constructor() {
        this.id = IdManager.newID();
        this.element = document.createElement('div');
        this.element.id = this.id;
    }

    //updateHtml() {
    //    const cardElement = document.getElementById(this.id);
    //    if (cardElement) {
    //        cardElement.innerHTML = `<p>Name: ${this.name}</p><p>Age: ${this.age}</p>`;
    //    }
    //}

    renderHtml() {
        document.appendChild(element);
    }

    remove() {
        const cardElement = document.getElementById(this.id);
        if (cardElement) {
            cardElement.remove();
            delete IdManager.removeID(this.id);
        }
    }
}