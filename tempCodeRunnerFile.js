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