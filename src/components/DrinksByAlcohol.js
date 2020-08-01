import React from "react";

function DrinksByAlcohol() {
  const [alcohol, setAlcohol] = useState("");
  const [drinks, setDrinks] = useState([]);

  const onAlcoholNameChange = (e) =>{
    setAlcohol(e.target.value);
  }

  async function getDrinksByAlcohol(){
      try {
    const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${alcohol}`
      );
      setDrinks(response.data.drinks)      
      } catch (error) {
        console.log("error: ", error);         
      }
  }

  useEffect(() => {
      getDrinksByAlcohol();
  }, [alcohol])

  handleFormSubmission =(e)=>{
      e.preventDefault();

  }

  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label>Alcohol</Form.Label>
          <Form.Control
            type="Text"
            placeholder="Enter alcohol name"
            onChange={onAlcoholNameChange}
          />
          <Form.Text className="text-muted">
            What alcohol do you have
          </Form.Text>
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={this.handleFormSubmission}
        >
          Submit
        </Button>
      </Form>
      <CardGroup>{listOfDrinkRecipes}</CardGroup>
    </div>
  );
}

export default RecipeByAlcohol;
