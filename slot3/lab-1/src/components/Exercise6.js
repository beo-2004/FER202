import React from "react";
import { employees } from "../data/employees";

const Exercise6 = () => {
  const itEmployees = employees.filter(emp => emp.department === "IT");

  return (
    <section>
      <h2>Exercise 6 – Filter and display IT department employees</h2>
      <ul>
        {itEmployees.map((emp, index) => (
          <li key={emp.id || index}>{emp.name}</li>
        ))}
      </ul>
    </section>
  );
};

export default Exercise6;
