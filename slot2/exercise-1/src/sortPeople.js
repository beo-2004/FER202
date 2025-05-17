function sortPeople(people) {
  return [...people].sort((a, b) => {
    if (a.occupation < b.occupation) return -1;
    if (a.occupation > b.occupation) return 1;
    return a.age - b.age;
  });
}
function SortedPeople() {
  const people = [
  { name: "Alice", age: 25, occupation: "Engineer" },
  { name: "Bob", age: 17, occupation: "Student" },
  { name: "Charlie", age: 32, occupation: "Designer" },
  { name: "Dave", age: 19, occupation: "Student" },
  { name: "Eve", age: 40, occupation: "Engineer" },
];
  const sorted = sortPeople(people);

  return (
    <div>
      <h2>People Sorted by Occupation, then Age</h2>
      <ul>
        {sorted.map((p, i) => (
          <li key={i}>
            {p.name} - {p.occupation} - {p.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SortedPeople;
