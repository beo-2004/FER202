function PeopleList() {
  const people = [
    { name: "Alice", age: 25, occupation: "Designer" },
    { name: "Bob", age: 32, occupation: "Developer" },
    { name: "Charlie", age: 28, occupation: "Product Manager" }
  ];

  return (
    <div>
      <h2>People List</h2>
      <ul>
        {people.map((person, index) => (
          <li key={index}>
            <strong>Name:</strong> {person.name} <br />
            <strong>Age:</strong> {person.age} <br />
            <strong>Occupation:</strong> {person.occupation}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PeopleList;