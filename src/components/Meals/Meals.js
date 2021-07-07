import { Fragment } from "react";
import MealsSummary from "./MealsSummary.js";
import AvailableMeals from "./AvailableMeals.js";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
