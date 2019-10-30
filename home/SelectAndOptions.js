import Component from '../component.js';

export class Select extends Component {
    renderHTML(){
        return /*html*/`
        <div id = 'form'>
        <label>Filter By Horns<label>
            <select>
                <option value = '0' id = 'all'>All</option>
                <option value = '1' id = '1-horn'>1</option>
                <option value = '2' id = '2-horns'>2</option>
                <option value = '3' id = '3-horns'>3</option>
                <option value = '100' id = 'more-than-3-horns'>>3</option>
            </select>
    </div>`;
    }
    onRender(select){
        const onFilter = this.props.onFilter;
        select.addEventListener('input', () => {
            onFilter(parseInt(event.target.value));
        });
    }
}   