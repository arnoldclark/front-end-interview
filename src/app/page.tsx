import { Car } from "./api/cars/route";

export default async function Home() {

  const res = await fetch('http://localhost:3000/api/cars').then((res) => res.json());

  const { cars }: { cars: Car[] } = res;

  return (
    <div className="ch-container ch-mt--4">
      <p>Let&apos;s get started!</p>
      {cars && cars.map((car) => (<p key={car.id}>{car.make}</p>))}
    </div>
  );
}
