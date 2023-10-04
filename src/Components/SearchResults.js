import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DisplayCard from './DisplayCard';

export default function SearchResults({drinks, visibility, apiURL}) {
  return (
    <>
     <Container>
        <div className = {visibility}>
          <h2 className = "body-banner text-center mt-3">Cheers!</h2>
          <h4 className = "sub-header text-center">These Aren't Your Grandma's Cocktails</h4>
        </div>
          <Row className = "pt-5">
        {drinks.map((drink, index) => 
              <Col  md={6} sm={4} lg={3} xs={12} key = {index}>
                  <DisplayCard name = {drink.name} ingredients = {drink.ingredients} instructions = {drink.instructions}  image = {drink.image} displayOnly = "true" apiURL = {apiURL} key = {index}/>
          </Col>)}
          </Row>
    </Container>
   
  </>
  )
}
