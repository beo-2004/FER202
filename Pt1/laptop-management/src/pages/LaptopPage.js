import React from "react";
import LaptopList from "../components/Laptops/LaptopList";

function LaptopPage() {
  return (
    <section className="py-4">
      <h2 className="text-center mb-4">Laptop Management</h2>
      <LaptopList />
    </section>
  );
}

export default LaptopPage;
