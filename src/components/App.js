import './css/App.css';
import Section from './Section.js'
import checklist from '../checklist.json'

function App() {
  console.log(checklist);
  var sections = [];
  for (var i = 0; i < checklist.length; i++) {
    sections.push(<Section name={checklist[i].section} items={checklist[i].items} />);
  }
  return (
    <div className="App">
      <header className="App-header">
        {sections}
      </header>
    </div>
  );
}

export default App;
