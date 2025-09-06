import React from "react";
import { employees } from "../data/employees";

const Exercise2 = () => {
  return (
    <section>
      <h2>Exercise 2 – Display a list of employees using map()</h2>
      <ul>
        {employees.map((emp, index) => (
          <li key={emp.id || index}>
            {emp.name} - {emp.department}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Exercise2;
