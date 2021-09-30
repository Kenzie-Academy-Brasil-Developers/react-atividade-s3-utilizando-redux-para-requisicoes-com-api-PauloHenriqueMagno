import './App.css';
import Search from './components/Search';
import Digimons from './components/Digimons';
import Header from "./components/Header"
import DigimonList from './components/DigimonList';

import { Switch, Route } from "react-router-dom"
import Digimon from './components/Digimon';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Switch>
          <Route path="/digimons/:digimon">
            <Digimon />
          </Route>
          <Route path="/digimons">
            <DigimonList />
          </Route>
          <Route path="/">
            <Search />
            <Digimons />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
