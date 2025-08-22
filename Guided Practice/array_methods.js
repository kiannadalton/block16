const items = [
  { id: 1, name: "foo", price: 7 },
  { id: 2, name: "bar", price: 6 },
  { id: 3, name: "bazz", price: 9 },
  { id: 3, name: "quq", price: 13 },
];

//step 4
let name = window.prompt("Name of the item: ", "foo");
console.log("name", name);

//step 5
// Need to add 'return' to make it work
let found = items.find((item) => {
  return item.name === name;
});
console.log("found", found);

//step 6

function message(itemName) {
  if (found != undefined) {
    return `${itemName} has been found!`;
  } else {
    return `${itemName} was unable to be located.`;
  }
}
console.log(message(name));

//step 7
// Prompt the user to enter a string we will use to discover if any item has that string in their name. Store the user input in a variable called search.
let search = window.prompt(
  "Enter in a string to see if any items have that in their name: "
);
console.log("search", search);

//step 8

let foundItems = items.filter((item) => {
  return item.name === search;
});

console.log("foundItems", foundItems);

function didFindItems(itemName) {
  if (foundItems.length == 0) {
    return `No items were found with the string: ${itemName}`;
  } else {
    return `${itemName} was found amoung the items.`;
  }
}
console.log("didFindItems", didFindItems(search));

//step 9
let keyForMapping = window.prompt(
  "Enter id, name, or price in order to display the item values: "
);

let mappedValues = items.map((item) => {
  return item[keyForMapping];
});
console.log(mappedValues);

//step 10

let chosenKey = window.prompt("Enter id or price: ");
console.log("chosenKey", chosenKey);

let keyReducer = items.reduce((acc, currValue) => {
  return (acc += currValue[chosenKey]);
}, 0);
console.log("keyReduce", keyReducer);
