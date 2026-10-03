export const javaDay1Questions = [
  {
    id: "J_D1_M1",
    type: "mcq",
    question: "Who created Java?",
    options: [
      "Dennis Ritchie",
      "James Gosling",
      "Bjarne Stroustrup",
      "Guido van Rossum"
    ],
    correctAnswer: "James Gosling",
    marks: 1
  },
  {
    id: "J_D1_M2",
    type: "mcq",
    question: "What was the original name of Java?",
    options: [
      "Green",
      "Java",
      "Oak",
      "Coffee"
    ],
    correctAnswer: "Oak",
    marks: 1
  },
  {
    id: "J_D1_M3",
    type: "mcq",
    question: "What does WORA stand for?",
    options: [
      "Write Once, Read Anywhere",
      "Write Once, Run Anywhere",
      "Write One, Run Anywhere",
      "Write Once, Run Always"
    ],
    correctAnswer: "Write Once, Run Anywhere",
    marks: 1
  },
  {
    id: "J_D1_M4",
    type: "mcq",
    question: "Which of the following is a valid Java identifier?",
    options: [
      "123name",
      "total-number",
      "total_number",
      "total#number"
    ],
    correctAnswer: "total_number",
    marks: 1
  },
  {
    id: "J_D1_M5",
    type: "mcq",
    question: "Which of the following is NOT allowed as the first character of a Java identifier?",
    options: [
      "Letter",
      "_",
      "$",
      "Digit"
    ],
    correctAnswer: "Digit",
    marks: 1
  },
  {
    id: "J_D1_M6",
    type: "mcq",
    question: "Java identifiers are:",
    options: [
      "Case-insensitive",
      "Case-sensitive",
      "Only uppercase",
      "Only lowercase"
    ],
    correctAnswer: "Case-sensitive",
    marks: 1
  },
  {
    id: "J_D1_M7",
    type: "mcq",
    question: "Which of the following cannot be used as a Java identifier?",
    options: [
      "studentName",
      "total123",
      "int",
      "Student"
    ],
    correctAnswer: "int",
    marks: 1
  },
  {
    id: "J_D1_M8",
    type: "mcq",
    question: "Which of the following is a Java reserved literal?",
    options: [
      "Integer",
      "String",
      "true",
      "True"
    ],
    correctAnswer: "true",
    marks: 1
  },
  {
    id: "J_D1_M9",
    type: "mcq",
    question: "Which data type is commonly used for whole numbers and has a size of 4 bytes?",
    options: [
      "byte",
      "short",
      "int",
      "long"
    ],
    correctAnswer: "int",
    marks: 1
  },
  {
    id: "J_D1_M10",
    type: "mcq",
    question: "What is the range of the byte data type?",
    options: [
      "0 to 255",
      "-128 to 127",
      "-32768 to 32767",
      "-127 to 128"
    ],
    correctAnswer: "-128 to 127",
    marks: 1
  },
  {
    id: "J_D1_M11",
    type: "mcq",
    question: "Which data type is used to represent a single character?",
    options: [
      "String",
      "char",
      "character",
      "text"
    ],
    correctAnswer: "char",
    marks: 1
  },
  {
    id: "J_D1_M12",
    type: "mcq",
    question: "Which operator gives the remainder after division?",
    options: [
      "/",
      "//",
      "%",
      "&"
    ],
    correctAnswer: "%",
    marks: 1
  },
  {
    id: "J_D1_M13",
    type: "mcq",
    question: "What is the result?\n\nint x = 10;\nint y = 5;\n\nSystem.out.println(x > y);",
    options: [
      "10",
      "5",
      "true",
      "false"
    ],
    correctAnswer: "true",
    marks: 1
  },
  {
    id: "J_D1_M14",
    type: "mcq",
    question: "Which operator is used for logical AND?",
    options: [
      "&",
      "&&",
      "||",
      "!"
    ],
    correctAnswer: "&&",
    marks: 1
  },
  {
    id: "J_D1_M15",
    type: "mcq",
    question: "What will be the value of A?\n\nint A = (10 < 15) ? 100 : 200;",
    options: [
      "10",
      "15",
      "100",
      "200"
    ],
    correctAnswer: "100",
    marks: 1
  },
  {
    id: "J_D1_C1",
    type: "coding",
    question: "Write a Java program that prints:\n\nHello Java!\nWelcome to Day 1",
    starterCode: "class Main {\n    public static void main(String[] args) {\n\n        // Write your code here\n\n    }\n}",
    expectedOutput: "Hello Java!\nWelcome to Day 1",
    marks: 5
  },
  {
    id: "J_D1_C2",
    type: "coding",
    question: "Write a Java program that creates variables for:\n\n- Student Name\n- Age\n- Branch\n\nThen print:\n\nName: Manoj\nAge: 21\nBranch: AI & Data Science\n\nStudents should use their own details.",
    starterCode: "class Main {\n    public static void main(String[] args) {\n\n        // Declare your variables\n\n\n        // Print your details\n\n    }\n}",
    expectedOutput: "Name: Manoj\nAge: 21\nBranch: AI & Data Science",
    marks: 5
  }
];
