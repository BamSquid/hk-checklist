import React from 'react'
import ListItem from './ListItem.js'
import TableHeader from './TableHeader'

class Section extends React.Component {
    
    render() {
        var listItems = [], headings = [];
        var items = this.props.items;
        for (var i = 0; i < items.length; i++) {
            var keys = Object.keys(items[i]);
            for (var j = 0; j < keys.length; j++) {
                if (!headings.includes(keys[j]) && keys[j] !== "percentage") {
                    headings.push(keys[j]);
                }
            }
            listItems.push(<ListItem details={items[i]} headings={headings}/>);
        }
        return (
            <div>
                <h1>{this.props.name}</h1>
                <table>
                    <TableHeader headings={headings}/>
                    <tbody>
                        {listItems}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Section;