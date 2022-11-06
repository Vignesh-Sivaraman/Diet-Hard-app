import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import BUTTON from "../../centralized components/BUTTON/BUTTON";
import "./MEAL.scss";

const MEAL = ({ meal }) => {
  const [imageUrl, setImageUrl] = useState("");

  const getImage = async () => {
    try {
      let response = await axios.get(
        `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=3382bef24374486fb5df95c19672bb47&includeNutrition=false`
      );
      setImageUrl(response.data.image);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getImage();
  }, [meal.id]);

  return (
    <div className="col-lg-4 meal">
      <Card
        className="text-center m-3 p-3"
        style={{ width: "20rem", minHeight: "525px" }}
      >
        <Card.Title className="my-3 py-3" style={{ minHeight: "100px" }}>
          {meal.title}
        </Card.Title>
        <Card.Img
          className="mb-3 p-3"
          variant="top"
          src={imageUrl}
          style={{ width: "100%", height: "200px" }}
        />

        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            Preparation time: {meal.readyInMinutes} minutes
          </ListGroup.Item>
          <ListGroup.Item>Number of servings: {meal.servings}</ListGroup.Item>
        </ListGroup>
        <div className="recipebtn">
          <BUTTON buttonType={"contrast"}>Go to Recipe</BUTTON>
        </div>
      </Card>
    </div>
  );
};

export default MEAL;
