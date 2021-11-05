import React from "react";

class TableHeader extends React.Component {
  render() {
    var headings = this.props.headings;
    var rows = [];
    for (var i = 0; i < headings.length; i++) {
      rows.push(<th key={'header_' + headings[i].toLowerCase().replace(' ', '')}>{headings[i]}</th>);
    }
    return (
      <thead className={`${this.props.type}`}>
        <tr>{rows}</tr>
      </thead>
    );
  }
}

export default TableHeader;