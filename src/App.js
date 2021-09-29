import './App.css';
import Search from './components/Search';
import Digimons from './components/Digimons';
import Header from "./components/Header"
import DigimonList from './components/DigimonList';

import { Switch, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/digimons">
          <DigimonList />
        </Route>
        <Route path="/">
          <Search />
          <Digimons />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
