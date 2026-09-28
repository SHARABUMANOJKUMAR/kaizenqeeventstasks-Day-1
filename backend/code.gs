function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Submissions");
    const data = JSON.parse(e.postData.contents);
    
    // Flatten student data
    const rowData = [
      data.timestamp,
      data.submissionId,
      data.studentData.fullName,
      data.studentData.email,
      data.studentData.college,
      data.studentData.branch,
      data.studentData.semester,
      data.studentData.rollNumber,
      "Day 1",
      data.timestamp, // Start Time (Can be implemented differently if needed)
      data.timestamp, // Submission Time
      data.timeTaken,
      data.score,
      data.maxScore,
      "Pending", // Programming Status
      "", // Final Score
      "Submitted" // Status
    ];

    // Add Objective Answers (Q1 to Q17)
    for (let i = 1; i <= 17; i++) {
      rowData.push(data.answers[i] || "");
    }

    // Add Programming Answers (Q18 to Q21)
    for (let i = 18; i <= 21; i++) {
      rowData.push(data.answers[i] || "");
    }

    // Add Violations Data
    rowData.push(data.violations ? JSON.stringify(data.violations) : "[]");

    sheet.appendRow(rowData);

    // ==========================================
    // 📧 EMAIL AUTOMATION (Beautiful & Responsive)
    // ==========================================
    const studentName = data.studentData.fullName;
    const studentEmail = data.studentData.email;
    const score = data.score;
    const maxScore = data.maxScore;
    
    // Colorful, bright, and responsive HTML Email Template
    const htmlBody = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f0fdf4; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.05); }
        .header { background: linear-gradient(135deg, #6366f1, #a855f7); padding: 40px 20px; text-align: center; color: white; }
        .header h1 { margin: 0; font-size: 28px; font-weight: 700; letter-spacing: 1px; }
        .header p { margin: 10px 0 0; font-size: 16px; opacity: 0.9; }
        .content { padding: 40px 30px; color: #374151; line-height: 1.6; }
        .greeting { font-size: 22px; font-weight: 600; color: #1f2937; margin-bottom: 20px; }
        .score-card { background: linear-gradient(to right, #ecfdf5, #d1fae5); border: 1px solid #a7f3d0; border-radius: 12px; padding: 25px; text-align: center; margin: 30px 0; transform: scale(1); transition: transform 0.3s ease; }
        .score-card:hover { transform: scale(1.02); }
        .score-title { font-size: 16px; color: #065f46; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px; }
        .score-number { font-size: 48px; font-weight: 800; color: #047857; margin: 0; line-height: 1; }
        .score-sub { font-size: 14px; color: #059669; margin-top: 10px; }
        .info-box { background-color: #eff6ff; border-left: 4px solid #3b82f6; padding: 15px 20px; border-radius: 0 8px 8px 0; font-size: 14px; color: #1e3a8a; margin-bottom: 30px; }
        .footer { background-color: #f8fafc; padding: 20px; text-align: center; font-size: 13px; color: #64748b; border-top: 1px solid #e2e8f0; }
        
        /* Responsive */
        @media only screen and (max-width: 600px) {
          .container { margin: 10px; border-radius: 12px; }
          .content { padding: 25px 20px; }
          .score-number { font-size: 36px; }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <img src="https://res.cloudinary.com/dwv8kc9vb/image/upload/v1788465282/KAIZEN_Q_EVENTS_kxjtz4.png" alt="Kaizen Q Bootcamps" style="height: 50px; margin-bottom: 15px;">
          <h1>Kaizen Q Bootcamps</h1>
          <p>Python with AI Bootcamp • Day 1</p>
        </div>
        <div class="content">
          <div class="greeting">Hello ${studentName}, 🎉</div>
          <p>Fantastic job! We have successfully received your submission for the <b>Day 1 - Python Foundations Assessment</b>.</p>
          
          <div class="score-card">
            <div class="score-title">Objective Score</div>
            <div class="score-number">${score} / ${maxScore}</div>
            <div class="score-sub">correct answers</div>
          </div>
          
          <div class="info-box">
            <strong>Note on Programming Tasks:</strong> Your coding submissions have been securely saved and are currently pending manual review by our mentors. Your final score will be updated soon!
          </div>
          
          <p>Keep up the amazing enthusiasm and dedication. We'll see you on Day 2 of the bootcamp!</p>
          <p style="margin-top: 30px;">Best wishes,<br><strong>The Kaizen Q Team</strong></p>
        </div>
        <div class="footer">
          Visit our website for updates: <a href="https://kaizenqevents.click" style="color: #6366f1; text-decoration: none; font-weight: bold;">kaizenqevents.click</a><br><br>
          &copy; ${new Date().getFullYear()} Kaizen Q Events. All rights reserved.<br>
          This is an automated message, please do not reply.
        </div>
      </div>
    </body>
    </html>
    `;

    // Send the email
    MailApp.sendEmail({
      to: studentEmail,
      subject: "🎉 Assessment Received: Day 1 Python Bootcamp",
      htmlBody: htmlBody,
      name: "Kaizen Q Bootcamp"
    });

    return ContentService.createTextOutput(JSON.stringify({"result":"success"}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({"result":"error", "error": error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: Handle preflight OPTIONS requests if making CORS requests from browser
function doOptions(e) {
  var headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400"
  };
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeaders(headers);
}
