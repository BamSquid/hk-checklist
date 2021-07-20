import React from "react";
import ListItem from "./ListItem.js";
import TableHeader from "./TableHeader";

class Section extends React.Component {
  state = {
    click: true,
    checked: {}
  };

  componentDidUpdate() {
    var sectionState = {};
    sectionState[this.props.name.toLowerCase().replace(' ', '')] = this.state.checked;
    this.props.updateState(sectionState);
  }

  handleChange = (data) => {
    var key = Object.keys(data);
    var state = this.state.checked;
    state[key] = data[key];
    this.setState({checked: state});
  }

  convertToTitleCase = (title) => {
    title = title
      .split("_")
      .map((w) => w[0].toUpperCase() + w.substr(1).toLowerCase())
      .join(" ");
    return title;
  };

  selectAll = (e) => {
    const sectionCheck = this.props.name.toLowerCase().replace(" ", "");
    const tbody = document.getElementById("tbody_" + sectionCheck);
    const children = tbody.children;
    var clickDir = this.state.click;

    for (var i = 0; i < children.length; i++) {
      var child = children[i];
      var id = child.getAttribute('id');
      var childState = this.state.checked[id];
      
      if (clickDir) {
        if (!childState) {
          child.click();
        }
      }
      else {
        if (childState) {
          child.click();
        }
      }
      this.setState({ click: !this.state.click });
    }
  };

  componentDidMount() {
    var itemCount = this.props.items.length;
    for (var i = 0; i < itemCount; i++) {
      var checked = this.state.checked;
      var name = this.props.name.toLowerCase().replace(" ", "") + i;

      if (this.props.states !== undefined) {
        checked[name] = this.props.states[name];
      }
      else {
        checked[name] = false;
      }

      var row = document.getElementById(name)
      if (checked[name]) {
        row.click();
      }

      this.setState({ checked: checked });
    }
  }

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
      var name = this.props.name.toLowerCase();
      listItems.push(
        <ListItem
          key={name.replace(' ', '') + i}
          id={name.replace(' ', '') + i}
          details={items[i]}
          headings={headings_details}
          section={name}
          onChange={this.handleChange}
        />
      );
    }
    return (
      <div>
        <header className='App-header'>
          <h1
            className="section-header"
            onClick={this.selectAll}
            data-click-dir="click"
          >
            {this.props.name}
          </h1>
        </header>
        <div className='section'>
          <table>
            <TableHeader
              key={"table_" + this.props.name.toLowerCase().replace(" ", "")}
              headings={table_headings}
            />
            <tbody id={"tbody_" + this.props.name.toLowerCase().replace(" ", "")}>
              {listItems}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Section;
