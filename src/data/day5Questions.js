export const day5Questions = [
  // ---------------------------------------------------------
  // PART A: 17 MCQs (1 mark each)
  // Topics: Git & GitHub (Q1–Q8), Docker Fundamentals (Q9–Q17)
  // ---------------------------------------------------------
  {
    id: 1,
    type: "mcq",
    question: "What is **Git** and why is version control fundamental to software development?",
    options: [
      "A distributed version control system that records changes, facilitates rollbacks, and coordinates team collaboration",
      "A cloud database for storing relational SQL tables and queries",
      "A compiler that translates Python code into native machine executables",
      "A web application firewall designed to filter malicious HTTP traffic"
    ],
    correctAnswer: "A distributed version control system that records changes, facilitates rollbacks, and coordinates team collaboration",
    marks: 1
  },
  {
    id: 2,
    type: "mcq",
    question: "How does **Git** differ from **GitHub**?",
    options: [
      "Git is a local version-control command-line tool, whereas GitHub is a cloud platform for hosting Git repositories and collaborating",
      "Git is a proprietary cloud service, whereas GitHub is an open-source terminal command",
      "Git is exclusively used for Python programs, whereas GitHub supports all programming languages",
      "Git and GitHub are identical tools developed by the same operating system vendor"
    ],
    correctAnswer: "Git is a local version-control command-line tool, whereas GitHub is a cloud platform for hosting Git repositories and collaborating",
    marks: 1
  },
  {
    id: 3,
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
    id: 4,
    type: "mcq",
    question: "What is the primary role of the **staging area** (index) accessed via `git add`?",
    options: [
      "It acts as an intermediate staging step where developers select which changed files will be included in the next commit snapshot",
      "It permanently deletes untracked files from the local filesystem",
      "It immediately pushes changes directly to the remote GitHub repository",
      "It automatically runs linting and formats code before saving"
    ],
    correctAnswer: "It acts as an intermediate staging step where developers select which changed files will be included in the next commit snapshot",
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
    question: "Which command sequence correctly stages all changes, commits them with a descriptive message, and pushes to `origin main`?",
    options: [
      "`git add .` → `git commit -m \"feature: add dockerfile\"` → `git push origin main`",
      "`git push origin main` → `git commit` → `git add .`",
      "`git init` → `git push origin main` → `git commit -m \"...\"`",
      "`git clone` → `git pull origin main` → `git add .`"
    ],
    correctAnswer: "`git add .` → `git commit -m \"feature: add dockerfile\"` → `git push origin main`",
    marks: 1
  },
  {
    id: 7,
    type: "mcq",
    question: "Which command creates a new branch named `feature-auth` and switches to it in a single operation?",
    options: [
      "`git switch -c feature-auth`",
      "`git branch --jump feature-auth`",
      "`git checkout feature-auth --make`",
      "`git push -b feature-auth`"
    ],
    correctAnswer: "`git switch -c feature-auth`",
    marks: 1
  },
  {
    id: 8,
    type: "mcq",
    question: "What causes a **Git merge conflict**, and how do developers resolve it?",
    options: [
      "Competing changes on the same line across merging branches; resolved by manually editing conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`), staging, and committing",
      "A broken network connection; resolved by restarting the local terminal",
      "Exceeding GitHub's free repository size; resolved by running `git prune`",
      "An outdated Git version; resolved by running `git upgrade`"
    ],
    correctAnswer: "Competing changes on the same line across merging branches; resolved by manually editing conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`), staging, and committing",
    marks: 1
  },
  {
    id: 9,
    type: "mcq",
    question: "What is **Docker**, and what fundamental problem does containerization solve?",
    options: [
      "A platform for packaging applications and dependencies into standardized containers, solving the 'works on my machine' problem",
      "A relational database management system for persistent file storage",
      "A continuous integration tool that compiles Python scripts into byte code",
      "A cloud networking switch that assigns IP addresses to local servers"
    ],
    correctAnswer: "A platform for packaging applications and dependencies into standardized containers, solving the 'works on my machine' problem",
    marks: 1
  },
  {
    id: 10,
    type: "mcq",
    question: "How do **Docker containers** differ from traditional **Virtual Machines (VMs)**?",
    options: [
      "Containers share the host operating system kernel and run as isolated lightweight processes, whereas VMs require a hypervisor and a complete guest OS",
      "Containers require dedicated physical hardware, whereas VMs run inside web browsers",
      "Containers can only run compiled languages, whereas VMs run interpreted scripts",
      "Virtual Machines boot up in seconds, whereas Docker containers require several minutes"
    ],
    correctAnswer: "Containers share the host operating system kernel and run as isolated lightweight processes, whereas VMs require a hypervisor and a complete guest OS",
    marks: 1
  },
  {
    id: 11,
    type: "mcq",
    question: "What is the conceptual relationship between a **Docker Image** and a **Docker Container**?",
    options: [
      "An image is a read-only immutable template, while a container is an isolated, running instance instantiated from that image",
      "An image is a running process, while a container is a static text file stored on GitHub",
      "An image is a compressed zip file of source code, while a container is a virtual hard drive",
      "Docker images and containers are interchangeable terms with no technical distinction"
    ],
    correctAnswer: "An image is a read-only immutable template, while a container is an isolated, running instance instantiated from that image",
    marks: 1
  },
  {
    id: 12,
    type: "mcq",
    question: "In a `Dockerfile`, what is the critical difference between `RUN` and `CMD`?",
    options: [
      "`RUN` executes at build time to produce new filesystem layers, while `CMD` defines the default command executed when the container starts",
      "`RUN` starts the container in production, while `CMD` runs only during development testing",
      "`RUN` copies files from GitHub, while `CMD` compiles Python files into wheels",
      "`RUN` executes on the host OS, while `CMD` is ignored unless explicitly enabled"
    ],
    correctAnswer: "`RUN` executes at build time to produce new filesystem layers, while `CMD` defines the default command executed when the container starts",
    marks: 1
  },
  {
    id: 13,
    type: "mcq",
    question: "What does the command `docker run -d -p 3000:80 -e NODE_ENV=production my-web-app` accomplish?",
    options: [
      "Runs `my-web-app` in detached mode (background), maps host port 3000 to container port 80, and sets the `NODE_ENV` environment variable",
      "Compiles `my-web-app` on port 3000 and uploads the binary to Docker Hub",
      "Stops all containers listening on port 80 and logs memory consumption to console",
      "Forwards container port 3000 to host port 80 in interactive foreground mode"
    ],
    correctAnswer: "Runs `my-web-app` in detached mode (background), maps host port 3000 to container port 80, and sets the `NODE_ENV` environment variable",
    marks: 1
  },
  {
    id: 14,
    type: "mcq",
    question: "Which command shows both currently active and previously stopped Docker containers?",
    options: [
      "`docker ps -a`",
      "`docker list --all-active`",
      "`docker status -v`",
      "`docker images --containers`"
    ],
    correctAnswer: "`docker ps -a`",
    marks: 1
  },
  {
    id: 15,
    type: "mcq",
    question: "Which command streams the console logs generated by a running container named `ai-service`?",
    options: [
      "`docker logs ai-service`",
      "`docker inspect --terminal ai-service`",
      "`docker read-console ai-service`",
      "`docker view-output ai-service`"
    ],
    correctAnswer: "`docker logs ai-service`",
    marks: 1
  },
  {
    id: 16,
    type: "mcq",
    question: "Which command downloads a Docker image from a remote registry (like Docker Hub) without immediately launching it?",
    options: [
      "`docker pull python:3.11-slim`",
      "`docker fetch python:3.11-slim`",
      "`docker clone python:3.11-slim`",
      "`docker get python:3.11-slim`"
    ],
    correctAnswer: "`docker pull python:3.11-slim`",
    marks: 1
  },
  {
    id: 17,
    type: "mcq",
    question: "What is **Docker Compose** primarily used for?",
    options: [
      "Defining and managing multi-container applications (e.g., app, database, cache) using a declarative YAML configuration file",
      "Writing unit tests for Python backend applications",
      "Optimizing SQL queries inside PostgreSQL containers",
      "Compiling Docker images into binary executables"
    ],
    correctAnswer: "Defining and managing multi-container applications (e.g., app, database, cache) using a declarative YAML configuration file",
    marks: 1
  },

  // ---------------------------------------------------------
  // PART B: 4 Practical Coding Tasks (2 marks each)
  // ---------------------------------------------------------
  {
    id: 18,
    type: "code",
    question: "Write a Python function `stage_and_commit(working_files, staged_files, commit_message)` that simulates basic Git staging and committing. The function should return a dict with `committed_files` (a copy of staged files), `remaining_staged` (an empty dict), and `commit_status` ('success' if staged_files was non-empty, else 'empty_commit').",
    starterCode: `def stage_and_commit(working_files, staged_files, commit_message):
    """
    Simulates Git staging and commit creation.
    Returns: dict with 'committed_files', 'remaining_staged', and 'commit_status'
    """
    if not staged_files:
        return {
            "committed_files": {},
            "remaining_staged": {},
            "commit_status": "empty_commit"
        }
    
    return {
        "committed_files": dict(staged_files),
        "remaining_staged": {},
        "commit_status": "success",
        "message": commit_message
    }

# Example test:
if __name__ == "__main__":
    result = stage_and_commit({"main.py": "print('ok')"}, {"main.py": "print('ok')"}, "Initial commit")
    print("Commit result:", result)
`,
    marks: 2
  },
  {
    id: 19,
    type: "code",
    question: "Write a Python function `parse_git_conflict(conflict_text)` that parses standard Git conflict markers (`<<<<<<< HEAD`, `=======`, `>>>>>>> feature`) and extracts `head_content` and `incoming_content` as trimmed strings.",
    starterCode: `def parse_git_conflict(conflict_text):
    """
    Parses conflict markers in a file string.
    Returns a dict with 'head_content' and 'incoming_content'.
    """
    lines = conflict_text.strip().split('\\n')
    head_lines = []
    incoming_lines = []
    
    in_head = False
    in_incoming = False
    
    for line in lines:
        if line.startswith("<<<<<<<"):
            in_head = True
            in_incoming = False
        elif line.startswith("======="):
            in_head = False
            in_incoming = True
        elif line.startswith(">>>>>>>"):
            in_incoming = False
        elif in_head:
            head_lines.append(line)
        elif in_incoming:
            incoming_lines.append(line)
            
    return {
        "head_content": "\\n".join(head_lines).strip(),
        "incoming_content": "\\n".join(incoming_lines).strip()
    }

# Example test:
if __name__ == "__main__":
    sample = \"\"\"
<<<<<<< HEAD
API_URL = "http://localhost:8000"
=======
API_URL = "https://api.production.com"
>>>>>>> feature-deploy
\"\"\"
    print(parse_git_conflict(sample))
`,
    marks: 2
  },
  {
    id: 20,
    type: "code",
    question: "Write a Python function `build_docker_run_cmd(image, host_port, container_port, env_vars=None, detached=True)` that constructs the exact `docker run` command string with `-d`, `-p`, and sorted `-e KEY=VALUE` flags.",
    starterCode: `def build_docker_run_cmd(image, host_port, container_port, env_vars=None, detached=True):
    """
    Constructs a docker run command string.
    """
    cmd = ["docker", "run"]
    if detached:
        cmd.append("-d")
    if host_port and container_port:
        cmd.append(f"-p {host_port}:{container_port}")
    if env_vars:
        for k in sorted(env_vars.keys()):
            cmd.append(f"-e {k}={env_vars[k]}")
    cmd.append(image)
    return " ".join(cmd)

# Example test:
if __name__ == "__main__":
    cmd = build_docker_run_cmd("python:3.11-slim", 8000, 8000, {"PORT": "8000", "ENV": "prod"}, True)
    print("Docker command:", cmd)
`,
    marks: 2
  },
  {
    id: 21,
    type: "code",
    question: "Write a Python function `validate_dockerfile_syntax(dockerfile_content)` that verifies whether a Dockerfile string starts with a `FROM` instruction and specifies at least one `CMD` instruction. Return a tuple `(is_valid: bool, errors: list)`.",
    starterCode: `def validate_dockerfile_syntax(dockerfile_content):
    """
    Validates that a Dockerfile begins with FROM and defines a CMD.
    Returns (is_valid, errors).
    """
    lines = [l.strip() for l in dockerfile_content.strip().split('\\n') if l.strip() and not l.strip().startswith('#')]
    errors = []
    
    if not lines:
        return False, ["Empty Dockerfile"]
        
    first_cmd = lines[0].split()[0].upper()
    if first_cmd != "FROM":
        errors.append("Dockerfile must begin with a FROM instruction.")
        
    has_cmd = any(l.split()[0].upper() == "CMD" for l in lines)
    if not has_cmd:
        errors.append("Dockerfile must specify a CMD instruction.")
        
    return len(errors) == 0, errors

# Example test:
if __name__ == "__main__":
    df = \"\"\"
FROM python:3.11-slim
WORKDIR /app
COPY . .
CMD ["python", "app.py"]
\"\"\"
    print("Validation:", validate_dockerfile_syntax(df))
`,
    marks: 2
  }
];
