# Contributing Guide

Thanks for your interest in contributing! This project collects AI coding instructions and best practices for popular frameworks, programming languages, and development tools.

## 🚀 How to Contribute

### Adding a New Technology

1. **Fork this repository**
2. **Create instruction files** following this structure:

```
instructions/
├── technology-name/
│   ├── README.md          # Overview and setup info
│   └── ai.md             # Main AI instructions file
```

3. **Add a technology logo** (recommended size: 64x64px or SVG)

   - Use reliable CDNs like GitHub's raw content, official websites, or jsDelivr
   - Ensure the logo is publicly accessible and has good contrast

4. **Update `public/data/prompts.json`** with your technology:

```json
{
  "id": "unique-kebab-case-id",
  "environment": "Technology Name",
  "type": "Framework|Language|Runtime|Styling|Database|Cloud Service|Tool|Other",
  "rulesFile": "ai.md",
  "installationInstructions": "Copy to your AI configuration file",
  "description": "Clear, concise description (keep under 80 characters)",
  "logo": "https://example.com/path/to/logo.png",
  "logoAlt": "Technology Name Logo",
  "link": "https://github.com/PeterM45/ai-instructions/blob/main/instructions/technology-name/ai.md",
  "lastUpdated": "YYYY-MM-DD",
  "contributors": ["your-github-username"]
}
```

5. **Submit a pull request** with a clear description

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
- **Include a README.md** with technology overview and setup instructions

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
