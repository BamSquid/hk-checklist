import React from 'react'

class ListItem extends React.Component {
    render() {
        return (
            <h3>{this.props.name}</h3>
        )
    }
}

export default ListItem