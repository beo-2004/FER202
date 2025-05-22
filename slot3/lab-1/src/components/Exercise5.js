import React from "react";
import { employees } from "../data/employees";

const Exercise5 = () => {
  return (
    <section>
      <h2>Exercise 5 – Render a dropdown menu of employee names</h2>
      <select>
        {employees.map((emp, index) => (
          <option key={emp.id || index}>{emp.name}</option>
        ))}
      </select>
    </section>
  );
};

export default Exercise5;
