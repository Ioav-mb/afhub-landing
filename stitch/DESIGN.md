---
name: AF Architectural Hub
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf1'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fa'
  on-surface: '#111c2c'
  on-surface-variant: '#43474d'
  inverse-surface: '#263142'
  inverse-on-surface: '#ebf1ff'
  outline: '#74777e'
  outline-variant: '#c4c6ce'
  surface-tint: '#49607d'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#011c36'
  on-primary-container: '#6f85a4'
  inverse-primary: '#b1c8ea'
  secondary: '#7b5800'
  on-secondary: '#ffffff'
  secondary-container: '#fec349'
  on-secondary-container: '#715000'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#191c1e'
  on-tertiary-container: '#828486'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d2e4ff'
  primary-fixed-dim: '#b1c8ea'
  on-primary-fixed: '#011c36'
  on-primary-fixed-variant: '#314864'
  secondary-fixed: '#ffdea6'
  secondary-fixed-dim: '#f7bd44'
  on-secondary-fixed: '#271900'
  on-secondary-fixed-variant: '#5d4200'
  tertiary-fixed: '#e1e2e4'
  tertiary-fixed-dim: '#c5c6c8'
  on-tertiary-fixed: '#191c1e'
  on-tertiary-fixed-variant: '#444749'
  background: '#f9f9ff'
  on-background: '#111c2c'
  surface-variant: '#d8e3fa'
typography:
  display-lg:
    fontFamily: Libre Caslon Text
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 24px
    fontWeight: '400'
    lineHeight: '1.3'
  headline-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 28px
    fontWeight: '400'
    lineHeight: '1.2'
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
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style

The design system is rooted in the concepts of "Institutional Prestige" and "High-Fidelity Connectivity." It evokes the quiet confidence of corporate plaza architecture—monolithic forms, expansive glass surfaces, and meticulous detailing. The target audience includes high-level executives, investors, and business partners who value stability, professionalism, and exclusivity.

The visual style is **Minimalist / Corporate Modern**, characterized by a rigorous adherence to grid structures and a focus on high-quality materials. It utilizes generous white space to create a "breathing" UI, ensuring that every element feels intentional and high-value. Distinctive flourishes, such as thin gold strokes and structural brackets, are used sparingly to suggest craftsmanship without compromising the system's inherent efficiency.

## Colors

The palette is anchored by **Deep Navy Blue**, representing authority and the depth of a secure business ecosystem. **Elegant Gold** is used strictly for accents, calls to action, and structural highlights, signifying premium quality and success.

Backgrounds utilize a tiered system of **Refined Light Grays and Whites** to maintain a clean, institutional feel. Text contrast is kept high, using the primary navy for headings to ensure maximum legibility and brand presence. Success, warning, and error states should be handled through desaturated versions of standard semantical colors to prevent them from clashing with the sophisticated primary palette.

## Typography

The typography strategy relies on the contrast between the traditional authority of a serif and the modern efficiency of a sans-serif. 

**Libre Caslon Text** is used for all major headings and display text. This choice mirrors the elegance of the 'AF' monogram, providing an editorial feel that suggests history and trustworthiness. 

**Inter** serves as the workhorse for body text and functional UI elements. It is chosen for its exceptional clarity on digital screens and its neutral, systematic character. To maintain the premium aesthetic, larger body text is given generous line heights, and labels often utilize uppercase styling with subtle letter spacing to mimic architectural signage.

## Layout & Spacing

The layout is built on a **Fixed Grid** system that centers content within a maximum width of 1280px, providing a structured, organized feel reminiscent of a corporate headquarters layout. 

A 12-column grid is used for desktop, transitioning to a 4-column grid for mobile. Spacing is governed by an 8px base unit, but preference is given to larger multiples (32px, 48px, 64px) to ensure "generous white space." Elements are often grouped within "zones" separated by thin, low-opacity horizontal lines or gold vertical dividers to maintain a sense of architectural order.

## Elevation & Depth

This design system avoids heavy shadows, instead using **Tonal Layers** and **Refined Outlines** to create depth. 

1.  **Plaza Level (Base):** The primary background color (#FFFFFF or #F4F5F7).
2.  **Structural Level:** Elements like cards or sidebars use a subtle 1px border (#E2E8F0) rather than a shadow.
3.  **Accent Elevation:** Important modal dialogs or floating menus use an "Ambient Shadow"—a very soft, highly diffused navy tint (Opacity 5%, Blur 30px) to suggest they are floating just above the surface.

Gold "Brackets" `[ ]` are used as a stylistic depth cue to frame featured content or active states, creating a sense of focus without needing physical elevation.

## Shapes

The shape language is **Sharp (0px)**. 

To align with corporate architecture and high-end business branding, the design system utilizes 90-degree angles for all primary containers, buttons, and input fields. This conveys precision, stability, and a modern institutional character. The only exceptions are circular icons or specific brand-related monograms; all structural UI elements remain strictly rectangular.

## Components

### Buttons
Primary buttons use the Deep Navy background with White text. Secondary buttons use a 1px Navy or Gold border with no fill. Interaction states are subtle; a slight shift in background saturation is preferred over dramatic color changes.

### Input Fields
Fields are defined by a bottom border only (1px Navy) or a full sharp-edged rectangle. Focus states are indicated by the border turning Gold. Labels are positioned above the field in uppercase Inter (label-sm).

### Cards
Cards are minimalist containers with a 1px light gray border. They do not have shadows. Content within cards should follow a strict hierarchy: a serif sub-headline followed by Inter body text.

### Refined Details
- **Brackets:** Use `[ ]` in Gold to wrap active navigation items or key metrics.
- **Gold Dividers:** Use vertical 1px gold lines to separate top-level navigation items or metadata points.
- **Iconography:** Use thin-stroke (1.5pt) linear icons. Icons should be Navy or Gold, never multi-colored.