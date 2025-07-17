// Exercise #3 Debugging

// Start coding here
const employee = {
  name: "John Doe",
  age: 18,
  address: {
    street: "123 Main Street",
    city: "Cityville",
    states: "Stateville",
    country: "Countryland",
    postalCode: "12345",
  },
};

console.log("employee Name: " + employee.name);
console.log("employee Age: " + employee.age);
console.log(
  "employee Address: " +
    employee.address.street +
    ", " +
    employee.address.city +
    ", " +
    employee.address.states +
    ", " +
    employee.address.country +
    " " +
    employee.address.postalCode
);
