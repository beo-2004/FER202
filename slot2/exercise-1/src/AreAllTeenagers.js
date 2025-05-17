function AreAllTeenagers() {
 const people = [
  { name: "Alice", age: 25, occupation: "Engineer" },
  { name: "Bob", age: 17, occupation: "Student" },
  { name: "Charlie", age: 32, occupation: "Designer" },
  { name: "Dave", age: 19, occupation: "Student" },
  { name: "Eve", age: 40, occupation: "Engineer" },
];


  const allTeenagers = people.every(
    (person) => person.age >= 13 && person.age <= 19
  );

  return (
    <div>
      <h2>Are all people teenagers?</h2>
      <p>{allTeenagers ? "Yes, all are teenagers." : "No, not all are teenagers."}</p>
    </div>
  );
}

export default AreAllTeenagers;
