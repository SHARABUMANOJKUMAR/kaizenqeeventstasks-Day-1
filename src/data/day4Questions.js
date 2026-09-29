export const day4Questions = [
  {
    id: 1,
    type: "mcq",
    question: "What is a **Token** in the context of Large Language Models (LLMs)?",
    options: [
      "A security password used to access the AI API",
      "A basic unit of text (such as a word or sub-word piece) processed by the model",
      "A database primary key",
      "A cryptographic hash created per user prompt"
    ],
    correctAnswer: "A basic unit of text (such as a word or sub-word piece) processed by the model",
    marks: 1
  },
  {
    id: 2,
    type: "mcq",
    question: "What is **Zero-Shot Prompting**?",
    options: [
      "Asking the model to perform a task without giving any solved examples in the prompt",
      "Providing 10 or more example inputs and outputs before asking the question",
      "Fine-tuning model weights using gradient descent on zero data",
      "Running an LLM with temperature set to zero"
    ],
    correctAnswer: "Asking the model to perform a task without giving any solved examples in the prompt",
    marks: 1
  },
  {
    id: 3,
    type: "mcq",
    question: "What is the primary benefit of **Few-Shot Prompting**?",
    options: [
      "It reduces API token costs to zero",
      "It guides the model to adopt a specific reasoning style, tone, or format through demonstration examples",
      "It permanently updates the foundational model weights",
      "It forces the model to run on local CPU rather than GPU"
    ],
    correctAnswer: "It guides the model to adopt a specific reasoning style, tone, or format through demonstration examples",
    marks: 1
  },
  {
    id: 4,
    type: "mcq",
    question: "In chat completion APIs (such as OpenAI or Anthropic), what role does the **System** message play?",
    options: [
      "It stores the user's credit card billing information",
      "It sets high-level instructions, behavior, persona, and constraints for the AI assistant",
      "It displays errors when the server goes down",
      "It contains the end-user's final prompt only"
    ],
    correctAnswer: "It sets high-level instructions, behavior, persona, and constraints for the AI assistant",
    marks: 1
  },
  {
    id: 5,
    type: "mcq",
    question: "What parameter controls the randomness and creativity of an LLM's output?",
    options: [
      "`top_k_tokens`",
      "`temperature`",
      "`frequency_penalty`",
      "`context_length`"
    ],
    correctAnswer: "`temperature`",
    marks: 1
  },
  {
    id: 6,
    type: "mcq",
    question: "Why should API keys NEVER be hardcoded directly into frontend JavaScript or public GitHub repositories?",
    options: [
      "It increases the bundle size of the web application",
      "Anyone who views the source code can steal your credentials and consume your quota or incur billing charges",
      "APIs reject requests that don't load keys from a database",
      "Vite will fail to compile if an API key is detected"
    ],
    correctAnswer: "Anyone who views the source code can steal your credentials and consume your quota or incur billing charges",
    marks: 1
  },
  {
    id: 7,
    type: "mcq",
    question: "Which Python package is standard for loading secret keys from a `.env` file into `os.environ`?",
    options: [
      "`python-dotenv`",
      "`env-loader-py`",
      "`os-secret`",
      "`py-credentials`"
    ],
    correctAnswer: "`python-dotenv`",
    marks: 1
  },
  {
    id: 8,
    type: "mcq",
    question: "How is multi-turn conversation memory maintained in stateless REST API calls to an LLM?",
    options: [
      "The LLM server remembers every user IP address indefinitely",
      "The client sends the entire history of `system`, `user`, and `assistant` messages in each request",
      "The browser cookies automatically store model weights",
      "By setting `session=True` in the HTTP headers"
    ],
    correctAnswer: "The client sends the entire history of `system`, `user`, and `assistant` messages in each request",
    marks: 1
  },
  {
    id: 9,
    type: "mcq",
    question: "What is **Context Injection** in Generative AI?",
    options: [
      "Inserting relevant domain knowledge or user data directly into the prompt so the LLM can answer accurately",
      "SQL injection attack performed against vector databases",
      "Changing the tokenizer vocabulary at runtime",
      "Clearing the conversation window when tokens exceed 4096"
    ],
    correctAnswer: "Inserting relevant domain knowledge or user data directly into the prompt so the LLM can answer accurately",
    marks: 1
  },
  {
    id: 10,
    type: "mcq",
    question: "When you want an LLM to reliably return structured JSON instead of unstructured prose, which prompt strategy is most effective?",
    options: [
      "Setting `temperature=2.0`",
      "Providing the exact JSON schema and explicitly instructing 'Output strictly valid JSON with no markdown fences'",
      "Writing the entire prompt in capital letters",
      "Asking the model 5 times in a loop"
    ],
    correctAnswer: "Providing the exact JSON schema and explicitly instructing 'Output strictly valid JSON with no markdown fences'",
    marks: 1
  },
  {
    id: 11,
    type: "mcq",
    question: "What is an **LLM Hallucination**?",
    options: [
      "When the server runs out of GPU VRAM",
      "When the model generates plausible-sounding but factually incorrect or fabricated information",
      "When the API returns HTTP 429 Too Many Requests",
      "When the output language is different from English"
    ],
    correctAnswer: "When the model generates plausible-sounding but factually incorrect or fabricated information",
    marks: 1
  },
  {
    id: 12,
    type: "mcq",
    question: "What is **Role Prompting**?",
    options: [
      "Assigning the LLM a specific persona or expert identity (e.g., 'You are a Senior Python Tech Lead')",
      "Restricting API calls to specific authenticated roles in Active Directory",
      "Allowing multiple users to edit the same prompt simultaneously",
      "Switching between CPU and GPU roles during inference"
    ],
    correctAnswer: "Assigning the LLM a specific persona or expert identity (e.g., 'You are a Senior Python Tech Lead')",
    marks: 1
  },
  {
    id: 13,
    type: "mcq",
    question: "What is a **Context Window**?",
    options: [
      "The maximum total number of tokens (input prompt + output generation) the model can process in a single request",
      "The popup window in VS Code showing documentation",
      "The duration in seconds an API call can stay open before timeout",
      "The width and height of the chatbot UI on screen"
    ],
    correctAnswer: "The maximum total number of tokens (input prompt + output generation) the model can process in a single request",
    marks: 1
  },
  {
    id: 14,
    type: "mcq",
    question: "What is **Chain-of-Thought (CoT)** prompting?",
    options: [
      "Encouraging the model to show step-by-step intermediate reasoning before producing the final answer",
      "Connecting multiple cloud GPUs in a linked network",
      "Calling three different models simultaneously in a chain",
      "Encoding text into a blockchain ledger"
    ],
    correctAnswer: "Encouraging the model to show step-by-step intermediate reasoning before producing the final answer",
    marks: 1
  },
  {
    id: 15,
    type: "mcq",
    question: "What does **RAG** stand for in modern AI architecture?",
    options: [
      "Retrieval-Augmented Generation",
      "Rapid Artificial Generalization",
      "Real-time Automated Gradient",
      "Recursive Attention Graph"
    ],
    correctAnswer: "Retrieval-Augmented Generation",
    marks: 1
  },
  {
    id: 16,
    type: "mcq",
    question: "Logic: You are building a conversation memory. If the maximum context history allowed is 6 messages, what does `history[-6:]` do?",
    options: [
      "Keeps the earliest 6 messages and drops the newest ones",
      "Keeps the most recent 6 messages and trims older turns",
      "Returns a list containing numbers from 1 to 6",
      "Raises an `IndexError` if history has fewer than 6 items"
    ],
    correctAnswer: "Keeps the most recent 6 messages and trims older turns",
    marks: 1
  },
  {
    id: 17,
    type: "mcq",
    question: "Logic: If a prompt has 500 input tokens and generates 250 output tokens, with pricing $1.00 / 1M input tokens and $2.00 / 1M output tokens, what is the cost of 1,000 such requests?",
    options: [
      "$1.00",
      "$2.50",
      "$0.50",
      "$10.00"
    ],
    correctAnswer: "$1.00",
    marks: 1
  },
  {
    id: 18,
    type: "code",
    question: "Write a Python function `build_prompt_template(role, task, user_query)` that returns a formatted prompt string inserting the given arguments using Python f-strings.",
    starterCode: "def build_prompt_template(role, task, user_query):\n    # Return formatted prompt: \"You are a {role}. Your task is to {task}. User says: {user_query}\"\n    pass\n",
    marks: 2
  },
  {
    id: 19,
    type: "code",
    question: "Write a Python function `add_message(history, role, content)` that appends a dictionary `{'role': role, 'content': content}` to the conversation `history` list, and returns the updated list. If `history` is `None`, start with a new list.",
    starterCode: "def add_message(history, role, content):\n    # Write your code here\n    pass\n",
    marks: 2
  },
  {
    id: 20,
    type: "code",
    question: "Write a Python function `extract_json_from_llm_response(text)` that extracts and parses JSON content from a text string that may contain markdown fences (e.g. ````json { ... } ````). It should return the parsed dictionary, or `{}` if parsing fails.",
    starterCode: "import json\n\ndef extract_json_from_llm_response(text):\n    # Write your code here\n    pass\n",
    marks: 2
  },
  {
    id: 21,
    type: "code",
    question: "Write a Python function `trim_conversation_history(history, max_messages=10)` that retains the first message (usually the system instruction) and the most recent `max_messages - 1` messages from the rest of the list if the total length exceeds `max_messages`.",
    starterCode: "def trim_conversation_history(history, max_messages=10):\n    # Write your code here\n    pass\n",
    marks: 2
  }
];
