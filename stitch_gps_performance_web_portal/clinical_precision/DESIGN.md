---
name: Clinical Precision
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#45464d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#006a61'
  on-secondary: '#ffffff'
  secondary-container: '#86f2e4'
  on-secondary-container: '#006f66'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#001a42'
  on-tertiary-container: '#3980f4'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#89f5e7'
  secondary-fixed-dim: '#6bd8cb'
  on-secondary-fixed: '#00201d'
  on-secondary-fixed-variant: '#005049'
  tertiary-fixed: '#d8e2ff'
  tertiary-fixed-dim: '#adc6ff'
  on-tertiary-fixed: '#001a42'
  on-tertiary-fixed-variant: '#004395'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.4'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-tablet: 32px
  margin-mobile: 16px
---

## Brand & Style
The design system is engineered to project the authority of a high-stakes consultancy while maintaining the approachability of a healthcare partner. The brand personality is rooted in **reliability, expertise, and results-oriented precision**. 

The visual style is **Corporate Modern with a Minimalist lens**. It prioritizes high information density without sacrificing clarity, utilizing significant white space to allow data-heavy hospital performance metrics to breathe. The emotional response should be one of "calm competence"—the feeling that complex systemic challenges are being handled by seasoned experts.

Visuals are characterized by:
- **Spaciousness:** Large internal padding and generous margins to prevent cognitive overload.
- **Highly Structured:** A rigid adherence to grid systems to imply organizational stability.
- **Imagery:** High-resolution, authentic photography of collaborative healthcare environments, focusing on technology-enabled decision-making and human teamwork. Avoid clinical sterility; focus on professional warmth.

## Colors
The palette is dominated by **Deep Navy (Primary)** to establish foundational trust and a "boardroom" presence. 

- **Primary (#0F172A):** Used for navigation, headings, and high-impact UI elements.
- **Secondary (#0D9488):** A professional teal used for healthcare context, action-oriented callouts, and success states.
- **Tertiary (#3B82F6):** A bright corporate blue used for links, interactive components, and progress indicators.
- **Neutral (#64748B):** A balanced slate grey for body text and secondary labels, ensuring high legibility against clean white (#FFFFFF) backgrounds.
- **Backgrounds:** Use a tiered system of White (#FFFFFF) for main surfaces and an extremely light Slate (#F8FAFC) for sectional contrast.

## Typography
This design system utilizes a dual-font strategy to balance corporate impact with functional readability.

- **Headlines (Montserrat):** A geometric sans-serif that conveys confidence and modernity. It is used sparingly for high-level page titles and section headers. 
- **Body & Labels (Inter):** A systematic, highly legible face designed for screen clarity. It handles the "heavy lifting" of data visualization, reports, and long-form consulting insights.

**Scaling Rules:**
- On mobile, headline sizes are aggressively reduced to ensure key performance indicators (KPIs) remain visible without excessive scrolling.
- Use **Semi-Bold (600)** for sub-headers to maintain hierarchy within dense reports.
- **Line heights** are intentionally generous (1.6x for body text) to aid readability in high-stress professional environments.

## Layout & Spacing
The layout philosophy follows a **Fixed-Fluid Hybrid Grid**. Content is centered within a 1280px container on desktop to maintain a professional, editorial feel, while smaller viewports utilize a fluid percentage-based system.

- **Grid:** A 12-column grid is standard for desktop, collapsing to 6 columns for tablet and 2 columns for mobile.
- **Rhythm:** An 8px base unit drives all spacing decisions. Component internal padding should favor 16px (2 units) or 24px (3 units) to reinforce the spacious aesthetic.
- **Breakpoints:**
  - Desktop: 1024px+
  - Tablet: 768px - 1023px
  - Mobile: <767px

## Elevation & Depth
To maintain a minimalist and structured feel, this design system avoids heavy shadows and skeuomorphism. Instead, it utilizes **Tonal Layers and Low-Contrast Outlines**.

- **Surface Tiers:** Use subtle background color shifts (White to Slate-50) to indicate depth. For example, a card sits on a Slate-50 background using a White fill.
- **Outlines:** UI elements like input fields and cards use a 1px solid border (#E2E8F0). In active states, the border transitions to Primary Navy or Secondary Teal.
- **Shadows:** Only used for "floating" elements like modals or dropdown menus. These shadows must be **Ambient and Neutral** (e.g., `0 10px 15px -3px rgba(15, 23, 42, 0.08)`), avoiding any harsh blacks.

## Shapes
The shape language is **Soft (0.25rem)**. This subtle rounding removes the aggressive "sharpness" of pure corporate grids, making the UI feel modern and sophisticated without appearing overly casual or "bubbly."

- **Standard Elements:** Buttons, inputs, and small cards use a 4px (0.25rem) radius.
- **Large Containers:** Section containers or featured cards may scale up to 8px (0.5rem) to emphasize their role as primary content buckets.
- **Icons:** Should follow a "Linear" style with a 2px stroke weight to match the structured typography.

## Components
- **Buttons:** Primary buttons use the Deep Navy background with white text. Secondary buttons use a Teal outline. Both use a fixed 48px height for desktop to ensure a "sturdy" interactive feel.
- **Input Fields:** Minimalist design with a 1px Slate-200 border. Use Inter Label-SM for floating or top-aligned labels. Success/Error states must use Teal/Red consistently.
- **Cards:** Used for hospital metric overviews. Cards should have no shadow, a 1px border, and a 24px internal padding.
- **Data Tables:** High-density tables are critical. Use alternating row stripes in Slate-50. Headers must be in Label-SM (Uppercase) with a Slate-100 bottom border.
- **Performance Chips:** Small, rounded indicators for status (e.g., "Optimal," "At Risk"). Use Secondary Teal for positive trends and a muted Neutral for stable trends.
- **Progress Bars:** Use for performance targets. The background track should be Slate-100, with the indicator in Tertiary Blue or Secondary Teal.