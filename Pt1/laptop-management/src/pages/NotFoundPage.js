import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="text-center py-5">
      <h1 className="display-4">404</h1>
      <p className="lead">The laptop you're looking for was not found.</p>
      <Button variant="primary" onClick={() => navigate("/")}>
        Go to Home
      </Button>
    </div>
  );
}
export default NotFoundPage;
