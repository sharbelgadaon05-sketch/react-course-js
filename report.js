export default function withStatus(students) {
  return students.map(student => {
    return {
      ...student,
      status: student.grade >= 56 ? "pass" : "fail"
    };
  });
}