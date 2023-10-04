import React from 'react';
import Button from 'react-bootstrap/Button';

export default function DisplayCard({name, ingredients, instructions, image, displayOnly, apiURL}) {

  //let API_URL = 'https://64ff720bf8b9eeca9e2a26af.mockapi.io/Cocktails';
  const saveDrink = () => {
      let newDrinkObj = {}
      console.log(`${name}`)
      console.log(`${ingredients}`)
      console.log(`${instructions}`)

      newDrinkObj = {
          Name: `${name}`,
          Ingredients: `${ingredients}`,
          Instructions: `${instructions}`
      };
      fetch(apiURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newDrinkObj),
      })
  }

  return (
    <div>
            <div className="card card-flip h-100 mb-4">
                <div className="card-front">
                    <div className="card-body">
                        <img className = "card-image mt-3 mb-2" variant="top" src= {image} />
                        <h4 className = "text-center card-title">{name}</h4>
                        <p className = "card-heading">Ingredients</p>
                        {ingredients.map((ingredient, index) => 
                        <p className = "card-ingredients" key = {index}>
                           {ingredient}
                        </p>)}
                    </div>
                </div>
                <div className="card-back">
                    <div className="card-body">
                    <h5 className = "card-instructions-header text-center p-1">How To Make the {name}</h5>
                    <img className = "card-image mt-2 mb-2" variant="top" src= {image} />
                       <p className = "card-instructions">{instructions}</p>
                       <Button className = "add-btn mb-2" onClick = {saveDrink}>Save <i className="bi bi-suit-heart-fill"></i></Button>
                    </div>
                </div>
            </div>
    </div>
  )
}
