import React from "react";
import ListItem from "./ListItem.js";
import TableHeader from "./TableHeader";

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.Section1 = React.createRef();
  }

  state = {
    click: true
  }

  convertToTitleCase = (title) => {
    title = title
      .split("_")
      .map((w) => w[0].toUpperCase() + w.substr(1).toLowerCase())
      .join(" ");
    return title;
  };

  selectAll = (e) => {
    console.log(this.props.children)

    const sectionCheck = this.props.name.toLowerCase().replace(' ', '');
    const tbody = document.getElementById('tbody_' + sectionCheck);
    const children = tbody.children;
    var clickDir = this.state.click;
    const currentSection1 = this.Section1.current;

    for (var i = 0; i < children.length; i++) {
      var child = children[i];
      child.click();
      this.setState({click: !this.state.click})
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
          ref={this.Section1}
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