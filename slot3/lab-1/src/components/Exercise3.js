import React from "react";
import { employees } from "../data/employees";

const Exercise3 = () => {
  return (
    <section>
      <h2>Exercise 3 – Render a table of employees</h2>
      <table border="1" cellPadding="8" cellSpacing="0" style={{ width: "100%", textAlign: "left" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, index) => (
            <tr key={emp.id || index}>
              <td>{emp.id || index + 1}</td>
              <td>{emp.name}</td>
              <td>{emp.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Exercise3;
