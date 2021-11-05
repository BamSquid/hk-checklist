import React from "react";

class ListItem extends React.Component {
  state = {
    checked: false
  };

  update = (e) => {
    const clicked = e.target;
    var tr = clicked.tagName.toLowerCase() === "tr" ? clicked : clicked.parentElement;
    const isChecked = !this.state.checked;
    const type = tr.getAttribute('data-type');

    var children = tr.children;
    for (var i = 0; i < children.length; i++) {
      if (isChecked) { children[i].classList.add('checked'); }
      else { children[i].classList.remove('checked'); }
    }

    if (type === 'checklist') {
      const percent = parseInt(tr.getAttribute("data-percent"), 10);

      var total = document.getElementById("total-percent");
      var totalPercent = parseInt(total.getAttribute("data-percent"), 10);
      if (!isNaN(percent)) {
        totalPercent += isChecked ? percent : percent * -1;
      }
      else {
        var section = this.props.section;
        if (section === "masks") {
          var num_masks = parseInt(total.getAttribute("data-masks"), 10);
          num_masks += isChecked ? 1 : -1;
          total.setAttribute("data-masks", num_masks);

          const maskPercent = total.getAttribute("data-mask-percent");
          const maskCount = Math.floor(num_masks / 4);
          if (maskCount > maskPercent) {
            totalPercent += 1;
            total.setAttribute("data-mask-percent", maskCount);
          }
          else if (maskCount < maskPercent) {
            totalPercent -= 1;
            total.setAttribute("data-mask-percent", maskCount);
          }
        }
        else if (section === "soul vessels") {
          var num_soul = parseInt(total.getAttribute("data-soul"), 10);
          num_soul += isChecked ? 1 : -1;
          total.setAttribute("data-soul", num_soul);

          const soulPercent = total.getAttribute("data-soul-percent");
          const soulCount = Math.floor(num_soul / 3);
          if (soulCount > soulPercent) {
            totalPercent += 1;
            total.setAttribute("data-soul-percent", soulCount);
          }
          else if (soulCount < soulPercent) {
            totalPercent -= 1;
            total.setAttribute("data-soul-percent", soulCount);
          }
        }
        else if (section === "charm notches") {
          var notchCounter = document.getElementById("total-notches");
          var numNotches = parseInt(notchCounter.getAttribute("data-notches"), 10);
          numNotches += isChecked ? 1 : -1;
          notchCounter.setAttribute("data-notches", numNotches);
          notchCounter.textContent = "Charm Notches: " + numNotches;

          if (numNotches === 11) { notchCounter.classList.add("complete"); }
          else { notchCounter.classList.remove("complete"); }
        }
      }

      total.setAttribute("data-percent", totalPercent);
      total.textContent = "Completion: " + totalPercent + "%";
      if (totalPercent === 112) { total.classList.add("complete"); }
      else { total.classList.remove("complete"); }
    }
    else if (type === 'journal') {
      if (this.props.details.required_for_hunters_mark === "Yes") {
        var mark = document.getElementById('total-mark');
        var markEntries = parseInt(mark.getAttribute('data-entries'), 10);
        markEntries += isChecked ? 1 : -1;
        mark.setAttribute('data-entries', markEntries);
        mark.textContent = `Hunter's Mark: ${markEntries}/146`
        if (markEntries === 146) { mark.classList.add("complete"); }
        else { mark.classList.remove("complete"); }
      }

      var complete = document.getElementById('complete-entries');
      var totalEntries = parseInt(complete.getAttribute('data-entries'), 10);
      totalEntries += isChecked ? 1 : -1;
      complete.setAttribute('data-entries', totalEntries)
      complete.textContent = `Total Entries: ${totalEntries}/168`
      if (totalEntries === 168) { complete.classList.add("complete"); }
      else { complete.classList.remove("complete"); }
    }
    
    this.setState({ checked: isChecked });

    var data = {};
    data[this.props.id] = isChecked;
    this.props.onChange(data);
  };

  render() {
    var details = this.props.details;
    var headings = this.props.headings;
    var row = [];

    for (var i = 0; i < headings.length; i++) {
      var heading = headings[i];
      var data = details[heading];
      row.push(<td key={'detail_' + data + i}>{data}</td>);
    }

    return (
      <tr
        className={`${this.props.type}`}
        id={this.props.id} data-percent={details.percentage} data-type={this.props.type} onClick={this.update}>
        {row}
      </tr>
    );
  }
}

export default ListItem;
