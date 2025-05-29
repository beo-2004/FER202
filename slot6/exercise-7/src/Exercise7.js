import React from "react";
import carImage from "./toyota-corolla-cross-2024-1--ynKGmCEQjQ.png";

const cardsData = [
  {
    id: 1,
    image: carImage,
    text: "Some text inside the first card",
    bgColor: "primary", // blue
  },
  {
    id: 2,
    image: carImage,
    text: "Some text inside the first card",
    bgColor: "warning", // yellow
  },
  {
    id: 3,
    image: carImage,
    text: "Some text inside the first card",
    bgColor: "danger", // red
  },
];

export default function Exercise7() {
  return (
    <section className="container py-5">
      <h2 className="text-center mb-4">Cards Columns</h2>
      <div className="row justify-content-center">
        {cardsData.map((card) => (
          <div className="col-md-4 mb-4" key={card.id}>
            <div className={`card border-0 bg-${card.bgColor} text-center`}>
              <img
                src={card.image}
                className="img-fluid p-3"
                alt={`Card ${card.id}`}
                style={{ maxHeight: "250px", objectFit: "contain" }}
              />
              <div className={`card-body text-${card.bgColor === "warning" ? "dark" : "white"}`}>
                <p className="card-text">{card.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
