import logo from './logo.svg';
import './App.css';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '03944f82f9msh052ffba7b5edfbap1dc7aajsn6312c1fc7ecf',
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
};

async function App() {
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

      {
        await fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err))
      }
    </div>
  );
}

export default App;
