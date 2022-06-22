# Option 1: Mob Programming

This session is intended to help us understand how you would approach a very common problem.

There are two main tasks:

-   Pull down a list of cars from an API endpoint and display them to the user
-   Create a form that sends a POST request to the API, creating a new car. (Ideally the UI will update without refreshing)

This session is run as a [mob programming session](https://en.wikipedia.org/wiki/Mob_programming), and the end result is less important than the process - we're looking for people who communicate well, are empathetic towards their colleagues, and look for opportunities to share knowledge.

We're aiming to make something like this - although final results usually vary!

![Arnold Clark Garage](/src/static/images/garage.gif "Arnold Clark Garage")

### Taking part in the session

**Please don't write any code before the mob session. We value your time and this startpoint is being provided to take away the element of surprise from the session.**

You'll be joined on the call by a couple of front-end engineers from Arnold Clark. They'll take turns - around 20 minutes each - to take control of the machine and write some code.

If you would like to "drive" the machine, we have a couple of options:

-   The best option is to download and set up the [Live Share extension for Visual Studio Code](https://code.visualstudio.com/learn/collaboration/live-share).
-   We can also share screen control using Microsoft Teams, but this isn't ideal as it can be a little bit laggy.

If you would prefer not to drive the machine, that's perfectly fine. It won't have an impact on your application.

### Language

You can choose to use either TypeScript or JavaScript for this task.

TypeScript is set up, so if you would like to use it, run `npm run convert-ts` to change the extension of JavaScript files in the `src` folder to `.tsx`. You can then place any types in `/src/types` and they will be available without needing to be imported.

If you would like to use JavaScript, no changes are needed.

## Getting Started

To run this app:

-   First, run `npm install`
-   Then, start the API by running `npm run start:api`
-   You can then start the app by running `npm start` and visiting [localhost:8080](http://localhost:8080).
-   You can run tests with `npm test`; these are set up with [Jest](https://jestjs.io/) and [Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

## Resources

Please treat this exercise as if it was part of your normal working day. You can use any resources you need to, such as Google, MDN, or Stack Overflow.

You can also use any libraries you want - we would love to find out what your usual workflow looks like!

We've set up some things to get started:

-   A minimal React / Webpack app
-   A `CarForm` component with inputs for make, model, registration, and price
-   An API, which uses [json-server](https://github.com/typicode/json-server). (Check out [`./requests.http`](https://github.com/arnoldclark/front-end-mob-programming/blob/main/requests.http) to get started)
-   [Chassis](https://arnoldclark.github.io/chassis/), our CSS framework. (We'll help you with this, of course!)
