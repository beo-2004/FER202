function groupByOccupation(people) {
  return people.reduce((acc, person) => {
    if (!acc[person.occupation]) acc[person.occupation] = [];
    acc[person.occupation].push(person);
    return acc;
  }, {});
}
function GroupedPeople() {
  const people = [
  { name: "Alice", age: 25, occupation: "Engineer" },
  { name: "Bob", age: 17, occupation: "Student" },
  { name: "Charlie", age: 32, occupation: "Designer" },
  { name: "Dave", age: 19, occupation: "Student" },
  { name: "Eve", age: 40, occupation: "Engineer" },
];
  const grouped = groupByOccupation(people);

  return (
    <div>
      <h2>People Grouped by Occupation</h2>
      {Object.entries(grouped).map(([occupation, group], idx) => (
        <div key={idx}>
          <h3>{occupation}</h3>
          <ul>
            {group.map((p, i) => (
              <li key={i}>
                {p.name} - {p.age}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default GroupedPeople;
