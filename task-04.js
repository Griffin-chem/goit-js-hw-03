"use strict"
const countTotalSalary = function (employees) {
  const salaries = Object.values(employees)
  let overallSalary = 0
  for (const salary of salaries) {
    overallSalary += salary
  }
  return overallSalary
}