"use strict"
const getAllPropValues = function (arr, prop) {
  let propValuesArray = []
  for (const element of arr) {
    if (prop in element) {
    propValuesArray.push(element[prop])} 
    else {
      continue
    }
  }
  return propValuesArray
};