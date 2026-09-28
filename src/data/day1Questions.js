export const day1Questions = [
  {
    id: 1,
    type: "mcq",
    question: "What will be the output of the following Python code?\n\n```python\nprint(type(5 / 2))\n```",
    options: [
      "`<class 'int'>`",
      "`<class 'float'>`",
      "`<class 'double'>`",
      "`<class 'number'>`"
    ],
    correctAnswer: "`<class 'float'>`",
    marks: 1
  },
  {
    id: 2,
    type: "mcq",
    question: "Which of the following is a valid variable name in Python?",
    options: [
      "1_student_name",
      "student-name",
      "student_name_1",
      "student name"
    ],
    correctAnswer: "student_name_1",
    marks: 1
  },
  {
    id: 3,
    type: "mcq",
    question: "What is the result of the following expression?\n\n```python\n3 ** 2 ** 3\n```",
    options: [
      "729",
      "6561",
      "512",
      "None of the above"
    ],
    correctAnswer: "6561",
    marks: 1
  },
  {
    id: 4,
    type: "mcq",
    question: "What will be the output of this logical expression?\n\n```python\nprint(not (5 > 2) and (3 < 4))\n```",
    options: [
      "True",
      "False",
      "None",
      "Error"
    ],
    correctAnswer: "False",
    marks: 1
  },
  {
    id: 5,
    type: "mcq",
    question: "Which operator is used to check if a value exists in a sequence?",
    options: [
      "is",
      "exists",
      "in",
      "find"
    ],
    correctAnswer: "in",
    marks: 1
  },
  {
    id: 6,
    type: "mcq",
    question: "What will be the output?\n\n```python\nx = [1, 2, 3]\ny = x\ny.append(4)\nprint(x)\n```",
    options: [
      "[1, 2, 3]",
      "[1, 2, 3, 4]",
      "Error",
      "[4]"
    ],
    correctAnswer: "[1, 2, 3, 4]",
    marks: 1
  },
  {
    id: 7,
    type: "mcq",
    question: "How do you create an empty set in Python?",
    options: [
      "{}",
      "[]",
      "set()",
      "()"
    ],
    correctAnswer: "set()",
    marks: 1
  },
  {
    id: 8,
    type: "mcq",
    question: "What will the following loop output?\n\n```python\nfor i in range(1, 6, 2):\n    print(i, end=' ')\n```",
    options: [
      "1 2 3 4 5",
      "1 3 5",
      "2 4",
      "1 3 5 7"
    ],
    correctAnswer: "1 3 5",
    marks: 1
  },
  {
    id: 9,
    type: "mcq",
    question: "Which statement is used to exit a loop completely?",
    options: [
      "exit",
      "pass",
      "continue",
      "break"
    ],
    correctAnswer: "break",
    marks: 1
  },
  {
    id: 10,
    type: "mcq",
    question: "What is the output of the following list operation?\n\n```python\nmy_list = [10, 20, 30, 40]\nprint(my_list[-1])\n```",
    options: [
      "10",
      "30",
      "40",
      "Error"
    ],
    correctAnswer: "40",
    marks: 1
  },
  {
    id: 11,
    type: "mcq",
    question: "Which of the following data types is immutable?",
    options: [
      "List",
      "Dictionary",
      "Set",
      "Tuple"
    ],
    correctAnswer: "Tuple",
    marks: 1
  },
  {
    id: 12,
    type: "mcq",
    question: "What is the purpose of the `def` keyword in Python?",
    options: [
      "To define a variable",
      "To define a class",
      "To define a function",
      "To defer execution"
    ],
    correctAnswer: "To define a function",
    marks: 1
  },
  {
    id: 13,
    type: "mcq",
    question: "What does this function return?\n\n```python\ndef add(a, b=5):\n    return a + b\n\nprint(add(3))\n```",
    options: [
      "8",
      "3",
      "Error",
      "None"
    ],
    correctAnswer: "8",
    marks: 1
  },
  {
    id: 14,
    type: "mcq",
    question: "Which of the following is an anonymous function in Python?",
    options: [
      "def function",
      "lambda function",
      "inline function",
      "anonymous function"
    ],
    correctAnswer: "lambda function",
    marks: 1
  },
  {
    id: 15,
    type: "mcq",
    question: "What will happen if an exception is raised inside a `try` block and there is no corresponding `except` block?",
    options: [
      "The program will ignore the error.",
      "The program will crash and display a traceback.",
      "The `finally` block will handle the error.",
      "The program will restart."
    ],
    correctAnswer: "The program will crash and display a traceback.",
    marks: 1
  },
  {
    id: 16,
    type: "mcq",
    question: "Logic: If `x = 5`, what will the following evaluate to?\n\n```python\n\"Even\" if x % 2 == 0 else \"Odd\"\n```",
    options: [
      "\"Even\"",
      "\"Odd\"",
      "Error",
      "None"
    ],
    correctAnswer: "\"Odd\"",
    marks: 1
  },
  {
    id: 17,
    type: "mcq",
    question: "Logic: What will be the final value of `count`?\n\n```python\ncount = 0\nfor i in range(5):\n    if i == 3:\n        continue\n    count += 1\n```",
    options: [
      "3",
      "4",
      "5",
      "Error"
    ],
    correctAnswer: "4",
    marks: 1
  },
  {
    id: 18,
    type: "code",
    question: "Write a Python function `is_even(n)` that takes an integer `n` and returns `True` if it is even, and `False` otherwise.",
    starterCode: "def is_even(n):\n    # Write your code here\n    pass\n",
    marks: 2
  },
  {
    id: 19,
    type: "code",
    question: "Write a Python function `sum_of_list(lst)` that takes a list of numbers and returns their sum. Do not use the built-in `sum()` function.",
    starterCode: "def sum_of_list(lst):\n    # Write your code here\n    pass\n",
    marks: 2
  },
  {
    id: 20,
    type: "code",
    question: "Write a Python program that prints the numbers from 1 to 10 using a `while` loop.",
    starterCode: "# Write your code here\n",
    marks: 2
  },
  {
    id: 21,
    type: "code",
    question: "Write a Python function `find_max(a, b, c)` that takes three numbers and returns the largest among them using `if-elif-else` conditions.",
    starterCode: "def find_max(a, b, c):\n    # Write your code here\n    pass\n",
    marks: 2
  }
];
