// 1) Set out a structure (interface, type...) to describe a single Car instance

interface Car {
  id: number;
  make: string;
  model: string;
  reg: string;
  price: number;
}

// 2) When we're working with the form - with a new Car - we won't have an ID.
// - We need a structure to describe this. (Cars without IDs)
// - In addition, the price field has to be a string
//    make, model, price, reg - all string type

// `Pick` some of the fields from Car, and add new ones
// Take the Car interface and `Omit` the fields we don't want

// `extends` means that it contains all of the fields in the extended type
// Pick
type fieldsToPick = "make" | "model" | "reg";
interface CarFormFields extends Pick<Car, fieldsToPick> {
  price: string;
}

type CarDto = Omit<Car, "id">;

// Omit id and price
// type fieldsToOmit = "id" | "price";
// interface CarForm extends Omit<Car, fieldsToOmit> {
//   price: string;
// }

// const formFields: CarForm = {
//   make: "Suzuki",
//   model: "Alto",
//   reg: "PK15 PYW",
//   price: "3998",
// };
