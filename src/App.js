import './App.css';
import PizzaList from './pizzerias/pizzerialist';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt-f1zHChy8djFSdWFzweT4-QQ5Qh6dUBD0g&usqp=CAU" className="App-logo" alt="logo" />
        <p>
          Para busqueda de tus pizzas preferidas
        </p>
        <hl
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pizzeria
        </hl>
        <PizzaList/>
      </header>
    </div>
  );
}

export default App;
