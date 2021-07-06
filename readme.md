# Reference Types Lab

## Getting started

1. Fork and clone this repository.

1. Navigate to the cloned repository's directory on your command line. Then, run the following command:

   ```
   npm install
   ```

   This will install the libraries needed to run the tests.

1. Open up the repository in VSCode. Follow the instructions below to complete the Lab.

## Instructions

You will complete three functions in the `index.js` file which will require you to carefully modify or duplicate reference types. Pay close attention to each test to see what is being asked.

Whenever referenced, each `store` has the following shape.

```js
const store = {
  name: "Gamestoria",
  boardGames: ["Terra Mystica", "Alhambra", "Scythe", "Carcassonne", "Azul"],
  address: {
    street: "42-11 Broadway",
    city: "Astoria",
    state: "NY",
    zip: "11103",
  },
};
```

When referenced, `stores` refers to an array of the above objects.

### Tests

To run the tests, you can run the following command from the command line. You will need to be in the root directory of your repository.

```
npm test
```

This will run the test output once.

#### Test watcher

If you'd like, you can have the tests run constantly. This means that each time you save your file, your tests will re-run. To do so, you can run the following:

```
npm run watch
```

Follow the on-screen prompts to exit out of the constant runner.
