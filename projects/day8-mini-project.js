let students = [
  { name: "Sneha", course: "MERN", score: 85 },
  { name: "Anu", course: "Frontend", score: 72 },
  { name: "Rahul", course: "Backend", score: 90 }
];

students.forEach(student => {
  let status = student.score >= 75 ? "Passed ✅" : "Needs Improvement ❌";
  console.log(
    student.name + " (" + student.course + ") - " + status
  );
});