import Component from '../component.js';

export class ImageItem extends Component {
    renderHTML(){
        const image = this.props.image;
        return /*html*/`
        <li>
            <div class = 'image-container'>
                <h2>${image.title}</h2>
                <div class = 'image'>
                    <img src = ${image.url}>
                </div>
                <p class = 'description'>${image.description}</p>
            </div>
        </li>`;
    }
}