# Kaizen Q LMS — Assessment Submission API Documentation

## 1. Overview
The Kaizen Q assessment platform submits student examination records to Google Apps Script webhooks which append rows to designated Google Sheets and trigger automated confirmation emails.

---

## 2. Day 5 Assessment Submission Endpoint

### Endpoint URL (Resolved via `dayConfig.sheetsUrl` or Environment Variables)
- **Generative AI Bootcamp (Day 5)**:
  `https://script.google.com/macros/s/AKfycbzOZmWM8ll0LPUvTsydwfsLX5XyrUcS89jcl89WfVa8LDGCsL-YNmb1m7iDXdaRhCA_vg/exec`
- **Python with AI Bootcamp (Day 5)**:
  `https://script.google.com/macros/s/AKfycbx4Wto_Nm_f0B6cfKLxgj0gOSsaTN1qjo9H1Lq9KhAjdmiy-TrE5V8kL3IzArHGnM6u/exec` (or `VITE_GOOGLE_SHEETS_API_URL_DAY_5`)

### Method: `POST`
### Content-Type: `application/json` (sent with `mode: 'no-cors'`)

---

## 3. Request Payload Specification

```json
{
  "timestamp": "2026-10-13T07:30:00.000Z",
  "submissionId": "KQ-PY-D5-20261013-4821",
  "day": 5,
  "dayNumber": 5,
  "assessment": "Day 5 - Git, GitHub & Docker Fundamentals",
  "studentData": {
    "fullName": "Student Name",
    "email": "student@college.edu",
    "college": "Siddharth Institute of Engineering & Technology",
    "branch": "CSE",
    "semester": "5th",
    "rollNumber": "21F61A0501"
  },
  "answers": {
    "1": "A distributed version control system that tracks revisions, enables rollbacks, and coordinates team collaboration",
    "2": "Git is a local version-control command-line tool, whereas GitHub is a cloud platform for hosting Git repositories and collaborating",
    "16": "def stage_and_commit(...): ...",
    "17": "def validate_dockerfile(...): ..."
  },
  "score": 15,
  "maxScore": 15,
  "correctAnswersCount": 15,
  "incorrectAnswersCount": 0,
  "timeRemaining": 1800,
  "timeTaken": 900,
  "violations": []
}
```

---

## 4. Google Sheets Column Mapping for Day 5 (GenAI Bootcamp)

| Column | Field Name | Description |
|---|---|---|
| A | Timestamp | ISO submission date string |
| B | Submission ID | Unique student submission identifier |
| C | Full Name | Student full name |
| D | Email | Student email address |
| E | College | College or institution name |
| F | Branch | Academic department/branch |
| G | Semester | Current semester |
| H | Roll Number | Institutional student roll number |
| I | Day | `"Day 5"` |
| J | Start Time | Initial assessment launch timestamp |
| K | Submission Time | Formatted IST submission timestamp |
| L | Time Taken | Formatted duration (e.g. `15m 00s`) |
| M | Objective Score | Evaluated score out of 15 (MCQ) |
| N | Objective Max Score | Maximum objective score (15) |
| O | Programming Status | `"Pending Evaluation"` |
| P | Final Score | Blank for manual mentor score entry |
| Q | Status | `"Submitted"` |
| R to AF | Q1 to Q15 Answers | Objective answer choices selected |
| AG to AH | Q16 to Q17 Code | Source code submitted for Coding Tasks |
| AI | Violations Log | JSON array of integrity/fullscreen violations |

---

## 5. Success and Error Responses

### Apps Script Webhook Response:
```json
{
  "result": "success",
  "row": 42
}
```

### Error Handling:
- Client-side drafts are autosaved in `localStorage` under `kq_${bootcampId}_assessment_day_${dayId}`.
- If network disconnection occurs during submission, student data remains intact locally with a retry notification.
