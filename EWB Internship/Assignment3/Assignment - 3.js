const score = 85;
let gradeCategory = "";
let letterGrade = "";

if (score >= 90) {
  gradeCategory = "EXCELLENT";
} else if (score >= 80) {
  gradeCategory = "GOOD";
} else if (score >= 70) {
  gradeCategory = "AVERAGE";
} else {
  gradeCategory = "POOR";
}

switch (gradeCategory) {
  case "EXCELLENT":
    letterGrade = "A";
    break;
  case "GOOD":
    letterGrade = "B";
    break;
  case "AVERAGE":
    letterGrade = "C";
    break;
  default:
    letterGrade = "F";
}

const status = score >= 60 ? "Passed" : "Failed";

console.log(`Score: ${score}`);
console.log(`Grade: ${letterGrade}`);
console.log(`Status: ${status}`);