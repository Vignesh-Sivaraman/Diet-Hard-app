import React from "react";
import { Link } from "react-router-dom";
import BUTTON from "../../Centralized_Components/BUTTON/BUTTON";
import "./ADD_ENTRY.scss";
import { FormikProvider, useFormik } from "formik";

const ADD_ENTRY = (props) => {
  let mealTypes = ["Breakfast", "Dinner", "Lunch"];
  const formik = useFormik({
    initialValues: {
      mealType: "",
      mealPlanOption: Boolean,
    },
    // validate: (values) => {
    //   let errors = {};
    //   for (let keys in values) {
    //     if (values[keys] === "") {
    //       errors[keys] = `Please Enter ${keys}`;
    //     }
    //   }
    //   return errors;
    // },
    onSubmit: async (values) => {
      try {
        console.log(values);
      } catch (error) {
        alert(
          `Error Code: ${error.response.status}- ${error.response.data.message}`
        );
      }
    },
  });
  return (
    <div className="entrybox container">
      <div className={`entry-title ${props.ctype}`}>
        <span> Your Daily summary</span>
        <span className="topic">
          <span>DAY STREAK:</span> 10000
        </span>
      </div>

      <div className="entrycontent-box row">
        <div
          className="col-lg-4 d-flex align-items-center justify-content-center "
          style={{ margin: "20px 0" }}
        >
          <img
            src={props.dashicon}
            height="200px"
            width="200px"
            alt={props.ctype}
          />
        </div>

        <div className="col-lg-8 d-flex flex-column align-items-center justify-content-center ">
          {props.ctype === "calories" ? (
            <>
              <FormikProvider value={formik}>
                <form
                  className="myForm"
                  onSubmit={formik.handleSubmit}
                  style={{ width: "100%" }}
                >
                  <span className=" fs-5 text-primary">Meal-type:</span>
                  <div>
                    {mealTypes.map((mealType, i) => {
                      return (
                        <span key={i}>
                          <input
                            onChange={formik.handleChange}
                            type="radio"
                            value={mealType}
                            name="mealType"
                            required
                          />
                          <span>{mealType}</span>
                        </span>
                      );
                    })}
                  </div>

                  <span>
                    {" "}
                    <input
                      onChange={formik.handleChange}
                      type="checkbox"
                      value={formik.values.mealPlanOption}
                      name="mealType"
                      required
                    />
                    <span>
                      {"Check if you had the meal as per your meal plan"}
                    </span>
                  </span>
                </form>
              </FormikProvider>
            </>
          ) : (
            <>
              <p> {props.ctype} Remaining for the day</p>
              <div className="entry-data">
                <input className="entry-value" placeholder={props.unit} />
                <Link className="entry-btn">
                  <BUTTON type="button" buttonType={"contrast"}>
                    Add Entry
                  </BUTTON>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ADD_ENTRY;
