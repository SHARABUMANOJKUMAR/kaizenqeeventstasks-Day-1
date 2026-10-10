export const genaiDay3Questions = [
  {
    id: 1,
    type: "mcq",
    question: "What is a text embedding?",
    options: [
      "A numerical representation of text",
      "A database password",
      "A programming language",
      "A website layout"
    ],
    correctAnswer: "A numerical representation of text",
    marks: 1
  },
  {
    id: 2,
    type: "mcq",
    question: "Why are embeddings useful in Generative AI?",
    options: [
      "They only change font sizes",
      "They help represent semantic meaning numerically",
      "They replace every database",
      "They compile Python programs"
    ],
    correctAnswer: "They help represent semantic meaning numerically",
    marks: 1
  },
  {
    id: 3,
    type: "mcq",
    question: "What does semantic similarity measure?",
    options: [
      "Whether two files have the same name",
      "Whether two texts have similar meaning",
      "The size of a computer screen",
      "The number of variables in a program"
    ],
    correctAnswer: "Whether two texts have similar meaning",
    marks: 1
  },
  {
    id: 4,
    type: "mcq",
    question: "What is chunking in document processing?",
    options: [
      "Deleting all document content",
      "Dividing a document into smaller pieces",
      "Encrypting a database",
      "Converting Python into Java"
    ],
    correctAnswer: "Dividing a document into smaller pieces",
    marks: 1
  },
  {
    id: 5,
    type: "mcq",
    question: "Why do we chunk documents before indexing them for RAG?",
    options: [
      "To make documents impossible to search",
      "To create manageable pieces for retrieval",
      "To remove the need for relevant information",
      "To increase image resolution"
    ],
    correctAnswer: "To create manageable pieces for retrieval",
    marks: 1
  },
  {
    id: 6,
    type: "mcq",
    question: "What is chunk overlap?",
    options: [
      "Repeating part of the text between neighboring chunks",
      "Removing all repeated words from a document",
      "Combining all databases into one",
      "Changing text into an image"
    ],
    correctAnswer: "Repeating part of the text between neighboring chunks",
    marks: 1
  },
  {
    id: 7,
    type: "mcq",
    question: "What can happen if chunks are too small?",
    options: [
      "They may lose important context",
      "They always become more accurate",
      "The vector database disappears",
      "The LLM stops using tokens"
    ],
    correctAnswer: "They may lose important context",
    marks: 1
  },
  {
    id: 8,
    type: "mcq",
    question: "What is a vector database commonly used for in RAG?",
    options: [
      "Storing and retrieving vector representations",
      "Designing presentation slides",
      "Editing videos",
      "Replacing an operating system"
    ],
    correctAnswer: "Storing and retrieving vector representations",
    marks: 1
  },
  {
    id: 9,
    type: "mcq",
    question: "What is similarity search?",
    options: [
      "Finding items similar to a query representation",
      "Searching only by file size",
      "Sorting files alphabetically only",
      "Searching for syntax errors in Python"
    ],
    correctAnswer: "Finding items similar to a query representation",
    marks: 1
  },
  {
    id: 10,
    type: "mcq",
    question: "Which is an example of a vector database?",
    options: [
      "Chroma",
      "Microsoft Paint",
      "Notepad",
      "PowerPoint"
    ],
    correctAnswer: "Chroma",
    marks: 1
  },
  {
    id: 11,
    type: "mcq",
    question: "What does RAG stand for?",
    options: [
      "Retrieval-Augmented Generation",
      "Random Automated Graphics",
      "Rapid Application Group",
      "Repeated Answer Generation"
    ],
    correctAnswer: "Retrieval-Augmented Generation",
    marks: 1
  },
  {
    id: 12,
    type: "mcq",
    question: "What is the main purpose of the retrieval stage in RAG?",
    options: [
      "Find relevant information for the user's query",
      "Delete the knowledge base",
      "Train the computer's operating system",
      "Generate unrelated answers"
    ],
    correctAnswer: "Find relevant information for the user's query",
    marks: 1
  },
  {
    id: 13,
    type: "mcq",
    question: "In a typical RAG pipeline, what happens after relevant document chunks are retrieved?",
    options: [
      "Relevant context is provided to the LLM to help generate an answer",
      "The documents are always deleted",
      "The user's question is ignored",
      "The vector database becomes a frontend"
    ],
    correctAnswer: "Relevant context is provided to the LLM to help generate an answer",
    marks: 1
  },
  {
    id: 14,
    type: "mcq",
    question: "Why are embeddings generated for document chunks and user queries?",
    options: [
      "To enable similarity-based retrieval",
      "To create HTML buttons",
      "To change the programming language",
      "To increase internet speed"
    ],
    correctAnswer: "To enable similarity-based retrieval",
    marks: 1
  },
  {
    id: 15,
    type: "mcq",
    question: "A college wants a chatbot to answer questions using its student handbook. Which approach is suitable?",
    options: [
      "RAG using the handbook as a knowledge source",
      "Randomly generating answers without documents",
      "Using CSS alone",
      "Sorting handbook pages by color"
    ],
    correctAnswer: "RAG using the handbook as a knowledge source",
    marks: 1
  },
  {
    id: 16,
    type: "code",
    question: "### Problem statement\nWrite a Python program that accepts a paragraph or document and divides it into smaller chunks using a configurable word count.\n\n### Requirements\n- Accept document text as input.\n- Accept a maximum number of words per chunk.\n- Split the document into chunks.\n- Display each chunk with its chunk number and word count.\n- Handle empty input and invalid chunk sizes.\n- Keep the code beginner-friendly and well-commented.\n\n### Sample input\n```text\nDocument: AI helps computers perform tasks. Embeddings represent text as vectors. Chunking splits documents into smaller pieces.\nChunk size: 6\n```\n\n### Expected behavior\nDisplay the document as numbered chunks, each containing no more than six words.\n\n**Note:** This is a basic word-based chunking demonstration, not a complete production document-processing pipeline.",
    starterCode: "try:\n    # Accept document text\n    document = input(\"Enter document text: \")\n    \n    # Accept chunk size\n    chunk_size = int(input(\"Enter chunk size (words): \"))\n    \n    if not document.strip():\n        print(\"Document is empty.\")\n    elif chunk_size <= 0:\n        print(\"Chunk size must be greater than 0.\")\n    else:\n        # Split document into words\n        words = document.split()\n        \n        # Create and display chunks\n        chunk_number = 1\n        for i in range(0, len(words), chunk_size):\n            chunk_words = words[i:i + chunk_size]\n            chunk_text = \" \".join(chunk_words)\n            print(f\"Chunk {chunk_number} ({len(chunk_words)} words): {chunk_text}\")\n            chunk_number += 1\n            \nexcept ValueError:\n    print(\"Invalid input for chunk size.\")\nexcept Exception as e:\n    print(f\"An error occurred: {e}\")",
    marks: 2
  },
  {
    id: 17,
    type: "code",
    question: "### Problem statement\nBuild a simple Python program that retrieves the most relevant document from a predefined knowledge base based on a user's question.\n\n### Requirements\n- Create a list of at least five sample documents about AI, embeddings, chunking, vector databases, and RAG.\n- Accept a user question.\n- Compare the question with document text using a simple, deterministic word-overlap scoring method.\n- Display the best-matching document and its relevance score.\n- Handle empty queries and cases where no meaningful words match.\n- Explain in code comments how this represents the retrieval stage of RAG.\n\n### Important limitation\nThis is an educational retrieval simulation. It does not use real embedding models, a vector database, or an LLM. Do not label it as a complete RAG system.",
    starterCode: "documents = [\n    \"AI helps computers perform tasks simulating human intelligence.\",\n    \"Embeddings represent text as dense numerical vectors capturing meaning.\",\n    \"Chunking splits large documents into smaller, more manageable pieces.\",\n    \"A vector database stores and retrieves high-dimensional vector representations efficiently.\",\n    \"RAG retrieves relevant document context to help an LLM answer accurately.\"\n]\n\ntry:\n    query = input(\"Enter your question: \").lower()\n    if not query.strip():\n        print(\"Query cannot be empty.\")\n    else:\n        query_words = set(query.split())\n        \n        best_match = None\n        highest_score = 0\n        \n        # Simulate RAG retrieval stage by finding document with most overlapping words\n        for doc in documents:\n            doc_words = set(doc.lower().split())\n            score = len(query_words.intersection(doc_words))\n            \n            if score > highest_score:\n                highest_score = score\n                best_match = doc\n                \n        if highest_score > 0:\n            print(\"\\n--- Retrieval Results ---\")\n            print(f\"Best matching document (Score: {highest_score}):\")\n            print(best_match)\n            print(\"\\nNote: This simulates the retrieval stage of RAG without using actual embeddings or an LLM.\")\n        else:\n            print(\"No relevant document found for your query.\")\n            \nexcept Exception as e:\n    print(f\"An error occurred: {e}\")",
    marks: 2
  }
];
