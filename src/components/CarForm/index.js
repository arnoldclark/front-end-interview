import React from "react";

export const CarForm = () => {
  return (
    <div className="ch-pa--3 ch-mt--4 ch-bg--white ch-ba--1 ch-rounded ch-bc--grey-3 ch-shadow--sm">
      <h1>Add new car</h1>
      <form>
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
