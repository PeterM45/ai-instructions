# Angular AI Development Instructions

This directory contains AI-specific prompts and guidelines for Angular development using modern best practices as of 2025.

## Files

- `ai-instructions.md` - Complete AI development guidelines for Angular projects
- `README.md` - This file

## Usage

### For GitHub Copilot

Add the contents of `ai-instructions.md` to your `.github/copilot-instructions.md` file:

```bash
cp ai-instructions.md .github/copilot-instructions.md
```

### For Cursor IDE

Create a `.cursorrules` file in your project root:

```bash
cp ai-instructions.md .cursorrules
```

### For Other AI Tools

Copy the content and use it as system instructions or context in your preferred AI coding assistant.

## What's Included

- TypeScript best practices
- Modern Angular patterns (signals, standalone components)
- Component architecture guidelines
- Service design patterns
- Routing with lazy loading
- Project structure recommendations
- Practical code examples

## Angular Version

These instructions are optimized for Angular 17+ with the latest features including:

- Signals for state management
- Standalone components
- New control flow syntax (@if, @for, @switch)
- inject() function for dependency injection
- input() and output() functions

## Contributing

To update these instructions:

1. Modify `ai-instructions.md`
2. Test with your AI tool of choice
3. Submit a pull request with improvements

## Resources

- [Angular Official Documentation](https://angular.dev)
- [Angular AI Development Guide](https://angular.dev/ai/develop-with-ai)
- [Angular Style Guide](https://angular.dev/style-guide)
