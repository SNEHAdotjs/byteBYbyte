let students = [
  {
    name: "Sneha",
    course: "MERN Stack",
    progress: "Beginner"
  },
  {
    name: "Anu",
    course: "Frontend",
    progress: "Intermediate"
  }
];

students.forEach(student => {
  console.log(student.name + " is learning " + student.course);
});