# andrii-tsapko-rf-ui

RainFocus UI Challenge — single-page **Event Setup Guide** for the RainFocus Summit, built from the provided Figma design.

## Stack

Vite + React 19 + hand-written SCSS. No Tailwind, Bootstrap, MUI, or any styling/component library.

## Run

```bash
npm install
npm run dev      # local dev server, HMR
npm run build    # outputs to ./build/
npm run preview  # serve the production build
```

## Open the production build directly (no server)

Vite is configured with `base: './'`, so all asset URLs in the build are relative. Just open:

```
build/index.html
```

…in any browser.

## Responsive

Desktop matches the 1447 × 1024 Figma frame. Breakpoints: **1120** (Step 1 row reflow), **1000** (sidebar collapses to a top bar with hamburger drawer; card grids switch to `auto-fill, minmax(200px, 1fr)`), **768** (Step 1 stacks), **600** (header tightens), **435** (Edit button goes full-width), **360** (final spacing trim). No horizontal overflow down to 320 px.

## Accessibility

Semantic landmarks (`<aside> <nav> <main> <header>`), single H1 → H4 heading order, every interactive element is a real `<button>` (keyboard-operable via Enter/Space), visible `:focus-visible` outlines, decorative icons `aria-hidden="true"`, Search input has `aria-label="Search"`.

## Title

```
RainFocus Summit — Event Setup Guide | Andrii Tsapko - Claude
```
