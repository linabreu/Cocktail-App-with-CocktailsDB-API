import React from 'react';
import RecipeForm from './RecipeForm';

export default function NewCocktail({getFunction, savedCocktailState, apiURL}) {
  return (
    <div>
      <RecipeForm getFunction={getFunction} savedCocktailState={savedCocktailState} apiURL={apiURL}/>
    </div>
  )
}
