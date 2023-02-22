import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CarCard from "../components/CarCard";

export default {
  title: "Example/CarCard",
  component: CarCard,
} as ComponentMeta<typeof CarCard>;

const Template: ComponentStory<typeof CarCard> = (args) => (
  <CarCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  make: "Ford",
  model: "2011",
};
