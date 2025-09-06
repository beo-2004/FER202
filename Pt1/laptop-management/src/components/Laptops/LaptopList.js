import React, { useEffect, useState } from "react";
import { fetchLaptops } from "../../api/laptopAPI";
import LaptopCard from "./LaptopCard";
import { Form, Button, Row, Col } from "react-bootstrap";

function LaptopList() {
  const [laptops, setLaptops] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredLaptops, setFilteredLaptops] = useState([]);

  useEffect(() => {
    const loadLaptops = async () => {
      try {
        const res = await fetchLaptops();
        setLaptops(res.data);
        setFilteredLaptops(res.data);
      } catch (err) {
        console.error("Failed to fetch laptops:", err);
      }
    };
    loadLaptops();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const keyword = search.toLowerCase();
    const result = laptops.filter(
      (laptop) =>
        laptop.brand.toLowerCase().includes(keyword) ||
        laptop.model.toLowerCase().includes(keyword)
    );
    setFilteredLaptops(result);
  };

  return (
    <>
      <Form onSubmit={handleSearch} className="mb-4 d-flex justify-content-center">
        <Form.Control
          type="text"
          placeholder="Search by brand or model..."
          className="me-2 shadow-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ maxWidth: "320px", borderRadius: '10px' }}
        />
        <Button type="submit" variant="success" className="fw-semibold px-4" style={{ borderRadius: '10px' }}>Search</Button>
      </Form>

      <Row xs={1} sm={2} md={3} lg={4} className="g-4 justify-content-center">
        {filteredLaptops.map((laptop) => (
          <Col key={laptop.id} className="d-flex">
            <LaptopCard laptop={laptop} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default LaptopList;
