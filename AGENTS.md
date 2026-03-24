# AGENTS.md

> Shared conventions for all AI agents working on this project,
> regardless of platform.
> Read by: Cursor, Claude Code, Gemini, and other agent platforms.
> Last updated: 2026-03-24

## Purpose

This file is the single source of truth for how AI agents collaborate on
this project. Every platform-specific config (`CLAUDE.md`, etc.) should
reference this file rather than duplicating its contents.

## Instruction Precedence

When instructions conflict, apply this order:

1. System/developer/platform runtime instructions
2. `AGENTS.md`
3. User request

## Project Overview

Astro port of the [hugo-researcher](https://github.com/ojroques/hugo-researcher) theme.
Reusable Astro components and SCSS for a minimal, monospaced resume site.

- **Original Hugo theme:** [ojroques/hugo-researcher](https://github.com/ojroques/hugo-researcher) (GPL-3.0)
- **Original author:** [Olivier Roques](https://oroques.dev/)
- **Original concept:** [Ankit Sultana](https://github.com/ankitsultana/researcher)

### Key Files

- `src/index.ts` — package entry point, re-exports all components and types
- `src/types.ts` — `ResearcherConfig`, `NavItem`, `FooterConfig`, `ConsentItem`, `ConsentConfig`
- `src/layouts/BaseLayout.astro` — main HTML layout (head, CDN links, slot)
- `src/components/Header.astro` — nav bar (title + nav items separated by `/`)
- `src/components/Footer.astro` — footer link
- `src/components/GoogleAnalytics.astro` — GA with Do-Not-Track respect
- `src/components/CookieConsent.astro` — consent banner + overlay
- `src/styles/researcher.scss` — ported theme styles (Bootstrap 4.6.2 + Inconsolata)

### Environment

- **Type:** npm package (consumed via `github:FraBle/astro-researcher-theme`)
- **Peer dependency:** Astro ^6.0.0
- **Styling:** SCSS (consumers need `sass` installed), Bootstrap 4.6.2 + Font Awesome + Academicons (CDN)
- **License:** GPL-3.0 (inherited from upstream hugo-researcher)

## Shared Principles

These apply to all agents regardless of platform:

- **Read before writing.** Always read existing files before modifying them.
- **Small PRs.** One concern per PR. Prompt the human before large-scope changes.
- **Don't guess on undocumented patterns.** Ask the human or check the decision log.
- **Update docs when you learn.** If you discover something, record it so the
  next agent (on any platform) benefits.
- **Ask when gaps appear.** If required context is missing, ask a concise
  clarifying question before multi-step execution.
- **Credential safety.** Never print secrets to stdout. They persist in
  transcripts and logs.

## Agent Protocol

- PRs: use `gh pr view/diff` (no URLs).
- Bugs: add regression test when it fits.
- Keep files <~500 LOC; split/refactor as needed.
- Commits: Conventional Commits (`feat|fix|refactor|build|ci|chore|docs|style|perf|test`).
- Prefer end-to-end verify; if blocked, say what's missing.
- Use repo's package manager/runtime; no swaps w/o approval.
- No `/` in branch names, use `-` instead.

## Definition of Done

- Docs-only change: docs updated, links/commands validated, no broken references.
- Code change: components render correctly when consumed by an Astro project.
- All props typed via `src/types.ts`.

## Approval Matrix

- Ask first: new branch creation/rename, dependency additions/removals,
  breaking changes to exported types or component props.
- No approval needed: read-only inspection (`git status/diff/log`, file
  reads, local non-destructive checks).

## Git

- **Never push directly to main.** All changes go through PRs.
- Safe by default: `git status/diff/log`. Push only when user asks.
- Destructive ops forbidden unless explicit.
- No amend unless asked.
- No `/` in branch names, use `-` instead.

## Maintenance

- Any change to `AGENTS.md` must update the `Last updated` date.
