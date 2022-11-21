import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import BUTTON from "../../Centralized_Components/BUTTON/BUTTON";
import "./RECIPE.scss";

const RECIPE = ({ dish }) => {
  return (
    <div className="col-lg-4 recipe">
      <Card className="text-center m-5 p-3 meal-card">
        <hr />
        <Card.Title className="my-3 py-3" style={{ minHeight: "100px" }}>
          {dish.recipe.label}
        </Card.Title>
        <Card.Img
          className="mb-3 p-3"
          variant="top"
          src={dish.recipe.image}
          style={{ width: "100%", height: "250px" }}
        />

        <ListGroup className="list-group-flush">
          <ListGroup.Item>Dish Type: {dish.recipe.dishType[0]}</ListGroup.Item>
          <ListGroup.Item>
            Calories: {parseInt(dish.recipe.calories)}
          </ListGroup.Item>
        </ListGroup>

        <a
          href={dish.recipe.url}
          style={{ textDecoration: "none" }}
          target="blank"
        >
          <BUTTON buttonType={"contrast"}>Go to Recipe</BUTTON>
        </a>
      </Card>
    </div>
  );
};

export default RECIPE;
