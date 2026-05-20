# andrii-tsapko-rf-ui

RainFocus UI Challenge — single-page implementation of the **Event Setup Guide** for the RainFocus Summit, built from the provided Figma design.

## Tech stack

- **Vite** (production build → `build/` folder, relative asset paths so the page can be opened directly from disk)
- **React 19** (JSX, no TypeScript)
- **SCSS / Sass** (hand-written, compiled by Vite — no Tailwind, Bootstrap, MUI, Chakra, shadcn or any styling/component library)

## Project layout

```
src/
  App.jsx
  main.jsx
  components/
    AppShell.jsx
    Sidebar.jsx
    MainHeader.jsx
    EventSetupGuide.jsx
    AttendeeModule.jsx
  styles/
    main.scss
    _variables.scss
    _layout.scss
    _sidebar.scss
    _cards.scss
    _responsive.scss
  assets/
    rf-logo.svg
    event-icon.png
    event-logo.png
    icons/
      search.svg
      logic-arrow.svg
      add-circle.svg
      computer.svg
      person-body.svg
      person-head.svg
      person-detail.svg
```

## Install

```bash
npm install
```

## Run (dev)

```bash
npm run dev
```

Opens a local dev server (HMR enabled).

## Build (production)

```bash
npm run build
```

Outputs the production build into the **`build/`** folder.

## Preview the production build

```bash
npm run preview
```

## Open the final build directly (no server)

The build is configured with `base: './'`, so all assets resolve via relative paths and `import.meta.url`. You can simply open the file in any browser:

```
build/index.html
```

## Notes on assets

- Icons and images were **exported directly from the Figma file** via the Figma MCP server and placed under `src/assets/` (so Vite fingerprints them and emits relative paths in the build).
- The Attendee module icon (the pink/lavender/purple person figure) is composed of **three layered SVGs** exactly as it appears in Figma — body, head, and detail layered using absolute positioning to match the source artwork.
- Small SVGs (`search`, `logic-arrow`, `add-circle`, `computer`, the three person layers, the `rf` logo) are under Vite's 4 KB inline threshold and are emitted as base64 data URLs in the JS bundle. The two larger PNG event images are emitted as hashed files in `build/assets/`.
- No external icon font or icon library is used.

## Responsive behavior

- Desktop matches the 1447 × 1024 Figma frame: 63 px far rail, 215 px sidebar content (278 px total), ~1073 px main content width.
- At ≤ 1100 the Step 1 row keeps all three blocks in one row by switching items to equal-share with shrinkable descriptions.
- At ≤ 1000 the sidebar-panel is hidden and a hamburger toggle in the rail reveals it as a slide-down drawer; rail icons stay across the top.
- At ≤ 768 the Step 1 blocks stack vertically and stretch to full row width.
- At ≤ 600 the event-header logo shrinks and outer paddings tighten.
- At ≤ 480 cards become a single left-aligned column capped at 360 px.
- Down to 320 px there is no horizontal overflow, paddings tighten, the **Edit event** button goes full-width.

## Accessibility

- Landmarks: `<aside>` for the sidebar, `<nav>` for the nav, `<main>` for the content area, `<header>` for the event header.
- The Search input has `aria-label="Search"` and an accessible `<label>` wrapper.
- The selected nav item carries `aria-current="page"`.
- Decorative icons use `alt=""` / `aria-hidden="true"`; the event logo has meaningful alt text.
- Focus styles are visible via `:focus-visible`; no element strips its focus outline.
- Headings follow a single H1 → H2 → H3 → H4 order.
- Every interactive element is a real `<button>` (primary nav, sub-nav, hamburger toggle, Edit event, Add Registration Workflow) — fully keyboard-reachable and operable via Enter/Space with no custom keydown shims.

## Title

The page `<title>` includes the agent name at the end, per the assignment:

> `RainFocus Summit — Event Setup Guide | Andrii Tsapko - Claude`
