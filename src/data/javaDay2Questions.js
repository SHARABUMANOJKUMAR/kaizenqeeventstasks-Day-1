export const javaDay2Questions = [
  {
    id: "J_D2_M1",
    type: "mcq",
    question: "Which of the following is a valid Java identifier?",
    options: [
      "123student",
      "student-name",
      "student_name",
      "student#name"
    ],
    correctAnswer: "student_name",
    marks: 1
  },
  {
    id: "J_D2_M2",
    type: "mcq",
    question: "Which statement about Java identifiers is correct?",
    options: [
      "They can start with a digit",
      "They are case-sensitive",
      "Spaces are allowed",
      "Reserved words can be used as identifiers"
    ],
    correctAnswer: "They are case-sensitive",
    marks: 1
  },
  {
    id: "J_D2_M3",
    type: "mcq",
    question: "Which of the following cannot be used as a Java identifier?",
    options: [
      "total",
      "Total",
      "int",
      "total123"
    ],
    correctAnswer: "int",
    marks: 1
  },
  {
    id: "J_D2_M4",
    type: "mcq",
    question: "What is the size of the byte data type in Java?",
    options: [
      "1 bit",
      "1 byte",
      "2 bytes",
      "4 bytes"
    ],
    correctAnswer: "1 byte",
    marks: 1
  },
  {
    id: "J_D2_M5",
    type: "mcq",
    question: "What is the range of the Java byte data type?",
    options: [
      "0 to 255",
      "-127 to 128",
      "-128 to 127",
      "-256 to 255"
    ],
    correctAnswer: "-128 to 127",
    marks: 1
  },
  {
    id: "J_D2_M6",
    type: "mcq",
    question: "Which data type is most commonly used for whole-number values in Java?",
    options: [
      "byte",
      "short",
      "int",
      "float"
    ],
    correctAnswer: "int",
    marks: 1
  },
  {
    id: "J_D2_M7",
    type: "mcq",
    question: "Which data type should generally be used when an int is not sufficient to store a very large whole number?",
    options: [
      "byte",
      "short",
      "long",
      "char"
    ],
    correctAnswer: "long",
    marks: 1
  },
  {
    id: "J_D2_M8",
    type: "mcq",
    question: "Which of the following is a valid boolean declaration?",
    options: [
      "boolean x = True;",
      "boolean x = \"true\";",
      "boolean x = 1;",
      "boolean x = true;"
    ],
    correctAnswer: "boolean x = true;",
    marks: 1
  },
  {
    id: "J_D2_M9",
    type: "mcq",
    question: "What is the result?\n\nSystem.out.println(17 % 5);",
    options: [
      "2",
      "3",
      "4",
      "5"
    ],
    correctAnswer: "2",
    marks: 1
  },
  {
    id: "J_D2_M10",
    type: "mcq",
    question: "What will be the output?\n\nint a = 10;\nint b = 5;\nSystem.out.println(a > b);",
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
    id: "J_D2_M11",
    type: "mcq",
    question: "What is the result?\n\n(10 > 5) && (20 < 15)",
    options: [
      "true",
      "false",
      "10",
      "Compilation error"
    ],
    correctAnswer: "false",
    marks: 1
  },
  {
    id: "J_D2_M12",
    type: "mcq",
    question: "What will be the value of a?\n\nint a = 10;\na += 5;",
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
    id: "J_D2_M13",
    type: "mcq",
    question: "What will be the output?\n\nint a = 5;\nSystem.out.println(a++);",
    options: [
      "4",
      "5",
      "6",
      "Compilation error"
    ],
    correctAnswer: "5",
    marks: 1
  },
  {
    id: "J_D2_M14",
    type: "mcq",
    question: "Which operator is used for the ternary/conditional operation in Java?",
    options: [
      "??",
      "::",
      "?:",
      "=>"
    ],
    correctAnswer: "?:",
    marks: 1
  },
  {
    id: "J_D2_M15",
    type: "mcq",
    question: "What will be the output?\n\nint A = (10 < 15) ? 100 : 200;\nSystem.out.println(A);",
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
    id: "J_D2_C1",
    type: "coding",
    question: "Write a Java program that accepts marks of 5 subjects and calculates:\n\n- Total marks\n- Average marks\n- Pass/Fail result\n\nConditions:\n- Each subject is out of 100.\n- Student passes only if ALL subjects are >= 35.\n- If all subjects are passed → PASS\n- Otherwise → FAIL\n\nChallenge requirement: Calculate PASS/FAIL using the ternary operator.\n\nExample Output:\n\nTotal Marks: 395\nAverage: 79.0\nResult: PASS",
    starterCode: "import java.util.Scanner;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        // Example to read input:\n        // System.out.print(\"Java: \");\n        // int java = scanner.nextInt();\n        \n        // Write your code here\n\n    }\n}",
    expectedOutput: "Total Marks: 395\nAverage: 79.0\nResult: PASS",
    marks: 5
  },
  {
    id: "J_D2_C2",
    type: "coding",
    question: "Write a Java program that accepts an integer and performs multiple operations:\n\n1. Check whether the number is positive, negative, or zero.\n2. Check whether it is even or odd.\n3. Find its square.\n4. Find its remainder when divided by 5.\n5. Check whether it is greater than 100.\n\nRequirements:\n- Use Arithmetic, Relational, Logical, Modulo, and Ternary operators.\n\nBonus challenge: Allow students to determine even/odd using a bitwise operator.\n\nExample Output:\n\nNumber: 125\nType: Positive\nEven/Odd: Odd\nSquare: 15625\nRemainder when divided by 5: 0\nGreater than 100: true",
    starterCode: "import java.util.Scanner;\n\nclass Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        \n        // Write your code here\n\n    }\n}",
    expectedOutput: "Number: 125\nType: Positive\nEven/Odd: Odd\nSquare: 15625\nRemainder when divided by 5: 0\nGreater than 100: true",
    marks: 5
  }
];
