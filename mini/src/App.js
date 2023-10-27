import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Heading />
    </div>
  );
}

function Heading() {
  return (
    <div className="block-texts">
      <h1>Lello</h1>
      <h2>Heading type 2</h2>
      <h3>Heading type 3</h3>
      <h4>Heading type 4</h4>
      <h5>Heading type 5</h5>
      <h6>Heading type 6</h6>
      <h6>Comparing a heading type 6...</h6>
      <p>to a paragraph</p>
    </div>
  );
}

export default App;
