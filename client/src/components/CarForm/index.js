import React, { useState } from "react";

export const CarForm = () => {
  const intialFormData = { make: "", model: "", reg: "", price: "" };
  const [formData, setFormData] = useState(intialFormData);
  const { make, model, reg, price } = formData;

  const handleChange = event => {
    const updatedFormData = { ...formData };
    updatedFormData[event.target.name] = event.target.value;
    setFormData(updatedFormData);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <div className="ch-pa--3 ch-mt--4 ch-bg--white ch-ba--1 ch-rounded ch-bc--grey-3 ch-shadow--sm">
      <h1>Add new car</h1>
      <form onSubmit={handleSubmit}>
        <div className="ch-display--flex ch-flex-flow--row-wrap ch-mb--4">
          <div className="ch-form__group ch-width--5 ch-mr--4">
            <label htmlFor="make" className="ch-form__control-label">
              Make
            </label>
            <input
              id="make"
              type="text"
              name="make"
              className="ch-form__control"
              value={make}
              onChange={handleChange}
            />
          </div>

          <div className="ch-form__group ch-width--5">
            <label htmlFor="model" className="ch-form__control-label">
              Model
            </label>
            <input
              id="model"
              type="text"
              name="model"
              className="ch-form__control"
              value={model}
              onChange={handleChange}
            />
          </div>

          <div className="ch-form__group ch-width--5 ch-mr--4">
            <label htmlFor="reg" className="ch-form__control-label">
              Registration
            </label>
            <input
              id="reg"
              type="text"
              name="reg"
              className="ch-form__control"
              value={reg}
              onChange={handleChange}
            />
          </div>

          <div className="ch-form__group ch-width--5">
            <label htmlFor="price" className="ch-form__control-label">
              Price
            </label>
            <input
              id="price"
              type="text"
              name="price"
              className="ch-form__control"
              value={price}
              onChange={handleChange}
            />
          </div>
        </div>

        <button type="submit" className="ch-btn ch-btn--success">
          Submit car
        </button>
      </form>
    </div>
  );
};
