import Component from '../component.js';
//import { images } from '../data/images.js';
import { ImageItem } from '../home/imageItem.js';
export class ImageList extends Component{
    onRender(dom) {
        const images = this.props.images;
        images.forEach(image => {
            let props = { image: image };
            const imageItem = new ImageItem(props);
            let imageDOM = imageItem.renderDOM();
            dom.appendChild(imageDOM);
        });
    }

    renderHTML(){
        return /*html*/`
        <ul></ul>`;
    }
}