/**
 * ============================================================================
 * KAIZEN Q BOOTCAMPS — JAVA WITH AI BOOTCAMP
 * Multi-Day Assessment Submission Engine & Email Automation
 * ============================================================================
 * 
 * Google Spreadsheet Column Mapping (A to AI):
 *  A: Timestamp
 *  B: Submission ID
 *  C: Full Name
 *  D: Email
 *  E: College
 *  F: Branch
 *  G: Semester
 *  H: Roll Number
 *  I: Day (e.g. "Day 3")
 *  J: Start Time
 *  K: Submission Time
 *  L: Time Taken (Formatted mm:ss or seconds)
 *  M: Objective Score (out of 15)
 *  N: Objective Max Score (15)
 *  O: Programming Status ("Pending Evaluation")
 *  P: Final Score
 *  Q: Status ("Submitted")
 *  R to AF: Q1 to Q15 Objective Answers (15 columns for J_D3_M1 to J_D3_M15)
 *  AG to AH: Q16 to Q17 Coding Solutions (2 columns for J_D3_C1 to J_D3_C2)
 *  AI: Security & Integrity Violations Log (JSON string)
 */

function doPost(e) {
  try {
    // NOTE: REPLACE THIS WITH YOUR DAY 3 SPREADSHEET ID
    const ss = SpreadsheetApp.openById("YOUR_DAY_3_SPREADSHEET_ID_HERE");
    
    // Attempt to find sheet "Submissions", otherwise use the first sheet
    let sheet = ss.getSheetByName("Submissions");
    if (!sheet) {
      sheet = ss.getSheets()[0];
    }

    const data = JSON.parse(e.postData.contents);
    const student = data.studentData || {};
    
    // Resolve Day identification
    const dayNum = data.day || 3;
    const dayLabel = "Day " + dayNum;
    const assessmentTitle = data.assessment || (dayLabel + " — Java Collections & Exception Handling");

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

    // R to AF: Objective Answers (J_D3_M1 to J_D3_M15) -> 15 columns
    const answers = data.answers || {};
    for (let i = 1; i <= 15; i++) {
      const key = "J_D3_M" + i;
      const ans = answers[key] !== undefined ? String(answers[key]) : "";
      rowData.push(ans);
    }

    // AG to AH: Coding Submissions (J_D3_C1 to J_D3_C2) -> 2 columns
    for (let i = 1; i <= 2; i++) {
      const key = "J_D3_C" + i;
      const code = answers[key] !== undefined ? String(answers[key]) : "";
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

      // Calculate stats based on 15 MCQs
      let attemptedMcqs = 0;
      for (let i = 1; i <= 15; i++) {
        if (data.answers && data.answers["J_D3_M" + i] !== undefined && data.answers["J_D3_M" + i] !== "") {
          attemptedMcqs++;
        }
      }
      
      const correctAnswers = score;
      const notAttempted = maxScore - attemptedMcqs;
      const wrongAnswers = attemptedMcqs - correctAnswers;

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
            background-color: #f8faff;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            color: #26324a;
            -webkit-text-size-adjust: 100%;
          }
          .email-wrapper {
            width: 100%;
            background-color: #f8faff;
            padding: 30px 10px;
          }
          .email-card {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 20px;
            border: 1px solid #eef2f6;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(108, 99, 199, 0.08);
          }
          .header-banner {
            background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
            padding: 36px 24px;
            text-align: center;
            border-bottom: 1px solid #e2e8f0;
          }
          .brand-badge {
            display: inline-block;
            background-color: #ffffff;
            color: #3b82f6;
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1.2px;
            padding: 6px 14px;
            border-radius: 50px;
            border: 1px solid #bfdbfe;
            margin-bottom: 12px;
          }
          .header-title {
            margin: 0;
            font-size: 26px;
            font-weight: 800;
            color: #1e3a8a;
            letter-spacing: -0.5px;
          }
          .header-subtitle {
            margin: 6px 0 0;
            font-size: 15px;
            color: #64748b;
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

          /* Info Details Card */
          .details-card {
            background-color: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 14px;
            padding: 18px 20px;
            margin-bottom: 24px;
          }
          .detail-row {
            display: flex;
            justify-content: space-between;
            padding: 7px 0;
            font-size: 13.5px;
            border-bottom: 1px dashed #e2e8f0;
          }
          .detail-row:last-child {
            border-bottom: none;
          }
          .detail-label {
            color: #64748b;
            font-weight: 500;
          }
          .detail-val {
            color: #1e293b;
            font-weight: 600;
            text-align: right;
          }

          /* Status Notice */
          .notice-box {
            background-color: #eff6ff;
            border-left: 4px solid #3b82f6;
            padding: 14px 16px;
            border-radius: 0 10px 10px 0;
            margin-bottom: 24px;
            font-size: 13.5px;
            color: #1e40af;
            line-height: 1.5;
          }

          /* Footer */
          .footer-section {
            background-color: #f8fafc;
            border-top: 1px solid #f1f5f9;
            padding: 24px 20px;
            text-align: center;
            font-size: 12px;
            color: #94a3b8;
            line-height: 1.6;
          }
          .footer-link {
            color: #3b82f6;
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
              <p class="header-subtitle">Java with AI — 5-Day Hands-On Bootcamp</p>
            </div>

            <!-- Content Area -->
            <div class="content-body">
              <div class="greeting">Hello ${student.fullName || 'Student'}, 🌟</div>
              
              <p class="intro-text">
                Congratulations on completing your <strong>${dayLabel} Assessment</strong>! Your submission has been securely recorded in the official bootcamp evaluation database.
              </p>

              <!-- Objective Score Box (3-column Table for Email Compatibility) -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin: 24px 0; border-collapse: separate; border-spacing: 8px;">
                <tr>
                  <!-- Correct Box -->
                  <td width="33%" align="center" style="background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); border: 1px solid #bbf7d0; border-radius: 12px; padding: 16px;">
                    <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #047857; margin-bottom: 6px;">Correct</div>
                    <div style="font-size: 32px; font-weight: 800; line-height: 1; margin: 0; color: #065f46;">${correctAnswers}</div>
                  </td>
                  <!-- Wrong Box -->
                  <td width="33%" align="center" style="background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%); border: 1px solid #fecaca; border-radius: 12px; padding: 16px;">
                    <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #b91c1c; margin-bottom: 6px;">Wrong</div>
                    <div style="font-size: 32px; font-weight: 800; line-height: 1; margin: 0; color: #991b1b;">${wrongAnswers}</div>
                  </td>
                  <!-- Skipped Box -->
                  <td width="33%" align="center" style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px;">
                    <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #475569; margin-bottom: 6px;">Skipped</div>
                    <div style="font-size: 32px; font-weight: 800; line-height: 1; margin: 0; color: #334155;">${notAttempted}</div>
                  </td>
                </tr>
              </table>

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
                <strong>💻 Programming Tasks (Q16–Q17):</strong> Your 2 Java code submissions have been securely saved and are currently under evaluation by the technical mentoring team. Your final combined score will be updated upon mentor review.
              </div>

              <p style="font-size: 14.5px; line-height: 1.6; color: #475569;">
                Continue with this momentum! You have successfully mastered Java Collections and Exception Handling.
              </p>

              <p style="font-size: 14.5px; margin-top: 24px; color: #334155;">
                Warm regards,<br>
                <strong style="color: #3b82f6;">The Kaizen Q Team</strong><br>
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
