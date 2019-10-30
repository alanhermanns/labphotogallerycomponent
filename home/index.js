import { App } from '../home/App.js';

const app = new App;
const dom = app.renderDOM();
document.body.prepend(dom);