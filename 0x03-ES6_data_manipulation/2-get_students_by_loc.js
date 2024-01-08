/**
 * Retrieves students from the a particular location
 * @param {{
*   id: Number,
*   firstName: String,
*   location: String
* }[]} students - The list of students.
* @returns
*/
export default function getStudentsByLocation(students, city) {
  return students.filter((student) => student.location === city);
}
