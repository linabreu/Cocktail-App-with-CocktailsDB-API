Final project for a Front End Web Development class. 

This is a full CRUD (create, read, update, delete React app) that allows a user to search for a cocktail, save that cocktail, create thier own cocktail recipes and edit exitisting recipes.

This project is styled with React Bootstrap and utilizes the Cocktail DB which can be found on RapidAPI.com to retireve cocktail recipes based on a user serch. On the home page the user can search for a cocktail recipe of thier choosing, once they click the search bar the results are displayed. If they choose to 'Save' the cocktail, the JSON data for that cocktail is then sent to a MockAPI endpoint where it is stored and then retrieved for the Saved Cocktails page using the Javascript Fetch function.

On the saved cocktails page, the user has the ability to edit all or just portions of the recipe. Once the user clicks save, the new recipe is posted to the MockAPI endpoint.

The user also has the option to fill out the New Cocktail form to create a recipe of thier choosing that will then be stored in the API endpoint. 
