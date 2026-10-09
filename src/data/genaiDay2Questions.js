export const genaiDay2Questions = [
  {
    id: 1,
    type: "mcq",
    question: "What is Prompt Engineering?",
    options: [
      "Designing instructions to guide an AI model's response",
      "Repairing computer hardware",
      "Creating database tables only",
      "Installing an operating system"
    ],
    correctAnswer: "Designing instructions to guide an AI model's response",
    marks: 1
  },
  {
    id: 2,
    type: "mcq",
    question: "Which prompt is generally more useful for getting a specific response?",
    options: [
      "\"Explain\"",
      "\"Tell me something\"",
      "\"Explain Machine Learning to a beginner using three examples\"",
      "\"AI\""
    ],
    correctAnswer: "\"Explain Machine Learning to a beginner using three examples\"",
    marks: 1
  },
  {
    id: 3,
    type: "mcq",
    question: "What is zero-shot prompting?",
    options: [
      "Giving a model a prompt without providing examples of the desired task",
      "Training a model from scratch",
      "Providing hundreds of examples",
      "Creating a vector database"
    ],
    correctAnswer: "Giving a model a prompt without providing examples of the desired task",
    marks: 1
  },
  {
    id: 4,
    type: "mcq",
    question: "What is few-shot prompting?",
    options: [
      "Giving the model a few examples to demonstrate the desired task",
      "Removing all instructions",
      "Deleting training data",
      "Deploying an application"
    ],
    correctAnswer: "Giving the model a few examples to demonstrate the desired task",
    marks: 1
  },
  {
    id: 5,
    type: "mcq",
    question: "What is a Transformer?",
    options: [
      "A computer power supply",
      "A neural network architecture that uses attention mechanisms",
      "A database management system",
      "A Python data type"
    ],
    correctAnswer: "A neural network architecture that uses attention mechanisms",
    marks: 1
  },
  {
    id: 6,
    type: "mcq",
    question: "What does self-attention help a Transformer do?",
    options: [
      "Understand relationships between tokens in the input",
      "Increase internet speed",
      "Store files permanently",
      "Automatically remove every incorrect answer"
    ],
    correctAnswer: "Understand relationships between tokens in the input",
    marks: 1
  },
  {
    id: 7,
    type: "mcq",
    question: "What is a token in language-model processing?",
    options: [
      "A unit of text processed by the model, such as a word or word fragment",
      "A computer monitor",
      "A database password",
      "A programming language"
    ],
    correctAnswer: "A unit of text processed by the model, such as a word or word fragment",
    marks: 1
  },
  {
    id: 8,
    type: "mcq",
    question: "What does LLM stand for?",
    options: [
      "Large Learning Machine",
      "Language Logic Method",
      "Large Language Model",
      "Linear Learning Module"
    ],
    correctAnswer: "Large Language Model",
    marks: 1
  },
  {
    id: 9,
    type: "mcq",
    question: "How does a typical autoregressive LLM generate text?",
    options: [
      "By selecting and generating successive tokens based on the preceding context",
      "By copying every answer from a fixed database",
      "By executing every generated sentence as code",
      "By searching only local files"
    ],
    correctAnswer: "By selecting and generating successive tokens based on the preceding context",
    marks: 1
  },
  {
    id: 10,
    type: "mcq",
    question: "What is an LLM's context window?",
    options: [
      "The physical size of the computer screen",
      "The amount of input and context the model can process within a request",
      "The number of users on a website",
      "A Python loop"
    ],
    correctAnswer: "The amount of input and context the model can process within a request",
    marks: 1
  },
  {
    id: 11,
    type: "mcq",
    question: "What is an AI hallucination?",
    options: [
      "An AI response that presents incorrect or unsupported information as if it were true",
      "A correct database query",
      "A type of computer hardware",
      "A Python variable"
    ],
    correctAnswer: "An AI response that presents incorrect or unsupported information as if it were true",
    marks: 1
  },
  {
    id: 12,
    type: "mcq",
    question: "What does RAG stand for?",
    options: [
      "Retrieval-Augmented Generation",
      "Random AI Generation",
      "Repeated Answer Generator",
      "Retrieval Application Gateway"
    ],
    correctAnswer: "Retrieval-Augmented Generation",
    marks: 1
  },
  {
    id: 13,
    type: "mcq",
    question: "What generally happens first when a user asks a question in a basic RAG system?",
    options: [
      "The application retrieves relevant information from a knowledge source",
      "The entire model is trained from scratch",
      "The database is deleted",
      "The answer is automatically guaranteed to be correct"
    ],
    correctAnswer: "The application retrieves relevant information from a knowledge source",
    marks: 1
  },
  {
    id: 14,
    type: "mcq",
    question: "What are embeddings commonly used for in a RAG system?",
    options: [
      "Representing text as numerical vectors for similarity-based retrieval",
      "Formatting website buttons",
      "Compressing computer screens",
      "Replacing every programming language"
    ],
    correctAnswer: "Representing text as numerical vectors for similarity-based retrieval",
    marks: 1
  },
  {
    id: 15,
    type: "mcq",
    question: "Which is a suitable use case for RAG?",
    options: [
      "Answering student questions using relevant passages from a college handbook",
      "Increasing the physical size of a computer",
      "Changing a keyboard layout",
      "Automatically guaranteeing that every AI answer is correct"
    ],
    correctAnswer: "Answering student questions using relevant passages from a college handbook",
    marks: 1
  },
  {
    id: 16,
    type: "code",
    question: "### Problem statement\nWrite a Python program that accepts a topic from the user and constructs a structured prompt.\n\nThe generated prompt must contain:\n1. Role\n2. Context\n3. Task\n4. Output format\n\n### Requirements\n- Accept a topic using `input()`.\n- Store the role, context, task, and output format in variables.\n- Construct a complete prompt using string formatting.\n- Display the final prompt using `print()`.\n\n### Example input\n```text\nEnter a topic: Machine Learning\n```\n\n### Expected output\n```text\nROLE:\nYou are a helpful AI teacher.\n\nCONTEXT:\nThe learner is a beginner.\n\nTASK:\nExplain Machine Learning with a real-world example.\n\nOUTPUT FORMAT:\nProvide a definition, one example, and three key points.\n```\nThe topic should be dynamically inserted into the task portion of the prompt.",
    starterCode: "try:\n    # Accept topic from user\n    topic = input(\"Enter a topic: \")\n    \n    # Define prompt components\n    role = \"You are a helpful AI teacher.\"\n    context = \"The learner is a beginner.\"\n    \n    # Construct the task using the topic\n    task = f\"Explain {topic} with a real-world example.\"\n    \n    # Define output format\n    output_format = \"Provide a definition, one example, and three key points.\"\n    \n    # Print the full structured prompt\n    \n    \nexcept Exception as e:\n    print(f\"An error occurred: {e}\")",
    marks: 2
  },
  {
    id: 17,
    type: "code",
    question: "### Problem statement\nCreate a simple Python program that searches a collection of predefined documents and returns the most relevant document for a user's query.\n\n### Sample documents\n```python\ndocuments = [\n    \"Python is a programming language.\",\n    \"Machine Learning enables systems to learn patterns from data.\",\n    \"Generative AI can create text, images, and code.\",\n    \"RAG retrieves relevant documents to provide context to an AI model.\"\n]\n```\n\n### Requirements\n1. Store the documents in a Python list.\n2. Accept a search query from the user.\n3. Compare query words with document words using a simple similarity approach.\n4. Display the best matching document.\n5. Handle cases where no useful match is found.\n\n### Example input\n```text\nEnter your query: How does RAG retrieve information?\n```\n\n### Expected output\n```text\nMost Relevant Document:\nRAG retrieves relevant documents to provide context to an AI model.\n```",
    starterCode: "documents = [\n    \"Python is a programming language.\",\n    \"Machine Learning enables systems to learn patterns from data.\",\n    \"Generative AI can create text, images, and code.\",\n    \"RAG retrieves relevant documents to provide context to an AI model.\"\n]\n\ntry:\n    query = input(\"Enter your query: \").lower()\n    query_words = query.split()\n    \n    best_match = None\n    max_overlap = 0\n    \n    # Loop through documents to find the best match based on word overlap\n    for doc in documents:\n        doc_words = doc.lower().split()\n        # Calculate how many words match\n        \n        \n        \n    if max_overlap > 0:\n        print(\"Most Relevant Document:\")\n        print(best_match)\n    else:\n        print(\"No relevant document found.\")\n        \nexcept Exception as e:\n    print(f\"An error occurred: {e}\")",
    marks: 2
  }
];
