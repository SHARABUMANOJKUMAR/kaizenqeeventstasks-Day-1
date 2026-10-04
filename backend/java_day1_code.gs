function doPost(e) {
  try {
    // ====================================================================
    // FIX: Force it to use the exact Day 1 Spreadsheet ID!
    // TODO: Paste your Day 1 Spreadsheet ID between the quotes below
    // ====================================================================
    var ss = SpreadsheetApp.openById("REPLACE_THIS_WITH_YOUR_DAY_1_SPREADSHEET_ID");
    
    // Attempt to find sheet "Submissions", otherwise use the first sheet
    var sheet = ss.getSheetByName("Submissions");
    if (!sheet) {
      sheet = ss.getSheets()[0];
    }
    
    var data = JSON.parse(e.postData.contents);
    
    // Extract nested data objects
    var student = data.studentData || {};
    var violations = data.violations || {};
    var answers = data.answers || {};

    // ----------------------------------------------------
    // 1. Calculate Evaluation Metrics
    // ----------------------------------------------------
    var totalMCQ = data.maxScore || 15;
    var correct = data.score || 0;
    var incorrect = totalMCQ - correct;
    if (incorrect < 0) incorrect = 0;
    
    var accuracy = totalMCQ > 0 ? Math.round((correct / totalMCQ) * 100) : 0;
    
    // Format Time Taken (from seconds to mins:secs)
    var timeTakenMin = Math.floor((data.timeTaken || 0) / 60);
    var timeTakenSec = (data.timeTaken || 0) % 60;
    var formattedTime = timeTakenMin + "m " + timeTakenSec + "s";

    // Format Date & Time of Submission for IST
    var submittedAt = new Date(data.timestamp).toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      day: '2-digit', month: 'short', year: 'numeric',
      hour: '2-digit', minute: '2-digit', hour12: true
    });

    // ----------------------------------------------------
    // 2. Append Data to Google Sheet
    // ----------------------------------------------------
    var row = [
      data.timestamp,
      data.submissionId,
      data.dayNumber,
      data.assessment,
      student.fullName || "",
      student.email || "",
      student.college || "",
      student.branch || "",
      student.semester || "",
      student.rollNumber || "",
      student.phone || "",
      correct,
      totalMCQ,
      data.timeTaken || 0,
      
      // Violations
      violations.rightClicks || 0,
      violations.copyPasteAttempts || 0,
      violations.tabSwitches || 0,
      violations.devToolsOpens || 0,
      
      // 15 Multiple Choice Questions
      answers["J_D1_M1"] || "", answers["J_D1_M2"] || "", answers["J_D1_M3"] || "",
      answers["J_D1_M4"] || "", answers["J_D1_M5"] || "", answers["J_D1_M6"] || "",
      answers["J_D1_M7"] || "", answers["J_D1_M8"] || "", answers["J_D1_M9"] || "",
      answers["J_D1_M10"] || "", answers["J_D1_M11"] || "", answers["J_D1_M12"] || "",
      answers["J_D1_M13"] || "", answers["J_D1_M14"] || "", answers["J_D1_M15"] || "",
      
      // 2 Programming Questions
      answers["J_D1_C1"] || "", answers["J_D1_C2"] || ""
    ];
    
    sheet.appendRow(row);

    // ----------------------------------------------------
    // 3. Email Automation (Exact Template Match)
    // ----------------------------------------------------
    var studentEmail = student.email || "";
    
    if (studentEmail !== "") {
      var emailSubject = "Java Day 1 Result - Kaizen Q Bootcamps";
      var studentName = student.fullName || "Student";
      
      var htmlBody = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f9fafb; margin: 0; padding: 20px; color: #1f2937; line-height: 1.5; }
          .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden; }
          .header { text-align: center; padding: 30px 20px 20px; border-bottom: 1px solid #f3f4f6; }
          .logo { max-width: 150px; margin-bottom: 15px; }
          .title-banner { background-color: #4f46e5; color: white; padding: 12px 20px; text-align: center; }
          .title-banner h1 { margin: 0; font-size: 20px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase; }
          .sub-banner { background-color: #eef2ff; color: #4338ca; text-align: center; padding: 12px 20px; font-size: 15px; font-weight: 700; }
          
          .content { padding: 30px 30px; }
          .greeting { font-size: 16px; font-weight: 600; margin-bottom: 15px; }
          
          .score-card { background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 25px 20px; text-align: center; margin: 25px 0; }
          .score-card h2 { margin: 0 0 10px 0; font-size: 14px; color: #64748b; text-transform: uppercase; letter-spacing: 1px; }
          .score-big { font-size: 38px; font-weight: 800; color: #10b981; margin: 0 0 10px 0; }
          .score-subtitle { font-size: 15px; color: #475569; margin: 0; font-weight: 500; }
          
          .stats-grid { display: table; width: 100%; table-layout: fixed; margin-bottom: 30px; border-collapse: separate; border-spacing: 12px 0; }
          .stat-cell { display: table-cell; text-align: center; background-color: #f8fafc; padding: 20px 10px; border-radius: 8px; border: 1px solid #e2e8f0; }
          .stat-num { font-size: 26px; font-weight: 800; margin-bottom: 5px; }
          .stat-label { font-size: 12px; color: #64748b; font-weight: 700; text-transform: uppercase; }
          .text-green { color: #10b981; }
          .text-red { color: #ef4444; }
          .text-blue { color: #3b82f6; }
          
          .feedback-box { background-color: #ecfdf5; border-left: 4px solid #10b981; padding: 15px 20px; margin-bottom: 30px; font-size: 15px; color: #065f46; line-height: 1.6; }
          
          .details-table { width: 100%; border-collapse: collapse; margin-bottom: 30px; font-size: 14px; }
          .details-table td { padding: 12px 15px; border-bottom: 1px solid #f1f5f9; }
          .details-table td:first-child { font-weight: 600; color: #475569; width: 40%; }
          .details-table td:last-child { color: #1e293b; font-weight: 500; }
          
          .coding-note { background-color: #fffbeb; border: 1px solid #fef3c7; padding: 15px 20px; border-radius: 8px; font-size: 14px; color: #92400e; margin-bottom: 25px; line-height: 1.6; }
          
          .next-day { font-size: 15px; line-height: 1.6; color: #374151; margin-bottom: 30px; }
          
          .footer { text-align: center; border-top: 1px solid #e5e7eb; padding: 30px 20px; font-size: 12px; color: #6b7280; line-height: 1.6; background-color: #f9fafb; }
          .footer a { color: #4f46e5; text-decoration: none; font-weight: 600; }
          .footer p { margin: 5px 0; }
          .motto { font-weight: 700; letter-spacing: 1px; color: #4b5563; margin-bottom: 15px; font-size: 11px; text-transform: uppercase; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img src="https://res.cloudinary.com/dwv8kc9vb/image/upload/v1788465282/KAIZEN_Q_EVENTS_kxjtz4.png" alt="Kaizen Q Bootcamps" class="logo">
          </div>
          
          <div class="title-banner">
            <h1>Day 1 Result</h1>
          </div>
          <div class="sub-banner">
            Day 1 - Java Fundamentals<br>
            <span style="font-weight: 500; font-size: 13px; margin-top: 4px; display: inline-block;">Java with AI — 5-Day Hands-On Bootcamp</span>
          </div>
          
          <div class="content">
            <div class="greeting">Hello ${studentName},</div>
            <p style="font-size: 15px; color: #4b5563; margin-top: 0; line-height: 1.6;">Thank you for submitting your Day 1 Assessment! Here is your official objective score and answer breakdown:</p>
            
            <div class="score-card">
              <h2>Your Objective Score</h2>
              <div class="score-big">${correct} / ${totalMCQ}</div>
              <p class="score-subtitle">You correctly answered ${correct} out of ${totalMCQ} questions!</p>
            </div>
            
            <div class="stats-grid">
              <div class="stat-cell">
                <div class="stat-num text-green">${correct}</div>
                <div class="stat-label">Correct</div>
              </div>
              <div class="stat-cell">
                <div class="stat-num text-red">${incorrect}</div>
                <div class="stat-label">Incorrect</div>
              </div>
              <div class="stat-cell">
                <div class="stat-num text-blue">${accuracy}%</div>
                <div class="stat-label">Accuracy</div>
              </div>
            </div>
            
            <div class="feedback-box">
              <strong>Outstanding Performance:</strong> You demonstrated strong mastery of Java Basics, Data Types, and Operators!
            </div>
            
            <table class="details-table">
              <tr>
                <td>Correct Answers</td>
                <td>${correct} / ${totalMCQ}</td>
              </tr>
              <tr>
                <td>Accuracy Rate</td>
                <td>${accuracy}%</td>
              </tr>
              <tr>
                <td>Submission ID</td>
                <td style="font-family: monospace;">${data.submissionId}</td>
              </tr>
              <tr>
                <td>Roll Number</td>
                <td>${student.rollNumber || "N/A"}</td>
              </tr>
              <tr>
                <td>College</td>
                <td>${student.college || "N/A"}</td>
              </tr>
              <tr>
                <td>Time Taken</td>
                <td>${formattedTime}</td>
              </tr>
              <tr>
                <td>Submitted At</td>
                <td>${submittedAt}</td>
              </tr>
            </table>
            
            <div class="coding-note">
              <strong>Java Coding Tasks (Q16–Q17):</strong> Your 2 Java code solutions have been securely saved and queued for mentor review. Your final score will be updated upon manual code inspection.
            </div>
            
            <div class="next-day">
              Keep up the great work! Tomorrow in <strong>Day 2: Java OOP Fundamentals</strong>, we take these foundations and step into Classes, Objects, and Inheritance.
            </div>
            
            <p style="font-size: 15px; margin: 0; color: #374151;">
              Warm regards,<br>
              <strong>The Kaizen Q Team</strong>
            </p>
          </div>
          
          <div class="footer">
            <div class="motto">Learn &bull; Build &bull; Deploy &bull; Innovate</div>
            <p>Visit bootcamp portal: <a href="https://kaizenqevents.click/">kaizenqevents.click</a></p>
            <p>&copy; ${new Date().getFullYear()} Kaizen Q Events. All rights reserved.</p>
            <p style="font-size: 11px; margin-top: 15px;">This is an automated notification confirming your task submission.</p>
          </div>
        </div>
      </body>
      </html>
      `;
      
      // Dispatch the email
      MailApp.sendEmail({
        to: studentEmail,
        subject: emailSubject,
        htmlBody: htmlBody,
        name: "Kaizen Q Bootcamps"
      });
    }
    
    return ContentService.createTextOutput(JSON.stringify({"status": "success"}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({"status": "error", "message": error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Handle preflight CORS requests from browsers
 */
function doOptions(e) {
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeaders({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400"
    });
}
