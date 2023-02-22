import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Navbar } from "../components/Navbar";

export default {
  title: "Example/NavBar",
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Navbar> = () => <Navbar />;

export const Primary = Template.bind({});
