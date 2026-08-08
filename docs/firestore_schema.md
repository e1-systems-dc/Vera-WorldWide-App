# VERA WORLDWIDE: FIRESTORE DATABASE SCHEMA
**Version:** 1.0.0
**Purpose:** Defines the exact NoSQL document structure, collections, and data paths for Vera Worldwide inside Firebase Firestore.

---

## STRICT DATABASE RULES
1. **The Root Path:** All paths MUST start inside the master `artifacts/vera-worldwide-v1` document. Do not read or write to the absolute root of the database.
2. **No Complex Queries:** To avoid Firebase composite index errors, fetch entire collections and handle all sorting/filtering on the frontend.

---

## 1. PUBLIC DATA COLLECTION
**Path:** `/artifacts/vera-worldwide-v1/public/data`
**Description:** Globally readable documents for platform metrics, active dialects, and arcade matchmaking.

```json
{
  "config": {
    "activeDialects": ["es-MX", "fr-FR", "ja-JP"],
    "dialectsInVoting": ["es-CO", "ko-KR", "it-IT"],
    "maintenanceMode": false,
    "currentAppVersion": "1.0.0"
  },
  "platform_stats": {
    "totalGlobalSparksEarned": 4502300,
    "totalActiveLearners": 1250,
    "mostPopularDialect": "es-MX"
  },
  "chat_logs": {
    "_dynamic_doc_id": "auto-generated-id",
    "userId": "string (uid)",
    "timestamp": "firestore timestamp",
    "dialect": "es-MX",
    "userMessage": "string",
    "veraResponse": "string",
    "fluencyScoreAssigned": 85,
    "grammarGapsDetected": ["preterite vs imperfect"]
  },
  "arcade_sessions": {
    "_dynamic_doc_id": "lobby-id",
    "status": "waiting | active | finished",
    "player1_uid": "string",
    "player2_uid": "string",
    "targetDialect": "fr-FR",
    "winner_uid": "string | null",
    "sparksWagered": 500
  }
}
