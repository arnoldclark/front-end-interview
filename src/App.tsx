import * as React from "react";
import { Navbar } from "./components/Navbar";
import { CarList } from "./components/CarList";
import { CarForm } from "./components/CarForm";

const App = () => {
  return (
    <>
      <Navbar />

      <div className="ch-container ch-mt--4">
        <div className="ch-mb--4">
          <CarForm />
        </div>

        <CarList />
      </div>
    </>
  );
};

export default App;
