export const day2Questions = [
  {
    id: 1,
    type: "mcq",
    question: "What will be the output of the following list comprehension?\n\n```python\nnums = [1, 2, 3, 4, 5]\nresult = [x * 2 for x in nums if x % 2 != 0]\nprint(result)\n```",
    options: [
      "`[2, 6, 10]`",
      "`[4, 8]`",
      "`[2, 4, 6, 8, 10]`",
      "`[1, 3, 5]`"
    ],
    correctAnswer: "`[2, 6, 10]`",
    marks: 1
  },
  {
    id: 2,
    type: "mcq",
    question: "What is the output of this dictionary comprehension?\n\n```python\nwords = ['ai', 'python', 'data']\nd = {w: len(w) for w in words if len(w) > 2}\nprint(d)\n```",
    options: [
      "`{'ai': 2, 'python': 6, 'data': 4}`",
      "`{'python': 6, 'data': 4}`",
      "`{'python': 6}`",
      "`[6, 4]`"
    ],
    correctAnswer: "`{'python': 6, 'data': 4}`",
    marks: 1
  },
  {
    id: 3,
    type: "mcq",
    question: "What will `list(map(lambda x: x.upper(), ['cat', 'dog']))` return in Python?",
    options: [
      "`['CAT', 'DOG']`",
      "`('CAT', 'DOG')`",
      "`'CAT', 'DOG'`",
      "`<map object>`"
    ],
    correctAnswer: "`['CAT', 'DOG']`",
    marks: 1
  },
  {
    id: 4,
    type: "mcq",
    question: "What will be the output when using `zip()`?\n\n```python\nnames = ['Alice', 'Bob']\nscores = [85, 92, 78]\nprint(list(zip(names, scores)))\n```",
    options: [
      "`[('Alice', 85), ('Bob', 92)]`",
      "`[('Alice', 85), ('Bob', 92), (None, 78)]`",
      "`IndexError: list index out of range`",
      "`{'Alice': 85, 'Bob': 92}`"
    ],
    correctAnswer: "`[('Alice', 85), ('Bob', 92)]`",
    marks: 1
  },
  {
    id: 5,
    type: "mcq",
    question: "What does `enumerate(items, start=1)` yield on its first iteration when `items = ['a', 'b']`?",
    options: [
      "`(0, 'a')`",
      "`(1, 'a')`",
      "`('a', 1)`",
      "`1`"
    ],
    correctAnswer: "`(1, 'a')`",
    marks: 1
  },
  {
    id: 6,
    type: "mcq",
    question: "What is the primary advantage of using `with open('data.txt', 'r') as f:` instead of `f = open(...)`?",
    options: [
      "It reads the file faster into memory",
      "It automatically closes the file even if exceptions occur",
      "It locks the file preventing other programs from accessing it",
      "It automatically converts text to a JSON dictionary"
    ],
    correctAnswer: "It automatically closes the file even if exceptions occur",
    marks: 1
  },
  {
    id: 7,
    type: "mcq",
    question: "Which function from Python's standard `json` module is used to convert a Python dictionary into a JSON formatted string?",
    options: [
      "`json.load()`",
      "`json.loads()`",
      "`json.dump()`",
      "`json.dumps()`"
    ],
    correctAnswer: "`json.dumps()`",
    marks: 1
  },
  {
    id: 8,
    type: "mcq",
    question: "In NumPy, what will `np.arange(2, 10, 3)` produce?",
    options: [
      "`array([2, 5, 8])`",
      "`array([2, 5, 8, 10])`",
      "`array([3, 6, 9])`",
      "`array([2, 6, 9])`"
    ],
    correctAnswer: "`array([2, 5, 8])`",
    marks: 1
  },
  {
    id: 9,
    type: "mcq",
    question: "How do you select only the 'Age' column from a Pandas DataFrame `df` as a Series?",
    options: [
      "`df.select('Age')`",
      "`df['Age']`",
      "`df.get_column('Age')`",
      "`df.col('Age')`"
    ],
    correctAnswer: "`df['Age']`",
    marks: 1
  },
  {
    id: 10,
    type: "mcq",
    question: "Which Pandas method is used to filter rows where the column `Score` is greater than 80?",
    options: [
      "`df.filter('Score > 80')`",
      "`df[df['Score'] > 80]`",
      "`df.where(Score > 80)`",
      "`df.find(df.Score > 80)`"
    ],
    correctAnswer: "`df[df['Score'] > 80]`",
    marks: 1
  },
  {
    id: 11,
    type: "mcq",
    question: "Which Pandas method is used to sort a DataFrame by a column named 'salary' in descending order?",
    options: [
      "`df.sort_values(by='salary', ascending=False)`",
      "`df.order_by('salary', descending=True)`",
      "`df.sort('salary', reverse=True)`",
      "`df.arrange('salary', desc=True)`"
    ],
    correctAnswer: "`df.sort_values(by='salary', ascending=False)`",
    marks: 1
  },
  {
    id: 12,
    type: "mcq",
    question: "What does `df.groupby('Department')['Salary'].mean()` compute in Pandas?",
    options: [
      "The total salary for the entire company",
      "The average salary for each department",
      "The median salary across all departments",
      "A count of employees in each department"
    ],
    correctAnswer: "The average salary for each department",
    marks: 1
  },
  {
    id: 13,
    type: "mcq",
    question: "Which method replaces all `NaN` (missing) values in a Pandas DataFrame with `0`?",
    options: [
      "`df.dropna(0)`",
      "`df.fillna(0)`",
      "`df.replace_na(0)`",
      "`df.impute(0)`"
    ],
    correctAnswer: "`df.fillna(0)`",
    marks: 1
  },
  {
    id: 14,
    type: "mcq",
    question: "In HTTP REST APIs, which status code indicates a successful resource creation (typically from a POST request)?",
    options: [
      "200 OK",
      "201 Created",
      "204 No Content",
      "400 Bad Request"
    ],
    correctAnswer: "201 Created",
    marks: 1
  },
  {
    id: 15,
    type: "mcq",
    question: "What is the standard HTTP method used to retrieve data from a web API without modifying server state?",
    options: [
      "POST",
      "PUT",
      "GET",
      "FETCH"
    ],
    correctAnswer: "GET",
    marks: 1
  },
  {
    id: 16,
    type: "mcq",
    question: "Logic: What will be the value of `result`?\n\n```python\nkeys = ['a', 'b', 'c']\nvals = [10, 20]\nd = {k: v for k, v in zip(keys, vals)}\nresult = d.get('c', 99)\n```",
    options: [
      "`None`",
      "`KeyError`",
      "`99`",
      "`20`"
    ],
    correctAnswer: "`99`",
    marks: 1
  },
  {
    id: 17,
    type: "mcq",
    question: "Logic: What does this data processing pipeline produce?\n\n```python\nraw_data = [' 25 ', 'N/A', ' 40 ', 'invalid', ' 15 ']\ncleaned = [int(x.strip()) for x in raw_data if x.strip().isdigit()]\nprint(sum(cleaned))\n```",
    options: [
      "`80`",
      "`65`",
      "`ValueError`",
      "`55`"
    ],
    correctAnswer: "`80`",
    marks: 1
  },
  {
    id: 18,
    type: "code",
    question: "Write a Python function `filter_even_squares(numbers)` that takes a list of integers, filters out the odd numbers, and returns a new list containing the squares of only the even numbers using a list comprehension.",
    starterCode: "def filter_even_squares(numbers):\n    # Write your list comprehension here\n    pass\n",
    marks: 2
  },
  {
    id: 19,
    type: "code",
    question: "Write a Python function `parse_student_csv(csv_text)` that takes a multi-line CSV string (with headers `name,score`) and returns a dictionary mapping each student's name to their integer score.\n\nExample input:\n`\"name,score\\nAlice,90\\nBob,85\"`\nExample output:\n`{'Alice': 90, 'Bob': 85}`",
    starterCode: "def parse_student_csv(csv_text):\n    # Write your code here\n    pass\n",
    marks: 2
  },
  {
    id: 20,
    type: "code",
    question: "Write a Python function `aggregate_sales(transactions)` that takes a list of transaction dictionaries (each having `'category'` and `'amount'`) and returns a dictionary with total spending per category.\n\nExample input:\n`[{'category': 'Food', 'amount': 25}, {'category': 'Tech', 'amount': 100}, {'category': 'Food', 'amount': 15}]`\nExample output:\n`{'Food': 40, 'Tech': 100}`",
    starterCode: "def aggregate_sales(transactions):\n    # Write your code here\n    pass\n",
    marks: 2
  },
  {
    id: 21,
    type: "code",
    question: "Write a Python function `build_api_request(endpoint, params, api_key)` that formats a complete URL query string with the API key included.\n\nRules:\n- It should return `{endpoint}?{query_string}&apiKey={api_key}`\n- If `params` is `{'query': 'python', 'limit': 10}`, it returns formatted query pairs joined with `&`.",
    starterCode: "def build_api_request(endpoint, params, api_key):\n    # Write your code here\n    pass\n",
    marks: 2
  }
];
