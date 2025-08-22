// This is a testing js where I logged functions to ensure they worked. Typically, I would use the inspect area, but this file allowed me to test without having to comment out any prompt().

const items = [
  { id: 1, name: "apple", price: 1.75, categoryId: 1, inventory: 100 },
  { id: 2, name: "banana", price: 0.25, categoryId: 1, inventory: 100 },
  { id: 3, name: "orange", price: 1.0, categoryId: 1, inventory: 100 },
  { id: 4, name: "broccoli", price: 3.0, categoryId: 2, inventory: 100 },
  { id: 5, name: "cucumber", price: 1.0, categoryId: 2, inventory: 100 },
  { id: 6, name: "milk", price: 5.75, categoryId: 3, inventory: 100 },
  { id: 7, name: "cheddar cheese", price: 4.0, categoryId: 3, inventory: 100 },
  { id: 8, name: "sourdough loaf", price: 5.5, categoryId: 4, inventory: 100 },
];
console.log(items[0].name);

function logItemNames() {
  //TODO: use the .forEach() method to log out the name of each item
  return items.forEach((item) => {
    console.log(item.name);
  });
}

logItemNames();

function findItemById(id) {
  return items.find((item) => {
    return item.id === id;
  });
}
console.log(findItemById(7));

function capitalizeNames() {
  items.map((item) => {
    let firstLetter = item.name[0].toUpperCase();
    let slicedLetters = item.name.slice(1);
    item.name = firstLetter + slicedLetters;
  });
  return items;
}
console.log("capitalizeNames", capitalizeNames());

function calculateTotalInventory() {
  return items.reduce((acc, currValue) => {
    return (acc += currValue.inventory);
  }, 0);
}
console.log("calculateTotalInventory", calculateTotalInventory());

function calculateAllInventoryPrice() {
  return items.reduce((acc, currValue) => {
    let itemInvValue = currValue.price * currValue.inventory;
    return (acc += itemInvValue);
  }, 0);
}
console.log("calculateAllInventoryPrice", calculateAllInventoryPrice());

function getItemPriceByName(name) {
  //ensures name has first letter capitalized regardless of user input
  let firstLetter = name[0].toUpperCase();
  let slicedLetters = name.slice(1).toLowerCase();
  let capName = firstLetter + slicedLetters;

  let namedItem = items.find((item) => {
    return item.name === capName;
  });
  return namedItem.price;
}

console.log("getItemPriceByName", getItemPriceByName("banana"));

function filterItemsByCategoryId(categoryId) {
  return items.filter((item) => {
    return item.categoryId == categoryId;
  });
}
console.log("filterItemsByCategoryId", filterItemsByCategoryId(2));

let cart = ["1", "2", "3"];

// TODO: Loop through your cart and use the indexes to log the names of all items in your cart
function logCartItems() {
  let filledCart = cart.map((index) => {
    let parsedIndex = parseInt(index);
    return findItemById(parsedIndex).name;
  });
  console.log(filledCart);
}

console.log("logCartItems");
logCartItems();
/**
 * @returns { number } returns the total price of items in your cart
 */
function calculateTotalCartPrice() {
  let itemPrices = cart.map((index) => {
    let parsedIndex = parseInt(index);
    return findItemById(parsedIndex).price;
  });
  let cartPrice = itemPrices.reduce((acc, currValue) => {
    return (acc += currValue);
  }, 0);
  return cartPrice;
}
console.log("calculateTotalCartPrice", calculateTotalCartPrice());
