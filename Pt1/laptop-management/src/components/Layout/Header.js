import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import { Navbar, Container, Button } from "react-bootstrap";

function Header() {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();


  if (location.pathname === "/") return null;

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <Navbar bg="light" expand="md" className="mb-4 shadow-sm">
      <Container>
        <Navbar.Brand style={{ fontWeight: 700, fontSize: 22, letterSpacing: 1 }}>
          Laptop Management
        </Navbar.Brand>
        <div className="d-flex align-items-center gap-3">
          {user && (
            <span className="fw-semibold text-primary">{user.username}</span>
          )}
          <Button variant="outline-danger" size="sm" onClick={handleLogout}>
            Log out
          </Button>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header; 