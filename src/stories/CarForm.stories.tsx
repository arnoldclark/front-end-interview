import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { CarForm } from "../components/CarForm";

export default {
  title: "Example/CarForm",
  component: CarForm,
} as ComponentMeta<typeof CarForm>;

const Template: ComponentStory<typeof CarForm> = () => <CarForm />;

export const CarMakeRequired = Template.bind({});

// CarMakeRequired.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);
//   const makeInput = canvas.getByLabelText("Make", {
//     selector: "input",
//   });
//   await userEvent.type(makeInput, "Honda", {
//     delay: 100,
//   });

//   // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
//   const submitButton = canvas.getByRole("button");

//   await userEvent.click(submitButton);
// };
