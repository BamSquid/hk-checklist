import "./css/App.css";
import Section from "./Section.js";
import checklist from "../checklist.json";
import CookieConsent from "react-cookie-consent";

function App() {
  
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function handleChange(data) {
    var key = Object.keys(data);
    states[key] = data[key];
    var forCookie = JSON.stringify(states);
    setCookie('checklist', forCookie, 10);
  }

  var states = {};
  var cookie = getCookie('checklist');
  if (cookie !== '') {
    states = JSON.parse(cookie);
  }

  var sections = [];
  for (var i = 0; i < checklist.length; i++) {
    var sectionName = checklist[i].section.toLocaleLowerCase().replace(' ', '');

    sections.push(
      <Section
        key={"section" + i}
        name={checklist[i].section}
        items={checklist[i].items}
        updateState={handleChange}
        states={states[sectionName]}
      />
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hollow Knight Checklist</h1>
      </header>
      <div className='App-body'>
        {sections}
      </div>
      <div className="footer">
        <div
          id="total-percent"
          data-percent="0"
          data-masks="0"
          data-mask-percent="0"
          data-soul="0"
          data-soul-percent="0"
          style={{ paddingInlineStart: "15px", paddingInlineEnd: "15px" }}
        >
          Completion: 0%
        </div>
        <div
          id="total-notches"
          data-notches="3"
          style={{ paddingInlineStart: "40px", paddingInlineEnd: "40px" }}
        >
          Charm Notches: 3
        </div>
      </div>
      <CookieConsent>This app uses cookies for saving your choices. No other information is collected from you.</CookieConsent>
    </div>
  );
}

export default App;
