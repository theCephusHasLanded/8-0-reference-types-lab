/**
 * Adds a new store to the very end of the list.
 * @param {Object[]]} stores - An array of store objects.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function addNewStore(stores, store) {
  stores.push(store)
  return stores
}

/**
 * Removes a store object at the given position.
 * @param {Object[]]} stores - An array of store objects.
 * @param {number} index - A number representing the index of the store to be removed from the array.
 * @returns {Object[]} The same `stores` array that was inputted.
 */
function removeStoreAtPosition(stores, index) {
  let newStores = [];
  for (let i = index; i < stores.length; i++) {
    stores[i] = stores[i+1]
    }
    stores.pop()

  return stores
}

/**
 * Creates a duplicate of the `store` object. No references should be shared between the inputted `store` and the result.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object} The duplicated store object. This should not be the same as the store that was inputted.
 */
function duplicateStore(store) {
  let newStores = {
    name: store.name,
    boardGames: [],
    address: {
      street: store.address.street,
      city: store.address.city,
      state: store.address.state,
      zip: store.address.zip,
  }
 }
 for(let i = 0; i < store.boardGames.length; i++){
  newStores.boardGames[i] = store.boardGames[i]
 }
 return newStores
}
module.exports = {
  addNewStore,
  removeStoreAtPosition,
  duplicateStore,
};
