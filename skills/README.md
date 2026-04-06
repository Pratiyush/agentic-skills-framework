# Skill Marketplace

Production-ready assets organized by category. Each category follows its own specification.

## Categories

| Category | Directory | Status | Description |
|----------|-----------|--------|-------------|
| **Skills** | `skill/` | Active | SKILL.md instruction sets for AI agents |
| **Prompts** | `prompt/` | Planned | Click-to-copy prompt templates |
| **Agents** | `agent/` | Planned | Pre-configured agent definitions |
| **MCP** | `mcp/` | Planned | MCP server configurations |

## Skills

Skills are the primary asset type. Each skill follows the Agent Skills specification:

```
skills/skill/<skill-name>/
  SKILL.md            # Required — frontmatter + instructions
  .skillignore        # Files excluded from deployment
  scripts/            # Executable automation
  references/         # Reference documentation
  assets/             # Static files and templates
  tests/              # Test scenarios
  examples/           # Usage examples (excluded from deploy)
```

### Installing a skill

```bash
skill install skills/skill/<name> --target claude
```

### Validating all skills

```bash
skill validate-all
```

## Contributing

1. Create your skill in `skills/skill/<name>/`
2. Add a `.skillignore` to exclude dev-only files
3. Run `skill validate` and `skill lint` to verify
4. Submit a PR
