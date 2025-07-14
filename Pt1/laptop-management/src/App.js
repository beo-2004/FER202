import React from "react";
import AppRouter from './routers/AppRouter';
import Container from "react-bootstrap/Container";
import Header from './components/Layout/Header';

function App() {
  return (
    <Container fluid className="p-0">
      <Header />
      <AppRouter />
    </Container>
  );
}

export default App;
