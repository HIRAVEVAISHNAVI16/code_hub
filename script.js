function showHome() {
    document.getElementById("home").style.display = "block";
    showCourses();
}

function showCourses() {
    document.getElementById("home").style.display = "block";

    document.getElementById("content").innerHTML = `
        <h2>Our Courses</h2>
        <div class="courses">
            <div class="course">
                <h3>Java</h3>
                <p>Learn Java programming.</p>
                <button onclick="learnCourse('Java')">Start Learning</button>
            </div>
            <div class="course">
                <h3>Python</h3>
                <p>Learn Python programming.</p>
                <button onclick="learnCourse('Python')">Start Learning</button>
            </div>
            <div class="course">
                <h3>C Programming</h3>
                <p>Learn C language.</p>
                <button onclick="learnCourse('C')">Start Learning</button>
            </div>
            <div class="course">
                <h3>C++</h3>
                <p>Learn C++ programming.</p>
                <button onclick="learnCourse('C++')">Start Learning</button>
            </div>
        </div>
    `;
}

function showRegister() {
    document.getElementById("home").style.display = "none";

    document.getElementById("content").innerHTML = `
        <div class="lesson">
            <h2>Create Account</h2>
            <input id="regName" placeholder="Enter your name">
            <br>
            <input id="regUser" placeholder="Choose username">
            <br>
            <input id="regPass" type="password" placeholder="Choose password">
            <br>
            <button onclick="registerUser()">Register</button>
            <p id="regMessage"></p>
        </div>
    `;
}

function registerUser() {
    let name = document.getElementById("regName").value.trim();
    let username = document.getElementById("regUser").value.trim();
    let password = document.getElementById("regPass").value;

    if (!name || !username || !password) {
        document.getElementById("regMessage").textContent =
            "Please fill all fields.";
        return;
    }

    if (password.length < 4) {
        document.getElementById("regMessage").textContent =
            "Password must have at least 4 characters.";
        return;
    }

    document.getElementById("regMessage").textContent =
        "Registration successful! You can now login.";

    document.getElementById("loginHint")?.remove();
}

function showLogin() {
    document.getElementById("home").style.display = "none";

    document.getElementById("content").innerHTML = `
        <div class="lesson">
            <h2>Login</h2>
            <input id="loginUser" placeholder="Enter username">
            <br>
            <input id="loginPass" type="password" placeholder="Enter password">
            <br>
            <button onclick="loginUser()">Login</button>
            <p id="loginMessage"></p>
        </div>
    `;
}

function loginUser() {
    let username = document.getElementById("loginUser").value.trim();
    let password = document.getElementById("loginPass").value;

    if (!username || !password) {
        document.getElementById("loginMessage").textContent =
            "Please enter username and password.";
        return;
    }

    document.getElementById("loginMessage").textContent =
        "Demo login only. A database is needed for real account verification.";
}

function learnCourse(course) {
    document.getElementById("home").style.display = "none";

    let examples = {
        "Java": `class Main {
    public static void main(String[] args) {
        System.out.println("Hello Java");
    }
}`,
        "Python": `print("Hello Python")`,
        "C": `#include <stdio.h>

int main() {
    printf("Hello C");
    return 0;
}`,
        "C++": `#include <iostream>
using namespace std;

int main() {
    cout << "Hello C++";
    return 0;
}`
    };

    document.getElementById("content").innerHTML = `
        <h2>${course} Course</h2>
        <div class="lesson">
            <h3>Lesson 1: Introduction to ${course}</h3>
            <p>Learn the basics of ${course} and practice this first example.</p>
            <h3>Example Program</h3>
            <pre>${examples[course]}</pre>
            <button onclick="showCourses()">Back to Courses</button>
        </div>
    `;
}
