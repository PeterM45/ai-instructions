# Contributing Guide

Thanks for your interest in contributing! This project collects AI coding instructions and best practices for popular frameworks, programming languages, and development tools.

## 🚀 How to Contribute

### Adding a New Technology

1. **Fork this repository**
2. **Create your instruction file** following this structure:

```
instructions/
├── technology-name/
│   └── ai.md             # Main AI instructions file
```

3. **Add your technology to the list**

   - Open `public/data/technology-list.json`
   - Add an object for your technology to the `technologies` array, for example:

```json
{
  "id": "your-tech",
  "type": "Framework|Language|Runtime|Styling|Tool|Other",
  "contributors": ["your-github-username"],
  "resources": ["https://link-to-resource.com"],
  "lastUpdated": "2025-07-20",
  "isVerified": false
}
```

> **Note:** If you add more than 4 contributors or resources, only the first 4 will be shown on the card by default. A "+N more" button will appear to expand the full list. This keeps the UI clean and readable.

4. **No manual logo upload needed!**

   - The app will automatically generate the logo and environment name using [Simple Icons](https://simpleicons.org/) and your directory name. If your technology is not found in Simple Icons, a fallback icon will be shown.

5. **Submit a pull request** with a clear description. We'll review and merge your contribution!

## 📝 Guidelines

### Content Guidelines

- **Be specific**: Provide clear, actionable AI instructions
- **Focus on AI context**: Instructions should help AI understand the technology's patterns, best practices, and conventions
- **Include examples**: Show practical code examples and patterns
- **Keep it current**: Ensure instructions work with recent versions
- **Be concise**: AI instructions should be comprehensive but not overly verbose

### Technology Types

- **Framework**: React, Angular, Vue, Next.js, FastAPI, Django, etc.
- **Language**: TypeScript, Python, Rust, Go, Java, C#, etc.
- **Runtime**: Node.js, Deno, Bun, etc.
- **Styling**: Tailwind CSS, styled-components, CSS Modules, etc.
- **Database**: PostgreSQL, MongoDB, Redis, etc.
- **Cloud Service**: AWS, Azure, GCP specific instructions
- **Tool**: Webpack, Vite, ESLint, Prettier, etc.
- **Other**: Everything else

### File Structure

- **Use kebab-case** for directory names: `my-technology`
- **Main instruction file** must be named `ai.md`
- **Keep it simple** - only the AI instructions file is needed

### Logo Requirements

- **High quality**: Vector (SVG) preferred, or high-res PNG (min 64x64px)
- **Public access**: Must be accessible via HTTPS without authentication
- **Appropriate licensing**: Ensure you have rights to use the logo
- **Good contrast**: Logos should work well on dark backgrounds

## 🎯 AI Instructions Best Practices

Your `ai.md` file should include:

1. **Technology Overview**: Brief description and current version
2. **Best Practices**: Coding patterns, naming conventions, project structure
3. **Common Patterns**: Frequently used code snippets and approaches
4. **Performance Tips**: Optimization techniques and anti-patterns to avoid
5. **Integration Notes**: How it works with other tools and frameworks
6. **Examples**: Real-world code examples demonstrating proper usage

### Example Structure for `ai.md`:

````markdown
# Technology Name

Brief description of the technology and its purpose.

## Best Practices

- Follow these conventions...
- Use this pattern for...
- Avoid these anti-patterns...

## Code Examples

```language
// Example code here
```
````

## Integration

- Works well with...
- Common configurations...

```

## 🔍 Review Process

1. **Automatic checks**: PR will be validated for JSON syntax and required fields
2. **Manual review**: Maintainers will review content quality and accuracy
3. **Testing**: Instructions will be tested with popular AI tools
4. **Feedback**: You may receive requests for improvements

## 🙋 Need Help?

- [Open an issue](https://github.com/PeterM45/ai-instructions/issues) for bugs or feature requests
- [Start a discussion](https://github.com/PeterM45/ai-instructions/discussions) for questions
- Check existing technologies for examples and inspiration

## 🎉 Recognition

Contributors are listed in the technology data and will be credited on the website. Your GitHub username will appear on the technology card!

Thanks for helping make AI coding assistance better for everyone! 🚀
```
