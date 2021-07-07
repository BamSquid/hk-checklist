import React from 'react'
import ListItem from './ListItem.js'

class Section extends React.Component {
    
    render() {
        var listItems = [];
        var items = this.props.items;
        for (var i = 0; i < items.length; i++) {
            listItems.push(<ListItem name={items[i].name} />);
        }
        return (
            <div>
                <h1>{this.props.name}</h1>
                {listItems}
            </div>
        )
    }
}

export default Section;