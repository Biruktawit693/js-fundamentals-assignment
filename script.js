// ==============================
// Part 1: Variables & Conditionals
// ==============================
let age = prompt("Enter your age:");
let ageMessage = "";

if (age >= 18) {
    ageMessage = "You are an adult.";
} else if (age > 0) {
    ageMessage = "You are a minor.";
} else {
    ageMessage = "Invalid age entered.";
}

document.getElementById("ageOutput").textContent = ageMessage;

// ==============================
// Part 2: Functions
// ==============================
function greetUser(name) {
    return `Hello, ${name}! Welcome to JavaScript learning.`;
}

function calculateTotal(a, b) {
    return a + b;
}

document.getElementById("greetBtn").addEventListener("click", function() {
    let name = prompt("Enter your name:");
    let message = greetUser(name);
    document.getElementById("greetOutput").textContent = message;
});

// ==============================
// Part 3: Loops
// ==============================
let fruits = ["Apple", "Banana", "Orange", "Mango"];
let fruitList = document.getElementById("fruitList");

for (let i = 0; i < fruits.length; i++) {
    let li = document.createElement("li");
    li.textContent = fruits[i];
    fruitList.appendChild(li);
}

fruits.forEach(function(fruit) {
    console.log(`I like ${fruit}`);
});

// ==============================
// Part 4: DOM Manipulation
// ==============================
let toggleBtn = document.getElementById("toggleBtn");
let toggleText = document.getElementById("toggleText");

toggleBtn.addEventListener("click", function() {
    toggleText.classList.toggle("highlight");
});

let updateBtn = document.getElementById("updateBtn");
let inputText = document.getElementById("inputText");
let updatedText = document.getElementById("updatedText");

updateBtn.addEventListener("click", function() {
    updatedText.textContent = inputText.value;
});

let newParagraph = document.createElement("p");
newParagraph.textContent = "This is a dynamically added paragraph.";
document.body.appendChild(newParagraph);
