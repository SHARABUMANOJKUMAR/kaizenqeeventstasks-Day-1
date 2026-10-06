export const javaDay3Questions = [
  {
    id: "J_D3_M1",
    type: "mcq",
    question: "Which Java collection allows duplicate elements and maintains the order of insertion?",
    options: [
      "Set",
      "List",
      "Map",
      "Exception"
    ],
    correctAnswer: "List",
    marks: 1
  },
  {
    id: "J_D3_M2",
    type: "mcq",
    question: "Which collection is designed to store unique elements?",
    options: [
      "List",
      "Set",
      "Map",
      "Array"
    ],
    correctAnswer: "Set",
    marks: 1
  },
  {
    id: "J_D3_M3",
    type: "mcq",
    question: "Which of the following can store data in key-value pairs?",
    options: [
      "List",
      "Set",
      "Map",
      "ArrayList"
    ],
    correctAnswer: "Map",
    marks: 1
  },
  {
    id: "J_D3_M4",
    type: "mcq",
    question: "Which of the following is a common implementation of List?",
    options: [
      "ArrayList",
      "HashSet",
      "HashMap",
      "Throwable"
    ],
    correctAnswer: "ArrayList",
    marks: 1
  },
  {
    id: "J_D3_M5",
    type: "mcq",
    question: "What happens when a duplicate element is added to a Set?",
    options: [
      "It always creates another duplicate",
      "The duplicate is not stored as another element",
      "The program always crashes",
      "The Set is automatically converted into a List"
    ],
    correctAnswer: "The duplicate is not stored as another element",
    marks: 1
  },
  {
    id: "J_D3_M6",
    type: "mcq",
    question: "Which interface is commonly used for key-value pair collections?",
    options: [
      "List",
      "Set",
      "Map",
      "IterableException"
    ],
    correctAnswer: "Map",
    marks: 1
  },
  {
    id: "J_D3_M7",
    type: "mcq",
    question: "Which statement correctly describes a Map?",
    options: [
      "It stores only duplicate values",
      "It stores elements only by index",
      "It stores key-value pairs",
      "It can store only integers"
    ],
    correctAnswer: "It stores key-value pairs",
    marks: 1
  },
  {
    id: "J_D3_M8",
    type: "mcq",
    question: "Which block is used to handle an exception in Java?",
    options: [
      "try",
      "catch",
      "throw",
      "final"
    ],
    correctAnswer: "catch",
    marks: 1
  },
  {
    id: "J_D3_M9",
    type: "mcq",
    question: "Which block contains code that may generate an exception?",
    options: [
      "catch",
      "try",
      "finally",
      "throws"
    ],
    correctAnswer: "try",
    marks: 1
  },
  {
    id: "J_D3_M10",
    type: "mcq",
    question: "What is the purpose of a catch block?",
    options: [
      "To create an object",
      "To handle an exception",
      "To create a List",
      "To declare a Map"
    ],
    correctAnswer: "To handle an exception",
    marks: 1
  },
  {
    id: "J_D3_M11",
    type: "mcq",
    question: "Which keyword is used to explicitly throw an exception?",
    options: [
      "throws",
      "throw",
      "catch",
      "exception"
    ],
    correctAnswer: "throw",
    marks: 1
  },
  {
    id: "J_D3_M12",
    type: "mcq",
    question: "What is a custom exception?",
    options: [
      "An exception created by the programmer",
      "An exception created only by the JVM",
      "A collection",
      "A primitive datatype"
    ],
    correctAnswer: "An exception created by the programmer",
    marks: 1
  },
  {
    id: "J_D3_M13",
    type: "mcq",
    question: "Which keyword is commonly used when defining a custom exception class based on an existing exception class?",
    options: [
      "extends",
      "implements",
      "imports",
      "package"
    ],
    correctAnswer: "extends",
    marks: 1
  },
  {
    id: "J_D3_M14",
    type: "mcq",
    question: "What is the output?\n\nList<Integer> numbers = new ArrayList<>();\nnumbers.add(10);\nnumbers.add(20);\nnumbers.add(10);\n\nSystem.out.println(numbers.size());",
    options: [
      "2",
      "3",
      "1",
      "Compilation error"
    ],
    correctAnswer: "3",
    marks: 1
  },
  {
    id: "J_D3_M15",
    type: "mcq",
    question: "What is the main advantage of using a Set instead of a List when you need unique values?",
    options: [
      "Set automatically allows duplicate values",
      "Set is used to store key-value pairs",
      "Set prevents duplicate elements",
      "Set can only store Strings"
    ],
    correctAnswer: "Set prevents duplicate elements",
    marks: 1
  },
  {
    id: "J_D3_C1",
    type: "coding",
    question: "Create a Java console application that demonstrates the use of:\n\n- List\n- Set\n- Map\n\nThe application should store student information.\n\nRequirements:\n\n1. Use a List to store student names.\n2. Use a Set to store unique student names.\n3. Use a Map to store student names and their marks.\n4. Display all students.\n5. Display unique student names.\n6. Display each student's marks using the Map.\n7. Calculate and display the average marks.\n\nExample data:\n\nStudent names:\n\nManoj\nRahul\nPriya\nManoj\nSneha\n\nMarks:\n\nManoj → 85\nRahul → 78\nPriya → 92\nSneha → 88",
    starterCode: "import java.util.List;\nimport java.util.ArrayList;\nimport java.util.Set;\nimport java.util.HashSet;\nimport java.util.Map;\nimport java.util.HashMap;\n\nclass Main {\n    public static void main(String[] args) {\n        // 1. Use a List to store student names\n        List<String> allStudents = new ArrayList<>();\n        \n\n        // 2. Use a Set to store unique student names\n        Set<String> uniqueStudents = new HashSet<>();\n        \n\n        // 3. Use a Map to store student names and their marks\n        Map<String, Integer> studentMarks = new HashMap<>();\n        \n\n        // Print the outputs\n        System.out.println(\"LIST:\");\n        \n        System.out.println(\"\\nSET:\");\n        \n        System.out.println(\"\\nMAP:\");\n        \n        System.out.println(\"\\nAverage Marks:\");\n        \n    }\n}",
    expectedOutput: "LIST:\n[Manoj, Rahul, Priya, Manoj, Sneha]\n\nSET:\n[Manoj, Rahul, Priya, Sneha]\n\nMAP:\nManoj = 85\nRahul = 78\nPriya = 92\nSneha = 88\n\nAverage Marks:\n85.75",
    marks: 5
  },
  {
    id: "J_D3_C2",
    type: "coding",
    question: "Create a Java program that validates a student's age using exception handling and a custom exception.\n\nRequirements:\n\n1. Accept student age.\n2. If age is less than 18, throw a custom exception: InvalidAgeException\n3. Handle the exception using try-catch.\n4. If age is 18 or above, display: \"Student is eligible.\"\n5. If age is below 18, display: \"Invalid age: Student must be 18 or above.\"\n\nCreate your own custom exception class: InvalidAgeException\n\nThe custom exception should extend an appropriate exception class.",
    starterCode: "// Create your custom exception class here\nclass InvalidAgeException extends Exception {\n    // ...\n}\n\nclass Main {\n    // Create a method to check the age and throw the exception\n    static void checkAge(int age) throws InvalidAgeException {\n        // ...\n    }\n\n    public static void main(String[] args) {\n        // Test Case 1: age = 20\n        \n\n        // Test Case 2: age = 16\n        \n    }\n}",
    expectedOutput: "Student is eligible.\nInvalid age: Student must be 18 or above.",
    marks: 5
  }
];
