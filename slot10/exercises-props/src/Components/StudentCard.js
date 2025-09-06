import React from "react";
import { Card, Button } from "react-bootstrap";

const StudentCard = ({ student, onDelete }) => {
  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete ${student.name}?`)) {
      onDelete(student.id);
    }
  };

  return (
    <Card style={{ width: "18rem" }} className="mb-4">
      <Card.Img
        variant="top"
        src={student.avatar}
        alt={`${student.name}'s avatar`}
      />
      <Card.Body>
        <Card.Title>{student.name}</Card.Title>
        <Card.Text>Age: {student.age}</Card.Text>
        <div className="d-flex gap-2">
          <Button variant="primary">Edit</Button>
          <Button variant="danger" onClick={handleDelete}>Delete</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default StudentCard;

