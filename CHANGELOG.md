# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.9.0] - 2026-04-06

### Added

- `@skillscraft/spec` package defining the SKILL.md specification schema
- `@skillscraft/core` package with parser, validator, and linter for SKILL.md files
- `@skillscraft/cli` package with `validate`, `lint`, `init`, and `install` commands
- Documentation site with gallery, specification, and concepts pages
- Shared CSS with dark/light mode support across all doc pages
- 10 example skills covering common use cases (basic-skill, code-quality, data-validation, dependency-audit, project-maintenance, release-notes, skill-template, skill-with-scripts, skill-with-tests, test-generator)
- End-to-end tests using Playwright
- npm auto-release workflow on PR merge
- CI workflow with Node 22/24 matrix

### Changed

- Rewritten docs to professional standard with shared CSS
- Removed pinned pnpm version from workflows in favor of `packageManager` field

### Fixed

- Skip tests for packages with no test files
