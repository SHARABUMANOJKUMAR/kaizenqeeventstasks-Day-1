export const javaDay4Questions = [
  {
    id: "J_D4_M1",
    type: "mcq",
    question: "What is an array in Java?",
    options: [
      "A variable that stores only one value",
      "A variable that can store multiple values of the same datatype",
      "A keyword used to create objects",
      "A method used to store data"
    ],
    correctAnswer: "A variable that can store multiple values of the same datatype",
    marks: 1
  },
  {
    id: "J_D4_M2",
    type: "mcq",
    question: "The elements of an array are stored in:",
    options: [
      "Random memory locations",
      "Contiguous memory locations",
      "Database locations",
      "Stack only"
    ],
    correctAnswer: "Contiguous memory locations",
    marks: 1
  },
  {
    id: "J_D4_M3",
    type: "mcq",
    question: "Which is the correct general syntax for creating an array?",
    options: [
      "datatype arrayName;",
      "datatype[] arrayName = new datatype[size];",
      "array datatype[] = size;",
      "new array datatype[size];"
    ],
    correctAnswer: "datatype[] arrayName = new datatype[size];",
    marks: 1
  },
  {
    id: "J_D4_M4",
    type: "mcq",
    question: "Which of the following is a valid Java array declaration?",
    options: [
      "int[77] a;",
      "int[] a;",
      "array int a;",
      "int a(77);"
    ],
    correctAnswer: "int[] a;",
    marks: 1
  },
  {
    id: "J_D4_M5",
    type: "mcq",
    question: "Which of the following is also a valid way to declare a one-dimensional array?",
    options: [
      "int a[];",
      "int[ ] a;",
      "Both A and B",
      "Neither A nor B"
    ],
    correctAnswer: "Both A and B",
    marks: 1
  },
  {
    id: "J_D4_M6",
    type: "mcq",
    question: "A one-dimensional array is also called:",
    options: [
      "Matrix Array",
      "Linear Array",
      "Cube Array",
      "Object Array"
    ],
    correctAnswer: "Linear Array",
    marks: 1
  },
  {
    id: "J_D4_M7",
    type: "mcq",
    question: "A one-dimensional array contains:",
    options: [
      "One subscript/index",
      "Two subscripts/indexes",
      "Three subscripts/indexes",
      "No index"
    ],
    correctAnswer: "One subscript/index",
    marks: 1
  },
  {
    id: "J_D4_M8",
    type: "mcq",
    question: "Which declaration creates a 2-dimensional integer array with 3 rows and 3 columns?",
    options: [
      "int[] marks = new int[3];",
      "int[][] marks = new int[3][3];",
      "int marks[][] = new int[3];",
      "int[3][3] marks;"
    ],
    correctAnswer: "int[][] marks = new int[3][3];",
    marks: 1
  },
  {
    id: "J_D4_M9",
    type: "mcq",
    question: "A two-dimensional array is commonly used to represent:",
    options: [
      "A single value",
      "A matrix/table",
      "A single character",
      "A method"
    ],
    correctAnswer: "A matrix/table",
    marks: 1
  },
  {
    id: "J_D4_M10",
    type: "mcq",
    question: "Which of the following is a valid 2-D array declaration?",
    options: [
      "int[][] a;",
      "int [][]a;",
      "int a[][];",
      "All of the above"
    ],
    correctAnswer: "All of the above",
    marks: 1
  },
  {
    id: "J_D4_M11",
    type: "mcq",
    question: "A three-dimensional array contains how many subscripts/indices?",
    options: [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    correctAnswer: "Three",
    marks: 1
  },
  {
    id: "J_D4_M12",
    type: "mcq",
    question: "Which is the correct syntax for a 3-dimensional array?",
    options: [
      "datatype[] arrayName = new datatype[size];",
      "datatype[][] arrayName = new datatype[rows][columns];",
      "datatype[][][] arrayName = new datatype[x][y][z];",
      "datatype[][][][] arrayName = new datatype[x][y][z];"
    ],
    correctAnswer: "datatype[][][] arrayName = new datatype[x][y][z];",
    marks: 1
  },
  {
    id: "J_D4_M13",
    type: "mcq",
    question: "What does this declaration create?\n\nint[][][] cube = new int[2][3][4];",
    options: [
      "1-D array",
      "2-D array",
      "3-D array",
      "4-D array"
    ],
    correctAnswer: "3-D array",
    marks: 1
  },
  {
    id: "J_D4_M14",
    type: "mcq",
    question: "A 2-D array is generally represented in the form of:",
    options: [
      "Rows and columns",
      "Only rows",
      "Only columns",
      "A single value"
    ],
    correctAnswer: "Rows and columns",
    marks: 1
  },
  {
    id: "J_D4_M15",
    type: "mcq",
    question: "Which of the following is NOT a valid Java array declaration?",
    options: [
      "int[] a;",
      "int a[];",
      "int[][] a;",
      "int[77] a;"
    ],
    correctAnswer: "int[77] a;",
    marks: 1
  },
  {
    id: "J_D4_C1",
    type: "coding",
    question: "Write a Java program that stores the marks of 5 subjects using a one-dimensional integer array.\n\nThe program should:\n\n1. Create an integer array.\n2. Store marks of 5 subjects.\n3. Display all marks.\n4. Calculate the total marks.\n5. Calculate the average marks.\n6. Display the highest mark.\n7. Display the lowest mark.\n\nExample input:\n\n85\n78\n92\n67\n88\n\nExpected output:\n\nMarks:\n85 78 92 67 88\n\nTotal Marks: 410\nAverage Marks: 82.0\nHighest Mark: 92\nLowest Mark: 67",
    starterCode: "class Main {\n    public static void main(String[] args) {\n        // 1. Create an integer array for 5 subjects\n        int[] marks = {85, 78, 92, 67, 88};\n        \n        // 2. Variables for calculations\n        int total = 0;\n        int highest = marks[0];\n        int lowest = marks[0];\n        \n        System.out.println(\"Marks:\");\n        \n        // 3. Loop through array to display marks and calculate totals/min/max\n        for (int i = 0; i < marks.length; i++) {\n            // Add your logic here\n            \n        }\n        \n        // 4. Calculate average\n        double average = 0.0;\n        \n        // 5. Display results\n        System.out.println(\"\\nTotal Marks: \" + total);\n        System.out.println(\"Average Marks: \" + average);\n        System.out.println(\"Highest Mark: \" + highest);\n        System.out.println(\"Lowest Mark: \" + lowest);\n    }\n}",
    expectedOutput: "Marks:\n85 78 92 67 88 \n\nTotal Marks: 410\nAverage Marks: 82.0\nHighest Mark: 92\nLowest Mark: 67",
    marks: 5
  },
  {
    id: "J_D4_C2",
    type: "coding",
    question: "Write a Java program using a two-dimensional array to store marks of students in different subjects.\n\nUse:\n\n3 students\n3 subjects\n\nThe array should represent:\n\nRows → Students\nColumns → Subjects\n\nExample:\n\nStudent 1 → 80 75 90\nStudent 2 → 65 88 72\nStudent 3 → 92 81 95\n\nThe program should:\n\n1. Create a 2-D integer array.\n2. Store marks for 3 students and 3 subjects.\n3. Display the matrix.\n4. Calculate the total marks of each student.\n5. Display the average marks of each student.",
    starterCode: "class Main {\n    public static void main(String[] args) {\n        // 1. Create a 2-D integer array for 3 students and 3 subjects\n        int[][] marks = {\n            {80, 75, 90}, // Student 1\n            {65, 88, 72}, // Student 2\n            {92, 81, 95}  // Student 3\n        };\n        \n        // 2. Loop through rows (students)\n        for (int i = 0; i < marks.length; i++) {\n            System.out.println(\"Student \" + (i + 1) + \":\");\n            System.out.print(\"Marks: \");\n            \n            int total = 0;\n            \n            // 3. Loop through columns (subjects)\n            for (int j = 0; j < marks[i].length; j++) {\n                // Add logic to display marks and calculate total\n                \n            }\n            \n            // 4. Calculate average\n            double average = 0.0;\n            \n            // 5. Display results\n            System.out.println(\"\\nTotal: \" + total);\n            System.out.println(\"Average: \" + average + \"\\n\");\n        }\n    }\n}",
    expectedOutput: "Student 1:\nMarks: 80 75 90 \nTotal: 245\nAverage: 81.66666666666667\n\nStudent 2:\nMarks: 65 88 72 \nTotal: 225\nAverage: 75.0\n\nStudent 3:\nMarks: 92 81 95 \nTotal: 268\nAverage: 89.33333333333333\n",
    marks: 5
  }
];
