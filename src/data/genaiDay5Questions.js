export const genaiDay5Questions = [
  // ---------------------------------------------------------
  // PART A: 15 MCQs (1 mark each)
  // ---------------------------------------------------------
  {
    id: 1,
    type: "mcq",
    question: "What is FastAPI?",
    options: [
      { id: "a", text: "A Python framework for building APIs" },
      { id: "b", text: "A database management system" },
      { id: "c", text: "An image-editing application" },
      { id: "d", text: "A programming language" }
    ],
    correctAnswer: "a",
    explanation: "FastAPI is a modern, fast, web framework for building APIs with Python based on standard Python type hints."
  },
  {
    id: 2,
    type: "mcq",
    question: "Which Python decorator is commonly used to create a GET endpoint in FastAPI?",
    options: [
      { id: "a", text: "@app.get()" },
      { id: "b", text: "@app.print()" },
      { id: "c", text: "@app.database()" },
      { id: "d", text: "@app.compile()" }
    ],
    correctAnswer: "a",
    explanation: "In FastAPI, @app.get('/path') is used to define a GET endpoint."
  },
  {
    id: 3,
    type: "mcq",
    question: "What is the main purpose of an API?",
    options: [
      { id: "a", text: "To allow different software systems to communicate" },
      { id: "b", text: "To design images" },
      { id: "c", text: "To replace every programming language" },
      { id: "d", text: "To format documents only" }
    ],
    correctAnswer: "a",
    explanation: "APIs (Application Programming Interfaces) define the rules for software components to interact and exchange data."
  },
  {
    id: 4,
    type: "mcq",
    question: "Which HTTP method is commonly used to retrieve data?",
    options: [
      { id: "a", text: "GET" },
      { id: "b", text: "DELETE" },
      { id: "c", text: "PATCH" },
      { id: "d", text: "TRACE" }
    ],
    correctAnswer: "a",
    explanation: "The GET method requests a representation of the specified resource, returning data without modifying it."
  },
  {
    id: 5,
    type: "mcq",
    question: "What is JSON commonly used for in API communication?",
    options: [
      { id: "a", text: "Representing and exchanging structured data" },
      { id: "b", text: "Compiling Python code" },
      { id: "c", text: "Creating Docker containers" },
      { id: "d", text: "Managing Git branches" }
    ],
    correctAnswer: "a",
    explanation: "JSON (JavaScript Object Notation) is a lightweight, language-independent data-interchange format heavily used by APIs."
  },
  {
    id: 6,
    type: "mcq",
    question: "What is Git?",
    options: [
      { id: "a", text: "A distributed version-control system" },
      { id: "b", text: "A web browser" },
      { id: "c", text: "A Python web framework" },
      { id: "d", text: "A container image" }
    ],
    correctAnswer: "a",
    explanation: "Git tracks changes in source code during software development, allowing multiple developers to collaborate."
  },
  {
    id: 7,
    type: "mcq",
    question: "Which command initializes a new Git repository?",
    options: [
      { id: "a", text: "git init" },
      { id: "b", text: "git start-server" },
      { id: "c", text: "git create-api" },
      { id: "d", text: "git install-docker" }
    ],
    correctAnswer: "a",
    explanation: "Running 'git init' inside a directory converts it into a Git repository, creating a hidden .git folder."
  },
  {
    id: 8,
    type: "mcq",
    question: "What does `git commit` do?",
    options: [
      { id: "a", text: "Records staged changes in the local repository" },
      { id: "b", text: "Automatically deploys an application" },
      { id: "c", text: "Deletes a GitHub account" },
      { id: "d", text: "Creates a Docker image" }
    ],
    correctAnswer: "a",
    explanation: "A commit creates a snapshot of your staged files at a point in time in the local repository."
  },
  {
    id: 9,
    type: "mcq",
    question: "What is GitHub primarily used for?",
    options: [
      { id: "a", text: "Hosting Git repositories and supporting collaboration" },
      { id: "b", text: "Replacing Python" },
      { id: "c", text: "Running only SQL queries" },
      { id: "d", text: "Designing hardware circuits" }
    ],
    correctAnswer: "a",
    explanation: "GitHub is a cloud-based hosting service that lets you manage Git repositories and collaborate with others online."
  },
  {
    id: 10,
    type: "mcq",
    question: "What does `git push` normally do?",
    options: [
      { id: "a", text: "Sends local commits to a configured remote repository" },
      { id: "b", text: "Deletes all local files" },
      { id: "c", text: "Creates a FastAPI endpoint" },
      { id: "d", text: "Installs Docker automatically" }
    ],
    correctAnswer: "a",
    explanation: "git push uploads local repository content to a remote repository, making your local changes available there."
  },
  {
    id: 11,
    type: "mcq",
    question: "What is a Git branch?",
    options: [
      { id: "a", text: "An independent line of development" },
      { id: "b", text: "A Python data type" },
      { id: "c", text: "A Docker network cable" },
      { id: "d", text: "A database password" }
    ],
    correctAnswer: "a",
    explanation: "Branches allow you to diverge from the main line of development and continue to do work without messing with that main line."
  },
  {
    id: 12,
    type: "mcq",
    question: "What is Docker?",
    options: [
      { id: "a", text: "A platform for building and running containerized applications" },
      { id: "b", text: "A version-control command" },
      { id: "c", text: "A Python testing framework" },
      { id: "d", text: "A spreadsheet application" }
    ],
    correctAnswer: "a",
    explanation: "Docker enables developers to package applications into containers—standardized executable components combining application source code with OS libraries."
  },
  {
    id: 13,
    type: "mcq",
    question: "What is a Docker image?",
    options: [
      { id: "a", text: "A packaged template used to create containers" },
      { id: "b", text: "A running Git command" },
      { id: "c", text: "A Python variable" },
      { id: "d", text: "A website screenshot only" }
    ],
    correctAnswer: "a",
    explanation: "An image is a read-only template with instructions for creating a Docker container, often based on another image with additional customizations."
  },
  {
    id: 14,
    type: "mcq",
    question: "What is a Docker container?",
    options: [
      { id: "a", text: "An isolated running instance created from an image" },
      { id: "b", text: "A GitHub branch" },
      { id: "c", text: "An API request method" },
      { id: "d", text: "A programming-language keyword" }
    ],
    correctAnswer: "a",
    explanation: "A container is a runnable instance of an image. You can start, stop, move, or delete a container using the Docker API or CLI."
  },
  {
    id: 15,
    type: "mcq",
    question: "What is the purpose of a Dockerfile?",
    options: [
      { id: "a", text: "To define instructions for building a Docker image" },
      { id: "b", text: "To store GitHub passwords" },
      { id: "c", text: "To create HTML forms only" },
      { id: "d", text: "To replace an API endpoint" }
    ],
    correctAnswer: "a",
    explanation: "A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image."
  },

  // ---------------------------------------------------------
  // PART B: 2 Coding Challenges (Python Simulation)
  // ---------------------------------------------------------
  {
    id: 16,
    type: "coding",
    question: "Coding Challenge 1: Student Management REST API",
    description: `Create a simple REST API using FastAPI to manage student records.

Requirements:
- Create a FastAPI application.
- Implement GET / to return a welcome message.
- Implement POST /students to accept student details such as name, email, and branch.
- Implement GET /students to retrieve all students.
- Implement GET /students/{student_id} to retrieve a specific student.
- Implement DELETE /students/{student_id} to delete a student.
- Use Pydantic models for request validation.
- Return appropriate HTTP status codes and useful error messages.
- Handle invalid input and missing student IDs.

Constraints:
- Use an in-memory data store for this beginner exercise (records are lost on restart).
- Do not require paid APIs or external services.`,
    language: "python",
    initialCode: `# fastapi_app.py
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Dict

app = FastAPI(title="Student Management API")

# In-memory database (dictionary)
# Example format: { 1: {"name": "Alice", "email": "alice@email.com", "branch": "CSE"} }
students_db = {}
student_id_counter = 1

# Define your Pydantic model here
class StudentCreate(BaseModel):
    name: str
    email: str
    branch: str

# Define the root endpoint
@app.get("/")
def read_root():
    pass

# Add POST, GET all, GET specific, and DELETE endpoints here
`,
    testCases: [
      {
        input: "Run FastAPI app structure",
        expectedOutput: "Endpoints for GET /, POST /students, GET /students, GET /students/{id}, and DELETE /students/{id} are defined."
      }
    ]
  },
  {
    id: 17,
    type: "coding",
    question: "Coding Challenge 2: Git, GitHub, and Docker Project Setup",
    description: `Prepare a small FastAPI project that is version-controlled with Git and can be containerized using Docker.

Requirements:
1. Write a basic 'main.py' file.
2. Provide a suitable '.gitignore' that excludes virtual environments, Python cache files, and local secrets.
3. Write the Git commands to initialize a repository, stage files, commit changes, add a GitHub remote, and push the code.
4. Create a Dockerfile using a suitable Python base image.
5. Provide commands to build the image and run the container with port mapping.

(Note: You are writing a single script here simulating the contents of these files and commands. Use comments to separate files.)`,
    language: "python",
    initialCode: `"""
# FILE: main.py
# -----------------
from fastapi import FastAPI
app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello from Dockerized FastAPI!"}


# FILE: .gitignore
# -----------------
# Add gitignore patterns here...


# FILE: Dockerfile
# -----------------
# Write your Dockerfile instructions here...


# GIT COMMANDS
# -----------------
# 1. Initialize repo: 
# 2. Add files: 
# 3. Commit: 
# 4. Add remote: git remote add origin <YOUR_GITHUB_REPOSITORY_URL>
# 5. Push: 

# DOCKER COMMANDS
# -----------------
# 1. Build image: 
# 2. Run container: 
"""
`,
    testCases: [
      {
        input: "Project setup files and commands",
        expectedOutput: "Valid Dockerfile, .gitignore, and standard Git/Docker terminal commands provided."
      }
    ]
  }
];
