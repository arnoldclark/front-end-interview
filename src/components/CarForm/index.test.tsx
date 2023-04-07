import * as React from "react";
import { render } from "@testing-library/react";
import { CarForm } from ".";
import { postNewCar } from "../../services/cars";
import { ICar } from "../CarList";
import userEvent from "@testing-library/user-event";

describe("CarForm", () => {
  it("should call postNewCar", async () => {
    const testData: Omit<ICar, "id" | "price"> & { price: string } = {
      make: "Ford",
      model: "Fiesta",
      reg: "A1",
      price: "9999",
    };

    const { getByLabelText, getByText } = render(<CarForm />);
    userEvent.setup();

    await userEvent.type(getByLabelText("Make"), testData.make);
    await userEvent.type(getByLabelText("Model"), testData.model);
    await userEvent.type(getByLabelText("Registration"), testData.reg);
    await userEvent.type(getByLabelText("Price"), testData.price);

    await userEvent.click(getByText("Submit car"));

    expect(postNewCar).toHaveBeenCalledWith({
      ...testData,
      price: +testData.price,
    });
  });
});
