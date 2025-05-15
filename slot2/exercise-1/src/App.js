
import './App.css';

function App() {
  const people = [
    { name: "Alice", age: 25, occupation: "Designer" },
    { name: "Bob", age: 32, occupation: "Developer" },
    { name: "Charlie", age: 28, occupation: "Product Manager" }
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Hello world!</h1>
      <h2>People List</h2>
      {people.map((person, index) => (
        <div key={index}>
          <p><strong>Name:</strong> {person.name}</p>
          <p><strong>Age:</strong> {person.age}</p>
          <p><strong>Occupation:</strong> {person.occupation}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
