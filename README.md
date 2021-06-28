# Hello!

Thanks for taking part in our mob programming session! This session should last between 60 - 90 minutes.

## The aims of this session

This session is intended to help us understand how you would approach a very common problem.

There are two main tasks:

- Pull down a list of cars from an API endpoint and display them to the user
- Create a form that sends a POST request to the API, creating a new car. (Ideally the UI will update without refreshing)

This session is run as a [mob programming session](https://en.wikipedia.org/wiki/Mob_programming), and the end result is less important than the process - we're looking for people who communicate well, are empathetic towards their colleagues, and look for opportunities to share knowledge .

## Getting Started

To run this app:

- First, run `npm install`
- Then, start the API buy running `npm run start:api`
- You can then start the app by running `npm start` and visiting [localhost:1234](http://localhost:1234).

## Resources

Please treat this exercise as if it was part of your normal working day. You can use any resources you need to, such as Google, MDN, or Stack Overflow.

You can also use any libraries you want - we would love to find out what your usual workflow looks like!

We've set up some things to get started:

- A minimal React / Parcel app
- A `CarForm` component with inputs for make, model, registration, and price
- An API, which uses [json-server](https://github.com/typicode/json-server). (Check out ./requests.http to get started)
- [Chassis](https://arnoldclark.github.io/chassis/), our CSS framework. (We'll help you with this, of course!)
