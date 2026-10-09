export const genaiDay1Questions = [
  {
    id: 1,
    type: "mcq",
    question: "What is Artificial Intelligence?",
    options: [
      "A computer hardware component",
      "Technology that enables machines to perform tasks requiring intelligence",
      "A programming language",
      "A database"
    ],
    correctAnswer: "Technology that enables machines to perform tasks requiring intelligence",
    marks: 1
  },
  {
    id: 2,
    type: "mcq",
    question: "What is Machine Learning?",
    options: [
      "A method that allows computers to learn patterns from data",
      "A computer monitor",
      "A type of keyboard",
      "A file format"
    ],
    correctAnswer: "A method that allows computers to learn patterns from data",
    marks: 1
  },
  {
    id: 3,
    type: "mcq",
    question: "Which is an example of AI used in everyday life?",
    options: [
      "A traditional wall clock",
      "A recommendation system suggesting videos",
      "A plain notebook",
      "A mechanical pencil"
    ],
    correctAnswer: "A recommendation system suggesting videos",
    marks: 1
  },
  {
    id: 4,
    type: "mcq",
    question: "Which type of learning uses labeled training data?",
    options: [
      "Unsupervised Learning",
      "Supervised Learning",
      "Manual calculation",
      "Random guessing"
    ],
    correctAnswer: "Supervised Learning",
    marks: 1
  },
  {
    id: 5,
    type: "mcq",
    question: "Which type of learning identifies patterns in data without labeled target answers?",
    options: [
      "Supervised Learning",
      "Unsupervised Learning",
      "Traditional programming only",
      "Data entry"
    ],
    correctAnswer: "Unsupervised Learning",
    marks: 1
  },
  {
    id: 6,
    type: "mcq",
    question: "Deep Learning commonly uses which structures?",
    options: [
      "Neural networks",
      "Spreadsheets only",
      "HTML tags only",
      "File folders"
    ],
    correctAnswer: "Neural networks",
    marks: 1
  },
  {
    id: 7,
    type: "mcq",
    question: "What is Generative AI mainly designed to do?",
    options: [
      "Generate new content such as text, images, audio, or code",
      "Only store files",
      "Only calculate addition",
      "Replace computer hardware"
    ],
    correctAnswer: "Generate new content such as text, images, audio, or code",
    marks: 1
  },
  {
    id: 8,
    type: "mcq",
    question: "Which of these is an example of Generative AI?",
    options: [
      "A calculator performing basic addition",
      "An AI tool generating a story from a prompt",
      "A standard USB drive",
      "A keyboard typing manually"
    ],
    correctAnswer: "An AI tool generating a story from a prompt",
    marks: 1
  },
  {
    id: 9,
    type: "mcq",
    question: "Which programming language will students use for the Day 1 coding tasks?",
    options: [
      "HTML",
      "CSS",
      "Python",
      "SQL"
    ],
    correctAnswer: "Python",
    marks: 1
  },
  {
    id: 10,
    type: "mcq",
    question: "Which Python function displays output on the screen?",
    options: [
      "`input()`",
      "`print()`",
      "`read()`",
      "`showText()`"
    ],
    correctAnswer: "`print()`",
    marks: 1
  },
  {
    id: 11,
    type: "mcq",
    question: "Which Python function accepts input from the user?",
    options: [
      "`print()`",
      "`input()`",
      "`display()`",
      "`write()`"
    ],
    correctAnswer: "`input()`",
    marks: 1
  },
  {
    id: 12,
    type: "mcq",
    question: "Which data type is used for whole numbers in Python?",
    options: [
      "`int`",
      "`str`",
      "`bool`",
      "`list`"
    ],
    correctAnswer: "`int`",
    marks: 1
  },
  {
    id: 13,
    type: "mcq",
    question: "What is the output of this Python code?\n\n```python\na = 10\nb = 5\nprint(a + b)\n```",
    options: [
      "5",
      "10",
      "15",
      "50"
    ],
    correctAnswer: "15",
    marks: 1
  },
  {
    id: 14,
    type: "mcq",
    question: "Which statement is used to make a decision in Python?",
    options: [
      "`if`",
      "`print`",
      "`import`",
      "`input`"
    ],
    correctAnswer: "`if`",
    marks: 1
  },
  {
    id: 15,
    type: "mcq",
    question: "What is the output?\n\n```python\nmarks = 75\n\nif marks >= 35:\n    print(\"PASS\")\nelse:\n    print(\"FAIL\")\n```",
    options: [
      "FAIL",
      "PASS",
      "35",
      "Syntax error"
    ],
    correctAnswer: "PASS",
    marks: 1
  },
  {
    id: 16,
    type: "code",
    question: "### Problem statement\nWrite a Python program that accepts two numbers and displays their sum, difference, product, and quotient.\n\n### Requirements\n1. Accept two numbers from the user.\n2. Convert the inputs into numeric values.\n3. Calculate addition.\n4. Calculate subtraction.\n5. Calculate multiplication.\n6. Calculate division.\n7. Handle division by zero safely.\n\n### Example input\n```text\nEnter first number: 10\nEnter second number: 5\n```\n\n### Expected output\n```text\nAddition: 15\nSubtraction: 5\nMultiplication: 50\nDivision: 2.0\n```\nIf the second number is zero, display a clear message instead of attempting division.",
    starterCode: "try:\n    # Write your code here\n    num1 = float(input(\"Enter first number: \"))\n    num2 = float(input(\"Enter second number: \"))\n    \n    # Add calculations and print statements\n    \nexcept ValueError:\n    print(\"Invalid input. Please enter numbers.\")",
    marks: 2
  },
  {
    id: 17,
    type: "code",
    question: "### Problem statement\nWrite a Python program that accepts a student's marks and determines whether the student passes or fails.\n\n### Requirements\n1. Accept marks from the user.\n2. Check that the marks are within the range 0-100.\n3. If marks are 35 or above, display `PASS`.\n4. If marks are below 35, display `FAIL`.\n5. If marks are outside 0-100, display `Invalid marks`.\n\n### Example 1\nInput:\n```text\nEnter marks: 75\n```\nOutput:\n```text\nResult: PASS\n```\n\n### Example 2\nInput:\n```text\nEnter marks: 120\n```\nOutput:\n```text\nInvalid marks\n```",
    starterCode: "try:\n    # Write your code here\n    marks = float(input(\"Enter marks: \"))\n    \n    # Add conditional logic\n    \nexcept ValueError:\n    print(\"Invalid marks\")",
    marks: 2
  }
];
