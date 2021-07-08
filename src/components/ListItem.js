import React from 'react'

class ListItem extends React.Component {
    render() {
        var details = this.props.details;
        var headings = this.props.headings;
        var row = []

        for (var i = 0; i < headings.length; i++) {
            var heading = headings[i];
            var data = details[heading]
            row.push(<td>{data}</td>)
        }
        return (
            <tr>
                <input type='checkbox' />
                {row}
            </tr>
        )
    }
}

export default ListItem