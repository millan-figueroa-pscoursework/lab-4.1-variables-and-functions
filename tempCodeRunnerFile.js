function calculateTotalCost(price, qty, taxRate, discount) {
  if (!price || !qty || !taxRate) {
    return "Invalid input";
  }

  let totalCost = price * qty * (1 + taxRate);
  if (discount) {
    totalCost = totalCost - discount;
  }

  return totalCost;
}

console.log(calculateTotalCost(10, 2, 0.25)); // 25
console.log(calculateTotalCost("a")); // 'Invalid input'
console.log(calculateTotalCost(10, 2, 0.25, 1)); // 24