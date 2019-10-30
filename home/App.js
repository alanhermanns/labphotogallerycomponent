import Component from '../component.js';
import { images } from '../data/images.js';
import { Header } from '../home/Header.js';
import { ImageList } from '../home/ImageList.js';
import { Select } from '../home/SelectAndOptions.js';

export class App extends Component{
    onRender(dom) {
        const header = new Header;
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);
        const props = { images: images };
        const imageList = new ImageList(props);
        const imageListDOM = imageList.renderDOM();
        dom.append(imageListDOM);
        const filteredImageSelect = new Select({
            images: images,
            onFilter:
            (numberOfHorns) => {
                if (numberOfHorns === 0){
                    imageList.update({ images: images });
                    return;
                }
                else {
                    let filteredImages;
                    filteredImages = images.filter(image => {
                        return numberOfHorns === image.horns;
                    });
                    const updateProps = { images : filteredImages };
                    imageList.update(updateProps);
                }
            }

        });
        const select = filteredImageSelect.renderDOM();
        dom.prepend(select);



        
    }
    renderHTML(){
        return /*html*/ `
        <div>

        </div>
        `;
    }
}