import React from "react";
import ListItem from "./ListItem.js";
import TableHeader from "./TableHeader";

class Section extends React.Component {
  convertToTitleCase = (title) => {
    title = title
      .split("_")
      .map((w) => w[0].toUpperCase() + w.substr(1).toLowerCase())
      .join(" ");
    return title;
  };

  selectAll = (e) => {
    const sectionCheck = this.props.name.toLowerCase().replace(' ', '');
    const tbody = document.getElementById('tbody_' + sectionCheck);
    const children = tbody.children;
    var clickDir = e.target.getAttribute('data-click-dir');

    for (var i = 0; i < children.length; i++) {
      var child = children[i];
      if (clickDir === 'click') {
        if (child.getAttribute('data-clicked') === 'false') {
          child.click();
        }
        e.target.setAttribute('data-click-dir', 'unclick');
      }
      else {
        if (child.getAttribute('data-clicked') === 'true') {
          child.click();
        }
        e.target.setAttribute('data-click-dir', 'click');
      }
    }
  };

  render() {
    var listItems = [],
      table_headings = [],
      headings_details = [];
    var items = this.props.items;
    for (var i = 0; i < items.length; i++) {
      var keys = Object.keys(items[i]);
      for (var j = 0; j < keys.length; j++) {
        var heading = this.convertToTitleCase(keys[j]);
        if (!table_headings.includes(heading) && heading !== "Percentage") {
          table_headings.push(heading);
          headings_details.push(keys[j]);
        }
      }
      listItems.push(
        <ListItem
          key={this.props.name.toLowerCase().replace(" ", "") + i}
          details={items[i]}
          headings={headings_details}
          section={this.props.name.toLowerCase()}
        />
      );
    }
    return (
      <div>
        <h1
        className="section-header"
        onClick={this.selectAll}
        data-click-dir='click'
        >
          {this.props.name}
        </h1>
        <table>
          <TableHeader
            key={"table_" + this.props.name.toLowerCase().replace(" ", "")}
            headings={table_headings}
          />
          <tbody id={'tbody_' + this.props.name.toLowerCase().replace(' ', '')}>{listItems}</tbody>
        </table>
      </div>
    );
  }
}

export default Section;