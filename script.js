// ONLINE LEARNING CODE HUB
// Main JavaScript File

let studentName = "Hirave Vaishnavi Pandurang";
let studentEmail = "";
let selectedCourse = "";

const courses = [
    {
        name: "Java",
        icon: "☕",
        description: "Learn Java programming and object-oriented concepts.",
        lessons: [
            "Introduction to Java",
            "Features of Java",
            "Variables and Data Types",
            "Operators and Conditional Statements",
            "Loops and Arrays",
            "Classes and Objects",
            "Inheritance and Polymorphism"
        ]
    },
    {
        name: "Python",
        icon: "🐍",
        description: "Learn Python programming with simple examples.",
        lessons: [
            "Introduction to Python",
            "Python Variables",
            "Data Types and Operators",
            "If-Else Statements",
            "Loops",
            "Functions",
            "Lists and Tuples"
        ]
    },
    {
        name: "C Programming",
        icon: "💻",
        description: "Understand the fundamentals of C programming.",
        lessons: [
            "Introduction to C",
            "Structure of C Program",
            "Variables and Data Types",
            "Operators",
            "Decision Making",
            "Loops",
            "Arrays and Functions"
        ]
    },
    {
        name: "C++",
        icon: "⚙️",
        description: "Explore object-oriented programming using C++.",
        lessons: [
            "Introduction to C++",
            "Variables and Data Types",
            "Operators",
            "Control Statements",
            "Functions",
            "Classes and Objects",
            "Inheritance"
        ]
    }
];

const quizQuestions = [
    {
        question: "Which of the following is a programming language?",
        options: ["HTML", "Java", "Both HTML and Java", "None"],
        answer: 2
    },
    {
        question: "What is used to store data in programming?",
        options: ["Variable", "Monitor", "Keyboard", "Mouse"],
        answer: 0
    },
    {
        question: "Which symbol is commonly used to end a Java statement?",
        options: [".", ",", ";", ":"],
        answer: 2
    }
];

function getContent() {
    return document.getElementById("content");
}

function showHome() {
    document.getElementById("hero").style.display = "flex";

    getContent().innerHTML = `
        <h2 class="section-title">Welcome to Code Hub</h2>
        <div class="content-box">
            <h2>Learn Programming Online</h2>
            <p>Online Learning Code Hub is a web-based learning
            platform designed to help students learn programming
            languages easily.</p>
            <p>Students can explore courses, study lessons,
            attempt quizzes and earn certificates after successful
            completion.</p>
            <button class="primary-btn" onclick="showCourses()">
                View All Courses
            </button>
        </div>
        <h2 class="section-title">Popular Courses</h2>
        <div id="homeCourses" class="course-container"></div>
    `;

    renderCourses("homeCourses");
}

function showCourses() {
    document.getElementById("hero").style.display = "none";

    getContent().innerHTML = `
        <h2 class="section-title">Our Programming Courses</h2>
        <div id="allCourses" class="course-container"></div>
    `;

    renderCourses("allCourses");
}

function renderCourses(containerId) {
    const container = document.getElementById(containerId);

    container.innerHTML = courses.map(course => `
        <div class="course-card">
            <div class="course-icon">${course.icon}</div>
            <h3>${course.name} Programming</h3>
            <p>${course.description}</p>
            <p><b>${course.lessons.length} Lessons</b></p>
            <button onclick="learnCourse('${course.name}')">
                Start Learning
            </button>
        </div>
    `).join("");
}

function learnCourse(courseName) {
    document.getElementById("hero").style.display = "none";

    const course = courses.find(c => c.name === courseName);

    if (!course) return;

    selectedCourse = courseName;

    getContent().innerHTML = `
        <div class="content-box">
            <h2>${course.icon} ${course.name} Programming Course</h2>
            <p>${course.description}</p>

            <h3>Course Lessons</h3>

            <ol class="lesson-list">
                ${course.lessons.map(lesson => `<li>${lesson}</li>`).join("")}
            </ol>

            <p>Complete the lessons and attempt the quiz
            to receive your course certificate.</p>

            <button class="primary-btn" onclick="showQuiz()">
                Start Course Quiz
            </button>

            <button class="primary-btn" onclick="showCourses()">
                Back to Courses
            </button>
        </div>
    `;
}

function showQuiz() {
    document.getElementById("hero").style.display = "none";

    getContent().innerHTML = `
        <div class="content-box">
            <h2>${selectedCourse} Course Quiz</h2>
            <p>Select one correct answer for each question.</p>

            <form onsubmit="return checkQuiz(event)">
                ${quizQuestions.map((q, i) => `
                    <div class="quiz-question">
                        <h3>${i + 1}. ${q.question}</h3>
                        ${q.options.map((option, j) => `
                            <label>
                                <input type="radio"
                                    name="question${i}"
                                    value="${j}"
                                    required>
                                ${option}
                            </label>
                        `).join("")}
                    </div>
                `).join("")}

                <button class="primary-btn" type="submit">
                    Submit Quiz
                </button>
            </form>

            <div id="quizResult"></div>
        </div>
    `;

}

function checkQuiz(event) {
    event.preventDefault();

    const form = event.target;
    let score = 0;

    quizQuestions.forEach((question, index) => {
        const answer = form.querySelector(
            `input[name="question${index}"]:checked`
        );

        if (answer && Number(answer.value) === question.answer) {
            score++;
        }
    });

    const result = document.getElementById("quizResult");

    if (score >= 2) {
        result.innerHTML = `
            <div class="result">
                <h2>Congratulations! 🎉</h2>
                <p>Your Score: ${score} / ${quizQuestions.length}</p>
                <p>You have successfully passed the quiz.</p>
                <button class="primary-btn"
                    onclick="showCertificate()">
                    Get Your Certificate
                </button>
            </div>
        `;
    } else {
        result.innerHTML = `
            <div class="result">
                <h2>Keep Learning!</h2>
                <p>Your Score: ${score} / ${quizQuestions.length}</p>
                <p>You need at least 2 correct answers to pass.</p>
                <button class="primary-btn"
                    onclick="showQuiz()">
                    Try Again
                </button>
            </div>
        `;
    }

    return false;
}

function showCertificate() {
    document.getElementById("hero").style.display = "none";

    getContent().innerHTML = `
        <div class="content-box">
            <h2>Generate Your Certificate</h2>

            <div class="form-group">
                <label>Enter Your Full Name</label>
                <input type="text" id="certificateName"
                    value="${studentName}" required>
            </div>

            <button class="primary-btn"
                onclick="generateCertificate()">
                Generate Certificate
            </button>
        </div>
    `;
}
function generateCertificate() {
    const nameInput = document.getElementById("certificateName");
    const fullName = nameInput.value.trim();

    if (fullName.length < 3) {
        alert("Please enter your full name.");
        return;
    }

    studentName = fullName;

    const completionDate = new Date().toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "long",
        year: "numeric"
    });

    const certificateID = "CH-" + Date.now().toString().slice(-8);

    getContent().innerHTML = `
        <div class="certificate">
            <div class="certificate-logo">💻 CODE HUB</div>
            <div class="certificate-subtitle">ONLINE LEARNING PLATFORM</div>
            <div class="certificate-line"></div>
            <h1>CERTIFICATE OF COMPLETION</h1>
            <p class="certificate-awarded">This certificate is proudly presented to</p>
            <div class="student-name">${escapeHTML(studentName)}</div>
            <p class="certificate-description">
                For successfully completing the programming course
                and developing technical skills.
            </p>
            <h2 class="certificate-course">
                ${escapeHTML(selectedCourse)} Programming Course
            </h2>
            <div class="gold-seal">🏅<span>EXCELLENCE</span></div>
            <div class="certificate-footer">
                <div>
                    <p>________________________</p>
                    <p><b>Course Instructor</b></p>
                    <p>Code Hub</p>
                </div>
                <div>
                    <p>________________________</p>
                    <p><b>Date of Completion</b></p>
                    <p>${completionDate}</p>
                </div>
            </div>
            <div class="certificate-id">Certificate ID: ${certificateID}</div>
            <h3>Keep Learning. Keep Growing!</h3>
        </div>
        <div style="text-align:center; margin:25px;">
            <button class="primary-btn print-button" onclick="printCertificate()">
                Print / Save as PDF
            </button>
            <button class="primary-btn print-button" onclick="showCourses()">
                Back to Courses
            </button>
        </div>
    `;
}

function escapeHTML(value) {
    return value.replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[char]);
}

function printCertificate() {
    document.body.classList.add("printing");
    window.print();
    document.body.classList.remove("printing");
}
function showRegister() {
    document.getElementById("hero").style.display = "none";

    getContent().innerHTML = `
        <div class="content-box">
            <h2>Student Registration</h2>

            <form onsubmit="return registerStudent(event)">
                <div class="form-group">
                    <label>Full Name</label>
                    <input type="text" id="regName"
                        value="Hirave Vaishnavi Pandurang"
                        required>
                </div>

                <div class="form-group">
                    <label>Email Address</label>
                    <input type="email" id="regEmail" required>
                </div>

                <div class="form-group">
                    <label>Password</label>
                    <input type="password" id="regPassword"
                        minlength="6" required>
                </div>

                <button class="primary-btn" type="submit">
                    Register Now
                </button>
            </form>
        </div>
    `;
}
function registerStudent(event) {
    event.preventDefault();

    studentName = document.getElementById("regName").value.trim();
    studentEmail = document.getElementById("regEmail").value.trim();

    if (studentName.length < 3) {
        alert("Please enter your full name.");
        return false;
    }

    alert("Registration successful! Welcome to Code Hub.");

    showDashboard();
    return false;
}

function showLogin() {
    document.getElementById("hero").style.display = "none";

    getContent().innerHTML = `
        <div class="content-box">
            <h2>Student Login</h2>

            <form onsubmit="return loginStudent(event)">
                <div class="form-group">
                    <label>Email Address</label>
                    <input type="email" id="loginEmail" required>
                </div>

                <div class="form-group">
                    <label>Password</label>
                    <input type="password" id="loginPassword"
                        required>
                </div>

                <button class="primary-btn" type="submit">
                    Login
                </button>
            </form>

            <p>New Student? Register to join Code Hub.</p>
            <button class="primary-btn" onclick="showRegister()">
                Create Account
            </button>
        </div>
    `;
}

function loginStudent(event) {
    event.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    if (password.length < 6) {
        alert("Password must contain at least 6 characters.");
        return false;
    }

    studentEmail = email;

    alert("Login successful! Welcome to Code Hub.");

    showDashboard();
    return false;
}

function showDashboard() {
    document.getElementById("hero").style.display = "none";

    getContent().innerHTML = `
        <h2 class="section-title">Student Dashboard</h2>

        <div class="content-box">
            <h2>Welcome, ${escapeHTML(studentName)}!</h2>
            <p>Email: ${escapeHTML(studentEmail || "Not provided")}</p>
            <p>Welcome to your Online Learning Code Hub dashboard.</p>
            <p>Explore programming courses and improve your skills.</p>

            <button class="primary-btn" onclick="showCourses()">
                Explore Courses
            </button>
        </div>
    `;
}

function showAbout() {
    document.getElementById("hero").style.display = "none";

    getContent().innerHTML = `
        <div class="content-box">
            <h2>About Code Hub</h2>

            <p>Online Learning Code Hub is a web-based
            educational platform developed to help students
            learn programming languages online.</p>

            <p>The platform provides easy learning materials,
            programming courses, quizzes and certificates.</p>

            <h3>Our Mission</h3>
            <p>To make programming education simple,
            accessible and interesting for students.</p>

            <h3>Our Vision</h3>
            <p>To encourage students to develop programming
            knowledge and technical skills.</p>
        </div>
    `;
}

function showContact() {
    document.getElementById("hero").style.display = "none";

    getContent().innerHTML = `
        <div class="content-box">
            <h2>Contact Us</h2>

            <p>Have questions? Contact the Code Hub team.</p>

            <form onsubmit="return sendMessage(event)">
                <div class="form-group">
                    <label>Your Name</label>
                    <input type="text" id="contactName" required>
                </div>

                <div class="form-group">
                    <label>Email Address</label>
                    <input type="email" id="contactEmail" required>
                </div>

                <div class="form-group">
                    <label>Message</label>
                    <textarea id="contactMessage" required></textarea>
                </div>

                <button class="primary-btn" type="submit">
                    Submit Message
                </button>
            </form>

            <p>Email: codehub@example.com</p>
        </div>
    `;
}

function sendMessage(event) {
    event.preventDefault();

    alert("Thank you! Your message has been submitted in this demo.");

    event.target.reset();
    return false;
}

// Display home page when website opens
showHome();