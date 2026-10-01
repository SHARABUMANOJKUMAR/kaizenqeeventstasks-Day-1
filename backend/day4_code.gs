/**
 * ============================================================================
 * KAIZEN Q BOOTCAMPS — PYTHON WITH AI BOOTCAMP
 * Multi-Day Assessment Submission Engine & Email Automation - DAY 4
 * ============================================================================
 * 
 * Google Spreadsheet Column Mapping (A to AM):
 *  A: Timestamp
 *  B: Submission ID
 *  C: Full Name
 *  D: Email
 *  E: College
 *  F: Branch
 *  G: Semester
 *  H: Roll Number
 *  I: Day (e.g. "Day 4")
 *  J: Start Time
 *  K: Submission Time
 *  L: Time Taken (Formatted mm:ss or seconds)
 *  M: Objective Score (out of 17)
 *  N: Objective Max Score (17)
 *  O: Programming Status ("Pending Evaluation")
 *  P: Final Score
 *  Q: Status ("Submitted")
 *  R to AH: Q1 to Q17 Objective Answers (17 columns)
 *  AI to AL: Q18 to Q21 Coding Solutions (4 columns)
 *  AM: Security & Integrity Violations Log (JSON string)
 */

function doPost(e) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    
    // Attempt to find sheet "Submissions", otherwise use the first sheet
    let sheet = ss.getSheetByName("Submissions");
    if (!sheet) {
      sheet = ss.getSheets()[0];
    }

    const data = JSON.parse(e.postData.contents);
    const student = data.studentData || {};
    
    // Resolve Day identification for Day 4
    const dayNum = data.day || 4;
    const dayLabel = "Day " + dayNum;
    const assessmentTitle = data.assessment || (dayLabel + " — Python + Generative AI");

    // Format time taken cleanly (e.g., "38m 20s")
    const timeTakenSec = data.timeTaken || 0;
    const mins = Math.floor(timeTakenSec / 60);
    const secs = timeTakenSec % 60;
    const formattedTimeTaken = `${mins}m ${secs < 10 ? '0' : ''}${secs}s`;

    // Format timestamps nicely
    const submissionDate = new Date();
    const formattedDate = Utilities.formatDate(submissionDate, "Asia/Kolkata", "dd MMM yyyy, hh:mm a");

    // -------------------------------------------------------------
    // Build Row Array strictly matching Columns A to AM (39 columns)
    // -------------------------------------------------------------
    const rowData = [
      data.timestamp || new Date().toISOString(), // A: Timestamp
      data.submissionId || "",                   // B: Submission ID
      student.fullName || "",                     // C: Full Name
      student.email || "",                        // D: Email
      student.college || "",                      // E: College
      student.branch || "",                       // F: Branch
      student.semester || "",                     // G: Semester
      student.rollNumber || "",                   // H: Roll Number
      dayLabel,                                   // I: Day
      data.timestamp || "",                       // J: Start Time
      formattedDate,                              // K: Submission Time
      formattedTimeTaken,                         // L: Time Taken
      Number(data.score) || 0,                    // M: Objective Score
      Number(data.maxScore) || 17,                // N: Objective Max Score
      "Pending Evaluation",                       // O: Programming Status
      "",                                         // P: Final Score
      "Submitted"                                 // Q: Status
    ];

    // R to AH: Objective Answers (Q1 to Q17) -> 17 columns
    const answers = data.answers || {};
    for (let i = 1; i <= 17; i++) {
      const ans = answers[i] !== undefined ? String(answers[i]) : "";
      rowData.push(ans);
    }

    // AI to AL: Coding Submissions (Q18 to Q21) -> 4 columns
    for (let i = 18; i <= 21; i++) {
      const code = answers[i] !== undefined ? String(answers[i]) : "";
      rowData.push(code);
    }

    // AM: Violations Log -> 1 column
    const violationsJson = data.violations && data.violations.length > 0
      ? JSON.stringify(data.violations) 
      : "None";
    rowData.push(violationsJson);

    // Append to Google Sheet
    sheet.appendRow(rowData);

    // =========================================================================
    // 📧 BEAUTIFUL, LIGHT-THEMED, FULLY RESPONSIVE CONFIRMATION EMAIL
    // =========================================================================
    if (student.email && student.email.indexOf("@") !== -1) {
      const score = Number(data.score) || 0;
      const maxScore = Number(data.maxScore) || 17;
      const scorePercent = Math.round((score / (maxScore || 1)) * 100);

      // Light, soft, modern responsive HTML template (NO dark colors)
      const htmlEmail = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Assessment Submission Confirmation</title>
        <style>
          body { margin: 0; padding: 0; background-color: #f8faff; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #26324a; -webkit-text-size-adjust: 100%; }
          .email-wrapper { width: 100%; background-color: #f8faff; padding: 30px 10px; }
          .email-card { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 20px; border: 1px solid #eef2f6; overflow: hidden; box-shadow: 0 10px 30px rgba(108, 99, 199, 0.08); }
          .header-banner { background: linear-gradient(135deg, #ede9fe 0%, #e0f2fe 100%); padding: 36px 24px; text-align: center; border-bottom: 1px solid #e2e8f0; }
          .brand-badge { display: inline-block; background-color: #ffffff; color: #6c63c7; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.2px; padding: 6px 14px; border-radius: 50px; border: 1px solid #ddd6fe; margin-bottom: 12px; }
          .header-title { margin: 0; font-size: 26px; font-weight: 800; color: #26324a; letter-spacing: -0.5px; }
          .header-subtitle { margin: 6px 0 0; font-size: 15px; color: #64748b; font-weight: 500; }
          .content-body { padding: 36px 30px; }
          .greeting { font-size: 20px; font-weight: 700; color: #1e293b; margin-bottom: 12px; }
          .intro-text { font-size: 15px; line-height: 1.6; color: #475569; margin-bottom: 24px; }
          
          /* Soft Highlight Score Card */
          .score-grid { margin: 24px 0; background: linear-gradient(135deg, #f0fdf4 0%, #f5f3ff 100%); border: 1px solid #bbf7d0; border-radius: 16px; padding: 22px; text-align: center; }
          .score-heading { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #047857; margin-bottom: 6px; }
          .score-value { font-size: 42px; font-weight: 800; color: #065f46; line-height: 1; margin: 0; }
          .score-total { font-size: 18px; color: #64748b; font-weight: 500; }
          .score-pill { display: inline-block; margin-top: 8px; background-color: #dcfce7; color: #15803d; font-size: 12px; font-weight: 600; padding: 3px 12px; border-radius: 12px; }

          /* Info Details Card */
          .details-card { background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 14px; padding: 18px 20px; margin-bottom: 24px; }
          .detail-row { display: flex; justify-content: space-between; padding: 7px 0; font-size: 13.5px; border-bottom: 1px dashed #e2e8f0; }
          .detail-row:last-child { border-bottom: none; }
          .detail-label { color: #64748b; font-weight: 500; }
          .detail-val { color: #1e293b; font-weight: 600; text-align: right; }

          /* Status Notice */
          .notice-box { background-color: #eff6ff; border-left: 4px solid #3b82f6; padding: 14px 16px; border-radius: 0 10px 10px 0; margin-bottom: 24px; font-size: 13.5px; color: #1e40af; line-height: 1.5; }

          /* Footer */
          .footer-section { background-color: #f8fafc; border-top: 1px solid #f1f5f9; padding: 24px 20px; text-align: center; font-size: 12px; color: #94a3b8; line-height: 1.6; }
          .footer-link { color: #6c63c7; font-weight: 600; text-decoration: none; }

          @media only screen and (max-width: 480px) {
            .content-body { padding: 24px 18px; }
            .header-title { font-size: 22px; }
            .score-value { font-size: 34px; }
          }
        </style>
      </head>
      <body>
        <div class="email-wrapper">
          <div class="email-card">
            <!-- Header Banner -->
            <div class="header-banner">
              <img src="https://res.cloudinary.com/dwv8kc9vb/image/upload/v1788465282/KAIZEN_Q_EVENTS_kxjtz4.png" alt="Kaizen Q Bootcamps" style="height: 48px; width: auto; margin-bottom: 12px;">
              <br>
              <div class="brand-badge">${dayLabel} Completed</div>
              <h1 class="header-title">${assessmentTitle}</h1>
              <p class="header-subtitle">Python with AI — 5-Day Hands-On Bootcamp</p>
            </div>

            <!-- Content Area -->
            <div class="content-body">
              <div class="greeting">Hello ${student.fullName || 'Student'}, 🌟</div>
              <p class="intro-text">Congratulations on completing your <strong>${dayLabel} Assessment</strong>! Your submission has been securely recorded in the official bootcamp evaluation database.</p>
              
              <!-- Objective Score Box -->
              <div class="score-grid">
                <div class="score-heading">Objective Score (MCQ & Logic)</div>
                <div class="score-value">${score} <span class="score-total">/ ${maxScore}</span></div>
                <div class="score-pill">${scorePercent}% Accuracy</div>
              </div>

              <!-- Key Metadata Details -->
              <div class="details-card">
                <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
                  <tr style="border-bottom: 1px dashed #e2e8f0;">
                    <td style="padding: 7px 0; font-size: 13.5px; color: #64748b;">Submission ID</td>
                    <td style="padding: 7px 0; font-size: 13.5px; color: #1e293b; font-weight: 600; text-align: right; font-family: monospace;">${data.submissionId}</td>
                  </tr>
                  <tr style="border-bottom: 1px dashed #e2e8f0;">
                    <td style="padding: 7px 0; font-size: 13.5px; color: #64748b;">Roll Number</td>
                    <td style="padding: 7px 0; font-size: 13.5px; color: #1e293b; font-weight: 600; text-align: right;">${student.rollNumber || 'N/A'}</td>
                  </tr>
                  <tr style="border-bottom: 1px dashed #e2e8f0;">
                    <td style="padding: 7px 0; font-size: 13.5px; color: #64748b;">College</td>
                    <td style="padding: 7px 0; font-size: 13.5px; color: #1e293b; font-weight: 600; text-align: right;">${student.college || 'N/A'}</td>
                  </tr>
                  <tr style="border-bottom: 1px dashed #e2e8f0;">
                    <td style="padding: 7px 0; font-size: 13.5px; color: #64748b;">Time Taken</td>
                    <td style="padding: 7px 0; font-size: 13.5px; color: #1e293b; font-weight: 600; text-align: right;">${formattedTimeTaken}</td>
                  </tr>
                  <tr>
                    <td style="padding: 7px 0; font-size: 13.5px; color: #64748b;">Submitted At</td>
                    <td style="padding: 7px 0; font-size: 13.5px; color: #1e293b; font-weight: 600; text-align: right;">${formattedDate}</td>
                  </tr>
                </table>
              </div>

              <!-- Notice on Coding Tasks -->
              <div class="notice-box">
                <strong>💻 Programming Tasks (Q18–Q21):</strong> Your 4 Python code submissions have been saved and are under evaluation by the technical mentoring team. Your final score will be updated upon mentor review.
              </div>

              <p style="font-size: 14.5px; line-height: 1.6; color: #475569;">
                Continue with this momentum! Each day brings you closer to building and launching complete AI applications.
              </p>

              <p style="font-size: 14.5px; margin-top: 24px; color: #334155;">
                Warm regards,<br>
                <strong style="color: #6c63c7;">The Kaizen Q Team</strong><br>
                <span style="font-size: 12px; color: #64748b;">Learn • Build • Deploy • Innovate</span>
              </p>
            </div>

            <!-- Footer -->
            <div class="footer-section">
              Visit bootcamp portal: <a href="https://kaizenqevents.click" class="footer-link">kaizenqevents.click</a><br>
              &copy; ${new Date().getFullYear()} Kaizen Q Events. All rights reserved.<br>
              <span style="font-size: 11px; color: #cbd5e1;">This is an automated notification confirming your task submission.</span>
            </div>
          </div>
        </div>
      </body>
      </html>
      `;

      MailApp.sendEmail({
        to: student.email,
        subject: `🎉 Submission Confirmed: ${dayLabel} — ${assessmentTitle}`,
        htmlBody: htmlEmail,
        name: "Kaizen Q Bootcamps"
      });
    }

    // Return JSON Success
    return ContentService.createTextOutput(JSON.stringify({ 
      result: "success", 
      submissionId: data.submissionId,
      day: dayLabel 
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ 
      result: "error", 
      error: error.toString() 
    })).setMimeType(ContentService.MimeType.JSON);
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
