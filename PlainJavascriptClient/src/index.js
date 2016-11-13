import Client from './client';

class List {
    constructor() {
        this.client = new Client();
        this.root = document.getElementById('app');
        this.client.numbers().then(n => this.render(n))
    }

    render(numbers) {
        numbers.
            map(n => this.el('div', n)).
            forEach(e => {
                    this.root.appendChild(e);
            });
    }


    el(name, content) {
        let element = document.createElement(name);
        element.textContent = content;
        return element;
    }
}

new List();
