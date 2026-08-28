# Agent Instructions

## Autonoma test data

Autonoma seeds realistic end-to-end test data through the `/api/autonoma` endpoint. Factories call the same creation paths the app uses (`createUser`, `createConversation`, `createMessage`) so validation, hashing, and relations stay in sync with production behavior.

When you add or change models—or the code that creates them—add or update the matching factory in `backend/autonoma/factories.js` and extend the recipe at `~/.autonoma/vera-worldwide/recipe.json`.
