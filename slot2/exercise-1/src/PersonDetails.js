function PersonDetails() {
  const person = {
    name: "Alice",
    age: 25,
    occupation: "Designer",
  };

  return (
    <div>
      <h2>Person Details</h2>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <p>Occupation: {person.occupation}</p>
    </div>
  );
}

export default PersonDetails;
