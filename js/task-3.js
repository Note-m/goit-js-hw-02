function checkForSpam(message) {
  let test_one = 'sale';
  let test_two = 'spam';
  if (
    message.toLowerCase().indexOf(test_one.toLowerCase()) === -1 &&
    message.toLowerCase().indexOf(test_two.toLowerCase()) === -1
  ) {
    return false;
  } else {
    return true;
  }
}
console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('Amazing SalE, only tonight!')); // true
console.log(checkForSpam('Trust me, this is not a spam message')); // true
console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
