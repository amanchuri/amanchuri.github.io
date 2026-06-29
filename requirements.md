# UrbanBloom — Application Specification

## Overview

UrbanBloom is a production-quality web application that functions as an AI-powered urban green infrastructure planning system.

It helps users analyze buildings and generate optimized recommendations for vegetation systems, plant species, and installation strategies that improve environmental performance in urban environments.

The system is designed for:
- Architects
- Environmental engineers
- Urban planners
- Sustainability consultants

The application is not a static content site. It is a dynamic decision system driven entirely by a structured knowledge base.

---

# Core Principle (IMPORTANT)

UrbanBloom does NOT use hardcoded recommendations.

All outputs must be generated dynamically from:

- plants.json
- buildings.json
- materials.json
- installation_systems.json
- ai_rules.json

The system behaves as a **rule-based AI decision engine**, not a static dataset viewer.

---

# System Architecture (HOW IT WORKS)

UrbanBloom uses a 5-layer decision pipeline:

## 1. Input Layer (User Data)
User provides:
- Building type
- Height / floors
- Material
- Climate conditions
- Sun exposure
- Wind conditions
- Budget
- Maintenance preference

---

## 2. Building Analysis Layer (buildings.json)

The system first matches user input to entries in `buildings.json`.

This determines:
- Structural constraints
- Load capacity category
- Feasible installation systems
- Base environmental suitability
- Risk factors (wind, heat, pollution)

If no exact match exists:
- Use closest semantic match based on attributes

---

## 3. Material Compatibility Layer (materials.json)

Once a building is identified, the system extracts:
- Surface type
- Heat retention
- Porosity
- Structural compatibility
- Plant adhesion potential

This layer determines:
- Whether self-clinging plants are allowed
- Whether trellis systems are required
- Roof system feasibility
- Material-based restrictions

---

## 4. Installation System Selection (installation_systems.json)

The system selects viable installation methods based on:

- Building constraints
- Material compatibility
- Plant biological traits
- Environmental goals

Each system defines:
- Structural requirements
- Irrigation needs
- Load limits
- Suitable plant types
- Environmental performance

Multiple systems may be ranked and returned.

---

## 5. Plant Selection Layer (plants.json)

Plants are filtered and ranked using:

- Climate compatibility
- Sunlight requirements
- Growth rate
- Maintenance level
- Drought tolerance
- Pollution tolerance
- Self-clinging ability
- Urban suitability

Plants must pass:
- system compatibility rules
- material compatibility rules
- building constraints

---

## 6. AI Decision Layer (ai_rules.json)

This is the **logic engine of UrbanBloom**.

It applies:

### Hard Constraints
- Structural safety rules
- Material restrictions
- System feasibility checks

If a hard constraint fails:
→ plant/system is rejected immediately

---

### Soft Scoring Rules
Each valid option receives points based on:

- Cooling efficiency
- Growth rate
- Maintenance level
- Environmental benefits
- Urban suitability

---

### Environmental Rules
Adjust scoring based on:
- Climate type
- Wind exposure
- Heat island intensity
- Rainfall conditions

---

### System Rules
Adjust compatibility based on:
- Installation system requirements
- Structural dependencies
- Maintenance complexity

---

### Conflict Resolution
If multiple rules conflict:
- Hard constraints override all
- Weighted scoring determines ranking
- Multipliers adjust final results

---

## 7. Confidence Scoring System

Each recommendation receives a confidence score (0–100).

### Formula:

Confidence is calculated using:

- Base score (50)
- + rule-based bonuses
- - penalties for mismatches
- × environmental/system multipliers

### Confidence meaning:

- 0–40 → Poor match
- 41–60 → Moderate match
- 61–80 → Good match
- 81–100 → Excellent match

Confidence must ALWAYS be displayed for each recommendation.

---

# IMPORTANT RULES FOR DATA USAGE

## No Hardcoding Rule
The system must NEVER:
- Hardcode plant recommendations
- Hardcode installation systems
- Hardcode environmental values
- Hardcode climate assumptions

All outputs must be derived from JSON files.

---

## Data Validation Rule
If required data is missing:
- Ask user for missing input
OR
- Skip calculation step
NEVER invent values

---

# UI REQUIREMENTS

## Landing Page
- Hero section
- "Start Planning" CTA
- Environmental branding
- Minimal modern design

---

## Planner Dashboard

### Layout:
- Left Sidebar → Input Form
- Center → Visualization
- Right Panel → AI Recommendations

---

## Left Sidebar Inputs

- Building location
- Building type
- Height
- Material
- Orientation
- Climate
- Sun exposure
- Wind conditions
- Maintenance preference
- Budget

---

## AI Analysis Output

When "Generate Plan" is clicked:

System must output:
- Recommended plants
- Recommended installation systems
- Material compatibility results
- Environmental impact estimates
- Confidence scores

All derived from knowledge base.

---

## Recommendation Cards

Each card must include:

- Plant name
- Scientific name
- Compatibility score
- Confidence score
- Climate suitability
- Sunlight requirements
- Water requirements
- Maintenance level
- Growth rate
- Environmental benefits
- Explanation (WHY it was selected)

---

## Environmental Impact Panel

Must display estimated improvements:

- Cooling effect
- Carbon reduction
- Air quality improvement
- Stormwater retention
- Noise reduction
- Biodiversity support

All values must be model-based estimates derived from rules.

---

## Visualization

Include:
- Building overlay visualization
- No fake or generated images unless explicitly computed or simulated

---

## City Simulator

Users can:
- Add multiple buildings
- Apply greening strategies
- View cumulative environmental effects

Outputs:
- Heat reduction trends
- Carbon reduction
- Green coverage %
- Stormwater improvements

---

## AI Report Generator

Generate a structured report:

- Building summary
- Selected systems
- Plant recommendations
- Environmental analysis
- Installation strategy
- Maintenance breakdown
- Confidence scores
- Charts and graphs

Must support PDF export.

---

# TECH STACK

Frontend:
- React
- Next.js
- Tailwind CSS

Backend:
- Node.js (API routes)

Database:
- Supabase

Charts:
- Chart.js or Recharts

Maps:
- Google Maps or Leaflet

AI Layer:
- OpenAI API (optional enhancement layer)
- Primary logic MUST use JSON knowledge base

---

# FINAL PRINCIPLE

UrbanBloom is a:

> Rule-based AI decision system powered by structured environmental knowledge

It simulates expert-level urban planning decisions using deterministic logic, not machine learning.

# UrbanBloom — Implementation Contract (Critical Build Rules)

## Purpose

This section defines strict implementation rules to ensure UrbanBloom is built as a fully functioning application, not a static UI or partially connected prototype.

All developers or AI systems must follow these rules when generating code.

---

# 1. Functional Integrity Rule (MOST IMPORTANT)

The application must always be fully functional end-to-end.

This means:

- Every UI interaction must trigger real logic
- Every button must produce a visible result
- Every input must affect the system output
- No “dead UI elements” are allowed

If a feature exists in the UI, it MUST be connected to working logic.

---

# 2. No Placeholder Logic Rule

The system must NOT include:

- Fake or static recommendation outputs
- Hardcoded plant lists in UI components
- Mock results

UI UPDATE!

1. Readability & Text Hierarchy Rules

The interface must never display dense or crowded text blocks.

Required structure rules:
All sections must use clear visual hierarchy
Title (large)
Subtitle (medium)
Body text (short paragraphs)
No paragraph should exceed 3 lines on desktop
No single block of text should contain more than 2 ideas
Spacing rules:
Minimum vertical spacing between sections: 64px
Between cards: 24px
Between text blocks inside cards: 12–16px
Line length control:
Maximum readable width: 650–750px
Centered text blocks must be avoided for long content
2. Section-Based Scrolling Layout (IMPORTANT)

The application must be structured as full visual sections, not continuous scroll text.

Each major section must behave like a content panel:

Required sections:
Why UrbanBloom is trusted by planners
Environmental benefits
How it works
Supported building types
FAQ
3. Scroll Behavior (Smooth Section Snapping)

The page must implement smooth scroll with section focus behavior:

Requirements:
Use smooth scrolling (scroll-behavior: smooth)
Each section should take at least 90vh height
As the user scrolls, the view should snap or softly center each section
Section transition behavior:

When a section enters viewport:

Increase opacity from 0 → 1
Slide upward slightly (translateY 20px → 0px)
Apply soft fade-in animation (300–600ms)

When leaving viewport:

Reduce opacity slightly (do not fully disappear instantly)
4. Visual Grouping (Card System)

Information must NOT appear as raw text blocks.

All content must be placed inside cards or panels.

Card requirements:
Rounded corners (12–16px)
Soft shadow (low opacity)
Internal padding: 24–32px
Clear icon or header per card section
5. Section Expansion Behavior (Focus Mode UX)

When a user scrolls into a section:

The section must visually “expand”:
Increase scale slightly (1.00 → 1.02)
Increase brightness or contrast subtly
De-emphasize all other sections (fade to 60–70% opacity)

This creates a focus reading experience, not a static page.

6. Icon + Visual Breathing Space Rule

Icons must NOT be tightly packed with text.

Required spacing:
Icon → Title: 12–16px
Title → Body: 16–24px
Between feature blocks: 24–40px

Icons must act as section anchors, not decoration clutter.

7. Typography Rules (Critical for UI clarity)
Titles: 32–48px (desktop)
Section headers: 24–32px
Body text: 16–18px
Line height: 1.5–1.8

Font weight hierarchy:

Titles: 600–700
Headers: 500–600
Body: 400–500
8. Interaction Design Rules
Hover states:
Cards lift slightly (translateY -3px)
Shadow increases subtly
Transition duration: 200–300ms
Button behavior:
Smooth gradient or color shift
No harsh color jumps
Must feel “soft and responsive”
9. Result Display (CRITICAL FIX FOR CROWDING ISSUE)

Recommendation output MUST follow structured layout:

Each plant/system result must be:

Required format:
Header (Plant name)
Subheader (Scientific name)
Key stats grid (not paragraph)
Climate
Water needs
Growth rate
Explanation section (short bullets, not paragraph walls)
Confidence score displayed visually (bar or ring)
Forbidden:
Long paragraphs inside results
Mixing all attributes in one text block
10. Progressive Disclosure Rule (IMPORTANT)

Do NOT show all information at once.

Instead:

Show summary first
Add “View more details” toggle
Expand on click

This prevents overload and improves readability.

11. Performance Feel Requirement

The UI must feel:

Lightweight
Animated but not slow
Responsive within 100ms interactions
No layout shifts after render
12. Accessibility Requirement
Maintain high contrast between text and background
Ensure text is always readable over gradients
Avoid light gray text on white backgrounds
All icons must have semantic labels