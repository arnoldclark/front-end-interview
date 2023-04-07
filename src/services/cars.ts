import { ICar } from "../components/CarList";

export const getCars = async (): Promise<ICar[]> => {
  const response = await fetch("http://localhost:3000/cars");
  const cars = await response.json();

  return cars;
};

export const postNewCar = async (newCar: Omit<ICar, "id">): Promise<ICar> => {
  const response = await fetch("http://localhost:3000/cars", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newCar),
  });
  const dbCar = await response.json();

  return dbCar;
};
