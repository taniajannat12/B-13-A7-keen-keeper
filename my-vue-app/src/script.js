// Navigation Logic
function showTask(taskId) {
    document.querySelectorAll('.task-card').forEach(card => card.classList.remove('active'));
    document.getElementById(taskId).classList.add('active');
}

// Student Profile Logic
function fun1() {
    alert("Hello, Student Profile Section!");
    document.getElementById("t-name").style.color = "#10b981";
}

// Theme Toggle Logic
function themeToggle() {
    let card = document.getElementById("theme-body");
    if (card.classList.contains("bg-white")) {
        card.classList.replace("bg-white", "bg-gray-800");
        card.style.color = "white";
    } else {
        card.classList.replace("bg-gray-800", "bg-white");
        card.style.color = "black";
    }
}

// Welcome Message Logic
function sub6() {
    let name = document.getElementById("nn").value;
    if (!name) return alert("Please enter a name");
    document.getElementById("out").innerHTML = "Welcome, " + name + "! 👋";
}

// Counter Logic
let count = 0;
function dis() {
    let y = document.getElementById("cc");
    y.innerText = count;
    y.className = count < 0 ? "text-7xl font-black mb-8 text-red-500" : "text-7xl font-black mb-8 text-green-500";
}
function inc() { count++; dis(); }
function dec() { count--; dis(); }

// Background Color Logic
function changeColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
}

// Math Calculation Logic
function calculateMath() {
    let num = document.getElementById("n").value;
    if (!num) return alert("Enter a number");
    document.getElementById("result-box").classList.remove("hidden");
    document.getElementById("sq-out").innerText = num * num;
    document.getElementById("cb-out").innerText = num * num * num;
}

// Filtering Logic
function filterShow(type) {
    let items = document.getElementsByClassName("item");
    for (let i = 0; i < items.length; i++) {
        items[i].style.display = (type === "all" || items[i].classList.contains(type)) ? "block" : "none";
    }
}




        function validateEmail() {
    let input = document.getElementById("email");
   
    if (input.value.includes("@") && input.value.includes(".com")) {
        input.style.borderColor = "#10b981"; 
        alert("Valid Email ✅");
    } else {
        input.style.borderColor = "#ef4444"; 
        alert("Invalid Email ❌");
    }
}

function newQuote() {
   
    let quotes = [
        "Keep Coding, Keep Improving! 💻",
        "Success is the sum of small efforts. ✨",
        "Stay humble, work hard. 🙌",
        "Your only limit is your mind. 🚀"
    ];
    let randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerHTML = `"${quotes[randomIndex]}"`;
}
// Student Table Insertion Logic
function addStudent() {
    let name = document.getElementById("stu-name").value;
    let id = document.getElementById("stu-id").value;
    let dept = document.getElementById("stu-dept").value;
    if (!name || !id || !dept) return alert("Fill all fields!");
    
    let tableBody = document.querySelector("#stu-tab tbody");
    let row = tableBody.insertRow();
    row.innerHTML = `
        <td class="p-4">${name}</td>
        <td class="p-4">${id}</td>
        <td class="p-4">${dept}</td>
    `;
    
    // Clear Inputs
    document.getElementById("stu-name").value = "";
    document.getElementById("stu-id").value = "";
    document.getElementById("stu-dept").value = "";
}