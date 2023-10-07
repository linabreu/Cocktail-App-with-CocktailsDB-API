import React from 'react'
import {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';


export default function RecipeCard({name, ingredients, instructions, id, apiURL, getFunction, buttonVisibility}) {

  const [newIngredients, setNewIngredients] = useState(ingredients);
  const [newInstructions, setNewInstructions] = useState(instructions);
  const [editingVisibility, setEditingVisibility] = useState('hidden');
  

  const [editButtonMode, setEditButtonMode ] = useState(false);
  const [editIngredientMode,setEditIngredientMode] = useState(false);
  const [editInstructionMode,setEditInstructionMode] = useState(false)

 
  function deleteDrink(id) {
    console.log('delete function going')
    fetch(apiURL + `/${id}`, {
      method: 'DELETE',
    }).then(() => getFunction())
  }

  function updateDrink(id) {
    let updatedDrink = 
    {
      Name: name,
      Ingredients: newIngredients,
      Instructions: newInstructions
    }

    fetch(`${apiURL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedDrink),
    }).then(() => getFunction())
  }


    return (
        <Card className = "recipe-card mb-5">
          <Row>
              <Col sm = {1}></Col>
              <Col sm = {2}>
                <Button className = {`${buttonVisibility} recipe-btn mb-2 mt-3`} onClick = {() => {setEditingVisibility('visible')}} onDoubleClick={ () => {setEditingVisibility('hidden')}}><i className="bi bi-pencil"></i></Button>
              </Col>
              <Col sm = {6}></Col>
              <Col sm = {2}>
                <Button className = {`${buttonVisibility} recipe-btn mb-2 mt-3`} onClick = {() => deleteDrink(id)}><i className="bi bi-trash3"></i></Button>
              </Col>
              <Col sm = {1}></Col>
          </Row>
            <Card.Body>
              <h4 className = {`text-center recipe-title`}>{name}</h4>
              <Card.Text className = "recipe-heading">Ingredients 
                      <i 
                      className= {`${editingVisibility} bi bi-pencil editing-icon`} 
                      onClick = {() => {setEditIngredientMode(true); setEditButtonMode(true)}}
                      onDoubleClick = {() => {setEditIngredientMode(false);setEditButtonMode(false)}}>
                      </i>
               </Card.Text>
              {editIngredientMode === false ? (
                    <Card.Text className = {`recipe-instructions`}>
                      {ingredients}
                    </Card.Text>
              ): (
                  <Form.Group  controlId="exampleForm.ControlInput1">

                  <Form.Control as="textarea" onChange = {(e)=> setNewIngredients(e.target.value)} defaultValue={ingredients} rows={2}/>
                </Form.Group>
              ) }

              <Card.Text className = "recipe-heading">Instructions 
                      <i 
                        className= {`${editingVisibility} bi bi-pencil editing-icon`} 
                        onClick = {() => {setEditInstructionMode(true);setEditButtonMode(true)}}
                        onDoubleClick = {() => {setEditInstructionMode(false);setEditButtonMode(false)}}>
                      </i>
               </Card.Text>
             {editInstructionMode === false ? (
              <Card.Text className = {`recipe-instructions mb-5`}>
                      {instructions}
              </Card.Text>):
              (
                <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control as="textarea"   className = "mb-3" onChange = {(e)=> setNewInstructions(e.target.value)}  rows={2} defaultValue={instructions}></Form.Control>
                </Form.Group>)}

              {editButtonMode === false ? (<div></div>):(
                <Button 
                  className = {`submit-btn`}
                  onClick = {()=> {updateDrink(id); setEditButtonMode(false); setEditIngredientMode(false); setEditInstructionMode(false); setEditingVisibility('hidden')}}><i className="bi bi-check2"></i></Button>)}
          </Card.Body>
                    
        </Card>)}
