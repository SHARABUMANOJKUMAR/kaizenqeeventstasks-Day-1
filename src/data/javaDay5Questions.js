export const javaDay5Questions = [
  {
    id: "J_D5_M1",
    type: "mcq",
    question: "What is the first major step when starting a Java AI application?",
    options: [
      "Deploy directly to production",
      "Set up the project and required dependencies",
      "Delete the source code",
      "Create only the user interface"
    ],
    correctAnswer: "Set up the project and required dependencies",
    marks: 1
  },
  {
    id: "J_D5_M2",
    type: "mcq",
    question: "What is the main purpose of managing project dependencies?",
    options: [
      "To remove Java from the project",
      "To provide required libraries and functionality",
      "To prevent compilation",
      "To increase the number of source files"
    ],
    correctAnswer: "To provide required libraries and functionality",
    marks: 1
  },
  {
    id: "J_D5_M3",
    type: "mcq",
    question: "Which file is commonly used to define dependencies in a Maven-based Java project?",
    options: [
      "index.html",
      "pom.xml",
      "package.json",
      "requirements.txt"
    ],
    correctAnswer: "pom.xml",
    marks: 1
  },
  {
    id: "J_D5_M4",
    type: "mcq",
    question: "What is the primary purpose of integrating an AI API into a Java application?",
    options: [
      "To connect the application with AI functionality",
      "To remove all Java code",
      "To replace the operating system",
      "To create a database automatically"
    ],
    correctAnswer: "To connect the application with AI functionality",
    marks: 1
  },
  {
    id: "J_D5_M5",
    type: "mcq",
    question: "What does an API request generally allow a Java application to do when integrating with an AI service?",
    options: [
      "Communicate with the AI service",
      "Change the Java compiler",
      "Delete the operating system",
      "Increase RAM"
    ],
    correctAnswer: "Communicate with the AI service",
    marks: 1
  },
  {
    id: "J_D5_M6",
    type: "mcq",
    question: "Where should sensitive API keys generally be stored?",
    options: [
      "Directly inside publicly shared source code",
      "Inside comments",
      "Secure configuration/environment variables",
      "Inside the application title"
    ],
    correctAnswer: "Secure configuration/environment variables",
    marks: 1
  },
  {
    id: "J_D5_M7",
    type: "mcq",
    question: "What should a Java application do if an AI API request fails?",
    options: [
      "Ignore the failure completely",
      "Handle the error gracefully",
      "Delete the project",
      "Restart the computer"
    ],
    correctAnswer: "Handle the error gracefully",
    marks: 1
  },
  {
    id: "J_D5_M8",
    type: "mcq",
    question: "What is the purpose of processing an AI API response?",
    options: [
      "To convert/use the returned information inside the application",
      "To remove the API",
      "To stop Java execution permanently",
      "To delete dependencies"
    ],
    correctAnswer: "To convert/use the returned information inside the application",
    marks: 1
  },
  {
    id: "J_D5_M9",
    type: "mcq",
    question: "Which is an important consideration when preparing an application for deployment?",
    options: [
      "Production configuration",
      "Removing all error handling",
      "Hardcoding every secret",
      "Deleting the build files"
    ],
    correctAnswer: "Production configuration",
    marks: 1
  },
  {
    id: "J_D5_M10",
    type: "mcq",
    question: "What is the main purpose of building an application before deployment?",
    options: [
      "To prepare the application for execution/deployment",
      "To delete the application",
      "To remove all dependencies",
      "To change Java into Python"
    ],
    correctAnswer: "To prepare the application for execution/deployment",
    marks: 1
  },
  {
    id: "J_D5_M11",
    type: "mcq",
    question: "Which environment is normally intended for real users?",
    options: [
      "Production",
      "Temporary",
      "Draft",
      "Source-only"
    ],
    correctAnswer: "Production",
    marks: 1
  },
  {
    id: "J_D5_M12",
    type: "mcq",
    question: "Why should environment-specific configuration be separated from application code?",
    options: [
      "To make configuration easier and safer to manage",
      "To make the application impossible to run",
      "To remove dependencies",
      "To prevent deployment"
    ],
    correctAnswer: "To make configuration easier and safer to manage",
    marks: 1
  },
  {
    id: "J_D5_M13",
    type: "mcq",
    question: "Which sequence best represents a basic AI application workflow?",
    options: [
      "Deploy → Delete → Setup → Integration",
      "Setup → Integration → Testing → Deployment",
      "Deployment → Setup → Delete",
      "Testing → Delete → Deployment"
    ],
    correctAnswer: "Setup → Integration → Testing → Deployment",
    marks: 1
  },
  {
    id: "J_D5_M14",
    type: "mcq",
    question: "A Java AI application receives an unexpected response from an external AI service. What should the application do?",
    options: [
      "Crash without handling the situation",
      "Validate/process the response and handle errors appropriately",
      "Delete the API credentials",
      "Stop the server permanently"
    ],
    correctAnswer: "Validate/process the response and handle errors appropriately",
    marks: 1
  },
  {
    id: "J_D5_M15",
    type: "mcq",
    question: "What is the main goal of deploying a Java AI application?",
    options: [
      "Make the application available in its target environment",
      "Remove the source code",
      "Remove all dependencies",
      "Disable the application"
    ],
    correctAnswer: "Make the application available in its target environment",
    marks: 1
  },
  {
    id: "J_D5_C1",
    type: "coding",
    question: "Build a Java application that demonstrates the basic structure of integrating an external AI service.\n\nThe application should:\n\n1. Accept a user prompt.\n2. Prepare an API request.\n3. Send the request to an AI service.\n4. Receive the response.\n5. Process the response.\n6. Display the AI response.\n7. Handle API/request errors gracefully.\n\nIMPORTANT: The application must NOT hardcode an API key. Use an environment variable or secure configuration (e.g., `System.getenv(\"AI_API_KEY\")`).\n\nIf no real API provider is available in this environment, create a clean provider-neutral integration layer/mock service so you can understand the integration architecture without requiring a real API key.\n\nExample input:\n\nExplain Java arrays in simple words.\n\nExample output:\n\nAI Response:\nAn array is a data structure that stores multiple values of the same type.",
    starterCode: "import java.util.Scanner;\n\nclass Main {\n    // Mock AI Service Integration Layer\n    public static String getAIResponse(String prompt) throws Exception {\n        // Fetch API key securely (Do not hardcode!)\n        String apiKey = System.getenv(\"AI_API_KEY\");\n        \n        if (apiKey == null || apiKey.isEmpty()) {\n            // Fallback for safe mock demonstration\n            apiKey = \"SECURE_MOCK_KEY\";\n        }\n\n        // Simulate an HTTP Request failure if prompt is empty\n        if (prompt == null || prompt.trim().isEmpty()) {\n            throw new Exception(\"Prompt cannot be empty.\");\n        }\n\n        // Simulate processing the response from the API\n        return \"An array is a data structure that stores multiple values of the same type.\";\n    }\n\n    public static void main(String[] args) {\n        String userPrompt = \"Explain Java arrays in simple words.\";\n        \n        try {\n            // 1. Prepare and send the request\n            \n            \n            // 2. Receive and process the response\n            \n            \n            // 3. Display the response\n            System.out.println(\"AI Response:\");\n            \n            \n        } catch (Exception e) {\n            // 4. Handle errors gracefully\n            System.out.println(\"API Error: \" + e.getMessage());\n        }\n    }\n}",
    expectedOutput: "AI Response:\nAn array is a data structure that stores multiple values of the same type.",
    marks: 5
  },
  {
    id: "J_D5_C2",
    type: "coding",
    question: "Create a small Java application structure that is ready for deployment.\n\nThe application should contain:\n\n1. Application entry point.\n2. AI service/configuration layer.\n3. Configuration loaded from environment variables.\n4. Basic request/response handling.\n5. Error handling.\n6. Health/status response.\n\nThe application should expose a simple application flow simulating HTTP endpoints:\n\nGET /health -> {\"status\": \"UP\"}\n\nPOST /ask -> {\"prompt\": \"What is Java?\"} -> {\"response\": \"Java is a programming language...\"}",
    starterCode: "class ApplicationController {\n    // Simulate a GET /health endpoint\n    public String getHealth() {\n        // Return JSON-like string\n        return \"\"; \n    }\n\n    // Simulate a POST /ask endpoint\n    public String postAsk(String prompt) {\n        try {\n            if (prompt == null || prompt.isEmpty()) {\n                throw new IllegalArgumentException(\"Prompt required\");\n            }\n            return \"{\\\"response\\\": \\\"Java is a programming language...\\\"}\";\n        } catch (Exception e) {\n            return \"{\\\"error\\\": \\\"\" + e.getMessage() + \"\\\"}\";\n        }\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        // 1. Initialize Application / Configuration\n        ApplicationController app = new ApplicationController();\n        \n        // 2. Simulate GET /health request\n        System.out.println(\"GET /health\");\n        System.out.println(app.getHealth());\n        \n        // 3. Simulate POST /ask request\n        System.out.println(\"\\nPOST /ask {\\\"prompt\\\": \\\"What is Java?\\\"}\");\n        System.out.println(app.postAsk(\"What is Java?\"));\n    }\n}",
    expectedOutput: "GET /health\n{\"status\": \"UP\"}\n\nPOST /ask {\"prompt\": \"What is Java?\"}\n{\"response\": \"Java is a programming language...\"}",
    marks: 5
  }
];
