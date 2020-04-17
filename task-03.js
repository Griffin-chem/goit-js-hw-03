"use strict"
const findBestEmployee = function(employees) {
  let maxTask = 0
  let bestEmployee = ''
  const entries = Object.entries(employees)
  for (const entry of entries) {
    if (maxTask<entry[1]) {
      bestEmployee=entry[0]
      maxTask=entry[1]
  }
  }
  return bestEmployee
}