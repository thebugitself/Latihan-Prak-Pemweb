const WEIGHT_ASSIGNMENT = 0.3;
const WEIGHT_MIDTERM = 0.3;
const WEIGHT_FINAL = 0.4;

function calculateGrade() {
  let assignment = parseFloat(document.getElementById("assignment").value);
  let midterm = parseFloat(document.getElementById("midterm").value);
  let final = parseFloat(document.getElementById("final").value);

  if (
    isNaN(assignment) ||
    isNaN(midterm) ||
    isNaN(final) ||
    assignment < 0 ||
    assignment > 100 ||
    midterm < 0 ||
    midterm > 100 ||
    final < 0 ||
    final > 100
  ) {
    document.getElementById("result").innerText =
      "Masukkan nilai antara 0 dan 100.";
    return;
  }

  let weightedAverage =
    assignment * WEIGHT_ASSIGNMENT +
    midterm * WEIGHT_MIDTERM +
    final * WEIGHT_FINAL;

  let grade;
  if (weightedAverage >= 90) {
    grade = "A";
  } else if (weightedAverage >= 80) {
    grade = "B";
  } else if (weightedAverage >= 70) {
    grade = "C";
  } else if (weightedAverage >= 60) {
    grade = "D";
  } else {
    grade = "E";
  }

  document.getElementById(
    "result"
  ).innerText = `Rata-rata Tertimbang: ${weightedAverage.toFixed(
    2
  )}\nNilai Huruf: ${grade}`;
}
