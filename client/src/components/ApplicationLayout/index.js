import React from "react";
import PropTypes from "prop-types";
import { Navbar } from "../Navbar";

export const ApplicationLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="ch-container ch-mt--4">{children}</div>
    </>
  );
};

ApplicationLayout.propTypes = { children: PropTypes.element };
