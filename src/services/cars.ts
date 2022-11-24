export const getCars = (): Promise<Car[]> => {
  return fetch("http://localhost:3001/cars").then((res) => res.json());
};
