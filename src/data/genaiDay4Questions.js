export const genaiDay4Questions = [
  // PART A: 15 MCQs
  {
    id: "genai_d4_q1",
    type: "mcq",
    question: "What is LangChain primarily used for?",
    options: [
      "Building applications powered by language models",
      "Designing computer hardware",
      "Editing videos",
      "Creating operating systems"
    ],
    correctAnswer: "Building applications powered by language models",
    explanation: "LangChain is a framework designed to simplify the creation of applications using large language models.",
    marks: 1
  },
  {
    id: "genai_d4_q2",
    type: "mcq",
    question: "What is a prompt template in LangChain?",
    options: [
      "A reusable structure for creating prompts",
      "A database backup",
      "A CSS animation",
      "A network cable"
    ],
    correctAnswer: "A reusable structure for creating prompts",
    explanation: "Prompt templates provide a structured way to pass dynamic user inputs into prompts for LLMs.",
    marks: 1
  },
  {
    id: "genai_d4_q3",
    type: "mcq",
    question: "What is the role of a language model in an LLM application?",
    options: [
      "To process input and generate model outputs",
      "To host images only",
      "To replace every database",
      "To create HTML layouts automatically in every application"
    ],
    correctAnswer: "To process input and generate model outputs",
    explanation: "Language models act as the reasoning engine to process textual inputs and generate coherent textual responses.",
    marks: 1
  },
  {
    id: "genai_d4_q4",
    type: "mcq",
    question: "What is a tool in an AI application?",
    options: [
      "A capability that allows an AI workflow to perform a defined operation",
      "A decorative website icon",
      "A programming-language comment",
      "A database table name"
    ],
    correctAnswer: "A capability that allows an AI workflow to perform a defined operation",
    explanation: "Tools are interfaces that an AI agent uses to interact with external services, like searching the web or querying a database.",
    marks: 1
  },
  {
    id: "genai_d4_q5",
    type: "mcq",
    question: "What is LangGraph designed to help developers build?",
    options: [
      "Stateful, multi-step workflows for AI applications",
      "Image-editing software only",
      "Spreadsheet themes",
      "Operating-system drivers"
    ],
    correctAnswer: "Stateful, multi-step workflows for AI applications",
    explanation: "LangGraph is an extension of LangChain specifically designed for building robust, stateful, multi-actor AI applications and cyclic graphs.",
    marks: 1
  },
  {
    id: "genai_d4_q6",
    type: "mcq",
    question: "What is a node in a LangGraph workflow?",
    options: [
      "A step that performs an operation in the workflow",
      "A payment receipt",
      "A browser bookmark",
      "A CSS color"
    ],
    correctAnswer: "A step that performs an operation in the workflow",
    explanation: "Nodes represent computational steps or functions that run as part of the state graph.",
    marks: 1
  },
  {
    id: "genai_d4_q7",
    type: "mcq",
    question: "What does an edge represent in LangGraph?",
    options: [
      "A connection that determines the next workflow step",
      "A user password",
      "A file extension",
      "A text font"
    ],
    correctAnswer: "A connection that determines the next workflow step",
    explanation: "Edges define the control flow, routing the application from one node to the next based on logic or direct links.",
    marks: 1
  },
  {
    id: "genai_d4_q8",
    type: "mcq",
    question: "What is state used for in LangGraph?",
    options: [
      "Holding information that workflow steps can read or update",
      "Changing a monitor's brightness",
      "Storing CSS styles only",
      "Installing Python packages automatically"
    ],
    correctAnswer: "Holding information that workflow steps can read or update",
    explanation: "State represents the shared memory passed between nodes, allowing the workflow to maintain context across steps.",
    marks: 1
  },
  {
    id: "genai_d4_q9",
    type: "mcq",
    question: "What is a conditional edge?",
    options: [
      "A connection that selects the next step based on a condition",
      "A connection that always deletes the workflow",
      "A database password rule",
      "A tool for drawing images"
    ],
    correctAnswer: "A connection that selects the next step based on a condition",
    explanation: "Conditional edges use a routing function to dynamically decide which node should execute next based on the current state.",
    marks: 1
  },
  {
    id: "genai_d4_q10",
    type: "mcq",
    question: "Which statement best describes LangChain and LangGraph?",
    options: [
      "LangChain provides components for LLM applications, while LangGraph helps orchestrate stateful workflows",
      "They are both spreadsheet applications",
      "LangGraph is a programming language that replaces Python",
      "They are exclusively website design tools"
    ],
    correctAnswer: "LangChain provides components for LLM applications, while LangGraph helps orchestrate stateful workflows",
    explanation: "LangChain provides the primitives (models, prompt templates, tools), while LangGraph orchestrates them into robust, stateful workflows.",
    marks: 1
  },
  {
    id: "genai_d4_q11",
    type: "mcq",
    question: "What is n8n?",
    options: [
      "A workflow automation platform",
      "A Python data type",
      "A vector embedding",
      "An operating system"
    ],
    correctAnswer: "A workflow automation platform",
    explanation: "n8n is a node-based workflow automation platform that connects various APIs, databases, and AI services.",
    marks: 1
  },
  {
    id: "genai_d4_q12",
    type: "mcq",
    question: "What is the purpose of a trigger in n8n?",
    options: [
      "To start a workflow when a configured event or condition occurs",
      "To delete all workflow nodes",
      "To change the language of a website",
      "To generate embeddings automatically in every workflow"
    ],
    correctAnswer: "To start a workflow when a configured event or condition occurs",
    explanation: "Triggers are specialized nodes that initiate an n8n workflow, such as receiving a webhook or a schedule firing.",
    marks: 1
  },
  {
    id: "genai_d4_q13",
    type: "mcq",
    question: "What is an n8n node?",
    options: [
      "A step that performs an action or processes data in a workflow",
      "A programming-language keyword",
      "A computer monitor",
      "A browser tab"
    ],
    correctAnswer: "A step that performs an action or processes data in a workflow",
    explanation: "Nodes are the fundamental building blocks of n8n workflows, each performing a specific task like an API request or data transformation.",
    marks: 1
  },
  {
    id: "genai_d4_q14",
    type: "mcq",
    question: "Which is a suitable example of n8n automation?",
    options: [
      "Sending an email when a new registration is received",
      "Manually repeating every task without a workflow",
      "Replacing all application security checks",
      "Generating random data without a purpose"
    ],
    correctAnswer: "Sending an email when a new registration is received",
    explanation: "n8n excels at connecting different systems, like listening for new registrations and automatically triggering an email notification.",
    marks: 1
  },
  {
    id: "genai_d4_q15",
    type: "mcq",
    question: "How can LangChain, LangGraph, and n8n work together?",
    options: [
      "LangChain can provide LLM components, LangGraph can orchestrate AI steps, and n8n can connect workflows and external services",
      "All three must be used as programming languages",
      "They only work for image editing",
      "They eliminate the need for testing and security"
    ],
    correctAnswer: "LangChain can provide LLM components, LangGraph can orchestrate AI steps, and n8n can connect workflows and external services",
    explanation: "They complement each other nicely: LangChain handles LLM abstraction, LangGraph structures complex AI reasoning, and n8n automates external API and event interactions.",
    marks: 1
  },

  // PART B: Coding Challenges
  {
    id: "genai_d4_q16",
    type: "programming",
    question: "Coding Challenge 1: Mini AI Workflow Simulator",
    description: "Build a Python program that simulates a simple multi-step AI workflow.\n\n**Requirements:**\n- Accept a user question.\n- Store the question and workflow status in a state dictionary.\n- Implement separate functions for input validation, question classification, and response generation.\n- Use conditional logic to route questions into categories such as `technical`, `general`, or `unknown`.\n- Update the state as each step completes.\n- Display the final response and workflow status.\n- Handle empty input.\n- Include comments explaining how functions and state relate to a LangGraph-style workflow.\n\n*(This is a simulation of workflow concepts. Do not claim it uses actual LangGraph or a real LLM.)*",
    language: "python",
    initialCode: `# Coding Challenge 1: Mini AI Workflow Simulator
# Implement your multi-step AI workflow simulator here

def validate_input(state):
    pass

def classify_question(state):
    pass

def generate_response(state):
    pass

def main():
    pass

if __name__ == "__main__":
    main()
`,
    marks: 10
  },
  {
    id: "genai_d4_q17",
    type: "programming",
    question: "Coding Challenge 2: Conditional Automation Simulator",
    description: "Build a Python program that simulates an n8n-style workflow for processing event registrations.\n\n**Requirements:**\n- Accept a student's name, email, and payment status.\n- Validate the required information.\n- Route successful payments to a `registration_confirmed` status.\n- Route pending payments to a `payment_pending` status.\n- Route failed payments to a `payment_failed` status.\n- Print the appropriate notification message for each case.\n- Separate the workflow into reusable functions.\n- Handle invalid input and missing fields.\n- Include at least five test cases.\n\n*(This is an educational Python simulation, not a real n8n integration.)*",
    language: "python",
    initialCode: `# Coding Challenge 2: Conditional Automation Simulator
# Implement your n8n-style event registration workflow here

def validate_registration(registration):
    pass

def route_payment(registration):
    pass

def send_notification(registration):
    pass

def run_workflow(registration):
    pass

def run_tests():
    pass

if __name__ == "__main__":
    run_tests()
`,
    marks: 10
  }
];
