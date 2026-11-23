# DIU SmartAdmit v2.0
## AI Powered University Admission & Career Guidance System

---

## QUICK START

### 1. MongoDB
```bash
# Local MongoDB
mongod --dbpath /data/db

# OR use MongoDB Atlas (free):
# Get connection string from https://cloud.mongodb.com
```

### 2. Backend
```bash
cd backend
cp .env.example .env
# Edit .env: set MONGO_URI and optionally OPENAI_API_KEY
npm install
npm run dev
# Server starts at http://localhost:3000
# Departments and FAQs auto-seed on first run
```

### 3. Flutter App
```bash
cd flutter_app
flutter pub get
# Edit lib/utils/constants.dart → set baseUrl:
#   Android emulator : http://10.0.2.2:3000/api
#   iOS simulator    : http://localhost:3000/api
#   Physical device  : http://<YOUR_PC_LAN_IP>:3000/api
flutter run
```

---

## PREREQUISITES
| Tool | Version |
|------|---------|
| Node.js | v18+ |
| MongoDB | v6+ (local) or Atlas |
| Flutter SDK | 3.x |
| Android Studio / Xcode | Latest |
| Dart | 3.x |

---

## ENVIRONMENT VARIABLES (backend/.env)
```
PORT=3000
NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/smartadmit
OPENAI_API_KEY=sk-...   ← optional, app works without it
```

---

## API ROUTES
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | / | Health check |
| POST | /api/chat | AI chat (free + agent mode) |
| GET | /api/departments | List all 11 departments |
| GET | /api/departments/:code | Department detail |
| POST | /api/recommend | GPA-based recommendation |
| GET | /api/faq | FAQ list |
| GET | /api/profile/:sessionId | Student profile |
| GET | /api/profile/:sessionId/recommendation | AI recommendations |
| POST | /api/report | Generate HTML report |
| GET | /api/admin/dashboard | Admin stats |
| GET | /api/admin/profiles | All student profiles |
| GET | /api/admin/questions | Popular questions |

---

## FEATURES
- 🤖 **Agentic Assessment** — 7-step guided profile building
- 🎯 **Confidence Scoring** — 4-dimension AI matching (Academic/Interest/Career/Practical)
- 👨‍👩‍👧 **Parent Mode** — Summaries in English + Bangla (বাংলা)
- 🗺️ **Career Roadmap** — Year-by-year plan per department
- 📄 **Report Generator** — Downloadable HTML report
- 💬 **Free Chat** — Ad-hoc admission questions
- 🏛️ **11 DIU Departments** — Full data, careers, salary outlook
- 🎓 **Scholarship Calculator** — Auto-calculates eligibility

---

## PROJECT STRUCTURE
```
smartadmit/
├── backend/
│   ├── server.js                  ← Express entry point
│   ├── .env.example
│   ├── package.json
│   ├── config/db.js               ← MongoDB + auto-seed
│   ├── models/                    ← 7 Mongoose models
│   ├── controllers/               ← 6 controllers
│   ├── routes/                    ← 7 route files
│   ├── middleware/errorHandler.js
│   └── utils/
│       ├── aiEngine.js            ← Intent detection + free chat
│       ├── agentEngine.js         ← Step-by-step assessment flow
│       ├── confidenceEngine.js    ← 4-dimension scoring
│       └── pdfGenerator.js        ← HTML report builder
├── flutter_app/
│   ├── pubspec.yaml
│   └── lib/
│       ├── main.dart
│       ├── models/                ← 5 models
│       ├── providers/             ← 5 providers
│       ├── screens/               ← 11 screens
│       ├── services/api_service.dart
│       ├── utils/                 ← theme, constants, extensions
│       └── widgets/               ← 6 widgets
└── README.md
```

---

## FLUTTER BASE URL CONFIGURATION
File: `flutter_app/lib/utils/constants.dart`
```dart
// Change this line based on your setup:
static const String baseUrl = 'http://10.0.2.2:3000/api'; // Android emulator
// static const String baseUrl = 'http://localhost:3000/api'; // iOS simulator
// static const String baseUrl = 'http://192.168.1.x:3000/api'; // Physical device
```

---

## NOTES
- MongoDB auto-seeds 11 departments + 9 FAQs on first run
- OpenAI key is optional — all features work via rule-based fallback
- Reports download as `.html` files (open in any browser)
- Session data expires after 24 hours (MongoDB TTL index)
