import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./css/App.css";
import CookieConsent from "react-cookie-consent";
import Checklist from "./Checklist.js";
import HuntersJournal from "./HuntersJournal.js";


function App() {
  return (
    <Router>
      <div id="links">
          <span className="checklist" style={{ paddingInlineStart: "40px", paddingInlineEnd: "20px" }}><Link to="/hk-checklist">Checklist</Link></span>
          <span className="journal" style={{ paddingInlineStart: "20px", paddingInlineEnd: "20px" }}><Link to="/hunters-journal">Hunter's Journal</Link></span>
        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route path="/hk-checklist">
            <Checklist />
          </Route>
          <Route path="/hunters-journal">
            <HuntersJournal />
          </Route>
        </Switch>
        <CookieConsent>This app uses cookies for saving your choices. No other information is collected from you.</CookieConsent>
      </div>
    </Router>
  );
}

export default App;
