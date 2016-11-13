export default class Client {
    constructor() {
        this.url = 'http://localhost:8080/numbers';
    }

    numbers() {
        let result = new Promise((resolve, reject) => {
            let request = new XMLHttpRequest();
            request.open('GET', this.url);
            request.onreadystatechange = () => {
                let raw = request.responseText;
                let json = JSON.parse(raw);
                resolve(json);
            }
            request.send();
        });
        return result;
    }
}