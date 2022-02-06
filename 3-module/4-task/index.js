function showSalary(users, age) {
  let resultFiltered = users.filter(item => item.age <= age).map(item => `${item.name}, ${item.balance}`).join('\n');
  return resultFiltered;
};


let result = showSalary(users, age);

