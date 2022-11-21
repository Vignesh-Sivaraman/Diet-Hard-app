import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import BUTTON from "../../Centralized_Components/BUTTON/BUTTON";
import "./MEAL_DETAILS.scss";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const MEAL_DETAILS = () => {
  let [meal, setCurrentMeal] = useState("");

  const options = {
    chart: {
      backgroundColor: "rgba(0,0,0,0)",
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
    },
    title: {
      text: "Nutrients Breakdown",
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.y}</b>",
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        colors: ["#378AFF", "#FFEC21", "#47B39C"],
        dataLabels: {
          enabled: false,
        },
        showInLegend: true,
      },
    },
    series: [
      {
        name: "Amount",
        colorByPoint: true,
        data: [
          {
            name: "Carbohydrates (g)",
            y: meal.carbohydrates,
          },
          {
            name: "Protein(g)",
            y: meal.protein,
          },
          {
            name: "Fat(g)",
            y: meal.fat,
          },
        ],
      },
    ],
  };

  useEffect(() => {
    let temp = window.localStorage.getItem("mealdetails");
    setCurrentMeal(JSON.parse(temp));
  }, []);
  console.log(meal);

  return (
    <div className="mealDetails-home">
      <div className="container box text-center">
        {meal ? (
          <>
            <div className="row">
              <Card className="text-center m-5 p-3 meal-card col-lg-6 ">
                <Card.Title className="my-3 py-3" style={{ minHeight: "75px" }}>
                  {meal.title}
                </Card.Title>
                <Card.Img
                  className="mb-3 p-3"
                  variant="top"
                  src={meal.imageURL}
                  style={{
                    width: "100%",
                    height: "350px",
                    borderRadius: "3rem",
                  }}
                />

                <ListGroup className="list-group-flush">
                  <ListGroup.Item>
                    Preparation time: {meal.readyInMinutes} minutes
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Number of servings: {meal.servings}
                  </ListGroup.Item>
                  <ListGroup.Item>Dishtype: {meal.dishType}</ListGroup.Item>
                  <ListGroup.Item>Calories: {meal.calories}</ListGroup.Item>
                </ListGroup>
                <div className="recipebtn">
                  <a
                    href={meal.sourceUrl}
                    style={{ textDecoration: "none" }}
                    target="blank"
                  >
                    <BUTTON buttonType={"contrast"}>Go to Recipe</BUTTON>
                  </a>
                </div>
              </Card>

              <div className="chart-content col-lg-6">
                <HighchartsReact highcharts={Highcharts} options={options} />
              </div>
            </div>
          </>
        ) : (
          <div>Loading</div>
        )}
      </div>
    </div>
  );
};

export default MEAL_DETAILS;
