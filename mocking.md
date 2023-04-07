# Mocking in Jest

You are an engineer on the Arnold Clark Garage app. Your colleague has written the app and started some tests, but they are failing!

Let's use mocking to make these tests pass.

## Part 1: 

Let's start with the `<CarList />` component, which pulls in a list of cars from the API.

- /src/components/CarList/index.tsx
- /src/components/CarList/index.test.tsx

Our test is failing because the `getCars` function relies on `fetch`. We have a few options:

1a) Use `jest.mock` and `jest.fn` in our test file to mock out `getCars`
1b) Use a manual mock (the `__mocks__` folder) to mock out the module
1c) Use `jest.fn` to mock out `fetch`.
1d) Give up and mock out our network request with MSW instead 😂

## Part 2

Let's turn our attention to the `<CarForm />` component now. 

- /src/components/CarForm/index.tsx
- /src/components/CarForm/index.test.tsx

This component sends a new car object to the API, through the `postNewCar` function. We're still struggling with the call to `fetch`, which needs to be mocked out. But this time, we also want to check that `postNewCar` has been called with an object matching the user's input.

Again, we have a few options:

2a) Use `jest.mock` and `jest.fn` in our test file to mock out `postNewCar`
2b) Use a manual mock (the `__mocks__` folder) to mock out the module

This time, we won't be able to mock out fetch, as we want to spy on the function call!