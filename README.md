# AI Instructions Hub

A community-driven collection of AI coding instructions and best practices for various technologies and development environments.

## Features

- Modern Angular 20+ with signals and standalone components
- Responsive design with Tailwind CSS
- Real-time search and filtering
- Community contributions via GitHub pull requests

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm start

# Open browser
http://localhost:4200
```

## Project Structure

```
src/
├── app/
│   ├── components/       # Reusable components
│   ├── models/          # TypeScript interfaces
│   ├── pages/           # Page components
│   └── services/        # Angular services
├── data/
│   └── prompts.json     # Technology data
```

## Contributing

1. Fork this repository
2. Add your instruction files to the appropriate directory
3. Update `data/prompts.json` with your technology details
4. Submit a pull request

### Adding a New Technology

Add an entry to `data/prompts.json`:

```json
{
  "id": "your-tech",
  "environment": "Your Technology",
  "type": "Framework",
  "rulesFile": "ai-instructions.md",
  "installationInstructions": "How to configure",
  "description": "Brief description",
  "link": "https://github.com/PeterM45/ai-instructions/blob/main/instructions/your-tech/ai-instructions.md"
}
```

## Built With

- Angular 20+
- Tailwind CSS
- TypeScript
- RxJS

## License

MIT License - see [LICENSE](LICENSE) for details.
