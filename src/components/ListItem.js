import React from 'react'

class ListItem extends React.Component {

    updatePercentage = (e) => {
        const clicked = e.target;
        var parent = clicked.parentElement;
        const isClicked = parent.getAttribute('data-clicked');
        const percent = parseInt(parent.getAttribute('data-percent'));
        const border = isClicked === 'true' ? 'solid black 1px' : 'solid white 1px';
        const updateClicked = isClicked === 'false' ? 'true' : 'false'
        var children = parent.children;

        for (var i = 0; i < children.length; i++) {
            children[i].style.border = border;
        }
        parent.setAttribute('data-clicked', updateClicked);

        var total = document.getElementById('total-percent');
        var totalPercent = parseInt(total.getAttribute('data-percent'));
        totalPercent += updateClicked === 'true' ? percent : percent * -1;
        total.setAttribute('data-percent', totalPercent);
        total.textContent = 'Completion: ' + totalPercent + '%';

    }

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
            <tr data-percent={details.percentage} data-clicked={'false'} onClick={this.updatePercentage}>
                {row}
            </tr>
        )
    }
}

export default ListItem