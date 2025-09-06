import React from "react";
import { employee } from "../data/employees";

const Exercise1 = () => {
  const { name, age, department } = employee;

  return (
    <section>
      <h2>Exercise 1 – Render employee details</h2>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Department: {department}</p>
    </section>
  );
};

export default Exercise1;
