import { useState, useEffect } from "react";
import { fetchAllCars } from "../API/fetchCars";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

function useCars() {
  const ONE_SECOND = 1000;

  const query = useQuery<Car[], Error>({
    queryKey: ["cars"],
    queryFn: fetchAllCars,
    retry: 5,
    retryDelay: 500,
    staleTime : ONE_SECOND
  });

  return query;
}

export default useCars;

// function useCars(): Car[] {
//   const [cars, setCars] = useState<Car[]>([]);

//   // Loading states
//   // Error Handling
//   // refetching the data

//   useEffect(() => {
//     // 1) Use .then to wait for the promise to resolve
//     // fetchAllCars().then(carsFromApi => setCars(carsFromApi));

//     // 2) Use Async / Await
//     const fetchData = async () => {
//       const carsFromApi = await fetchAllCars();
//       setCars(carsFromApi);
//     };
//     fetchData();
//   }, []);

//   return cars;
// }
