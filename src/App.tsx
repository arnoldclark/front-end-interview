import React from "react";
import { CarForm } from "./components/CarForm";
import { Navbar } from "./components/Navbar";
import { CarList } from "./components/CarList";

const App = () => {
  return (
    <>
      <Navbar />

      <div className="ch-container ch-mt--4">
        <CarForm />

        <CarList />
      </div>
    </>
  );
};

export default App;
