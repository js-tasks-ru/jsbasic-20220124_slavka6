

let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false,
  s: true
}

function sumSalary(salaries) {
  let totalSalary = 0;
  for (const salary of Object.values(salaries)) {
    if (Number.isInteger(salary)) {
      totalSalary += salary;
    } 
  }
  return totalSalary;
}
sumSalary(salaries);