# Contributing Guide

Thanks for your interest in contributing! This project collects AI coding instructions and best practices for various technologies.

## How to Contribute

### Adding a New Technology

1. **Fork this repository**
2. **Add your instruction files** following this structure:

```
instructions/
├── technology-name/
│   ├── README.md
│   ├── ai-instructions.md
│   └── best-practices.md
```

3. **Update `data/prompts.json`** with your technology:

```json
{
  "id": "unique-id",
  "environment": "Technology Name",
  "type": "Framework|IDE|Tool|Platform|Database|Cloud Service|AI/ML|Other",
  "rulesFile": "ai-instructions.md",
  "installationInstructions": "Brief setup instructions",
  "description": "Short description",
  "link": "https://github.com/PeterM45/ai-instructions/blob/main/instructions/technology-name/ai-instructions.md",
  "lastUpdated": "YYYY-MM-DD",
  "contributors": ["your-github-PeterM45"]
}
```

4. **Submit a pull request**

## Guidelines

- **Be specific**: Provide clear, actionable instructions
- **Include examples**: Show practical implementations
- **Keep it updated**: Ensure instructions work with current versions
- **Test thoroughly**: Verify instructions before submitting

## File Naming

- Use kebab-case for directories: `my-technology`
- Use descriptive filenames: `ai-instructions.md`, `best-practices.md`

## Questions?

- [Open an issue](https://github.com/PeterM45/ai-instructions/issues)
- [Start a discussion](https://github.com/PeterM45/ai-instructions/discussions)

Thanks for contributing! 🚀
