import React from "react";
import { Navbar } from "./components/Navbar";
import CarCard from "./components/CarCard";
import { CarForm } from "./components/CarForm";
import useCars from "./Hooks/useCars";

const App = () => {
  const carsQuery = useCars();

  return (
    <>
      <Navbar />

      <div className="ch-container ch-mt--4">
        <CarForm />

        {carsQuery.isLoading && <p>Loading</p>}

        {carsQuery.isError && <p>{carsQuery.error.message}</p>}

        {
          /* Loop over the cars[] array and output some cards */
          carsQuery.data &&
            carsQuery.data.map((item) => {
              return (
                <CarCard
                  key={item.reg}
                  make={item.make}
                  model={item.model}
                ></CarCard>
              );
            })
        }
      </div>
    </>
  );
};

export default App;
