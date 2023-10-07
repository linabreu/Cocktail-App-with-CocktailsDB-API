import React from 'react'
import {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RecipeCard from './RecipeCard';

export default function SavedCocktails({apiURL, getFunction, savedCocktailState}) {

  {/*
  const [savedCocktails, setSavedCocktails] = useState([]);

  async function getSavedCocktails () {
    const res = await fetch(apiURL)
    const data = await res.json()
    console.log(data)
    setSavedCocktails(data)
  }*/}

  
  useEffect(()=> {
    getFunction()
  },[])



  //console.log(savedCocktails)

  return (
    <div className = "orange">
     <Container>
        <div>
          <h2 className = "body-banner text-center mt-3">Your Saved Sips</h2>
          <h4 className = "sub-header text-center">You Have Great Taste</h4>
        </div>
          <Row className = "pt-5">
      {savedCocktailState.savedCocktails.map((savedCocktail, index) => 
              <Col  md={6} sm={4} lg={4} xs={12} key = {index}>
                  <RecipeCard name = {savedCocktail.Name} ingredients = {savedCocktail.Ingredients} instructions = {savedCocktail.Instructions} id = {savedCocktail.id} apiURL = {apiURL} getFunction = {getFunction} key= {index}/>
      </Col>)}
          </Row>
    </Container>
    </div>
  )
}
