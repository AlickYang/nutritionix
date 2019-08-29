/* 
Function calculates the calories per meal 
(serving size * calories per serving)
*/

/**
 *
 * @param {Array of intake list } intake_list
 * @return { Array of meal types and calories, total calorie intake }
 */
const SumDailyIntake = intake_list => {
  //Calories of meal group
  // let breakdown = intake_list.reduce((accu, meal) => {
  //   const { meal_type, nf_calories, serving_size } = meal;
  //   accu[accu.length] = { meal_type, calories: 0 };
  //   accu[accu.length].calories += Math.round(nf_calories * serving_size);
  //   return accu;
  // }, []);

  //Inefficient, can fix later
  // var sumProps = prop => (sum, obj) => sum += obj[prop];
  // var adultsCount = array.reduce( sumProps('adults'));
  // var childrenCount = array.reduce( sumProps('children'));
  // var breakfastCount = intake_list.reduce(sumProps)
  // function sumCalories(meal) {
  //   return meal.nf_calories * meal.serving_size;
  // }

  let breakdown = [
    { meal_type: "breakfast", calories: 0 },
    { meal_type: "lunch", calories: 0 },
    { meal_type: "dinner", calories: 0 },
    { meal_type: "snack", calories: 0 }
  ];

  if (intake_list.length !== 0) {
    intake_list.forEach(meal => {
      const { meal_type, nf_calories, serving_size } = meal;
      const index = breakdown.findIndex(item => item.meal_type === meal_type);
      // console.log("Calories");
      // console.log(breakdown[0].calories);
      breakdown[index].calories += Math.round(nf_calories * serving_size);
    });
  }

  // console.log(breakdown);

  // if (breakdown.length === 0) {
  //   console.log("breakdown.len = 0");
  //   breakdown = {
  //     breakfast: { meal_type: "breakfast", calories: 0 },
  //     lunch: { meal_type: "lunch", calories: 0 },
  //     dinner: { meal_type: "dinner", calories: 0 },
  //     snack: { meal_type: "snack", calories: 0 }
  //   };
  // }

  const totalIntake = intake_list.reduce((total, meal) => {
    return Math.round(meal.nf_calories * meal.serving_size) + total;
  }, 0);
  //Total calories
  // console.log(breakdown);
  // console.log(totalIntake);
  return { breakdown, totalIntake };
};

export default SumDailyIntake;
