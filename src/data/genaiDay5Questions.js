export const genaiDay5Questions = [
  // ---------------------------------------------------------
  // PART A: 15 MCQs (1 mark each)
  // Topics: Git & GitHub (Q1–Q8), Docker Fundamentals (Q9–Q15)
  // ---------------------------------------------------------
  {
    id: 1,
    type: "mcq",
    question: "What is **Git** and why is version control essential in modern software engineering?",
    options: [
      "A distributed version control system that tracks revisions, enables rollbacks, and coordinates team collaboration",
      "A cloud database for storing relational SQL tables and queries",
      "A compiler that translates Python code into machine language",
      "A container runtime engine used exclusively for deploying microservices"
    ],
    correctAnswer: "A distributed version control system that tracks revisions, enables rollbacks, and coordinates team collaboration",
    explanation: "Git is a distributed version control system (DVCS) that records filesystem snapshots over time. It allows developers to track history, review diffs, revert breaking changes, and merge work across distributed teams.",
    marks: 1
  },
  {
    id: 2,
    type: "mcq",
    question: "What is the primary difference between **Git** and **GitHub**?",
    options: [
      "Git is a local version-control command-line tool, whereas GitHub is a cloud platform for hosting Git repositories and collaborating",
      "Git is a proprietary cloud service, whereas GitHub is an open-source terminal command",
      "Git is exclusively used for Python programs, whereas GitHub supports all programming languages",
      "There is no difference; Git and GitHub are two names for the exact same software tool"
    ],
    correctAnswer: "Git is a local version-control command-line tool, whereas GitHub is a cloud platform for hosting Git repositories and collaborating",
    explanation: "Git is the local version control engine installed on your computer. GitHub is a cloud-based service that hosts remote Git repositories and adds collaboration tools such as pull requests, code reviews, issues, and CI/CD pipelines.",
    marks: 1
  },
  {
    id: 3,
    type: "mcq",
    question: "Which command transforms an existing local folder into a brand new Git repository?",
    options: [
      "`git init`",
      "`git create`",
      "`git start-repo`",
      "`git setup --new`"
    ],
    correctAnswer: "`git init`",
    explanation: "Running `git init` creates a hidden `.git` subdirectory containing all metadata, object stores, and reference pointers required to track the project's history.",
    marks: 1
  },
  {
    id: 4,
    type: "mcq",
    question: "In the Git lifecycle, what is the role of the **staging area** (index) accessed via `git add`?",
    options: [
      "It acts as a preparation area where developers select which modified files will be included in the next commit snapshot",
      "It permanently deletes untracked files from the local filesystem",
      "It immediately uploads modified files to the remote GitHub repository",
      "It automatically compiles and executes Python test suites before committing"
    ],
    correctAnswer: "It acts as a preparation area where developers select which modified files will be included in the next commit snapshot",
    explanation: "The staging area allows developers to assemble atomic, organized commits by specifically choosing which changed files or lines are staged before recording them permanently with `git commit`.",
    marks: 1
  },
  {
    id: 5,
    type: "mcq",
    question: "Which command both creates a new branch named `feature-docker` and immediately switches HEAD to it?",
    options: [
      "`git switch -c feature-docker`",
      "`git branch --goto feature-docker`",
      "`git make branch feature-docker`",
      "`git push -b feature-docker`"
    ],
    correctAnswer: "`git switch -c feature-docker`",
    explanation: "`git switch -c <branch>` (or the classic `git checkout -b <branch>`) creates a new branch pointer and updates HEAD to track that new branch in one step.",
    marks: 1
  },
  {
    id: 6,
    type: "mcq",
    question: "What causes a **Git merge conflict**, and what is the standard procedure to resolve it?",
    options: [
      "Competing changes on the same lines of a file across merging branches; resolved by manually editing conflict markers, staging the file, and committing",
      "A corrupt `.git` folder; resolved by deleting the repository and cloning again from GitHub",
      "Exceeding GitHub's maximum file size quota; resolved by running `git clean -fd`",
      "Mismatched Git versions between developers; resolved by updating the local Git CLI"
    ],
    correctAnswer: "Competing changes on the same lines of a file across merging branches; resolved by manually editing conflict markers, staging the file, and committing",
    explanation: "When Git cannot automatically reconcile divergent edits on identical lines, it inserts conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`). Developers must manually decide which code to keep, remove the markers, stage with `git add`, and finalize with `git commit`.",
    marks: 1
  },
  {
    id: 7,
    type: "mcq",
    question: "What is the exact behavior of the `git pull` command?",
    options: [
      "It fetches remote changes (`git fetch`) and immediately merges them into the current local branch (`git merge`)",
      "It pushes local staged commits to the remote repository (`git push`)",
      "It deletes all local untracked files to match the remote branch state exactly",
      "It clones a remote repository into a newly created empty directory"
    ],
    correctAnswer: "It fetches remote changes (`git fetch`) and immediately merges them into the current local branch (`git merge`)",
    explanation: "`git pull` is a composite command that first fetches latest commits and refs from the remote repository and then integrates them into the active local branch.",
    marks: 1
  },
  {
    id: 8,
    type: "mcq",
    question: "When pushing to GitHub, you encounter the error `[rejected - non-fast-forward]`. What is the primary cause and recommended fix?",
    options: [
      "The remote branch contains newer commits not present locally; pull and integrate remote changes first before pushing",
      "Your SSH key is expired; generate a new key pair and re-authenticate",
      "The Git staging area has uncommitted files; run `git stash drop`",
      "The local branch name must be renamed to `master` before pushing"
    ],
    correctAnswer: "The remote branch contains newer commits not present locally; pull and integrate remote changes first before pushing",
    explanation: "A non-fast-forward rejection occurs when the remote repository has commits that your local branch does not have. You must run `git pull` (or `git pull --rebase`) to integrate upstream commits into your branch before pushing.",
    marks: 1
  },
  {
    id: 9,
    type: "mcq",
    question: "What is **Docker**, and what core developer challenge does containerization solve?",
    options: [
      "A platform to build, share, and run applications in isolated containers, eliminating environment mismatches between machines",
      "A code editor designed for writing multi-threaded Python scripts",
      "A database indexing engine that speeds up SQL queries in production",
      "A version control protocol designed to replace Git and Mercurial"
    ],
    correctAnswer: "A platform to build, share, and run applications in isolated containers, eliminating environment mismatches between machines",
    explanation: "Docker packages an application together with its runtime, system libraries, configuration, and dependencies into portable containers, ensuring consistent behavior across developer laptops, CI/CD, and production clouds.",
    marks: 1
  },
  {
    id: 10,
    type: "mcq",
    question: "How do **Docker containers** fundamentally differ from traditional **Virtual Machines (VMs)**?",
    options: [
      "Containers share the host operating system kernel and run as isolated processes, making them lighter and faster than VMs which bundle a full guest OS",
      "Containers require a Type-1 hypervisor and virtualized hardware, whereas VMs run directly on bare metal",
      "Containers can only run Python applications, whereas VMs can run any programming language",
      "Virtual Machines boot up in milliseconds, whereas Docker containers require several minutes to initialize"
    ],
    correctAnswer: "Containers share the host operating system kernel and run as isolated processes, making them lighter and faster than VMs which bundle a full guest OS",
    explanation: "Containers share the host kernel and utilize OS-level virtualization (cgroups and namespaces), consuming far less memory and CPU than VMs, which run separate complete guest operating systems atop a hypervisor.",
    marks: 1
  },
  {
    id: 11,
    type: "mcq",
    question: "What is the relationship between a **Docker Image** and a **Docker Container**?",
    options: [
      "An image is a read-only, immutable blueprint; a container is a runnable, isolated instance instantiated from an image",
      "An image is a running process; a container is the static text configuration file stored on disk",
      "An image is a compressed zip file of GitHub commits; a container is a local Git branch",
      "Docker images and containers are interchangeable terms with no technical distinction"
    ],
    correctAnswer: "An image is a read-only, immutable blueprint; a container is a runnable, isolated instance instantiated from an image",
    explanation: "An image is a static, layered, immutable template defining the filesystem and configuration. When Docker executes an image, it adds a thin read-write layer on top, creating a running container.",
    marks: 1
  },
  {
    id: 12,
    type: "mcq",
    question: "In a `Dockerfile`, what is the critical difference between the `RUN` instruction and the `CMD` instruction?",
    options: [
      "`RUN` executes at image build time to create new image layers, while `CMD` defines the default command executed when the container starts",
      "`RUN` starts the production container, while `CMD` is only used during local unit testing",
      "`RUN` copies files from the host, while `CMD` downloads base images from Docker Hub",
      "`RUN` is executed on the host terminal, while `CMD` runs inside the Git repository"
    ],
    correctAnswer: "`RUN` executes at image build time to create new image layers, while `CMD` defines the default command executed when the container starts",
    explanation: "`RUN` commands (such as `RUN pip install -r requirements.txt`) execute during `docker build` to install dependencies and modify filesystem layers. `CMD` specifies what program runs when `docker run` launches a container from the image.",
    marks: 1
  },
  {
    id: 13,
    type: "mcq",
    question: "What does the command `docker run -d -p 8080:5000 -e APP_ENV=production my-app:v1` do?",
    options: [
      "Runs `my-app:v1` in background (detached mode), routes host port 8080 to container port 5000, and sets the `APP_ENV` environment variable",
      "Builds a new Docker image from source and pushes it to Docker Hub on port 8080",
      "Stops the container running on port 5000 and exports all environment variables to a `.env` file",
      "Maps container port 8080 to host port 5000 and prints continuous execution logs to stdout"
    ],
    correctAnswer: "Runs `my-app:v1` in background (detached mode), routes host port 8080 to container port 5000, and sets the `APP_ENV` environment variable",
    explanation: "The `-d` flag runs the container in detached (background) mode. The `-p 8080:5000` flag maps traffic arriving on host port 8080 to container port 5000. The `-e` flag injects environment variables into the container environment.",
    marks: 1
  },
  {
    id: 14,
    type: "mcq",
    question: "Which Docker CLI command allows you to view stdout and stderr output logs generated by a running or stopped container named `api-server`?",
    options: [
      "`docker logs api-server`",
      "`docker inspect --output api-server`",
      "`docker view-terminal api-server`",
      "`docker status -v api-server`"
    ],
    correctAnswer: "`docker logs api-server`",
    explanation: "`docker logs <container>` fetches and displays the logs recorded from the container's standard output (stdout) and standard error (stderr) streams.",
    marks: 1
  },
  {
    id: 15,
    type: "mcq",
    question: "What is **Docker Compose** primarily used for in modern application architecture?",
    options: [
      "Defining and orchestrating multi-container applications (e.g., web server, database, cache) using a declarative YAML configuration file",
      "Writing unit tests for Python and JavaScript source code",
      "Compiling C++ extensions into binary wheels",
      "Replacing Git repositories with peer-to-peer file sharing"
    ],
    correctAnswer: "Defining and orchestrating multi-container applications (e.g., web server, database, cache) using a declarative YAML configuration file",
    explanation: "Docker Compose allows developers to define multi-container architectures in a single `docker-compose.yml` file, coordinating services, networks, volumes, and environment variables using commands like `docker compose up` and `docker compose down`.",
    marks: 1
  },

  // ---------------------------------------------------------
  // PART B: 2 Coding Challenges (Python Simulations)
  // ---------------------------------------------------------
  {
    id: 16,
    type: "programming",
    question: "Coding Challenge 1: Git Workflow Simulator & Conflict Handler",
    description: `Build a complete Python simulation of a Git repository workflow.

### Objective:
Implement a class or set of functions that accurately model:
1. **Repository Initialization**: Setting up tracking state with a default \`main\` branch.
2. **Staging Area (\`git add\`)**: Staging modified files before committing.
3. **Commit History (\`git commit\`)**: Creating immutable commit snapshots containing commit hash, message, author, timestamp, and snapshot data.
4. **Branching & Switching (\`git branch\`, \`git switch\`)**: Creating branch pointers and switching the \`HEAD\` reference.
5. **Conflict Detection**: A helper function \`detect_merge_conflict(base_text, branch_a_text, branch_b_text)\` that checks if both branches modified the same line differently.

### Requirements:
- Prevent committing when the staging area is empty.
- Maintain accurate status reporting (untracked, staged, committed).
- Implement clean, error-handled Python code with zero external dependencies.`,
    language: "python",
    starterCode: `"""
Coding Challenge 1: Git Workflow Simulator & Conflict Handler
Kaizen Q Bootcamps — Day 5 Assessment
"""

import hashlib
import time

class GitSimulator:
    def __init__(self, default_branch="main"):
        self.current_branch = default_branch
        self.branches = {default_branch: []}  # branch_name -> list of commit dicts
        self.staging_area = {}                 # filename -> content
        self.working_dir = {}                  # filename -> content
        self.head_commit = None

    def git_init(self):
        """Initializes repository state."""
        return f"Initialized empty Git repository on branch '{self.current_branch}'"

    def write_working_file(self, filename, content):
        """Simulates creating or modifying a file in the working directory."""
        self.working_dir[filename] = content
        return f"Wrote {filename}"

    def git_add(self, filename):
        """Stages a file from working directory into the staging area."""
        if filename not in self.working_dir:
            raise FileNotFoundError(f"fatal: pathspec '{filename}' did not match any files")
        self.staging_area[filename] = self.working_dir[filename]
        return f"Staged {filename}"

    def git_commit(self, message, author="Developer <dev@kaizenq.com>"):
        """Creates a snapshot commit from staged changes."""
        if not self.staging_area:
            return "On branch " + self.current_branch + ", nothing to commit, working tree clean"
        
        # Generate commit hash from contents and message
        raw_data = message + str(sorted(self.staging_area.items())) + str(time.time())
        commit_hash = hashlib.sha1(raw_data.encode('utf-8')).hexdigest()[:8]
        
        commit_record = {
            "hash": commit_hash,
            "message": message,
            "author": author,
            "snapshot": dict(self.staging_area)
        }
        
        self.branches[self.current_branch].append(commit_record)
        self.head_commit = commit_record
        self.staging_area.clear()
        return f"[{self.current_branch} {commit_hash}] {message}"

    def git_branch(self, branch_name):
        """Creates a new branch pointing to current HEAD."""
        if branch_name in self.branches:
            return f"fatal: A branch named '{branch_name}' already exists."
        current_history = list(self.branches[self.current_branch])
        self.branches[branch_name] = current_history
        return f"Created branch '{branch_name}'"

    def git_switch(self, branch_name):
        """Switches HEAD to specified branch."""
        if branch_name not in self.branches:
            return f"fatal: invalid reference: {branch_name}"
        self.current_branch = branch_name
        self.head_commit = self.branches[branch_name][-1] if self.branches[branch_name] else None
        return f"Switched to branch '{branch_name}'"

    def git_status(self):
        """Returns the status of staged and untracked files."""
        untracked = [f for f in self.working_dir if f not in self.staging_area]
        staged = list(self.staging_area.keys())
        return {
            "branch": self.current_branch,
            "staged": staged,
            "untracked": untracked
        }

def detect_merge_conflict(base_lines, branch_a_lines, branch_b_lines):
    """
    Detects if two branches have conflicting modifications relative to base.
    Returns (has_conflict, conflict_report)
    """
    conflicts = []
    max_len = max(len(base_lines), len(branch_a_lines), len(branch_b_lines))
    for i in range(max_len):
        b = base_lines[i] if i < len(base_lines) else None
        a = branch_a_lines[i] if i < len(branch_a_lines) else None
        c = branch_b_lines[i] if i < len(branch_b_lines) else None
        
        # Conflict exists if both branches diverged from base differently
        if a != b and c != b and a != c:
            conflicts.append({
                "line": i + 1,
                "branch_a": a,
                "branch_b": c,
                "base": b
            })
    return len(conflicts) > 0, conflicts

# Test demonstration
if __name__ == "__main__":
    git = GitSimulator()
    print(git.git_init())
    
    # Write and commit file
    git.write_working_file("README.md", "# Kaizen Q Day 5\\nGit and Docker fundamentals.")
    git.git_add("README.md")
    print(git.git_commit("Initial commit"))
    
    # Create and switch branch
    print(git.git_branch("feature/docker-setup"))
    print(git.git_switch("feature/docker-setup"))
    
    # Check status
    print("Status:", git.git_status())
    
    # Test merge conflict detection
    base = ["server_port = 8000"]
    branch_1 = ["server_port = 3000"]
    branch_2 = ["server_port = 5000"]
    has_conflict, report = detect_merge_conflict(base, branch_1, branch_2)
    print("Conflict detected:", has_conflict, report)
`,
    initialCode: `"""
Coding Challenge 1: Git Workflow Simulator & Conflict Handler
Kaizen Q Bootcamps — Day 5 Assessment
"""

import hashlib
import time

class GitSimulator:
    def __init__(self, default_branch="main"):
        self.current_branch = default_branch
        self.branches = {default_branch: []}  # branch_name -> list of commit dicts
        self.staging_area = {}                 # filename -> content
        self.working_dir = {}                  # filename -> content
        self.head_commit = None

    def git_init(self):
        """Initializes repository state."""
        return f"Initialized empty Git repository on branch '{self.current_branch}'"

    def write_working_file(self, filename, content):
        """Simulates creating or modifying a file in the working directory."""
        self.working_dir[filename] = content
        return f"Wrote {filename}"

    def git_add(self, filename):
        """Stages a file from working directory into the staging area."""
        if filename not in self.working_dir:
            raise FileNotFoundError(f"fatal: pathspec '{filename}' did not match any files")
        self.staging_area[filename] = self.working_dir[filename]
        return f"Staged {filename}"

    def git_commit(self, message, author="Developer <dev@kaizenq.com>"):
        """Creates a snapshot commit from staged changes."""
        if not self.staging_area:
            return "On branch " + self.current_branch + ", nothing to commit, working tree clean"
        
        # Generate commit hash from contents and message
        raw_data = message + str(sorted(self.staging_area.items())) + str(time.time())
        commit_hash = hashlib.sha1(raw_data.encode('utf-8')).hexdigest()[:8]
        
        commit_record = {
            "hash": commit_hash,
            "message": message,
            "author": author,
            "snapshot": dict(self.staging_area)
        }
        
        self.branches[self.current_branch].append(commit_record)
        self.head_commit = commit_record
        self.staging_area.clear()
        return f"[{self.current_branch} {commit_hash}] {message}"

    def git_branch(self, branch_name):
        """Creates a new branch pointing to current HEAD."""
        if branch_name in self.branches:
            return f"fatal: A branch named '{branch_name}' already exists."
        current_history = list(self.branches[self.current_branch])
        self.branches[branch_name] = current_history
        return f"Created branch '{branch_name}'"

    def git_switch(self, branch_name):
        """Switches HEAD to specified branch."""
        if branch_name not in self.branches:
            return f"fatal: invalid reference: {branch_name}"
        self.current_branch = branch_name
        self.head_commit = self.branches[branch_name][-1] if self.branches[branch_name] else None
        return f"Switched to branch '{branch_name}'"

    def git_status(self):
        """Returns the status of staged and untracked files."""
        untracked = [f for f in self.working_dir if f not in self.staging_area]
        staged = list(self.staging_area.keys())
        return {
            "branch": self.current_branch,
            "staged": staged,
            "untracked": untracked
        }

def detect_merge_conflict(base_lines, branch_a_lines, branch_b_lines):
    """
    Detects if two branches have conflicting modifications relative to base.
    Returns (has_conflict, conflict_report)
    """
    conflicts = []
    max_len = max(len(base_lines), len(branch_a_lines), len(branch_b_lines))
    for i in range(max_len):
        b = base_lines[i] if i < len(base_lines) else None
        a = branch_a_lines[i] if i < len(branch_a_lines) else None
        c = branch_b_lines[i] if i < len(branch_b_lines) else None
        
        # Conflict exists if both branches diverged from base differently
        if a != b and c != b and a != c:
            conflicts.append({
                "line": i + 1,
                "branch_a": a,
                "branch_b": c,
                "base": b
            })
    return len(conflicts) > 0, conflicts

# Test demonstration
if __name__ == "__main__":
    git = GitSimulator()
    print(git.git_init())
    
    # Write and commit file
    git.write_working_file("README.md", "# Kaizen Q Day 5\\nGit and Docker fundamentals.")
    git.git_add("README.md")
    print(git.git_commit("Initial commit"))
    
    # Create and switch branch
    print(git.git_branch("feature/docker-setup"))
    print(git.git_switch("feature/docker-setup"))
    
    # Check status
    print("Status:", git.git_status())
    
    # Test merge conflict detection
    base = ["server_port = 8000"]
    branch_1 = ["server_port = 3000"]
    branch_2 = ["server_port = 5000"]
    has_conflict, report = detect_merge_conflict(base, branch_1, branch_2)
    print("Conflict detected:", has_conflict, report)
`,
    marks: 10
  },
  {
    id: 17,
    type: "programming",
    question: "Coding Challenge 2: Dockerfile Validator & Docker CLI Command Generator",
    description: `Build a Python module that validates Dockerfiles and generates Docker execution commands.

### Objective:
Implement two key functions:
1. **\`validate_dockerfile(dockerfile_text)\`**:
   - Checks that the Dockerfile starts with a valid \`FROM\` instruction.
   - Verifies standard best-practice instructions: \`WORKDIR\`, \`COPY\`, \`RUN\`, \`EXPOSE\`, and \`CMD\`.
   - Ensures \`CMD\` uses the recommended JSON array format (e.g., \`CMD ["python", "app.py"]\`).
   - Returns \`(is_valid: bool, issues: list)\`.

2. **\`build_docker_run_command(image, host_port, container_port, env_dict=None, detached=True, container_name=None)\`**:
   - Formats a complete \`docker run\` CLI string.
   - Includes \`-d\` when \`detached\` is True.
   - Includes \`--name <container_name>\` if provided.
   - Formats port forwarding: \`-p <host_port>:<container_port>\`.
   - Injects environment flags: \`-e KEY=VALUE\`.
   - Appends image name at the end.

3. **\`generate_compose_service(service_name, image, host_port, container_port, env_dict)\`**:
   - Generates a cleanly indented YAML snippet suitable for a \`docker-compose.yml\` file.`,
    language: "python",
    starterCode: `"""
Coding Challenge 2: Dockerfile Validator & Docker CLI Command Generator
Kaizen Q Bootcamps — Day 5 Assessment
"""

import re

def validate_dockerfile(dockerfile_text):
    """
    Validates Dockerfile instructions for standard best practices.
    Returns (is_valid: bool, issues: list)
    """
    lines = [line.strip() for line in dockerfile_text.strip().split('\\n') if line.strip() and not line.strip().startswith('#')]
    issues = []
    
    if not lines:
        return False, ["Dockerfile is empty."]
    
    # 1. Must start with FROM
    first_instruction = lines[0].split()[0].upper()
    if first_instruction != "FROM":
        issues.append("Dockerfile must begin with a valid 'FROM' instruction.")
    
    instructions = set()
    cmd_found = False
    
    for line in lines:
        parts = line.split(maxsplit=1)
        inst = parts[0].upper()
        instructions.add(inst)
        
        # Check CMD format
        if inst == "CMD":
            cmd_found = True
            body = parts[1].strip() if len(parts) > 1 else ""
            if not (body.startswith("[") and body.endswith("]")):
                issues.append("Best Practice Warning: 'CMD' should use JSON array format, e.g. CMD [\\"python\\", \\"app.py\\"].")

    # Check for recommended instructions
    recommended = ["WORKDIR", "COPY", "RUN", "EXPOSE"]
    for rec in recommended:
        if rec not in instructions:
            issues.append(f"Recommendation: Dockerfile is missing '{rec}' instruction.")
            
    if not cmd_found:
        issues.append("Dockerfile should specify a default 'CMD' to run when the container starts.")

    is_valid = len([i for i in issues if not i.startswith("Recommendation") and not i.startswith("Best Practice")]) == 0
    return is_valid, issues

def build_docker_run_command(image, host_port, container_port, env_dict=None, detached=True, container_name=None):
    """
    Generates a production-ready docker run CLI command string.
    """
    cmd_parts = ["docker", "run"]
    
    if detached:
        cmd_parts.append("-d")
        
    if container_name:
        cmd_parts.append(f"--name {container_name}")
        
    if host_port and container_port:
        cmd_parts.append(f"-p {host_port}:{container_port}")
        
    if env_dict:
        for k, v in sorted(env_dict.items()):
            cmd_parts.append(f"-e {k}={v}")
            
    cmd_parts.append(image)
    return " ".join(cmd_parts)

def generate_compose_service(service_name, image, host_port, container_port, env_dict=None):
    """
    Generates a cleanly formatted Docker Compose service YAML block.
    """
    yaml_lines = [
        f"  {service_name}:",
        f"    image: {image}",
        f"    restart: unless-stopped",
        f"    ports:",
        f"      - \\"{host_port}:{container_port}\\""
    ]
    if env_dict:
        yaml_lines.append("    environment:")
        for k, v in sorted(env_dict.items()):
            yaml_lines.append(f"      - {k}={v}")
            
    return "\\n".join(yaml_lines)

# Test demonstration
if __name__ == "__main__":
    sample_dockerfile = \"\"\"
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
EXPOSE 8000
CMD ["python", "main.py"]
\"\"\"

    valid, notes = validate_dockerfile(sample_dockerfile)
    print(f"Dockerfile Valid: {valid}")
    for n in notes:
        print(f" - {n}")

    run_cmd = build_docker_run_command(
        image="kaizenq/web-api:1.0",
        host_port=8080,
        container_port=8000,
        env_dict={"APP_ENV": "production", "LOG_LEVEL": "info"},
        detached=True,
        container_name="kaizen-api"
    )
    print("\\nGenerated Run Command:")
    print(run_cmd)

    compose_block = generate_compose_service(
        service_name="api",
        image="kaizenq/web-api:1.0",
        host_port=8080,
        container_port=8000,
        env_dict={"PORT": "8000", "ENV": "prod"}
    )
    print("\\nDocker Compose Service:")
    print(compose_block)
`,
    initialCode: `"""
Coding Challenge 2: Dockerfile Validator & Docker CLI Command Generator
Kaizen Q Bootcamps — Day 5 Assessment
"""

import re

def validate_dockerfile(dockerfile_text):
    """
    Validates Dockerfile instructions for standard best practices.
    Returns (is_valid: bool, issues: list)
    """
    lines = [line.strip() for line in dockerfile_text.strip().split('\\n') if line.strip() and not line.strip().startswith('#')]
    issues = []
    
    if not lines:
        return False, ["Dockerfile is empty."]
    
    # 1. Must start with FROM
    first_instruction = lines[0].split()[0].upper()
    if first_instruction != "FROM":
        issues.append("Dockerfile must begin with a valid 'FROM' instruction.")
    
    instructions = set()
    cmd_found = False
    
    for line in lines:
        parts = line.split(maxsplit=1)
        inst = parts[0].upper()
        instructions.add(inst)
        
        # Check CMD format
        if inst == "CMD":
            cmd_found = True
            body = parts[1].strip() if len(parts) > 1 else ""
            if not (body.startswith("[") and body.endswith("]")):
                issues.append("Best Practice Warning: 'CMD' should use JSON array format, e.g. CMD [\\"python\\", \\"app.py\\"].")

    # Check for recommended instructions
    recommended = ["WORKDIR", "COPY", "RUN", "EXPOSE"]
    for rec in recommended:
        if rec not in instructions:
            issues.append(f"Recommendation: Dockerfile is missing '{rec}' instruction.")
            
    if not cmd_found:
        issues.append("Dockerfile should specify a default 'CMD' to run when the container starts.")

    is_valid = len([i for i in issues if not i.startswith("Recommendation") and not i.startswith("Best Practice")]) == 0
    return is_valid, issues

def build_docker_run_command(image, host_port, container_port, env_dict=None, detached=True, container_name=None):
    """
    Generates a production-ready docker run CLI command string.
    """
    cmd_parts = ["docker", "run"]
    
    if detached:
        cmd_parts.append("-d")
        
    if container_name:
        cmd_parts.append(f"--name {container_name}")
        
    if host_port and container_port:
        cmd_parts.append(f"-p {host_port}:{container_port}")
        
    if env_dict:
        for k, v in sorted(env_dict.items()):
            cmd_parts.append(f"-e {k}={v}")
            
    cmd_parts.append(image)
    return " ".join(cmd_parts)

def generate_compose_service(service_name, image, host_port, container_port, env_dict=None):
    """
    Generates a cleanly formatted Docker Compose service YAML block.
    """
    yaml_lines = [
        f"  {service_name}:",
        f"    image: {image}",
        f"    restart: unless-stopped",
        f"    ports:",
        f"      - \\"{host_port}:{container_port}\\""
    ]
    if env_dict:
        yaml_lines.append("    environment:")
        for k, v in sorted(env_dict.items()):
            yaml_lines.append(f"      - {k}={v}")
            
    return "\\n".join(yaml_lines)

# Test demonstration
if __name__ == "__main__":
    sample_dockerfile = \"\"\"
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
EXPOSE 8000
CMD ["python", "main.py"]
\"\"\"

    valid, notes = validate_dockerfile(sample_dockerfile)
    print(f"Dockerfile Valid: {valid}")
    for n in notes:
        print(f" - {n}")

    run_cmd = build_docker_run_command(
        image="kaizenq/web-api:1.0",
        host_port=8080,
        container_port=8000,
        env_dict={"APP_ENV": "production", "LOG_LEVEL": "info"},
        detached=True,
        container_name="kaizen-api"
    )
    print("\\nGenerated Run Command:")
    print(run_cmd)

    compose_block = generate_compose_service(
        service_name="api",
        image="kaizenq/web-api:1.0",
        host_port=8080,
        container_port=8000,
        env_dict={"PORT": "8000", "ENV": "prod"}
    )
    print("\\nDocker Compose Service:")
    print(compose_block)
`,
    marks: 10
  }
];
