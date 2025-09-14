# Instructions

## Task 1: Flexible String Manipulation with Functions

- Create a function called **`formatFullName`** that takes two parameters: `firstName` and `lastName`.
- The function should return the full name in the format:  
  **`lastName, firstName`**.
- Format the `firstName` and `lastName` so that the first letter of each is always capitalized.
- Add a condition that checks if either the first or last name is missing. If so, return:  
  **`"Invalid name input."`**

---

## Task 2: Mathematical Operations with Multiple Parameters

- Write a function called **`calculateTotalCost`** that takes three parameters: `price`, `quantity`, and `taxRate`.
- The function should calculate the total cost of items, including tax, using the formula:  
  **`totalCost = (price * quantity) * (1 + taxRate)`**
- Ensure that `price`, `quantity`, and `taxRate` are all valid numbers.
  - If any are invalid, return:  
    **`"Invalid input."`**

---

## Task 3: Functions with Conditional Logic

- Write a function called **`checkEligibility`** that takes two parameters: `age` and `isEmployed`.
- The function should check eligibility based on the following rules:
  - If the person is **over 18 and employed**, they are **eligible**.
  - If the person is **over 18 but unemployed**, they are **conditionally eligible**.
  - If the person is **18 or younger**, they are **not eligible**.
- Return an appropriate string message for each scenario.

---

## Task 4: Refactoring for Reusability

- Refactor the **`calculateTotalCost`** function from Task 2 to include an **optional `discount` parameter**.
  - If the discount is provided, subtract the discount **before applying tax**.
  - If no discount is provided, calculate the total cost as before.

---

## Submission Instructions

1. Complete all the tasks outlined above.
2. Ensure each task works as expected by testing it in your local development environment.
3. Once complete, submit your code by sharing the **link to a GitHub repository** containing the file via Canvas.

---

## Reflection Questions

After completing this activity, take a few minutes to reflect on the following:

### 1. How did you approach creating more flexible functions with parameters?

Parameters make the functions generalized instead of static, so adding parameters makes it possible to use them with different variables.

### 2. What challenges did you face while incorporating conditional logic in your functions?

Mostly the syntax using logic operators like || and &&

### 3. How does refactoring improve the readability and maintainability of your code?

It improves readability by getting rid of unecessary code and making the operations more efficient.
