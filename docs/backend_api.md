# VERA WORLDWIDE: BACKEND API & ROUTES CONTRACT
**Version:** 1.0.0
**Purpose:** Defines the local Node.js/Express backend endpoints. The backend acts as a secure proxy to LLM providers (OpenAI/Gemini) so API keys are never exposed in the React frontend.

---

## 1. BASE URL
* **Development:** `https://vera-worldwide-app.onrender.com/api/`
* **Production:** (To be determined upon backend hosting, e.g., Render or Heroku)

---

## 2. CORE ENDPOINTS

### A. The Neural Chat Engine
**Endpoint:** `POST /api/chat`
**Purpose:** Sends the user's message to the LLM, injects the proper Persona prompt, and returns both the conversational reply and the background JSON analysis.

**Request Body (JSON):**
{
  "userId": "string",
  "userMessage": "string",
  "targetDialect": "es-MX",
  "userCefrLevel": "B1",
  "scenario": "customs_agent" // or "standard_lesson"
}

**Expected Response (JSON):**
{
  "success": true,
  "data": {
    "aiResponse": "Pase a la oficina 4, por favor. Siguiente.",
    "analysis": {
      "isComprehensible": true,
      "grammarGaps": [],
      "adaptiveHint": null,
      "fluencyScore": 92
    }
  }
}

### B. Voice Processing (Optional Backend STT/TTS Fallback)
*Note: Primary STT/TTS is handled via the Browser API, but this endpoint exists if premium server-side generation (like ElevenLabs) is implemented.*

**Endpoint:** `POST /api/voice/generate`
**Request Body (JSON):** `{ "text": "Pase a la oficina 4.", "dialect": "es-MX", "voiceId": "vargas_01" }`
**Expected Response:** Audio stream or buffer containing the spoken text.
