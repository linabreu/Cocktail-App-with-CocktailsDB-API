import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Home from './Components/Home';
import SavedCocktails from './Components/SavedCocktails';
import NewCocktail from './Components/NewCocktail';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';

function App() {

  const [savedCocktails, setSavedCocktails] = useState([]);
  let apiURL = 'https://64ff720bf8b9eeca9e2a26af.mockapi.io/Cocktails';


  return (
    <div className="App">
      <Navigation />
        <Routes>
          <Route path="/" element={ <Home apiURL = {apiURL}/> } />
          <Route path="/saved-cocktails" element={ <SavedCocktails apiURL = {apiURL}/>} />
          <Route path="/new-cocktail" element={ <NewCocktail/> } />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
