// Props:
// <CarCard make={} model={} />

import React from "react";

type CarCardProps = Pick<Car, "make" | "model">;
function CarCard({ make, model }: CarCardProps) {
  return (
    <div className="ch-card">
      <div className="ch-card__content">
        <h3>
          {make} {model}
        </h3>
      </div>
    </div>
  );
}

export default CarCard;
