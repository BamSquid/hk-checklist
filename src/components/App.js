import "./css/App.css";
import Section from "./Section.js";
import checklist from "../checklist.json";

function App() {
  var sections = [];
  for (var i = 0; i < checklist.length; i++) {
    sections.push(
      <Section
        key={"section" + i}
        name={checklist[i].section}
        items={checklist[i].items}
      />
    );
  }
  return (
    <div className="App">
      <header className="App-header">{sections}</header>
      <div className="footer">
        <div
          id="total-percent"
          data-percent="0"
          data-masks="0"
          data-mask-percent="0"
          data-soul="0"
          data-soul-percent="0"
          style={{'padding-inline-start': '15px', 'padding-inline-end': '15px'}}
        >
          Completion: 0%
        </div>
        <div
          id="total-notches"
          data-notches="3"
          style={{'padding-inline-start': '40px', 'padding-inline-end': '40px'}}
        >
          Charm Notches: 3
        </div>
      </div>
    </div>
  );
}

export default App;
