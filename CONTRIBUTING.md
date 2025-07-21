# Contributing

Help improve this project by adding or updating AI instructions for frameworks, languages, and tools.

## How to Contribute

### Add a New Technology

1. Fork the repo
2. Add your instructions in:

```
instructions/technology-name/ai.md
```

3. Add your technology to `public/data/technology-list.json`:

```json
{
  "id": "your-tech",
  "type": "Framework|Language|Runtime|Styling|Tool|Other",
  "description": "Short description of the technology.",
  "contributors": ["your-github-username"],
  "resources": ["https://link-to-resource.com"],
  "lastUpdated": "2025-07-20",
  "isVerified": false
}
```

If you add more than 4 contributors or resources, only the first 4 will show by default. A "+N more" button lets users expand the full list.

No logo upload needed. The app uses [Simple Icons](https://simpleicons.org/) and your directory name. If not found, a fallback icon is used.

4. Open a pull request. Keep the description clear and direct.

## Guidelines

### Content

- Be specific and actionable
- Focus on helping AI understand patterns, best practices, and conventions
- Include practical code examples
- Make sure instructions work with recent versions
- Keep instructions clear and concise

### Technology Types

- Framework: React, Angular, Vue, Next.js, FastAPI, etc.
- Language: TypeScript, Python, Rust, Go, etc.
- Runtime: Node.js, Deno, Bun, etc.
- Styling: Tailwind CSS, styled-components, etc.
- Database: PostgreSQL, MongoDB, etc.
- Cloud Service: AWS, Azure, GCP
- Tool: Webpack, Vite, ESLint, etc.
- Other: Anything else

### File Structure

- Use kebab-case for directory names: `my-technology`
- Name the main instruction file `ai.md`
- Only the AI instructions file is required

## AI Instructions Best Practices

Your `ai.md` file should have:

1. Technology overview and version
2. Best practices and conventions
3. Common code patterns
4. Performance tips
5. Integration notes
6. Examples

Example:

````markdown
# Technology Name

Short description.

## Best Practices

- Convention 1
- Convention 2

## Code Examples

```language
// Example code
```

## Integration

- Works with ...
- Common configs ...
````

## Review Process

1. Automatic checks for JSON and required fields
2. Manual review for quality and accuracy
3. Instructions tested with AI tools
4. You may get feedback for changes

## Need Help?

- Open an issue for bugs or requests
- Start a discussion for questions
- See existing technologies for examples

## Recognition

Contributors are listed in the technology data and credited on the website.
