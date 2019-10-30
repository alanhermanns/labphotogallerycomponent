// IMPORT MODULES under test here:
import { ImageItem } from '../home/imageItem.js';
// import example from '../src/example.js';

const test = QUnit.test;

test('make image item', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const image = {
        url: 'https://cbsnews3.cbsistatic.com/hub/i/r/2013/03/05/5b414225-a645-11e2-a3f0-029118418759/thumbnail/620x350/2d4cf24685b45c22912e64d2004fec8d/Baby_Mouflon_Wild_Sheep.jpg',
        title: 'Baby mouflon',
        description: 'The cuteness that is a baby mouflon asleep',
        keyword: 'mouflon',
        horns: 2
    };
    let html = /*html*/`
    <li>
        <div class = 'image-container'>
            <h2>${image.title}</h2>
            <div class = 'image'>
                <img src = ${image.url}>
            </div>
            <p class = 'description'>${image.description}</p>
        </div>
    </li>`;
    //Act 
    // Call the function you're testing and set the result to a const
    const imageItem = new ImageItem({ image: image });
    const testHTML = imageItem.renderHTML();
    //Assert
    // Make assertions about what is expected valid result
    assert.htmlEqual(testHTML, html);
});
