# VERA WORLDWIDE: ENVIRONMENT & DEPLOYMENT
**Version:** 1.0.0
**Purpose:** Defines environment variables, deployment scripts for GitHub Pages, and core Firebase Security Rules.

---

## 1. ENVIRONMENT VARIABLES (`.env`)
The React frontend (Vite) requires variables prefixed with `VITE_`. The Node.js backend requires standard variables. **Never commit actual `.env` files to GitHub.**

**Frontend (`vera_worldwide/.env`):**
VITE_FIREBASE_API_KEY=your_web_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=vera-worldwide.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=vera-worldwide
VITE_FIREBASE_STORAGE_BUCKET=vera-worldwide.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_BACKEND_URL=http://localhost:3000

**Backend (`backend/.env`):**
PORT=3000
OPENAI_API_KEY=sk-your-openai-key-here
GEMINI_API_KEY=your-gemini-key-here
FIREBASE_SERVICE_ACCOUNT_KEY=path_to_json_or_base64

## 2. FIREBASE SECURITY RULES (firestore.rules)
Prevents users from giving themselves millions of Sparks.

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Root lock
    match /{document=**} {
      allow read, write: if false; 
    }
    
    // Vera Worldwide Master Artifact
    match /artifacts/vera-worldwide-v1 {
      
      // Public Data: Anyone authenticated can read. Only admins can write.
      match /public/data/{document=**} {
        allow read: if request.auth != null;
        allow write: if false; // Update via Admin Dashboard only
      }

      // User Data: Users can only read/write their OWN document
      match /users/{userId}/{document=**} {
        allow read, write: if request.auth != null && request.auth.uid == userId;
      }
    }
  }
}
