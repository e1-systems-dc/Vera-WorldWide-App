# VERA WORLDWIDE: UI & THEME CONFIGURATION
**Version:** 1.0.0
**Purpose:** Centralized definitions for the "Dark Glass" aesthetic, Tailwind CSS extensions, custom animations, and the Jewel Tone color palette.

---

## 1. CORE VISUAL IDENTITY
* **Aesthetic:** "Premium Dark Glass." The app should feel like high-end, exclusive software, not a cartoonish mobile game.
* **Base Background:** Deep slate/obsidian (`bg-[#020617]` or `bg-slate-950`).
* **Text Colors:** Primary text is `text-slate-200` or `text-white`. Subtext is `text-slate-400`.
* **Textures:** We use a subtle SVG "film grain" overlay (`mix-blend-mode: overlay`, `opacity: 0.03`) fixed over the background to give the app a tactile, cinematic feel.

## 2. THE JEWEL TONE PALETTE
When building components, use these specific Tailwind gradients and glows to represent different app functions:

* **The Engine (Logic & Tech): Electric Cyan**
  * `from-cyan-500 to-blue-600`
  * Used for: AI processing indicators, settings, and standard UI elements.
* **Progress & Stakes (Action): Emerald/Teal**
  * `from-emerald-500 to-teal-600`
  * Used for: Primary Call-to-Action buttons, Boss Scenarios, "Win" states, and the Plus Tier.
* **Premium & Economy (Exclusivity): Violet/Amethyst**
  * `from-violet-500 to-purple-600`
  * Used for: Sparks currency displays, Total Immersion Premium Tier, and Store items.

## 3. CUSTOM TAILWIND ANIMATIONS (`tailwind.config.js` specs)
Whenever an AI generates a new page, it must include these custom animations in the config or CSS stylesheet to maintain the ambient background glows.

```javascript
module.exports = {
  theme: {
    extend: {
      keyframes: {
        'aurora-1': {
          '0%, 100%': { transform: 'translateY(0) scale(1)', opacity: '0.3' },
          '50%': { transform: 'translateY(-50px) scale(1.1)', opacity: '0.5' },
        },
        'aurora-2': {
          '0%, 100%': { transform: 'translateY(0) scale(1)', opacity: '0.3' },
          '50%': { transform: 'translateY(50px) scale(1.2)', opacity: '0.4' },
        }
      },
      animation: {
        'aurora-1': 'aurora-1 12s ease-in-out infinite',
        'aurora-2': 'aurora-2 15s ease-in-out infinite reverse',
      }
    }
  }
}
