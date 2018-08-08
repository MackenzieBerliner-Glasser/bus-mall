import html from '../html.js';
import Results from './results.js';
import ProductChart from './product-chart.js';
import productApi from '../services/product-api.js';
import Header from './header.js';
let template = function() {
    return html `
        <header></header>
        <main></main>
    `;
};

export default class ResultsApp {
    
    constructor() {
        this.products = productApi.get();
    }
    
    renderResults() {
        // while(this.main.lastElementChild) {
        //     this.main.lastElementChild.remove();
        // }
    
        let results = new Results({
    
            products: this.products
    
        });
        this.main.appendChild(results.render());
    }
    
    render() {
        let dom = template();
        this.main = dom.querySelector('main');
        this.header = dom.querySelector('header');
        let productChart = new ProductChart({
            products: this.products
        });

        let header = new Header ({

        });

        this.renderResults();
        this.main.appendChild(productChart.render());
        this.header.appendChild(header.render());
        return dom;
    }
}
