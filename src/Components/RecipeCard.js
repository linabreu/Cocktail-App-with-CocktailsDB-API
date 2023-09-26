import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Drink from '../Images/drinkt-test.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function RecipeCard({name, ingredients, instructions, image, displayOnly}) {
    return (
        <Card className = "drink-card mb-5">
          <Card.Img className = "card-image mt-3" variant="top" src= {image} />
          <Card.Body>
                <Card.Title className = "text-center card-title p-2">{name}</Card.Title>
                <Card.Text className = "card-heading">Ingredients</Card.Text>
                <>
                    {ingredients.map((ingredient, index) => 
                        <Card.Text className = "card-ingredients" key = {index}>
                           {ingredient}
                        </Card.Text>)}
                </>
                <Card.Text className = "card-heading">Instructions</Card.Text>
                <Card.Text className = "card-ingredients">
                    {instructions}
                </Card.Text>
          </Card.Body>
          <Button className = "add-btn mb-2">Save <i className="bi bi-suit-heart-fill"></i></Button>
        </Card>); }
