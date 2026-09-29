export const day3Questions = [
  {
    id: 1,
    type: "mcq",
    question: "What is the primary difference between Supervised and Unsupervised Learning?",
    options: [
      "Supervised learning requires labeled training data, while unsupervised learning works on unlabeled data",
      "Supervised learning does not use algorithms, only neural networks",
      "Unsupervised learning always produces higher accuracy than supervised learning",
      "Supervised learning is only used for continuous numbers"
    ],
    correctAnswer: "Supervised learning requires labeled training data, while unsupervised learning works on unlabeled data",
    marks: 1
  },
  {
    id: 2,
    type: "mcq",
    question: "In machine learning terminology, what are the independent variables/inputs fed into a model called?",
    options: [
      "Labels",
      "Targets",
      "Features",
      "Weights"
    ],
    correctAnswer: "Features",
    marks: 1
  },
  {
    id: 3,
    type: "mcq",
    question: "Which of the following is a classic example of a **Regression** task?",
    options: [
      "Predicting house price in dollars based on square footage and location",
      "Classifying an email as Spam or Not Spam",
      "Recognizing whether a handwritten digit is 0 through 9",
      "Clustering customer shopping habits into 3 groups"
    ],
    correctAnswer: "Predicting house price in dollars based on square footage and location",
    marks: 1
  },
  {
    id: 4,
    type: "mcq",
    question: "Which Scikit-Learn function is commonly used to divide a dataset into training and evaluation sets?",
    options: [
      "`sklearn.model_selection.train_test_split`",
      "`sklearn.preprocessing.data_split`",
      "`sklearn.metrics.split_dataset`",
      "`sklearn.linear_model.partition`"
    ],
    correctAnswer: "`sklearn.model_selection.train_test_split`",
    marks: 1
  },
  {
    id: 5,
    type: "mcq",
    question: "What does the `random_state` parameter in `train_test_split` ensure?",
    options: [
      "It makes the training process run faster",
      "It ensures reproducible data splitting across runs",
      "It selects only random rows and discards the rest",
      "It shuffles the feature columns instead of rows"
    ],
    correctAnswer: "It ensures reproducible data splitting across runs",
    marks: 1
  },
  {
    id: 6,
    type: "mcq",
    question: "Despite having 'Regression' in its name, what kind of machine learning task is **Logistic Regression** primarily used for?",
    options: [
      "Continuous numerical prediction",
      "Binary or multi-class Classification",
      "Unsupervised dimensionality reduction",
      "Time-series forecasting"
    ],
    correctAnswer: "Binary or multi-class Classification",
    marks: 1
  },
  {
    id: 7,
    type: "mcq",
    question: "Which algorithm constructs multiple decision trees during training and merges their outputs for higher accuracy and stability?",
    options: [
      "Linear Regression",
      "Random Forest",
      "K-Means",
      "PCA"
    ],
    correctAnswer: "Random Forest",
    marks: 1
  },
  {
    id: 8,
    type: "mcq",
    question: "What does a **Confusion Matrix** display in a classification model?",
    options: [
      "The loss function over training epochs",
      "The breakdown of True Positives, False Positives, True Negatives, and False Negatives",
      "The correlation between input features",
      "The execution time of each tree in a forest"
    ],
    correctAnswer: "The breakdown of True Positives, False Positives, True Negatives, and False Negatives",
    marks: 1
  },
  {
    id: 9,
    type: "mcq",
    question: "How is classification **Accuracy** defined mathematically?",
    options: [
      "`(TP + TN) / (TP + TN + FP + FN)`",
      "`TP / (TP + FP)`",
      "`TP / (TP + FN)`",
      "`TN / (TN + FP)`"
    ],
    correctAnswer: "`(TP + TN) / (TP + TN + FP + FN)`",
    marks: 1
  },
  {
    id: 10,
    type: "mcq",
    question: "What problem occurs when a model performs exceptionally well on training data but fails to generalize to new, unseen test data?",
    options: [
      "Underfitting",
      "Overfitting",
      "Convergence",
      "Imputation"
    ],
    correctAnswer: "Overfitting",
    marks: 1
  },
  {
    id: 11,
    type: "mcq",
    question: "Which Scikit-Learn estimator method is called to train a model on training features `X_train` and labels `y_train`?",
    options: [
      "`model.train(X_train, y_train)`",
      "`model.fit(X_train, y_train)`",
      "`model.learn(X_train, y_train)`",
      "`model.execute(X_train, y_train)`"
    ],
    correctAnswer: "`model.fit(X_train, y_train)`",
    marks: 1
  },
  {
    id: 12,
    type: "mcq",
    question: "Which metric is commonly used to evaluate **Regression** models?",
    options: [
      "Mean Squared Error (MSE)",
      "Confusion Matrix",
      "F1 Score",
      "ROC-AUC"
    ],
    correctAnswer: "Mean Squared Error (MSE)",
    marks: 1
  },
  {
    id: 13,
    type: "mcq",
    question: "In Decision Tree algorithms, what criterion is frequently used to determine the best feature split?",
    options: [
      "Gini Impurity or Information Gain",
      "Euclidean Distance",
      "Cosine Similarity",
      "Gradient Descent"
    ],
    correctAnswer: "Gini Impurity or Information Gain",
    marks: 1
  },
  {
    id: 14,
    type: "mcq",
    question: "What is **Feature Scaling** (like StandardScaler or MinMaxScaler) primarily used for?",
    options: [
      "To convert text labels into binary numbers",
      "To bring different feature values into a similar numerical range",
      "To eliminate missing values in columns",
      "To increase the number of training samples"
    ],
    correctAnswer: "To bring different feature values into a similar numerical range",
    marks: 1
  },
  {
    id: 15,
    type: "mcq",
    question: "Which of the following is an Unsupervised Learning algorithm?",
    options: [
      "K-Means Clustering",
      "Linear Regression",
      "Decision Tree Classifier",
      "Support Vector Machine (Classification)"
    ],
    correctAnswer: "K-Means Clustering",
    marks: 1
  },
  {
    id: 16,
    type: "mcq",
    question: "Logic: A binary classifier tested on 100 samples produces: `TP=40, TN=40, FP=10, FN=10`. What is its accuracy?",
    options: [
      "80%",
      "40%",
      "90%",
      "75%"
    ],
    correctAnswer: "80%",
    marks: 1
  },
  {
    id: 17,
    type: "mcq",
    question: "Logic: You have 1,000 data rows and call `train_test_split(X, y, test_size=0.25)`. How many rows are in the training set?",
    options: [
      "250",
      "750",
      "800",
      "500"
    ],
    correctAnswer: "750",
    marks: 1
  },
  {
    id: 18,
    type: "code",
    question: "Write a Python function `calculate_accuracy(y_true, y_pred)` that takes two lists of equal length (true labels and predicted labels) and returns the accuracy score as a float between 0.0 and 1.0.",
    starterCode: "def calculate_accuracy(y_true, y_pred):\n    # Write your code here\n    pass\n",
    marks: 2
  },
  {
    id: 19,
    type: "code",
    question: "Write a Python function `mean_squared_error(actual, predicted)` that calculates and returns the Mean Squared Error (MSE) between two lists of numbers without importing external ML libraries.",
    starterCode: "def mean_squared_error(actual, predicted):\n    # Write your code here\n    pass\n",
    marks: 2
  },
  {
    id: 20,
    type: "code",
    question: "Write a Python function `confusion_matrix_counts(y_true, y_pred)` for binary classification (labels 1 and 0) that returns a dictionary with keys: `'TP'`, `'TN'`, `'FP'`, and `'FN'`.",
    starterCode: "def confusion_matrix_counts(y_true, y_pred):\n    # Write your code here\n    pass\n",
    marks: 2
  },
  {
    id: 21,
    type: "code",
    question: "Write a Python function `normalize_features(features)` that takes a list of float numbers and normalizes them using Min-Max scaling to the range [0.0, 1.0]. If all numbers are identical, return a list of zeros.",
    starterCode: "def normalize_features(features):\n    # Write your code here\n    pass\n",
    marks: 2
  }
];
