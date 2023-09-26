import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import SavedCocktails from './Components/SavedCocktails';
import NewCocktail from './Components/NewCocktail';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/saved-cocktails" element={ <SavedCocktails/> } />
          <Route path="/new-cocktail" element={ <NewCocktail/> } />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
