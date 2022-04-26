# Welcome to Hack Day 2022!

We're really excited to meet you! 

This exercise is designed to give us a feel for how you would approach a fairly common problem here at Arnold Clark. 

You'll be asked to work with some other participants, and with the help of a couple of mentors, hopefully you'll have a working solution at the end of the day!

_However:_ the process is more important than the outcome. While technical skills are important to us, it's more important that we hire people who communicate well and treat their colleagues with kindness and empathy. 

Your mentors, and everyone working at the hack day, are here to guide you through the day and to help you have the best possible experience. If there's anything that would make you feel more comfortable, please don't hesitate to ask.

## The exercise

You have been asked to write a feature to allow users to view a list of cars, and add a new car to the list. Each car should have the following properties:

```
make: string
model: string
price: number
registration: string
```

The application uses the following technologies:

- On the back-end: Node.js, Express, MongoDB,
- On the front-end: React, hooks, styled-components

There is existing work that you can look at to help you with your approach.

Here is a list of tasks that you might decide to use to help you to get started.

- [ ] Write a MongoDB "playground" file to help you set up and seed the database with cars
- [ ] Think about what endpoints you'll need. Write a set of Express endpoints to serve up your data as an API.
- [ ] Once you've tested your endpoints, write a React component that will display the list, and include it in `./client/src/pages/Home/index.js`
- [ ] Add the form component that has been created for you within `/client/src/components/CarForm/index.js` and write any logic needed to send the new car to the API.

Your completed app might look a little bit like this:

![Arnold Clark Garage](/client/src/static/images/garage.gif "Arnold Clark Garage")

Your mentors will be able to help you to use [Chassis](https://arnoldclark.github.io/chassis), our CSS framework.