/**
 * calculates the sum of all id
 * @param {{
* }[]} students - The list of students.

* @returns
*/

export default function getStudentIdsSum(students) {
  return students.reduce((accumulator, currentNumber) => accumulator + currentNumber.id, 0);
}
