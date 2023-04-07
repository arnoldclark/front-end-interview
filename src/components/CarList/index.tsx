import * as React from "react";
import { getCars } from "../../services/cars";

export interface ICar {
  id: number;
  make: string;
  model: string;
  price: number;
  reg: string;
}

export const CarList = () => {
  const [cars, setCars] = React.useState<ICar[]>();

  React.useEffect(() => {
    getCars().then(setCars);
  }, []);

  return (
    <>
      {cars === undefined && <p>Loading...</p>}

      {cars?.length === 0 && <p>No cars found!</p>}

      {cars?.length > 0 &&
        cars.map((car) => (
          <div key={car.id} className="ch-card ch-mb--2">
            <div className="ch-card__content">
              <h3>
                {car.make} {car.model}
              </h3>
              <p className="ch-mb--0">£{car.price}</p>
            </div>
          </div>
        ))}
    </>
  );
};
