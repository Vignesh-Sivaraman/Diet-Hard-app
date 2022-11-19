import React, { useEffect, useState } from "react";
import "./CALORIES_ENTRY.scss";
import { FormikProvider, useFormik } from "formik";
import axios from "axios";
import { env } from "../../config/config";
import { useNavigate } from "react-router-dom";

const CALORIES_ENTRY = () => {
  useEffect(() => {
    if (!window.localStorage.getItem("app-token")) {
      alert("Please Login");
      navigate("/");
    }
  }, []);

  let navigate = useNavigate();
  const [isManual, setisManual] = useState(false);
  const [currentDay, setCurrentDay] = useState("");
  const [isDatePicked, setIsDatePicked] = useState(false);
  const [mealTime, setMealTime] = useState(0);
  const [currentMeal, setCurrentMeal] = useState("Breakfast");
  const [currentDate, setCurrentDate] = useState("");

  const weeklyMeals = {
    monday: {
      meals: [
        {
          dishType: "Breakfast",
          id: 699219,
          imageURL:
            "https://www.cookincanuck.com/wp-content/uploads/2015/12/23364292130_73202bfa05_b-2.jpg",
          title: "Breakfast Hash with Smoked Salmon & Dill",
          readyInMinutes: 35,
          servings: 4,
          sourceUrl:
            "http://www.cookincanuck.com/2015/12/breakfast-hash-recipe-smoked-salmon/",
        },
        {
          dishType: "Lunch",
          id: 1682575,
          imageURL:
            "https://thegreenquest.org/wp-content/uploads/2020/10/Mushroom-miso-pasta-Food-photography-The-Greenquest-2-of-3-1.jpg",
          title: "One-Pot Miso Pasta with Mushrooms",
          readyInMinutes: 25,
          servings: 4,
          sourceUrl:
            "https://www.bakerita.com/one-pot-miso-pasta-with-mushrooms/",
        },
        {
          dishType: "Dinner",
          id: 278200,
          imageURL:
            "https://www.heynutritionlady.com/wp-content/uploads/2019/05/mediterranean_roast_vegetables_2.jpg",
          title: "Herb-Roasted Mediterranean Vegetables",
          readyInMinutes: 55,
          servings: 8,
          sourceUrl:
            "https://www.heynutritionlady.com/mediterranean-roast-vegetables/",
        },
      ],
      nutrients: {
        calories: 1690.59,
        protein: 51.83,
        fat: 71.2,
        carbohydrates: 222.05,
      },
    },
    tuesday: {
      meals: [
        {
          dishType: "Breakfast",
          id: 1104907,
          imageURL:
            "https://www.simplyrecipes.com/thmb/swr1AAcCe0om0TIhSDV7r2FQOBA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__04__Cheesy-Grits-Casserole-LEAD-8-ec094ef1e22a4bcf87cc0f8c1820d6b8.jpg",
          title: "Cheesy Grits Soufflé Bake",
          readyInMinutes: 70,
          servings: 6,
          sourceUrl:
            "https://www.simplyrecipes.com/recipes/cheesy_grits_souffle_bake/",
        },
        {
          dishType: "Lunch",
          id: 154029,
          imageURL:
            "https://images.eatthismuch.com/img/45468_Shamarie84_cf77529f-2e8b-42cf-844f-f57b737dc243.png",
          title: "Winter Herb Pasta",
          readyInMinutes: 30,
          servings: 4,
          sourceUrl:
            "https://www.eatthismuch.com/recipe/nutrition/winter-herb-pasta,45468/",
        },
        {
          dishType: "Dinner",
          id: 572788,
          imageURL:
            "https://www.restlesschipotle.com/wp-content/uploads/2014/04/pain-de-mie-pinterest.jpg",
          title: "Pain de Mie, The Perfect Sandwich Loaf for Kids",
          readyInMinutes: 175,
          servings: 8,
          sourceUrl: "http://www.restlesschipotle.com/2014/04/pain-de-mie/",
        },
      ],
      nutrients: {
        calories: 1736.89,
        protein: 54.42,
        fat: 64.57,
        carbohydrates: 232.95,
      },
    },
    wednesday: {
      meals: [
        {
          dishType: "Breakfast",
          id: 1130209,
          imageURL:
            "https://www.cookingclassy.com/wp-content/uploads/2019/07/green-smoothie-10-768x1156.jpg",
          title: "My Favorite Green Smoothie",
          readyInMinutes: 5,
          servings: 1,
          sourceUrl: "https://www.cookingclassy.com/green-smoothie-recipe/",
        },
        {
          dishType: "Lunch",
          id: 543316,
          imageURL:
            "https://www.foodandwine.com/thmb/2VU64JsPaYbVIgD0NSn7Othht84=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/201407-xl-chickpea-vegetable-stew-2000-2b5c8da37a1e4143b11d9ae003e58f82.jpg",
          title: "Chickpea Vegetable Stew",
          readyInMinutes: 28,
          servings: 4,
          sourceUrl:
            "https://www.foodandwine.com/recipes/chickpea-vegetable-stew",
        },
        {
          dishType: "Dinner",
          id: 761906,
          imageURL:
            "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_73,ar_16:9,w_960/v1/img/recipes/10/74/46/picKcTkun.jpg",
          title: "Southwest Pizza Bagels",
          readyInMinutes: 45,
          servings: 4,
          sourceUrl:
            "https://www.food.com/recipe/southwest-pizza-bagels-107446",
        },
      ],
      nutrients: {
        calories: 1670.52,
        protein: 50.0,
        fat: 69.7,
        carbohydrates: 226.78,
      },
    },
    thursday: {
      meals: [
        {
          dishType: "Breakfast",
          id: 652239,
          imageURL: "https://webknox.com/recipeImages/652239-556x370.jpg",
          title: "Moist Vegan Spelt Bran Muffins",
          readyInMinutes: 45,
          servings: 15,
          sourceUrl:
            "https://spoonacular.com/moist-vegan-spelt-bran-muffins-652239",
        },
        {
          dishType: "Lunch",
          id: 196627,
          imageURL:
            "https://www.seriouseats.com/thmb/AX4ZCuQhRms34Q0xszNNgSC_o90=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__02__20150219-grilled-brie-and-nutella-sandwich-vicky-wasik-1-a1ac7c649a764b358a42ef1d3dc736ac.jpg",
          title: "Brie and Nutella Grilled Cheese",
          readyInMinutes: 12,
          servings: 2,
          sourceUrl:
            "http://www.seriouseats.com/recipes/2013/04/brie-and-nutella-grilled-cheese-recipe.html",
        },
        {
          dishType: "Dinner",
          id: 626899,
          imageURL:
            "https://dizzybusyandhungry.com/wp-content/uploads/2020/11/curry-pizza-title-pin.jpg",
          title: "Curry Pizza with Veggies",
          readyInMinutes: 15,
          servings: 4,
          sourceUrl: "https://dizzybusyandhungry.com/curried-veggie-pizza/",
        },
      ],
      nutrients: {
        calories: 1691.09,
        protein: 59.32,
        fat: 61.69,
        carbohydrates: 230.28,
      },
    },
    friday: {
      meals: [
        {
          dishType: "Breakfast",
          id: 509670,
          imageURL:
            "https://www.foodfaithfitness.com/wp-content/uploads/2013/11/healthy-paleo-sweet-potato-breakfast-hash-pic-683x1024.jpg",
          title: "Breakfast Hash with Kale, Squash and Peppers {GF & Low Fat}",
          readyInMinutes: 20,
          servings: 1,
          sourceUrl:
            "http://www.foodfaithfitness.com/breakfast-hash-squash-kale/",
        },
        {
          dishType: "Lunch",
          id: 438929,
          imageURL:
            "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F9037845.jpg&q=60&c=sc&orient=true&poi=auto&h=512",
          title: "Pasta with Peas and Sausage",
          readyInMinutes: 25,
          servings: 8,
          sourceUrl:
            "https://www.allrecipes.com/recipe/23974/pasta-with-peas-and-sausage/",
        },
        {
          dishType: "Dinner",
          id: 157568,
          imageURL:
            "https://nourishedkitchen.com/wp-content/uploads/2010/10/staitiai-1-660x440.jpg",
          title: "a : staititai",
          readyInMinutes: 265,
          servings: 6,
          sourceUrl:
            "http://nourishedkitchen.com/a-recipe-staititai-ancient-greek-sesame-honey-pizza/",
        },
      ],
      nutrients: {
        calories: 1805.67,
        protein: 59.9,
        fat: 77.68,
        carbohydrates: 245.37,
      },
    },
    saturday: {
      meals: [
        {
          dishType: "Breakfast",
          id: 1675327,
          imageURL:
            "https://lifemadesweeter.com/wp-content/uploads/Healthy-Apple-Cinnamon-Baked-Oatmeal-recipe.jpg",
          title: "Apple Baked Oatmeal",
          readyInMinutes: 45,
          servings: 6,
          sourceUrl: "https://lifemadesweeter.com/apple-maple-baked-oatmeal/",
        },
        {
          dishType: "Lunch",
          id: 38102,
          imageURL:
            "https://img.sunset02.com/sites/default/files/image/recipes/su/10/03/toasts-with-asparagus-eggs-su-x.jpg",
          title: "Parmesan Toasts with Asparagus, Prosciutto, and Eggs",
          readyInMinutes: 30,
          servings: 2,
          sourceUrl:
            "https://www.sunset.com/recipe/parmesan-toasts-with-asparagus-prosciutto-eggs",
        },
        {
          dishType: "Dinner",
          id: 338568,
          imageURL:
            "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/11/22/0/FN-TGLive_Apple-Onion-stuffin_s4x3.jpg.rend.hgtvcom.756.567.suffix/1382541009032.jpeg",
          title: "Apple and Onion Stuffin",
          readyInMinutes: 50,
          servings: 12,
          sourceUrl:
            "http://www.foodnetwork.com/recipes/rachael-ray/apple-and-onion-stuffin-recipe.html",
        },
      ],
      nutrients: {
        calories: 1663.51,
        protein: 52.4,
        fat: 64.17,
        carbohydrates: 219.98,
      },
    },
    sunday: {
      meals: [
        {
          dishType: "Breakfast",
          id: 516741,
          imageURL:
            "https://reciperunner.com/wp-content/uploads/2019/06/Berry-Quinoa-Breakfast-Bowls-Photo-680x1007.jpg",
          title: "Breakfast for Dinner: Warm Berry Quinoa",
          readyInMinutes: 30,
          servings: 6,
          sourceUrl: "https://reciperunner.com/berry-quinoa-breakfast-bowls/",
        },
        {
          dishType: "Lunch",
          id: 572508,
          imageURL:
            "https://www.forkknifeswoon.com/wp-content/uploads/2014/02/20140224-Fork_Knife_Swoon_White_Bean_and_Ditalini_Stew_WEB_01.jpg",
          title: "Tomato and White Bean Stew with Ditalini",
          readyInMinutes: 30,
          servings: 4,
          sourceUrl:
            "http://www.forkknifeswoon.com/food-drink/soups-sauces/2014/02/white-bean-and-tomato-stew/",
        },
        {
          dishType: "Dinner",
          id: 299898,
          imageURL:
            "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/8/25/0/DX-0101_cornbread-stuffing_s4x3.jpg.rend.hgtvcom.1280.720.suffix/1382539510265.jpeg",
          title: "Cornbread Stuffing",
          readyInMinutes: 80,
          servings: 8,
          sourceUrl:
            "http://www.foodnetwork.com/recipes/michael-symon/cornbread-stuffing-recipe.html",
        },
      ],
      nutrients: {
        calories: 1677.07,
        protein: 50.59,
        fat: 58.23,
        carbohydrates: 244.99,
      },
    },
  };
  let [initial, setInitial] = useState({
    calories: currentDay
      ? Math.round(weeklyMeals?.[currentDay].nutrients.calories / 3)
      : "",
    mealType: "",
    mealTitle: currentDay
      ? weeklyMeals?.[currentDay].meals[mealTime].title
      : "",
    protein: currentDay
      ? Math.round(weeklyMeals?.[currentDay].nutrients.protein / 3)
      : "",
    carbohydrates: currentDay
      ? Math.round(weeklyMeals?.[currentDay].nutrients.carbohydrates / 3)
      : "",
    fat: currentDay
      ? Math.round(weeklyMeals?.[currentDay].nutrients.fat / 3)
      : "",
  });
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  useEffect(() => {
    if (isManual)
      setInitial({
        mealTitle: "",
        calories: "0",
        mealType: "",
        protein: "0",
        carbohydrates: "0",
        fat: "0",
      });
    else {
      setInitial({
        calories: currentDay
          ? Math.round(weeklyMeals?.[currentDay].nutrients.calories / 3)
          : "",
        mealTitle: currentDay
          ? weeklyMeals?.[currentDay].meals[mealTime].title
          : "",
        mealType: "",
        protein: currentDay
          ? Math.round(weeklyMeals?.[currentDay].nutrients.protein / 3)
          : "",
        carbohydrates: currentDay
          ? Math.round(weeklyMeals?.[currentDay].nutrients.carbohydrates / 3)
          : "",
        fat: currentDay
          ? Math.round(weeklyMeals?.[currentDay].nutrients.fat / 3)
          : "",
      });
    }
  }, [isDatePicked, currentDay, isManual]);

  let mealTypes = ["Breakfast", "Lunch", "Dinner"];
  const formik = useFormik({
    initialValues: initial,
    enableReinitialize: true,
    onSubmit: async (values) => {
      try {
        values.mealType = currentMeal;
        values.entryDate = currentDate;
        values.email = window.localStorage.getItem("userEmail");
        let result = await axios.post(`${env.api}/usercalories/`, values, {
          headers: {
            Authorization: window.localStorage.getItem("app-token"),
          },
        });
        if (result.status === 200) {
          alert(result.data.message);
          navigate("/home");
        }
      } catch (error) {
        alert(
          `Error Code: ${error.response.status}- ${error.response.data.message}`
        );
      }
    },
  });
  return (
    <div className="caloriesentry-main">
      <div className="container box">
        <div className="title">
          <h3>Please fill the below details</h3>
        </div>
        <FormikProvider value={formik}>
          <form
            className="myForm"
            onSubmit={formik.handleSubmit}
            style={{ width: "100%" }}
          >
            <div className="row">
              {/*date*/}
              <div className="form-outline mb-4 text-center ">
                <label>Date:</label>
                <input
                  className="inputbox mb-2"
                  type="date"
                  onChange={(e) => {
                    // setCurrentDate(e.target.value);
                    let tempDate = new Date(e.target.value);
                    setCurrentDate(e.target.value);
                    setCurrentDay(weekday[tempDate.getDay()].toLowerCase());
                    setIsDatePicked(true);
                  }}
                  // name="meal_date"
                  // required
                />
                <span className="ms-5" style={{ color: "red" }}>
                  {isDatePicked ? "" : "Please select date first"}
                </span>
              </div>
            </div>
            {isDatePicked ? (
              <div className="row">
                {/*mealType*/}
                <div className="my-2 mb-2">
                  <span className=" fs-5 text-primary">Meal-Type:</span>
                </div>
                {mealTypes.map((mealType, i) => {
                  return (
                    <div className="col-lg-2" key={i}>
                      <input
                        onChange={(e) => {
                          setCurrentMeal(e.target.value);
                          if (e.target.value === "Breakfast") setMealTime(0);
                          if (e.target.value === "Lunch") setMealTime(1);
                          if (e.target.value === "Dinner") setMealTime(2);
                          formik.handleChange(e.target.value);
                        }}
                        type="radio"
                        value={mealType}
                        name="mealType"
                        required
                        defaultChecked={mealType === "Breakfast" ? true : false}
                      />
                      <span>{mealType}</span>
                    </div>
                  );
                })}
                {/*manual option*/}
                <div className="form-outline my-3">
                  <input
                    onChange={(e) => {
                      setisManual(!isManual);
                    }}
                    type="checkbox"
                    disabled={!isDatePicked}
                    value={isManual}
                  />
                  <span>
                    "Had a Different meal your meal plan? Check here to add data
                    manually"
                  </span>
                </div>
                {isManual ? (
                  ""
                ) : (
                  <div className="d-flex">
                    <img
                      className="me-3 my-3"
                      variant="top"
                      src={weeklyMeals?.[currentDay].meals[mealTime].imageURL}
                      style={{ width: "100px", height: "100px" }}
                      alt={weeklyMeals?.[currentDay].meals[mealTime].title}
                    />
                    <div className="d-flex align-items-center">
                      {weeklyMeals?.[currentDay].meals[mealTime].title}
                    </div>
                  </div>
                )}
                {/*mealTitle*/}
                <div className="form-outline mb-4">
                  <label>Meal Title:</label>
                  <input
                    className="inputbox"
                    type="text"
                    value={formik.values.mealTitle}
                    onChange={formik.handleChange}
                    name="mealTitle"
                    required
                    disabled={!isManual}
                  />
                </div>

                {/*calories*/}
                <div className="form-outline mb-4">
                  <label>calories (cal):</label>
                  <input
                    className="inputbox"
                    type="number"
                    value={formik.values.calories}
                    onChange={formik.handleChange}
                    name="calories"
                    required
                    disabled={!isManual}
                  />
                </div>
                {/*protein*/}
                <div className="form-outline mb-4">
                  <label>protein (g):</label>
                  <input
                    className="inputbox"
                    type="number"
                    value={formik.values.protein}
                    onChange={formik.handleChange}
                    name="protein"
                    required
                    disabled={!isManual}
                  />
                </div>
                {/*fat*/}
                <div className="form-outline mb-4">
                  <label>fat (g):</label>
                  <input
                    className="inputbox"
                    type="number"
                    value={formik.values.fat}
                    onChange={formik.handleChange}
                    name="fat"
                    required
                    disabled={!isManual}
                  />
                </div>
                {/*carbohydrates*/}
                <div className="form-outline mb-4">
                  <label>carbohydrates (g):</label>
                  <input
                    className="inputbox"
                    type="number"
                    value={formik.values.carbohydrates}
                    onChange={formik.handleChange}
                    name="carbohydrates"
                    required
                    disabled={!isManual}
                  />
                </div>
                <div className="text-center text-lg-start my-2 pt-2">
                  <input
                    type={"submit"}
                    value="Add entry"
                    className="btn btn-warning btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  />
                </div>
              </div>
            ) : (
              ""
            )}
          </form>
        </FormikProvider>
      </div>
    </div>
  );
};

export default CALORIES_ENTRY;
