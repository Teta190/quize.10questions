var questions = [
    "Q1: What is the primary muscle worked during a bicep curl?",
    "Q2: What does 'HIIT' stand for?",
    "Q3: Which exercise primarily targets the quadriceps?",
    "Q4: What is the main benefit of a plank exercise?",
    "Q5: Which of these is a compound exercise?",
    "Q6: What does 'BMI' stand for?",
    "Q7: Which muscle group does the bench press target?",
    "Q8: What nutrient is essential for muscle repair?",
    "Q9: What is the recommended daily water intake for adults?",
    "Q10: Which exercise primarily works the core muscles?"
];
function setQuestions() {
    for (var i = 0; i < questions.length; i++) {
        document.getElementById("q" + i).innerHTML = questions[i];
    }
}
// Call the function to display questions on page load
window.onload = setQuestions;

// Function to check the answers selected by the user
function checkAnswers() {
    var answers = ["biceps", "high intensity interval training", "squat", "core strength", "deadlift", "body mass index", "chest", "protein", "2 liters", "plank"];
    var counter = 0; // Initialize score counter

    for (var i = 0; i < questions.length; i++) {
        var userAnswer = document.getElementById("aq" + i).value.toLowerCase();
        var correctAnswer = answers[i];

        if (userAnswer === correctAnswer) {
            counter++;
            document.getElementById("q" + i).style.backgroundColor = "green";
            document.getElementById("q" + i).innerHTML = "Correct! " + questions[i].substring(4) + " is " + correctAnswer.charAt(0).toUpperCase() + correctAnswer.slice(1);
        } else {
            document.getElementById("q" + i).style.backgroundColor = "red";
            document.getElementById("q" + i).innerHTML = "Incorrect. The correct answer is " + correctAnswer.charAt(0).toUpperCase() + correctAnswer.slice(1);
        }
    }

    // check if user passed
    var score = (counter / questions.length) * 100;
    var result = score >= 60 ? "Passed!" : "Failed. You need at least 60% to pass.";
    document.getElementById("score").innerHTML = "Score: " + counter + "/10 - " + result;
}