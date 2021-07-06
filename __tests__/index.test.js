const { addNewStore, removeStoreAtPosition, duplicateStore } = require("../");

describe("addNewStore()", () => {
  test("it should modify the `stores` array by adding a new store", () => {
    const stores = [];
    const newStore = {
      street: "42-11 Broadway",
      city: "Astoria",
      state: "NY",
      zip: "11103",
    };

    addNewStore(stores, newStore);
    expect(stores).toEqual([
      {
        street: "42-11 Broadway",
        city: "Astoria",
        state: "NY",
        zip: "11103",
      },
    ]);
  });

  test("it should return the `stores` array", () => {
    const stores = [];
    const newStore = {
      street: "42-11 Broadway",
      city: "Astoria",
      state: "NY",
      zip: "11103",
    };
    const actual = addNewStore(stores, newStore);
    expect(actual).toEqual([
      {
        street: "42-11 Broadway",
        city: "Astoria",
        state: "NY",
        zip: "11103",
      },
    ]);
    expect(actual).toStrictEqual(stores);
  });
});

describe("removeStoreAtPosition()", () => {
  let stores;
  beforeEach(() => {
    stores = [
      {
        name: "Gamestoria",
        boardGames: [
          "Terra Mystica",
          "Alhambra",
          "Scythe",
          "Carcassonne",
          "Azul",
        ],
        address: {
          street: "42-11 Broadway",
          city: "Astoria",
          state: "NY",
          zip: "11103",
        },
      },
      {
        name: "Blue Highway",
        boardGames: ["Azul", "Splendor", "7 Wonders", "Concept"],
        address: {
          street: "2203 Queen Anne Ave N",
          city: "Seattle",
          state: "WA",
          zip: "98109",
        },
      },
      {
        name: "Atomic Goblin Games",
        boardGames: ["Gloom", "Settlers of Catan", "Munchkin"],
        address: {
          street: "1801 Hover St",
          city: "Longmont",
          state: "CO",
          zip: "80501",
        },
      },
    ];
  });

  test("it should remove the store at the given position in the array", () => {
    removeStoreAtPosition(stores, 1);
    const expected = [
      {
        name: "Gamestoria",
        boardGames: [
          "Terra Mystica",
          "Alhambra",
          "Scythe",
          "Carcassonne",
          "Azul",
        ],
        address: {
          street: "42-11 Broadway",
          city: "Astoria",
          state: "NY",
          zip: "11103",
        },
      },
      {
        name: "Atomic Goblin Games",
        boardGames: ["Gloom", "Settlers of Catan", "Munchkin"],
        address: {
          street: "1801 Hover St",
          city: "Longmont",
          state: "CO",
          zip: "80501",
        },
      },
    ];

    expect(stores).toEqual(expected);
  });

  test("it should return the original array", () => {
    const actual = removeStoreAtPosition(stores, 1);
    const expected = [
      {
        name: "Gamestoria",
        boardGames: [
          "Terra Mystica",
          "Alhambra",
          "Scythe",
          "Carcassonne",
          "Azul",
        ],
        address: {
          street: "42-11 Broadway",
          city: "Astoria",
          state: "NY",
          zip: "11103",
        },
      },
      {
        name: "Atomic Goblin Games",
        boardGames: ["Gloom", "Settlers of Catan", "Munchkin"],
        address: {
          street: "1801 Hover St",
          city: "Longmont",
          state: "CO",
          zip: "80501",
        },
      },
    ];
    expect(actual).toEqual(expected);
    expect(actual).toStrictEqual(stores);
  });

  test("it should remove a store from the front of the array", () => {
    const actual = removeStoreAtPosition(stores, 0);
    const expected = [
      {
        name: "Blue Highway",
        boardGames: ["Azul", "Splendor", "7 Wonders", "Concept"],
        address: {
          street: "2203 Queen Anne Ave N",
          city: "Seattle",
          state: "WA",
          zip: "98109",
        },
      },
      {
        name: "Atomic Goblin Games",
        boardGames: ["Gloom", "Settlers of Catan", "Munchkin"],
        address: {
          street: "1801 Hover St",
          city: "Longmont",
          state: "CO",
          zip: "80501",
        },
      },
    ];
    expect(actual).toEqual(expected);
    expect(actual).toStrictEqual(stores);
  });

  test("it should remove a store from the end of the array", () => {
    const actual = removeStoreAtPosition(stores, 2);
    const expected = [
      {
        name: "Gamestoria",
        boardGames: [
          "Terra Mystica",
          "Alhambra",
          "Scythe",
          "Carcassonne",
          "Azul",
        ],
        address: {
          street: "42-11 Broadway",
          city: "Astoria",
          state: "NY",
          zip: "11103",
        },
      },
      {
        name: "Blue Highway",
        boardGames: ["Azul", "Splendor", "7 Wonders", "Concept"],
        address: {
          street: "2203 Queen Anne Ave N",
          city: "Seattle",
          state: "WA",
          zip: "98109",
        },
      },
    ];
    expect(actual).toEqual(expected);
    expect(actual).toStrictEqual(stores);
  });
});

describe("duplicateStore()", () => {
  test("it should return a copy of the given `store` object", () => {
    const store = {
      name: "Gamestoria",
      boardGames: [
        "Terra Mystica",
        "Alhambra",
        "Scythe",
        "Carcassonne",
        "Azul",
      ],
      address: {
        street: "42-11 Broadway",
        city: "Astoria",
        state: "NY",
        zip: "11103",
      },
    };
    const actual = duplicateStore(store);
    const expected = {
      name: "Gamestoria",
      boardGames: [
        "Terra Mystica",
        "Alhambra",
        "Scythe",
        "Carcassonne",
        "Azul",
      ],
      address: {
        street: "42-11 Broadway",
        city: "Astoria",
        state: "NY",
        zip: "11103",
      },
    };

    expect(actual).toEqual(expected);
  });

  test("it should return a new object, not the same one", () => {
    const store = {
      name: "Gamestoria",
      boardGames: [
        "Terra Mystica",
        "Alhambra",
        "Scythe",
        "Carcassonne",
        "Azul",
      ],
      address: {
        street: "42-11 Broadway",
        city: "Astoria",
        state: "NY",
        zip: "11103",
      },
    };
    const actual = duplicateStore(store);
    expect(typeof actual).toEqual("object");
    expect(actual === store).toEqual(false);
  });

  test("it should use a new array for the `boardGames` key", () => {
    const store = {
      name: "Gamestoria",
      boardGames: [
        "Terra Mystica",
        "Alhambra",
        "Scythe",
        "Carcassonne",
        "Azul",
      ],
      address: {
        street: "42-11 Broadway",
        city: "Astoria",
        state: "NY",
        zip: "11103",
      },
    };
    const actual = duplicateStore(store);
    expect(actual.boardGames === store.boardGames).toEqual(false);

    const games = [
      "Terra Mystica",
      "Alhambra",
      "Scythe",
      "Carcassonne",
      "Azul",
    ];
    expect(actual.boardGames).toEqual(games);
  });

  test("it should work for different sized arrays", () => {
    const store = {
      name: "Blue Highway",
      boardGames: ["Azul", "Splendor", "7 Wonders", "Concept"],
      address: {
        street: "2203 Queen Anne Ave N",
        city: "Seattle",
        state: "WA",
        zip: "98109",
      },
    };
    const actual = duplicateStore(store);
    const expected = ["Azul", "Splendor", "7 Wonders", "Concept"];
    expect(actual.boardGames).toEqual(expected);
  });

  test("it should use a new object for the `address` key", () => {
    const store = {
      name: "Gamestoria",
      boardGames: [
        "Terra Mystica",
        "Alhambra",
        "Scythe",
        "Carcassonne",
        "Azul",
      ],
      address: {
        street: "42-11 Broadway",
        city: "Astoria",
        state: "NY",
        zip: "11103",
      },
    };
    const actual = duplicateStore(store);
    expect(actual.address === store.address).toEqual(false);

    const address = {
      street: "42-11 Broadway",
      city: "Astoria",
      state: "NY",
      zip: "11103",
    };
    expect(actual.address).toEqual(address);
  });
});
