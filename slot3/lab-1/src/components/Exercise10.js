import React, { useState } from "react";
import { employees } from "../data/employees";

const Exercise10 = () => {
  const [search, setSearch] = useState("");

  const results = employees.filter(emp =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section>
      <h2>Exercise 10 – Search for an employee by name</h2>
      <input
        type="text"
        placeholder="Search name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "8px", fontSize: "16px", width: "100%", maxWidth: "400px" }}
      />
      <ul>
        {results.map((emp, index) => (
          <li key={emp.id || index}>{emp.name} - {emp.department}</li>
        ))}
      </ul>
    </section>
  );
};

export default Exercise10;
