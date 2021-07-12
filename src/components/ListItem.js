import React from "react";

class ListItem extends React.Component {
  updatePercentage = (e) => {
    const clicked = e.target;
    var tr = clicked.tagName.toLowerCase() === 'tr' ? clicked : clicked.parentElement;
    const isClicked = tr.getAttribute("data-clicked");
    const percent = parseInt(tr.getAttribute("data-percent"), 10);
    const border = isClicked === "true" ? "solid white 1px" : "solid black 1px";
    const background = isClicked === "true" ? "#282c34" : "white";
    const color = isClicked === "true" ? "white" : "black";
    const updateClicked = isClicked === "false" ? "true" : "false";
    var children = tr.children;

    for (var i = 0; i < children.length; i++) {
      children[i].style.border = border;
      children[i].style.background = background;
      children[i].style.color = color;
    }
    tr.setAttribute("data-clicked", updateClicked);

    var total = document.getElementById("total-percent");
    var totalPercent = parseInt(total.getAttribute("data-percent"), 10);
    if (!isNaN(percent)) {
      totalPercent += updateClicked === "true" ? percent : percent * -1;
    }
    else {
      var section = this.props.section;
      if (section === "masks") {
        var num_masks = parseInt(total.getAttribute("data-masks"), 10);
        num_masks += updateClicked === "true" ? 1 : -1;
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
        num_soul += updateClicked === "true" ? 1 : -1;
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
      else {
        var notchCounter = document.getElementById('total-notches');
        var numNotches = parseInt(notchCounter.getAttribute('data-notches'), 10);
        numNotches += updateClicked === "true" ? 1 : -1;
        notchCounter.setAttribute('data-notches', numNotches);
        notchCounter.textContent = "Charm Notches: " + numNotches;

        if (numNotches === 11) {
          notchCounter.classList.add('complete');
        }
        else {
          notchCounter.classList.remove('complete');
        }
      }
    }

    total.setAttribute("data-percent", totalPercent);
    total.textContent = "Completion: " + totalPercent + "%";
    if (totalPercent === 112) {
      total.classList.add('complete');
    }
    else {
        if (total.classList.contains('complete')) {
            total.classList.remove('complete');
        }
    }
  };

  render() {
    var details = this.props.details;
    var headings = this.props.headings;
    var row = [];

    for (var i = 0; i < headings.length; i++) {
      var heading = headings[i];
      var data = details[heading];
      row.push(<td>{data}</td>);
    }
    return (
      <tr
        data-percent={details.percentage}
        data-clicked={"false"}
        onClick={this.updatePercentage}
      >
        {row}
      </tr>
    );
  }
}

export default ListItem;
