import React from 'react';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import RecipeCard from './RecipeCard';

export default function RecipeForm({getFunction, savedCocktailState, apiURL}) {
    const [newName, setNewName] = useState('');
    const [newIngredients, setNewIngredients] = useState('');
    const [newInstructions, setNewInstructions] = useState('');
    const [newestRecipe, setNewestRecipe] = useState([]);
    const [visibility, setVisibility] = useState("hidden")


   const getNewestReceipe = async () => {
        fetch(apiURL)
        const res = await fetch(apiURL);
        const data = await res.json();
        let lastestReceipe = (data[data.length - 1]);
        console.log(lastestReceipe);
        setNewestRecipe(lastestReceipe);

    }
  

    const createNewDrink = ()=> {
        let newDrinkObj = {}
        newDrinkObj = {
            Name: newName,
            Ingredients: newIngredients,
            Instructions: newInstructions
          };

        fetch(apiURL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newDrinkObj),
        }).then(getNewestReceipe());

        //reset the form
        setNewName("");
        setNewIngredients("");
        setNewInstructions("");

      }

  return (
    <div>
    <Container fluid>
        <Row>
            <Col sm = {2}></Col>
            <Col sm = {8}>
                <Row className = "mt-5 mb-5 white-bg">
                    <Col sm={3} className = "half-background"></Col>
                    <Col sm={9}>
                        <Form className= "recipe-form p-4">
                            <h2 className = "form-header text-center mt-2 mb-3">Create a Cocktail</h2>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control value={newName} onChange = {(e)=> setNewName(e.target.value)} type="text" placeholder="cocktail name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea"  value={newIngredients} onChange = {(e)=> setNewIngredients(e.target.value)} placeholder="Enter measurements and ingredients here" rows={5} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
                                <Form.Control as="textarea" value={newInstructions} onChange = {(e)=> setNewInstructions(e.target.value)} placeholder="Enter instructions here" rows={5} />
                            </Form.Group>
                            <Button className = "add-btn mb-2" onClick={() => {createNewDrink(); setVisibility('visible');}} >Add Cocktail <i className="bi bi-plus-lg"></i></Button>
                        </Form> 
                    </Col>
                </Row>
            </Col>
            <Col sm = {2}></Col>
        </Row>
            <Row className = {`${visibility} orange`}>
            <h2 className = "body-banner text-center mt-3">Looks Delish!</h2>
            <h4 className = "sub-header text-center mb-5">Check Our Your Newest Recipe</h4>
            <Col  md={6} sm={4} lg={4} xs={12} className = "centered">
                    <RecipeCard name = {newestRecipe.Name} ingredients = {newestRecipe.Ingredients} 
                    instructions = {newestRecipe.Instructions} getFunction = {getFunction} 
                    buttonVisibility = "hidden"/>
            </Col>
        </Row>
    </Container>

    </div>
  )
}
