function isEmpty(obj) {
  for (let object in obj) {
  return false
  }
  return true
}



let schedule = {};

 isEmpty(schedule) ; // true

schedule["8:30"] = "подъём";

 isEmpty(schedule); // false