import React from "react";
import { employees } from "../data/employees";

const groupByDepartment = (emps) => {
  return emps.reduce((acc, emp) => {
    acc[emp.department] = acc[emp.department] || [];
    acc[emp.department].push(emp);
    return acc;
  }, {});
};

const Exercise8 = () => {
  const grouped = groupByDepartment(employees);

  return (
    <section>
      <h2>Exercise 8 – Group employees by department</h2>
      {Object.entries(grouped).map(([dept, emps]) => (
        <div key={dept}>
          <h3>{dept}</h3>
          <ul>
            {emps.map((emp, index) => (
              <li key={emp.id || index}>{emp.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Exercise8;
