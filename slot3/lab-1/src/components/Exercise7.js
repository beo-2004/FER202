import React from "react";
import { employees } from "../data/employees";

const Exercise7 = () => {
  const sorted = [...employees].sort((a, b) => {
    const deptCompare = a.department.localeCompare(b.department);
    if (deptCompare !== 0) return deptCompare;
    return a.name.localeCompare(b.name);
  });

  return (
    <section>
      <h2>Exercise 7 – Sort employees by department, then by name</h2>
      <ul>
        {sorted.map((emp, index) => (
          <li key={emp.id || index}>{emp.name} - {emp.department}</li>
        ))}
      </ul>
    </section>
  );
};

export default Exercise7;
