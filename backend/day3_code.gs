/**
 * ============================================================================
 * KAIZEN Q BOOTCAMPS — PYTHON WITH AI BOOTCAMP
 * DAY 3: Python + Machine Learning
 * Google Sheets Submission Engine & Email Automation
 * ============================================================================
 * 
 * Google Spreadsheet Column Mapping (A to AM — 39 Columns):
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
 *  M: Objective Score (out of 17)
 *  N: Objective Max Score (17)
 *  O: Programming Status ("Pending Evaluation")
 *  P: Final Score
 *  Q: Status ("Submitted")
 *  R to AH: Q1 to Q17 Objective Answers (17 columns)
 *  AI to AL: Q18 to Q21 Coding Solutions (4 columns)
 *  AM: Violations Log (JSON string)
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
    
    // Day 3 Identification
    const dayNum = data.day || 3;
    const dayLabel = "Day " + dayNum;
    const assessmentTitle = data.assessment || (dayLabel + " — Python + Machine Learning");

    // Format time taken cleanly (e.g., "38m 20s")
    const timeTakenSec = data.timeTaken || 0;
    const mins = Math.floor(timeTakenSec / 60);
    const secs = timeTakenSec % 60;
    const formattedTimeTaken = `${mins}m ${secs < 10 ? '0' : ''}${secs}s`;

    // Format timestamps in IST
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

    // Append submission row to Google Sheet
    sheet.appendRow(rowData);

    // =========================================================================
    // 📧 AUTOMATED CONFIRMATION EMAIL (DAY 3: PYTHON + MACHINE LEARNING)
    // =========================================================================
    if (student.email && student.email.indexOf("@") !== -1) {
      try {
        const score = Number(data.score) || 0;
        const maxScore = Number(data.maxScore) || 17;
        const correctCount = score;
        const incorrectCount = Math.max(0, maxScore - correctCount);
        const scorePercent = Math.round((correctCount / (maxScore || 1)) * 100);

        // Performance feedback message
        let performanceBadge = "🌟 Outstanding Performance";
        let performanceColor = "#059669";
        let performanceBg = "#ecfdf5";
        let performanceText = "You demonstrated strong mastery of ML models, train/test splits, and evaluation metrics!";

        if (correctCount >= 14) {
          performanceBadge = "🌟 Outstanding Performance";
          performanceColor = "#059669";
          performanceBg = "#ecfdf5";
          performanceText = "You demonstrated strong mastery of ML models, train/test splits, and evaluation metrics!";
        } else if (correctCount >= 10) {
          performanceBadge = "👍 Good Effort";
          performanceColor = "#0284c7";
          performanceBg = "#f0f9ff";
          performanceText = "You have a solid grasp of core ML foundations. Keep strengthening your practice!";
        } else {
          performanceBadge = "📚 Practice Recommended";
          performanceColor = "#d97706";
          performanceBg = "#fffbeb";
          performanceText = "Good effort! Review today's session notes on Scikit-Learn and model evaluation to sharpen your concepts.";
        }

        // Light, clean, modern responsive HTML template
        const htmlEmail = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Day 3 Assessment Result</title>
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
              box-shadow: 0 10px 30px rgba(16, 185, 129, 0.08);
            }
            .header-banner {
              background: linear-gradient(135deg, #ecfdf5 0%, #e0f2fe 100%);
              padding: 36px 24px;
              text-align: center;
              border-bottom: 1px solid #d1fae5;
            }
            .brand-badge {
              display: inline-block;
              background-color: #ffffff;
              color: #059669;
              font-size: 11px;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 1.2px;
              padding: 6px 14px;
              border-radius: 50px;
              border: 1px solid #a7f3d0;
              margin-bottom: 12px;
            }
            .header-title {
              margin: 0;
              font-size: 25px;
              font-weight: 800;
              color: #065f46;
              letter-spacing: -0.5px;
            }
            .header-subtitle {
              margin: 6px 0 0;
              font-size: 14.5px;
              color: #047857;
              font-weight: 500;
            }
            .content-body {
              padding: 32px 28px;
            }
            .greeting {
              font-size: 20px;
              font-weight: 700;
              color: #1e293b;
              margin-bottom: 10px;
            }
            .intro-text {
              font-size: 15px;
              line-height: 1.6;
              color: #475569;
              margin-bottom: 22px;
            }
            
            /* Prominent Score Card */
            .score-container {
              background: #ffffff;
              border: 2px solid #a7f3d0;
              border-radius: 18px;
              padding: 24px 20px;
              text-align: center;
              margin: 22px 0;
              box-shadow: 0 4px 20px rgba(5, 150, 105, 0.06);
            }
            .score-eyebrow {
              font-size: 12px;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 1.2px;
              color: #059669;
              margin-bottom: 4px;
            }
            .score-big {
              font-size: 48px;
              font-weight: 800;
              color: #065f46;
              line-height: 1.1;
              margin: 4px 0 6px;
            }
            .score-denominator {
              font-size: 22px;
              color: #64748b;
              font-weight: 600;
            }
            .score-headline {
              font-size: 16px;
              font-weight: 700;
              color: #047857;
              margin-bottom: 18px;
            }

            /* Metrics Breakdown Table */
            .breakdown-table {
              width: 100%;
              border-collapse: separate;
              border-spacing: 8px 0;
              margin-top: 14px;
            }
            .metric-box {
              background: #f8fafc;
              border-radius: 12px;
              padding: 12px 6px;
              text-align: center;
            }
            .metric-box.correct {
              background: #ecfdf5;
              border: 1px solid #bbf7d0;
            }
            .metric-box.incorrect {
              background: #fef2f2;
              border: 1px solid #fecaca;
            }
            .metric-box.accuracy {
              background: #eff6ff;
              border: 1px solid #bfdbfe;
            }
            .metric-number {
              font-size: 22px;
              font-weight: 800;
              line-height: 1.2;
            }
            .metric-label {
              font-size: 11px;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 0.8px;
              margin-top: 3px;
            }

            /* Performance Banner */
            .performance-card {
              border-radius: 12px;
              padding: 12px 16px;
              margin: 18px 0 24px;
              font-size: 13.5px;
              line-height: 1.5;
            }

            /* Info Details Card */
            .details-card {
              background-color: #f8fafc;
              border: 1px solid #e2e8f0;
              border-radius: 14px;
              padding: 16px 20px;
              margin-bottom: 22px;
            }

            /* Notice Box */
            .notice-box {
              background-color: #f0fdf4;
              border-left: 4px solid #10b981;
              padding: 14px 16px;
              border-radius: 0 10px 10px 0;
              margin-bottom: 24px;
              font-size: 13.5px;
              color: #065f46;
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
              color: #059669;
              font-weight: 600;
              text-decoration: none;
            }

            @media only screen and (max-width: 480px) {
              .content-body {
                padding: 24px 16px;
              }
              .header-title {
                font-size: 21px;
              }
              .score-big {
                font-size: 38px;
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
                <div class="brand-badge">${dayLabel} Result</div>
                <h1 class="header-title">${assessmentTitle}</h1>
                <p class="header-subtitle">Python with AI — 5-Day Hands-On Bootcamp</p>
              </div>

              <!-- Content Area -->
              <div class="content-body">
                <div class="greeting">Hello ${student.fullName || 'Student'}, 🌟</div>
                
                <p class="intro-text">
                  Thank you for submitting your <strong>${dayLabel} Assessment</strong>! Here is your official objective score and answer breakdown:
                </p>

                <!-- Prominent Correct Answers Score Card -->
                <div class="score-container">
                  <div class="score-eyebrow">Your Objective Score</div>
                  
                  <div class="score-big">
                    ${correctCount} <span class="score-denominator">/ ${maxScore}</span>
                  </div>

                  <div class="score-headline">
                    🎯 You correctly answered <strong>${correctCount}</strong> out of <strong>${maxScore}</strong> questions!
                  </div>

                  <!-- 3-Pill Quick Breakdown -->
                  <table class="breakdown-table" width="100%">
                    <tr>
                      <td width="33%">
                        <div class="metric-box correct">
                          <div class="metric-number" style="color: #059669;">✔ ${correctCount}</div>
                          <div class="metric-label" style="color: #047857;">Correct</div>
                        </div>
                      </td>
                      <td width="33%">
                        <div class="metric-box incorrect">
                          <div class="metric-number" style="color: #dc2626;">✖ ${incorrectCount}</div>
                          <div class="metric-label" style="color: #b91c1c;">Incorrect</div>
                        </div>
                      </td>
                      <td width="33%">
                        <div class="metric-box accuracy">
                          <div class="metric-number" style="color: #0284c7;">${scorePercent}%</div>
                          <div class="metric-label" style="color: #0369a1;">Accuracy</div>
                        </div>
                      </td>
                    </tr>
                  </table>
                </div>

                <!-- Performance Feedback Badge -->
                <div class="performance-card" style="background-color: ${performanceBg}; border: 1px solid ${performanceColor}33; color: ${performanceColor};">
                  <strong>${performanceBadge}:</strong> ${performanceText}
                </div>

                <!-- Key Submission Details -->
                <div class="details-card">
                  <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
                    <tr style="border-bottom: 1px dashed #e2e8f0;">
                      <td style="padding: 7px 0; font-size: 13.5px; color: #64748b;">Correct Answers</td>
                      <td style="padding: 7px 0; font-size: 13.5px; color: #059669; font-weight: 700; text-align: right;">${correctCount} / ${maxScore}</td>
                    </tr>
                    <tr style="border-bottom: 1px dashed #e2e8f0;">
                      <td style="padding: 7px 0; font-size: 13.5px; color: #64748b;">Accuracy Rate</td>
                      <td style="padding: 7px 0; font-size: 13.5px; color: #0284c7; font-weight: 700; text-align: right;">${scorePercent}%</td>
                    </tr>
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

                <!-- Notice on ML Coding Tasks -->
                <div class="notice-box">
                  <strong>🤖 Machine Learning Coding Tasks (Q18–Q21):</strong> Your 4 Python code solutions (Accuracy metric, Mean Squared Error, Confusion Matrix, and Feature Normalization) have been securely saved and queued for mentor review. Your final score will be updated upon manual code inspection.
                </div>

                <p style="font-size: 14.5px; line-height: 1.6; color: #475569;">
                  Keep up the great work! Tomorrow in <strong>Day 4: Python + Generative AI</strong>, we take these foundations and step into Prompt Engineering, LLMs, and AI APIs.
                </p>

                <p style="font-size: 14.5px; margin-top: 24px; color: #334155;">
                  Warm regards,<br>
                  <strong style="color: #059669;">The Kaizen Q Team</strong><br>
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
          subject: `🎉 Day 3 Result: You scored ${correctCount}/${maxScore} (${scorePercent}% Correct) — Python + Machine Learning`,
          htmlBody: htmlEmail,
          name: "Kaizen Q Bootcamps"
        });
      } catch (emailErr) {
        Logger.log("Email error: " + emailErr.toString());
      }
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

/**
 * 🧪 Test function to verify Email Automation & Authorize Permissions
 * Select this function in the top bar of Google Apps Script and click "Run"
 */
function testEmail() {
  const dummyPayload = {
    day: 3,
    assessment: "Day 3 — Python + Machine Learning",
    submissionId: "KQ-PY-D3-TEST-9999",
    score: 15,
    maxScore: 17,
    timeTaken: 1450,
    studentData: {
      fullName: "Test Candidate",
      email: Session.getActiveUser().getEmail(), // sends to your own email
      rollNumber: "21KQ1A0501",
      college: "Kaizen Q Institute of Technology",
      branch: "Computer Science (AI & ML)",
      semester: "VI"
    },
    answers: { 1: "Supervised", 18: "def calculate_accuracy(): pass" },
    violations: []
  };

  const fakeEvent = {
    postData: {
      contents: JSON.stringify(dummyPayload)
    }
  };

  const response = doPost(fakeEvent);
  Logger.log("Test Result: " + response.getContent());
}
