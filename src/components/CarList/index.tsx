import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getCars } from "../../services/cars";

export const CarList = () => {
  // How would we do "loading" logic?
  // How would we handle errors?
  // What happens if our DB is updated from another source?
  // How do we get new cars from the form over here?

  const resultobj = useQuery(["cars"], getCars);

  console.log(resultobj);

  return (
    <div className="ch-mt--4">
      {resultobj.isLoading && <p>Loading ...</p>}

      {resultobj.isSuccess &&
        resultobj.data.map((car) => (
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
