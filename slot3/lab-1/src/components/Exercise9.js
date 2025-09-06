import React from "react";
import { employees } from "../data/employees";

const Exercise9 = () => {
  const isTeenager = employees.some(e => e.age >= 10 && e.age <= 20);

  return (
    <section>
      <h2>Exercise 9 – Check if any employee is a teenager</h2>
      <p>Is there a teenager? <strong>{isTeenager ? "Yes" : "No"}</strong></p>
    </section>
  );
};

export default Exercise9;
