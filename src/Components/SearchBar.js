import React from 'react'
import {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import SearchResults from './SearchResults';


export default function SearchBar({apiURL}) {

    const [searchInputValue, setSearchInputValue] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [drinks, setDrinks] = useState([])
    const [bodyVisibility, setbodyVisibility] = useState("hidden");

    const searchDrinks = async () => {
        
        let formattedDrinks = []
        
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          let baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
          const res = await fetch(`${baseURL}${searchInputValue}`, requestOptions)
          const data = await res.json();
          data.drinks.forEach((drink) => {
                let formattedDrinkObj = {};
                formattedDrinkObj.name = drink.strDrink;
                formattedDrinkObj.image = drink.strDrinkThumb;
                formattedDrinkObj.instructions = drink.strInstructions;
                
                
                let drinkArry = Object.entries(drink);
                let ingredientList = [];
                let measurementList = [];

                console.log(drinkArry)

                for (let entry in drinkArry)
                {
                    if(drinkArry[entry][0].includes('strIngredient'))
                    {
                        if(drinkArry[entry][1] !== null && drinkArry[entry][1] !=="")
                        {
                            //console.log(drinkArry[entry][1])
                            ingredientList.push(`${drinkArry[entry][1]}`);
                        }
                    }
                }

                for (let entry in drinkArry)
                {
                    if(drinkArry[entry][0].includes('strMeasure'))
                    {
                        if(drinkArry[entry][1] !== null)
                        {
                            //console.log(drinkArry[entry][1])
                            measurementList.push(drinkArry[entry][1]);
                        }
                    }
                }
                if (measurementList.length !== ingredientList.length)
                {
                    while(ingredientList.length !== measurementList.length )
                    {
                        measurementList.push("");
                    }
                }


                let formattedList = []
                for (let i = 0; i < measurementList.length; i++)
                {
                    formattedList.push(`${measurementList[i]} ${ingredientList[i]}`);
                }
                //console.log(formattedList);
                formattedDrinkObj.ingredients = formattedList;
                //console.log(formattedDrinkObj)
                formattedDrinks.push(formattedDrinkObj);
                return formattedDrinkObj;
            })
            setDrinks(formattedDrinks);
            console.log(drinks);
    }

  return (
    <div>
    
    <Container className = "hero-image" fluid>
    <div className = "blur">
        <Row className = "pt-5">
            <Col></Col>
            <Col sm={9}>
                <h1 className = "hero-text mb-3">Search, Sip, Smile</h1>
            </Col>
            <Col></Col>
        </Row>
        <Row>
            <Col></Col>
            <Col sm={9}>
                <InputGroup className="mb-3" onChange={(e) => setSearchInputValue(e.target.value)}>
                    <Form.Control
                    size="lg"
                    placeholder="Try an Aperol Sprtiz!"
                    aria-describedby="basic-addon2"
                    className = "not-rounded"
                    />
                    <Button className = "orange-btn" onClick={(event) => { searchDrinks(); setbodyVisibility('visible');}}>Search <i className="bi bi-search"></i></Button>
                </InputGroup>
            </Col>
            <Col></Col>
        </Row>
        </div>
     </Container>
     <SearchResults drinks = {drinks} visibility = {bodyVisibility} apiURL = {apiURL}/>
    </div>


  )
}


