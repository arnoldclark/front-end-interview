// fetchAllCars
// postNewCar

export async function fetchAllCars(): Promise<Car[]> {
  const response = await fetch("http://localhost:3000/cars");
  return await response.json();

  // const data = await fetch("http://localhost:3000/cars").then((response) => {
  //   return response.json();
  // });
  // return data;
}

export async function postCar(car: CarDto): Promise<Car> {
  const response = await fetch("http://localhost:3000/cars", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(car),
  });
  return await response.json();
}
