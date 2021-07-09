import React from 'react'

class TableHeader extends React.Component {
    render() {
        var headings = this.props.headings;
        var rows = [];
        for (var i = 0; i < headings.length; i++) {
            rows.push(<th>{headings[i]}</th>)
        }
        return (
            <thead>
            <tr>
                {rows}
            </tr>
        </thead>
        )
    }
}

export default TableHeader