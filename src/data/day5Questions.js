export const day5Questions = [
  {
    id: 1,
    type: "mcq",
    question: "What is **Streamlit** primarily used for in Python development?",
    options: [
      "Rapidly building interactive web UIs and dashboards for data and AI apps using pure Python",
      "Compiling Python into native mobile iOS applications",
      "Replacing SQL databases in enterprise environments",
      "Writing operating system drivers in Python"
    ],
    correctAnswer: "Rapidly building interactive web UIs and dashboards for data and AI apps using pure Python",
    marks: 1
  },
  {
    id: 2,
    type: "mcq",
    question: "Which Streamlit command is used to render a text input box where users can type queries or prompts?",
    options: [
      "`st.text_input('Enter prompt')`",
      "`st.prompt_box('Enter prompt')`",
      "`st.create_field('Enter prompt')`",
      "`st.get_text('Enter prompt')`"
    ],
    correctAnswer: "`st.text_input('Enter prompt')`",
    marks: 1
  },
  {
    id: 3,
    type: "mcq",
    question: "How do you allow users to upload files (such as PDFs, CSVs, or images) in a Streamlit app?",
    options: [
      "`st.file_uploader('Upload file')`",
      "`st.open_file_dialog()`",
      "`st.file_picker()`",
      "`st.drag_and_drop()`"
    ],
    correctAnswer: "`st.file_uploader('Upload file')`",
    marks: 1
  },
  {
    id: 4,
    type: "mcq",
    question: "Which Streamlit feature preserves state (such as chat messages or authentication) across script reruns?",
    options: [
      "`st.session_state`",
      "`st.cache_global`",
      "`st.persistent_vars`",
      "`st.cookies`"
    ],
    correctAnswer: "`st.session_state`",
    marks: 1
  },
  {
    id: 5,
    type: "mcq",
    question: "What is the purpose of the `.gitignore` file in a Git repository?",
    options: [
      "To prevent sensitive files (like `.env`, `__pycache__`, and credentials) from being committed and pushed",
      "To delete files automatically from your local hard drive",
      "To list other developers who are ignored by the project",
      "To format Python code before committing"
    ],
    correctAnswer: "To prevent sensitive files (like `.env`, `__pycache__`, and credentials) from being committed and pushed",
    marks: 1
  },
  {
    id: 6,
    type: "mcq",
    question: "Which command initialises a brand-new Git repository in your current working directory?",
    options: [
      "`git init`",
      "`git create`",
      "`git start`",
      "`git setup`"
    ],
    correctAnswer: "`git init`",
    marks: 1
  },
  {
    id: 7,
    type: "mcq",
    question: "When deploying a Python Streamlit app to Streamlit Community Cloud or Render, which file lists all third-party libraries needed to run the app?",
    options: [
      "`requirements.txt`",
      "`packages.json`",
      "`libs.config`",
      "`python_modules.txt`"
    ],
    correctAnswer: "`requirements.txt`",
    marks: 1
  },
  {
    id: 8,
    type: "mcq",
    question: "How should secrets and API keys be configured when deploying a Streamlit application to the cloud?",
    options: [
      "Using Streamlit Secrets management (`st.secrets`) or environment variables, never hardcoded in source code",
      "Adding them directly to the `README.md` file",
      "Committing an unencrypted `.env` file to the GitHub repository",
      "Passing them as cleartext URL query parameters"
    ],
    correctAnswer: "Using Streamlit Secrets management (`st.secrets`) or environment variables, never hardcoded in source code",
    marks: 1
  },
  {
    id: 9,
    type: "mcq",
    question: "Which Git command is used to record staged changes to the repository history?",
    options: [
      "`git commit -m \"message\"`",
      "`git stage -m \"message\"`",
      "`git save`",
      "`git push`"
    ],
    correctAnswer: "`git commit -m \"message\"`",
    marks: 1
  },
  {
    id: 10,
    type: "mcq",
    question: "What Streamlit container is commonly used to create interactive chat applications with assistant/user bubbles?",
    options: [
      "`st.chat_message()`",
      "`st.message_box()`",
      "`st.conversation_bubble()`",
      "`st.dialog_chat()`"
    ],
    correctAnswer: "`st.chat_message()`",
    marks: 1
  },
  {
    id: 11,
    type: "mcq",
    question: "What is the purpose of `st.cache_data` in Streamlit?",
    options: [
      "To cache the output of expensive data loading or computation so it doesn't re-run on every user interaction",
      "To delete temporary browser files",
      "To compress images before display",
      "To restart the server automatically"
    ],
    correctAnswer: "To cache the output of expensive data loading or computation so it doesn't re-run on every user interaction",
    marks: 1
  },
  {
    id: 12,
    type: "mcq",
    question: "What does the `git clone <url>` command do?",
    options: [
      "Downloads an existing remote GitHub repository to your local machine",
      "Uploads your local files to GitHub",
      "Deletes an existing branch",
      "Merges two pull requests"
    ],
    correctAnswer: "Downloads an existing remote GitHub repository to your local machine",
    marks: 1
  },
  {
    id: 13,
    type: "mcq",
    question: "In a professional software project, what is the primary role of the `README.md` file?",
    options: [
      "To provide clear instructions on what the project is, how to install dependencies, setup `.env`, and run the app",
      "To store database passwords",
      "To serve as the production web server",
      "To store Python bytecode"
    ],
    correctAnswer: "To provide clear instructions on what the project is, how to install dependencies, setup `.env`, and run the app",
    marks: 1
  },
  {
    id: 14,
    type: "mcq",
    question: "Which Streamlit function easily displays interactive tabular data or Pandas DataFrames?",
    options: [
      "`st.dataframe(df)`",
      "`st.show_grid(df)`",
      "`st.render_sheet(df)`",
      "`st.print_table(df)`"
    ],
    correctAnswer: "`st.dataframe(df)`",
    marks: 1
  },
  {
    id: 15,
    type: "mcq",
    question: "When presenting an AI hackathon project to judges, what is the most important element to lead with?",
    options: [
      "The problem being solved, the real-world value proposition, and a working live demo",
      "Reading 500 lines of backend boilerplate code line-by-line",
      "Complaining about cloud server latency",
      "Showing the package installation logs"
    ],
    correctAnswer: "The problem being solved, the real-world value proposition, and a working live demo",
    marks: 1
  },
  {
    id: 16,
    type: "mcq",
    question: "Logic: If `st.session_state` is a dictionary-like object, what is the standard idiom to initialize `'messages'` only once?",
    options: [
      "`if 'messages' not in st.session_state: st.session_state.messages = []`",
      "`st.session_state.messages = []` on line 1 of every rerun",
      "`st.reset_state('messages')`",
      "`while not st.session_state: create('messages')`"
    ],
    correctAnswer: "`if 'messages' not in st.session_state: st.session_state.messages = []`",
    marks: 1
  },
  {
    id: 17,
    type: "mcq",
    question: "Logic: Which command sequence properly commits changes and pushes to a remote repository's main branch?",
    options: [
      "`git add .` → `git commit -m \"...\"` → `git push origin main`",
      "`git push` → `git add .` → `git commit`",
      "`git init` → `git push origin main`",
      "`git clone` → `git pull`"
    ],
    correctAnswer: "`git add .` → `git commit -m \"...\"` → `git push origin main`",
    marks: 1
  },
  {
    id: 18,
    type: "code",
    question: "Write a Python function `generate_requirements_txt(packages)` that takes a dictionary of package names and version strings (e.g. `{'streamlit': '1.32.0', 'pandas': '2.2.0'}`) and returns a formatted multi-line string suitable for `requirements.txt` with `==` pinned versions.",
    starterCode: "def generate_requirements_txt(packages):\n    # Write your code here\n    pass\n",
    marks: 2
  },
  {
    id: 19,
    type: "code",
    question: "Write a Python function `validate_env_variables(required_keys, env_dict)` that checks if all `required_keys` exist and have non-empty string values in `env_dict`. Return a tuple `(is_valid, missing_keys)` where `missing_keys` is a list of keys that were absent or empty.",
    starterCode: "def validate_env_variables(required_keys, env_dict):\n    # Write your code here\n    pass\n",
    marks: 2
  },
  {
    id: 20,
    type: "code",
    question: "Write a Python function `format_chat_display(messages)` that takes a list of chat message dicts `[{'role': 'user', 'content': 'hi'}, {'role': 'assistant', 'content': 'hello'}]` and returns a formatted string where each line is `[Role]: Content`.",
    starterCode: "def format_chat_display(messages):\n    # Write your code here\n    pass\n",
    marks: 2
  },
  {
    id: 21,
    type: "code",
    question: "Write a Python function `build_product_pitch(project_name, target_audience, core_benefit)` that returns a clean marketing one-liner: `\"{project_name} empowers {target_audience} to {core_benefit}.\"`",
    starterCode: "def build_product_pitch(project_name, target_audience, core_benefit):\n    # Write your code here\n    pass\n",
    marks: 2
  }
];
