import React from 'react'
import {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';


export default function RecipeCard({name, ingredients, instructions, id, apiURL, getFunction}) {

  const [newName, setNewName] = useState('');
  const [newIngredients, setNewIngredients] = useState('');
  const [newInstructions, setNewInstructions] = useState('');

  const [editingVisibility, setEditingVisibility] = useState('hidden');
  const [nonEditingVisibility, setNonEditingVisibility] = useState('visible');

  const [nameEditorVisibility, setNameEditorVisibility] = useState('hidden');
  const [nameVisibility, setNameVisibility] = useState('visible');

  const [ingredientEditorVisibility, setIngredientEditorVisibility] = useState('hidden');
  const [ingredientVisibility, setIngredientVisibility] = useState('visible');

  const [instructionEditorVisibility, setInstructionEditorVisibility] = useState('hidden');
  const [instructionVisibility, setInstructionVisibility] = useState('visible');

  const [editingButtonVisibility, setEditingButtonVisibility ] = useState('hidden');

  function deleteDrink(id) {
    fetch(apiURL + `/${id}`, {
      method: 'DELETE',
    }).then(() => getFunction())
  }

  function updateDrink(id) {
    let updatedDrink = 
    {
      Name: newName,
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
                <Button className = "recipe-btn mb-2 mt-3" onClick = {() => {setEditingVisibility('visible'); setNonEditingVisibility('hidden');}} onDoubleClick={ () => {setEditingVisibility('hidden'); setNonEditingVisibility('visible');}}><i className="bi bi-pencil"></i></Button>
              </Col>
              <Col sm = {6}></Col>
              <Col sm = {2}>
                <Button className = "recipe-btn mb-2 mt-3" onClick = {() => deleteDrink(id)}><i className="bi bi-trash3"></i></Button>
              </Col>
              <Col sm = {1}></Col>
          </Row>
            <Card.Body>
              {/*Name of drink*/}
                  <h4 className = {`text-center recipe-title ${nameVisibility}`}>{name}<i onClick = {()=> {setNameEditorVisibility('visible');setNameVisibility('hidden') }} onDoubleClick = {()=> {setNameEditorVisibility('hidden');setNameVisibility('visible') }}className= {`${editingVisibility} bi bi-pencil editing-icon`}></i></h4>
                  <Form.Group className={`${nameEditorVisibility} mb-1`} controlId="update.NameInput">
                    <Form.Control className = "width" type="text"/>
                  </Form.Group>


              {/*Ingredients*/}
                  <div>
                    <Card.Text className = "recipe-heading">Ingredients <i onClick = {()=> {setIngredientEditorVisibility('visible');setIngredientVisibility('hidden'); setEditingButtonVisibility('visible') }} onDoubleClick = {()=> {setIngredientEditorVisibility('hidden');setIngredientVisibility('visibility');setEditingButtonVisibility('hidden')  }} className= {`${editingVisibility} bi bi-pencil editing-icon`}></i></Card.Text>
                    <Card.Text className = {`${ingredientVisibility} recipe-instructions`}>
                        {ingredients}
                    </Card.Text>
                  </div>
             {/*Editing for Ingredients*/}
                  <Form.Group className={ingredientEditorVisibility} controlId="exampleForm.ControlInput1">
                  <Form.Control as="textarea" onChange = {(e)=> setNewIngredients(e.target.value)} defaultValue={ingredients} rows={2}/>
                </Form.Group>


              {/*Instructions*/}
                  <Card.Text className = "recipe-heading">Instructions <i onClick = {()=> {setInstructionEditorVisibility('visible');setInstructionVisibility('hidden');setEditingButtonVisibility('visible') }} onDoubleClick = {()=> {setInstructionEditorVisibility('hidden');setInstructionVisibility('visible');setEditingButtonVisibility('hidden')  }}className= {`${editingVisibility} bi bi-pencil editing-icon`}></i></Card.Text>
                  <Card.Text className = {`recipe-instructions mb-5 ${instructionVisibility}`}>
                      {instructions}
                  </Card.Text>

              {/*Editing for Instructions*/}
                  <Form.Group className= {instructionEditorVisibility} controlId="exampleForm.ControlInput1">
                  <Form.Control as="textarea"   className = "mb-3" onChange = {(e)=> setNewInstructions(e.target.value)}  rows={2} defaultValue={instructions}></Form.Control>
                </Form.Group>
                <Button className = {`${editingButtonVisibility} submit-btn`} onClick = {()=> updateDrink(id)} ><i className="bi bi-check2"></i></Button>
            </Card.Body>
                    
        </Card>)}
