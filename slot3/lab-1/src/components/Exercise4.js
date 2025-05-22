import React from "react";
import { employees } from "../data/employees";

const averageAge = (...ages) => {
  const total = ages.reduce((sum, age) => sum + age, 0);
  return (total / ages.length).toFixed(1);
};

const Exercise4 = () => {
  const ages = employees.map(emp => emp.age);
  return (
    <section>
      <h2>Exercise 4 – Calculate average age using rest parameters</h2>
      <p>Average age: {averageAge(...ages)}</p>
    </section>
  );
};

export default Exercise4;
