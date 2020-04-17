"use strict"
const getAllPropValues = function (arr, prop) {
  let propValuesArray = []
  for (const element of arr) {
    propValuesArray.push(element[prop])
  }
  return propValuesArray
};