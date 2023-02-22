import React, { useState } from "react";
import { postCar } from "../../API/fetchCars";
import useGenericForm from "../../Hooks/useGenericForm";
import { useQueryClient, useMutation } from "@tanstack/react-query";
// import usePostCars from "../../Hooks/usePostCars";

export const CarForm = () => {
  // const { handleSubmit, onSubmit, errors, register } = usePostCars();

  const client = useQueryClient();
  const mutation = useMutation(postCar, {
    // 1) Tell the queryClient to fetch ALL ["cars"] data again
    // - we might be fetching thousands of cars, when we're only interested in the new car
    // + Really simple
    // + If the back end can have cars added from different front-ends, everything is up to date
    // onSuccess: (data, variables, context) => {
    //   client.invalidateQueries(["cars"]);
    // },

    // 2) We post the new car, and we use the return value from the api {id: 1, make...}
    //    and we add it directly to the queryClient
    // - We're relying on the back end sending us the response we want
    // - We're coupled tightly to the API endpoint
    // - We might be missing cars added from other sources
    // + Only one request! ⚡️
    // + Small amount of data is coming back
    // onSuccess: (data, variables) => {
    //   client.setQueryData(["cars"], (oldQueryData: Car[]) => {
    //     const newCarQueryData = [...oldQueryData, data];
    //     return newCarQueryData;
    //   });
    // },

    // 3) Optimistic updates. Update the UI with the new value, THEN we send the new car to the API afterwards.
    //    If the call succeeds, we don't need to do anything else
    //    If the call fails, we roll back the change we made to the UI
    // -/+ UX is better when the call succeeds, but WORSE when the call fails
    // - We don't get updates from other sources
    // - Little bit more complex than other approaches
    // - We can only use this approach if we have most of the data before we send to the API
    onMutate: async (newCar) => {
      // Cancel any outgoing queries for ["cars"]
      client.cancelQueries(["cars"]);

      // Take a snapshot of the old query data (in case the query fails)
      const carSnapShotData: Car[] = client.getQueryData(["cars"]);

      // Optimistically set the query data to be oldQueryData + newCar
      client.setQueryData(["cars"], (carSnapShotData: Car[] | undefined) => {
        const oldData = carSnapShotData || [];
        const newCarQueryData: CarDto[] = [...oldData, newCar];
        return newCarQueryData;
      });

      return {
        carSnapShotData,
      };
    },
    // If the query fails, reset the query data to carSnapShotData
    onError: (err, newCar, context: { carSnapShotData: Car[] }) => {
      client.resetQueries(["cars"]);
    },
  });

  const { formState, onSubmit, onChange } = useGenericForm<CarFormFields>(
    {
      make: "",
      model: "",
      reg: "",
      price: "",
    },
    (submittedFormValues) => {
      mutation.mutate({
        ...submittedFormValues,
        price: +submittedFormValues.price,
      });
    }
  );

  console.log(mutation);

  return (
    <div className="ch-pa--3 ch-mt--4 ch-bg--white ch-ba--1 ch-rounded ch-bc--grey-3 ch-shadow--sm">
      <h1>Add new car</h1>
      <form onSubmit={onSubmit}>
        <div className="ch-display--flex ch-flex-flow--row-wrap ch-mb--4">
          <div className="ch-form__group ch-width--5 ch-mr--4">
            <label htmlFor="make" className="ch-form__control-label">
              Make
            </label>
            <input
              id="make"
              type="text"
              className="ch-form__control"
              name="make"
              value={formState.make}
              onChange={onChange}

              // {...register("make", {
              //   required: { value: true, message: "This field is required" },
              //   maxLength: {
              //     value: 20,
              //     message: "You can't enter more than 20 characters",
              //   },
              //   minLength: {
              //     value: 4,
              //     message: "Please enter at least 4 characters",
              //   },
              // })}
            />
          </div>

          <div className="ch-form__group ch-width--5">
            <label htmlFor="model" className="ch-form__control-label">
              Model
            </label>
            <input
              id="model"
              type="text"
              className="ch-form__control"
              name="model"
              value={formState.model}
              onChange={onChange}
              // {...register("model", { required: true, minLength: 3 })}
            />
          </div>

          <div className="ch-form__group ch-width--5 ch-mr--4">
            <label htmlFor="reg" className="ch-form__control-label">
              Registration
            </label>
            <input
              id="reg"
              type="text"
              className="ch-form__control"
              name="reg"
              value={formState.reg}
              onChange={onChange}
              // {...register("reg", { required: true })}
            />
          </div>

          <div className="ch-form__group ch-width--5">
            <label htmlFor="price" className="ch-form__control-label">
              Price
            </label>
            <input
              id="price"
              type="text"
              className="ch-form__control"
              name="price"
              value={formState.price}
              onChange={onChange}
              /* {...register("price", { required: true, valueAsNumber: true })} */
            />
          </div>
        </div>

        <input
          type="submit"
          className="ch-btn ch-btn--success"
          value="Submit Car"
        />
      </form>
    </div>
  );
};
