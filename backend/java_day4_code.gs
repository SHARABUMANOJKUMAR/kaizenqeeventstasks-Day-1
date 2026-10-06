// Kaizen Q Events - Java Bootcamp Day 4 (Java Arrays) - Assessment Submission Script

// 1. Enter the Sheet ID (from the URL of your Google Sheet)
const SHEET_ID = "YOUR_SPREADSHEET_ID_HERE";
// Example: if URL is https://docs.google.com/spreadsheets/d/1ABC123/edit, ID is 1ABC123

// 2. Name of the sheet (tab) where data will be stored
const SHEET_NAME = "Day4_Submissions";

// EXACT CORRECT ANSWERS FOR DAY 4
const correctAnswers = {
  'J_D4_M1': 'A variable that can store multiple values of the same datatype',
  'J_D4_M2': 'Contiguous memory locations',
  'J_D4_M3': 'datatype[] arrayName = new datatype[size];',
  'J_D4_M4': 'int[] a;',
  'J_D4_M5': 'Both A and B',
  'J_D4_M6': 'Linear Array',
  'J_D4_M7': 'One subscript/index',
  'J_D4_M8': 'int[][] marks = new int[3][3];',
  'J_D4_M9': 'A matrix/table',
  'J_D4_M10': 'All of the above',
  'J_D4_M11': 'Three',
  'J_D4_M12': 'datatype[][][] arrayName = new datatype[x][y][z];',
  'J_D4_M13': '3-D array',
  'J_D4_M14': 'Rows and columns',
  'J_D4_M15': 'int[77] a;'
};

function doPost(e) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json"
  };

  try {
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    
    // Auto-create sheet and exact headers like Day 2
    if (!sheet) {
      const newSheet = SpreadsheetApp.openById(SHEET_ID).insertSheet(SHEET_NAME);
      const headersRow = [
        "Timestamp", "Name", "Email", "Phone", "College", "Degree", "Branch", "Graduation Year", 
        "MCQ Score", "Coding 1 Completed", "Coding 2 Completed", "Total Score",
        // 15 MCQs
        "Q1 Answer", "Q2 Answer", "Q3 Answer", "Q4 Answer", "Q5 Answer", 
        "Q6 Answer", "Q7 Answer", "Q8 Answer", "Q9 Answer", "Q10 Answer",
        "Q11 Answer", "Q12 Answer", "Q13 Answer", "Q14 Answer", "Q15 Answer",
        // Coding Challenges
        "Code 1 (1-D Array)", "Code 2 (2-D Array)", 
        // Meta
        "Time Taken (Seconds)", "Status", "Security & Integrity Violations Log"
      ];
      newSheet.appendRow(headersRow);
      newSheet.getRange(1, 1, 1, headersRow.length).setFontWeight("bold");
    }

    const currentSheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);

    let data;
    try {
      data = JSON.parse(e.postData.contents);
    } catch (parseError) {
      return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: 'Invalid JSON format' })).setMimeType(ContentService.MimeType.JSON);
    }

    const student = data.studentData || {};
    const answers = data.answers || {};
    const codeSubmissions = data.codeSubmissions || {};
    const timeRemaining = data.timeRemaining || 0;
    const timeTaken = (45 * 60) - timeRemaining; 
    let violationsString = data.violations ? JSON.stringify(data.violations) : "[]";

    // ----------------------------------------------------
    // DETAILED EVALUATION
    // ----------------------------------------------------
    let correctCount = 0;
    let wrongCount = 0;
    let unattemptedCount = 0;
    
    let evaluationDetails = "";

    for (let i = 1; i <= 15; i++) {
      const qId = 'J_D4_M' + i;
      const studentAns = answers[qId];
      const correctAns = correctAnswers[qId];
      
      let statusColor = "";
      let statusText = "";

      if (!studentAns || studentAns.trim() === "") {
        unattemptedCount++;
        statusColor = "#f59e0b"; // Yellow
        statusText = "Not Attempted";
      } else if (studentAns === correctAns) {
        correctCount++;
        statusColor = "#10b981"; // Green
        statusText = "Correct";
      } else {
        wrongCount++;
        statusColor = "#ef4444"; // Red
        statusText = "Wrong";
      }

      evaluationDetails += `
        <div style="margin-bottom: 12px; padding: 10px; border-left: 4px solid ${statusColor}; background-color: #f9fafb;">
          <strong>Question ${i}:</strong> <span style="color: ${statusColor}; font-weight: bold;">${statusText}</span><br/>
          Your Answer: <em>${studentAns || "None"}</em><br/>
          Correct Answer: <em>${correctAns}</em>
        </div>
      `;
    }

    const coding1Status = codeSubmissions['J_D4_C1'] ? "Submitted" : "Not Attempted";
    const coding2Status = codeSubmissions['J_D4_C2'] ? "Submitted" : "Not Attempted";
    const codingCompleted = (codeSubmissions['J_D4_C1'] ? 1 : 0) + (codeSubmissions['J_D4_C2'] ? 1 : 0);
    const totalScore = correctCount + (codingCompleted * 5); 

    const rowData = [
      new Date(), 
      student.name || "", student.email || "", student.phone || "",
      student.college || "", student.degree || "", student.branch || "", student.graduationYear || "",
      correctCount, // MCQ Score
      coding1Status, coding2Status, totalScore,
      answers['J_D4_M1'] || "Not answered", answers['J_D4_M2'] || "Not answered", answers['J_D4_M3'] || "Not answered",
      answers['J_D4_M4'] || "Not answered", answers['J_D4_M5'] || "Not answered", answers['J_D4_M6'] || "Not answered",
      answers['J_D4_M7'] || "Not answered", answers['J_D4_M8'] || "Not answered", answers['J_D4_M9'] || "Not answered",
      answers['J_D4_M10'] || "Not answered", answers['J_D4_M11'] || "Not answered", answers['J_D4_M12'] || "Not answered",
      answers['J_D4_M13'] || "Not answered", answers['J_D4_M14'] || "Not answered", answers['J_D4_M15'] || "Not answered",
      codeSubmissions['J_D4_C1'] || "Not attempted", codeSubmissions['J_D4_C2'] || "Not attempted",
      timeTaken, "Submitted", violationsString
    ];

    currentSheet.appendRow(rowData);
    
    // SEND AUTOMATED EMAIL
    if (student.email) {
      sendDetailedEmail(student.email, student.name, correctCount, wrongCount, unattemptedCount, totalScore, coding1Status, coding2Status, evaluationDetails);
    }

    return ContentService.createTextOutput(JSON.stringify({ status: 'success', message: 'Assessment submitted successfully' })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: error.toString() })).setMimeType(ContentService.MimeType.JSON);
  }
}

function sendDetailedEmail(email, name, correctCount, wrongCount, unattemptedCount, totalScore, coding1, coding2, evaluationDetails) {
  const subject = "Kaizen Q Bootcamps: Java Day 4 Assessment Detailed Results";
  
  const body = `
  <html>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 650px; margin: 0 auto; padding: 20px;">
      <div style="border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
        
        <div style="background-color: #2563eb; color: white; padding: 20px; text-align: center;">
          <h2 style="margin: 0;">Java with AI Bootcamp</h2>
          <p style="margin: 5px 0 0 0; opacity: 0.9;">Day 4 (Java Arrays) - Assessment Results</p>
        </div>
        
        <div style="padding: 20px;">
          <p>Hi <strong>${name}</strong>,</p>
          <p>Thank you for completing the Java Day 4 Assessment. Here is your detailed performance report:</p>
          
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr>
              <td style="padding: 10px; border: 1px solid #e5e7eb; background-color: #f9fafb;"><strong>Total Score</strong></td>
              <td style="padding: 10px; border: 1px solid #e5e7eb; font-size: 18px; font-weight: bold; color: #2563eb;">${totalScore}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #e5e7eb; background-color: #f9fafb;"><strong>MCQs Correct</strong></td>
              <td style="padding: 10px; border: 1px solid #e5e7eb; color: #10b981; font-weight: bold;">${correctCount}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #e5e7eb; background-color: #f9fafb;"><strong>MCQs Wrong</strong></td>
              <td style="padding: 10px; border: 1px solid #e5e7eb; color: #ef4444; font-weight: bold;">${wrongCount}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #e5e7eb; background-color: #f9fafb;"><strong>MCQs Not Attempted</strong></td>
              <td style="padding: 10px; border: 1px solid #e5e7eb; color: #f59e0b; font-weight: bold;">${unattemptedCount}</td>
            </tr>
          </table>

          <h3 style="border-bottom: 2px solid #e5e7eb; padding-bottom: 5px;">Coding Challenges</h3>
          <ul style="list-style-type: none; padding: 0;">
            <li style="margin-bottom: 10px;">💻 <strong>Coding 1 (1-D Arrays):</strong> ${coding1 === 'Submitted' ? '<span style="color: #10b981; font-weight:bold;">Submitted</span>' : '<span style="color: #ef4444; font-weight:bold;">Not Attempted</span>'}</li>
            <li>💻 <strong>Coding 2 (2-D Arrays):</strong> ${coding2 === 'Submitted' ? '<span style="color: #10b981; font-weight:bold;">Submitted</span>' : '<span style="color: #ef4444; font-weight:bold;">Not Attempted</span>'}</li>
          </ul>

          <h3 style="border-bottom: 2px solid #e5e7eb; padding-bottom: 5px; margin-top: 30px;">Detailed MCQ Evaluation</h3>
          ${evaluationDetails}
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 12px;">
            <p>Keep practicing and pushing forward! Consistency is the key to mastering Java.</p>
            <p>&copy; Kaizen Q Events</p>
          </div>
        </div>
      </div>
    </body>
  </html>
  `;
  
  MailApp.sendEmail({ to: email, subject: subject, htmlBody: body });
}

function doOptions(e) {
  const headers = { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "POST, GET, OPTIONS", "Access-Control-Allow-Headers": "Content-Type", "Access-Control-Max-Age": "86400" };
  return ContentService.createTextOutput("").setMimeType(ContentService.MimeType.JSON).setHeaders(headers);
}
