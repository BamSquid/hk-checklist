import React from "react";
import Section from "./Section.js";
import hunters_journal from "../hunters_journal.json";

class HuntersJournal extends React.Component {

    componentDidMount() {
      var links = document.getElementById('links');
      links.setAttribute("class", "");
      links.classList.add('journal');
    }

    render() {
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
            setCookie('hunters_journal', forCookie, 10);
          }

          var states = {};
          var cookie = getCookie('hunters_journal');
          if (cookie !== '') {
            states = JSON.parse(cookie);
          }
        
          var sections = [];
          for (var i = 0; i < hunters_journal.length; i++) {
            var sectionName = hunters_journal[i].section.toLocaleLowerCase().replace(' ', '');

            sections.push(
              <Section
                key={"section" + i}
                name={hunters_journal[i].section}
                items={hunters_journal[i].items}
                type="journal"
                updateState={handleChange}
                states={states[sectionName]}
              />
            );
          }

          return (
            <div className="App">
              <header className="App-header journal" id="hunters-journal">
                <h1>Hunter's Journal</h1>
              </header>
              <div className='App-body'>
                {sections}
              </div>
              <div className="footer journal">
                <div
                  id="total-mark"
                  data-entries="0"
                  style={{ paddingInlineStart: "15px", paddingInlineEnd: "15px" }}
                >
                  Hunter's Mark: 0/146
                </div>
                <div
                  id="complete-entries"
                  data-entries="0"
                  style={{ paddingInlineStart: "40px", paddingInlineEnd: "40px" }}
                >
                  Total Entries: 0/168
                </div>
              </div>
            </div>
          );
    }
}

export default HuntersJournal;