/**
 * ============================================================================
 * KAIZEN Q BOOTCAMPS — GENERATIVE AI BOOTCAMP
 * Multi-Day Assessment Submission Engine & Email Automation
 * ============================================================================
 * 
 * Google Spreadsheet Column Mapping (A to AI) for Day 5:
 *  A: Timestamp
 *  B: Submission ID
 *  C: Full Name
 *  D: Email
 *  E: College
 *  F: Branch
 *  G: Semester
 *  H: Roll Number
 *  I: Day (e.g. "Day 5")
 *  J: Start Time
 *  K: Submission Time
 *  L: Time Taken (Formatted mm:ss or seconds)
 *  M: Objective Score (out of 15)
 *  N: Objective Max Score (15)
 *  O: Programming Status ("Pending Evaluation")
 *  P: Final Score
 *  Q: Status ("Submitted")
 *  R to AF: Q1 to Q15 Objective Answers (15 columns)
 *  AG to AH: Q16 to Q17 Coding Solutions (2 columns)
 *  AI: Security & Integrity Violations Log (JSON string)
 */

function doPost(e) {
  try {
    // Force it to use the exact Day 5 Spreadsheet ID!
    // TODO: Paste your Day 5 Spreadsheet ID between the quotes below
    const ss = SpreadsheetApp.openById("REPLACE_THIS_WITH_YOUR_DAY_5_SPREADSHEET_ID");
    
    // Attempt to find sheet "Submissions", otherwise use the first sheet
    let sheet = ss.getSheetByName("Submissions");
    if (!sheet) {
      sheet = ss.getSheets()[0];
    }

    const data = JSON.parse(e.postData.contents);
    const student = data.studentData || {};
    
    // Resolve Day identification
    const dayNum = data.day || 5;
    const dayLabel = "Day " + dayNum;
    const assessmentTitle = data.assessment || (dayLabel + " — FastAPI, Git & GitHub, Docker");

    // Format time taken cleanly (e.g., "38m 20s")
    const timeTakenSec = data.timeTaken || 0;
    const mins = Math.floor(timeTakenSec / 60);
    const secs = timeTakenSec % 60;
    const formattedTimeTaken = `${mins}m ${secs < 10 ? '0' : ''}${secs}s`;

    // Format timestamps nicely
    const submissionDate = new Date();
    const formattedDate = Utilities.formatDate(submissionDate, "Asia/Kolkata", "dd MMM yyyy, hh:mm a");

    // -------------------------------------------------------------
    // Build Row Array strictly matching Columns A to AI (35 columns)
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
      Number(data.maxScore) || 15,                // N: Objective Max Score
      "Pending Evaluation",                       // O: Programming Status
      "",                                         // P: Final Score
      "Submitted"                                 // Q: Status
    ];

    // R to AF: Objective Answers (Q1 to Q15) -> 15 columns
    const answers = data.answers || {};
    for (let i = 1; i <= 15; i++) {
      const ans = answers[i] !== undefined ? String(answers[i]) : "";
      rowData.push(ans);
    }

    // AG to AH: Coding Submissions (Q16 to Q17) -> 2 columns
    for (let i = 16; i <= 17; i++) {
      const code = answers[i] !== undefined ? String(answers[i]) : "";
      rowData.push(code);
    }

    // AI: Violations Log -> 1 column
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
      const maxScore = Number(data.maxScore) || 15;
      const scorePercent = Math.round((score / (maxScore || 1)) * 100);

      let attempted = 0;
      for (let i = 1; i <= 15; i++) {
        if (data.answers && data.answers[i] !== undefined && data.answers[i] !== "") {
          attempted++;
        }
      }
      
      const wrong = Math.max(0, attempted - score);
      
      const avgSecs = Math.round((data.timeTaken || 0) / 15);
      const avgMins = Math.floor(avgSecs / 60);
      const avgRemSecs = avgSecs % 60;
      const avgTimingFormatted = avgMins > 0 ? `${avgMins}m ${avgRemSecs}s` : `${avgRemSecs}s`;

      const violationsCount = data.violations ? data.violations.length : 0;
      
      let congratsMessage = "";
      if (violationsCount === 0) {
        congratsMessage = `
        <div style="background-color: #dcfce7; color: #166534; padding: 14px; border-radius: 10px; margin-bottom: 24px; border-left: 4px solid #22c55e; font-size: 14px;">
          <strong>🌟 Excellent Work!</strong><br>
          You completed the assessment with the highest integrity. Congratulations on your fair attempt!
        </div>`;
      }

      // Light, soft, modern responsive HTML template (NO dark colors)
      const htmlEmail = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Assessment Submission Confirmation</title>
        <style>
          body {
            margin: 0;
            padding: 0;
            background-color: #fffaf0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            color: #2c221a;
            -webkit-text-size-adjust: 100%;
          }
          .email-wrapper {
            width: 100%;
            background-color: #fffaf0;
            padding: 30px 10px;
          }
          .email-card {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 20px;
            border: 1px solid #ffedd5;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(249, 115, 22, 0.08);
          }
          .header-banner {
            background: linear-gradient(135deg, #ffedd5 0%, #fffdc0 100%);
            padding: 36px 24px;
            text-align: center;
            border-bottom: 1px solid #fed7aa;
          }
          .brand-badge {
            display: inline-block;
            background-color: #ffffff;
            color: #ea580c;
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1.2px;
            padding: 6px 14px;
            border-radius: 50px;
            border: 1px solid #fdba74;
            margin-bottom: 12px;
          }
          .header-title {
            margin: 0;
            font-size: 26px;
            font-weight: 800;
            color: #2c221a;
            letter-spacing: -0.5px;
          }
          .header-subtitle {
            margin: 6px 0 0;
            font-size: 15px;
            color: #78350f;
            font-weight: 500;
          }
          .content-body {
            padding: 36px 30px;
          }
          .greeting {
            font-size: 20px;
            font-weight: 700;
            color: #1e293b;
            margin-bottom: 12px;
          }
          .intro-text {
            font-size: 15px;
            line-height: 1.6;
            color: #475569;
            margin-bottom: 24px;
          }
          
          /* Soft Highlight Score Card */
          .score-grid {
            margin: 24px 0;
            background: linear-gradient(135deg, #fff7ed 0%, #fffbeb 100%);
            border: 1px solid #fed7aa;
            border-radius: 16px;
            padding: 22px;
            text-align: center;
          }
          .score-heading {
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #c2410c;
            margin-bottom: 6px;
          }
          .score-value {
            font-size: 42px;
            font-weight: 800;
            color: #9a3412;
            line-height: 1;
            margin: 0;
          }
          .score-total {
            font-size: 18px;
            color: #ea580c;
            font-weight: 500;
          }
          .score-pill {
            display: inline-block;
            margin-top: 8px;
            background-color: #ffedd5;
            color: #c2410c;
            font-size: 12px;
            font-weight: 600;
            padding: 3px 12px;
            border-radius: 12px;
          }

          /* Info Details Card */
          .details-card {
            background-color: #fafaf9;
            border: 1px solid #e7e5e4;
            border-radius: 14px;
            padding: 18px 20px;
            margin-bottom: 24px;
          }
          .detail-row {
            display: flex;
            justify-content: space-between;
            padding: 7px 0;
            font-size: 13.5px;
            border-bottom: 1px dashed #d6d3d1;
          }
          .detail-row:last-child {
            border-bottom: none;
          }
          .detail-label {
            color: #57534e;
            font-weight: 500;
          }
          .detail-val {
            color: #1c1917;
            font-weight: 600;
            text-align: right;
          }

          /* Status Notice */
          .notice-box {
            background-color: #fff7ed;
            border-left: 4px solid #ea580c;
            padding: 14px 16px;
            border-radius: 0 10px 10px 0;
            margin-bottom: 24px;
            font-size: 13.5px;
            color: #9a3412;
            line-height: 1.5;
          }

          /* Footer */
          .footer-section {
            background-color: #fafaf9;
            border-top: 1px solid #f5f5f4;
            padding: 24px 20px;
            text-align: center;
            font-size: 12px;
            color: #a8a29e;
            line-height: 1.6;
          }
          .footer-link {
            color: #ea580c;
            font-weight: 600;
            text-decoration: none;
          }

          @media only screen and (max-width: 480px) {
            .content-body {
              padding: 24px 18px;
            }
            .header-title {
              font-size: 22px;
            }
            .score-value {
              font-size: 34px;
            }
          }
        </style>
      </head>
      <body>
        <div class="email-wrapper">
          <div class="email-card">
            
            <!-- Header Banner -->
            <div class="header-banner">
              <img 
                src="https://res.cloudinary.com/dwv8kc9vb/image/upload/v1788465282/KAIZEN_Q_EVENTS_kxjtz4.png" 
                alt="Kaizen Q Bootcamps" 
                style="height: 48px; width: auto; margin-bottom: 12px;"
              >
              <br>
              <div class="brand-badge">${dayLabel} Completed</div>
              <h1 class="header-title">${assessmentTitle}</h1>
              <p class="header-subtitle">Generative AI — 5-Day Hands-On Bootcamp</p>
            </div>

            <!-- Content Area -->
            <div class="content-body">
              <div class="greeting">Hello ${student.fullName || 'Student'}, 🌟</div>
              
              <p class="intro-text">
                Congratulations on completing your <strong>${dayLabel} Assessment</strong>! Your submission has been securely recorded in the official bootcamp evaluation database.
              </p>

              <!-- Integrity Congrats Message -->
              ${congratsMessage}

              <!-- Objective Score Box -->
              <div class="score-grid">
                <div class="score-heading">Objective Score (MCQ)</div>
                <div class="score-value">
                  ${score} <span class="score-total">/ ${maxScore}</span>
                </div>
                <div class="score-pill">
                  ${scorePercent}% Accuracy
                </div>

                <!-- Detailed Stats -->
                <div style="display: flex; justify-content: space-between; margin-top: 20px; text-align: left; background: #ffffff; padding: 14px; border-radius: 12px; border: 1px solid #ffedd5; gap: 8px;">
                  <div style="flex: 1;">
                    <div style="font-size: 11px; color: #78350f; text-transform: uppercase; font-weight: bold; margin-bottom: 4px;">Attempted</div>
                    <div style="font-size: 18px; font-weight: 800; color: #2c221a;">${attempted}</div>
                  </div>
                  <div style="flex: 1; border-left: 1px solid #ffedd5; padding-left: 12px;">
                    <div style="font-size: 11px; color: #78350f; text-transform: uppercase; font-weight: bold; margin-bottom: 4px;">Wrong</div>
                    <div style="font-size: 18px; font-weight: 800; color: #2c221a;">${wrong}</div>
                  </div>
                  <div style="flex: 1; border-left: 1px solid #ffedd5; padding-left: 12px;">
                    <div style="font-size: 11px; color: #78350f; text-transform: uppercase; font-weight: bold; margin-bottom: 4px;">Violations</div>
                    <div style="font-size: 18px; font-weight: 800; color: ${violationsCount > 0 ? '#dc2626' : '#16a34a'};">${violationsCount}</div>
                  </div>
                </div>
              </div>

              <!-- Key Metadata Details -->
              <div class="details-card">
                <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
                  <tr style="border-bottom: 1px dashed #d6d3d1;">
                    <td style="padding: 7px 0; font-size: 13.5px; color: #57534e;">Submission ID</td>
                    <td style="padding: 7px 0; font-size: 13.5px; color: #1c1917; font-weight: 600; text-align: right; font-family: monospace;">${data.submissionId}</td>
                  </tr>
                  <tr style="border-bottom: 1px dashed #d6d3d1;">
                    <td style="padding: 7px 0; font-size: 13.5px; color: #57534e;">Roll Number</td>
                    <td style="padding: 7px 0; font-size: 13.5px; color: #1c1917; font-weight: 600; text-align: right;">${student.rollNumber || 'N/A'}</td>
                  </tr>
                  <tr style="border-bottom: 1px dashed #d6d3d1;">
                    <td style="padding: 7px 0; font-size: 13.5px; color: #57534e;">College</td>
                    <td style="padding: 7px 0; font-size: 13.5px; color: #1c1917; font-weight: 600; text-align: right;">${student.college || 'N/A'}</td>
                  </tr>
                  <tr style="border-bottom: 1px dashed #d6d3d1;">
                    <td style="padding: 7px 0; font-size: 13.5px; color: #57534e;">Time Taken</td>
                    <td style="padding: 7px 0; font-size: 13.5px; color: #1c1917; font-weight: 600; text-align: right;">${formattedTimeTaken}</td>
                  </tr>
                  <tr style="border-bottom: 1px dashed #d6d3d1;">
                    <td style="padding: 7px 0; font-size: 13.5px; color: #57534e;">Avg. MCQ Time</td>
                    <td style="padding: 7px 0; font-size: 13.5px; color: #1c1917; font-weight: 600; text-align: right;">${avgTimingFormatted}</td>
                  </tr>
                  <tr>
                    <td style="padding: 7px 0; font-size: 13.5px; color: #57534e;">Submitted At</td>
                    <td style="padding: 7px 0; font-size: 13.5px; color: #1c1917; font-weight: 600; text-align: right;">${formattedDate}</td>
                  </tr>
                </table>
              </div>

              <!-- Notice on Coding Tasks -->
              <div class="notice-box">
                <strong>💻 Programming Tasks (Q16–Q17):</strong> Your 2 python simulation coding submissions have been saved and are under evaluation by the technical mentoring team. Your final score will be updated upon mentor review.
              </div>

              <p style="font-size: 14.5px; line-height: 1.6; color: #475569;">
                Continue with this momentum! Each day brings you closer to building and launching complete GenAI applications.
              </p>

              <p style="font-size: 14.5px; margin-top: 24px; color: #334155;">
                Warm regards,<br>
                <strong style="color: #ea580c;">The Kaizen Q Team</strong><br>
                <span style="font-size: 12px; color: #78350f;">Learn • Build • Deploy • Innovate</span>
              </p>
            </div>

            <!-- Footer -->
            <div class="footer-section">
              Visit bootcamp portal: <a href="https://kaizenqevents.click" class="footer-link">kaizenqevents.click</a><br>
              &copy; ${new Date().getFullYear()} Kaizen Q Events. All rights reserved.<br>
              <span style="font-size: 11px; color: #d6d3d1;">This is an automated notification confirming your task submission.</span>
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
