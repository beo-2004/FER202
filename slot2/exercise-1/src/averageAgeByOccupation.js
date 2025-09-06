function averageAgeByOccupation(people) {
  const grouped = people.reduce((acc, person) => {
    if (!acc[person.occupation]) acc[person.occupation] = [];
    acc[person.occupation].push(person.age);
    return acc;
  }, {});

  const averages = {};
  for (const [occupation, ages] of Object.entries(grouped)) {
    const sum = ages.reduce((a, b) => a + b, 0);
    averages[occupation] = (sum / ages.length).toFixed(1);
  }
  return averages;
}

function AverageAge() {
  const people = [
  { name: "Alice", age: 25, occupation: "Engineer" },
  { name: "Bob", age: 17, occupation: "Student" },
  { name: "Charlie", age: 32, occupation: "Designer" },
  { name: "Dave", age: 19, occupation: "Student" },
  { name: "Eve", age: 40, occupation: "Engineer" },
];
  const averages = averageAgeByOccupation(people);

  return (
    <div>
      <h2>Average Age by Occupation</h2>
      <ul>
        {Object.entries(averages).map(([occ, avg], idx) => (
          <li key={idx}>
            {occ}: {avg}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AverageAge;
