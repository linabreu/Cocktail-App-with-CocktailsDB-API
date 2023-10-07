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


  let apiURL = 'https://64ff720bf8b9eeca9e2a26af.mockapi.io/Cocktails';

  const [savedCocktails, setSavedCocktails] = useState([]);

  async function getSavedCocktails () {
    const res = await fetch(apiURL)
    const data = await res.json()
    console.log(data)
    setSavedCocktails(data)
  }


  return (
    <div className="App">
      <Navigation />
        <Routes>
          <Route path="/" element={ <Home apiURL = {apiURL}/> } />
          <Route path="/saved-cocktails" element={ <SavedCocktails apiURL = {apiURL} getFunction={getSavedCocktails} savedCocktailState={{savedCocktails, setSavedCocktails }}/>} />
          <Route path="/new-cocktail" element={ <NewCocktail apiURL = {apiURL} getFunction={getSavedCocktails} savedCocktailState={{savedCocktails, setSavedCocktails }}/> } />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
