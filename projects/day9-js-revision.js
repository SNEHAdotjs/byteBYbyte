// 1. Variables
let language = "JavaScript";
let level = "Beginner";

// 2. Function
function introduce(lang, level) {
  return "Learning " + lang + " at " + level + " level";
}

// 3. Array
let topics = ["Variables", "Functions", "Loops", "Arrays", "Objects"];

// 4. Object
let student = {
  name: "Sneha",
  course: "MERN Stack",
  daysCompleted: 9
};

// 5. Loop + Condition
topics.forEach(topic => {
  if (topic === "Arrays") {
    console.log(topic + " ✔ important");
  } else {
    console.log(topic);
  }
});

// Output
console.log(introduce(language, level));
console.log(student.name + " completed " + student.daysCompleted + " days");