// Task 1: Flexible String Manipulation with Functions

function formatFullName(lastName, firstName) {
  if (!lastName || !firstName) {
    return "Invalid input";
  }

  let newFirstName =
    firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();

  let newLastName = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();

  return `Howdy, ${newLastName} ${newFirstName}!`;
}

console.log(
  "***********************************************************************"
);
// console.log(formatFullName("figueroa", "millan")); // 'Howdy Millan Figueroa!'

// Task 2: Mathematical Operations with Multiple Parameters

function calculateTotalCost(price, qty, taxRate) {
  if (!price || !qty || !taxRate) {
    return "Invalid input";
  }

  let totalCost = price * qty * (1 + taxRate);
  return totalCost;
}

// console.log(calculateTotalCost(10, 2, .25)) // 6
// console.log(calculateTotalCost('a')) // 'Invalid input'

// Task 3: Functions with Conditional Logic

function checkEligibility(age, isEmployed) {
  if (age >= 18 && isEmployed) {
    return "Eligible";
  }
  if (age >= 18 && !isEmployed) {
    return "Conditionally Eligible";
  } else {
    return "Not Eligible";
  }
}

console.log(checkEligibility(22, true)); // 'Eligible'
console.log(checkEligibility(16, true)); // 'Not Eligible'
console.log(checkEligibility(45, false)); // 'Conditionally Eligible'
console.log(checkEligibility(12, false)); // 'Not Eligible'
