import React, { useState, useEffect } from "react";

export const CarList = () => {
  // How would we do "loading" logic?
  // How would we handle errors?
  // What happens if our DB is updated from another source?
  // How do we get new cars from the form over here?

  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/cars")
      .then((res) => res.json())
      .then(setCars);
  }, []);

  return (
    <div className="ch-mt--4">
      {cars.map((car) => (
        <div className="ch-card ch-mb--4" key={car.id}>
          <div className="ch-card__content">
            <h3>
              {car.make} {car.model}
            </h3>
            <p>{car.reg}</p>
            <p>£{car.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
