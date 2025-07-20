# AI Instructions Hub

A community-driven collection of AI coding instructions and best practices for popular frameworks, programming languages, and development tools. Get your AI assistant configured with expert knowledge for better code generation.

## ✨ Features

- **Modern Angular 20+** with signals and standalone components
- **Beautiful UI** with technology logos and responsive design
- **Configuration Guide** showing how to set up instructions in different IDEs (VS Code, Cursor, Windsurf, etc.)
- **Real-time search and filtering** by technology type and keywords
- **Technology-focused** instructions for frameworks, languages, and tools
- **Community contributions** via GitHub pull requests

## 🚀 Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm start

# Open browser to see the app
http://localhost:4200
```

## 🏗️ How It Works

1. **Choose your AI tool** from the configuration guide (GitHub Copilot, Cursor, Windsurf, etc.)
2. **Browse technologies** to find instructions for your framework or language
3. **Copy the AI instructions** from the GitHub markdown files
4. **Paste into your configuration** file (.github/copilot-instructions.md, .cursorrules, etc.)
5. **Start coding** with enhanced AI assistance!

## 📁 Project Structure

```
src/
├── app/
│   ├── features/        # Feature components (home)
│   ├── shared/          # Reusable components and utilities
│   ├── core/            # Services and core functionality
│   └── models/          # TypeScript interfaces
├── public/data/
│   └── prompts.json     # Technology data with logos
└── instructions/        # AI instruction files (ai.md)
```

## 🛠️ Available Technologies

### Frameworks

- Angular, React, Vue.js, Svelte, Next.js, FastAPI

### Languages

- TypeScript, Python, Rust, Go

### Runtime & Tools

- Node.js, Tailwind CSS

## 🤝 Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

### Quick Start for Contributors

1. Fork this repository
2. Create instruction files in `instructions/technology-name/ai.md`
3. Update `public/data/prompts.json` with technology details and logo
4. Submit a pull request

### Adding a New Technology

Add an entry to `public/data/prompts.json`:

```json
{
  "id": "your-tech",
  "environment": "Your Technology",
  "type": "Framework|Language|Runtime|Styling|Tool|Other",
  "rulesFile": "ai.md",
  "installationInstructions": "Copy to your AI configuration file",
  "description": "Brief description of the technology",
  "logo": "https://example.com/logo.png",
  "logoAlt": "Technology Logo",
  "link": "https://github.com/PeterM45/ai-instructions/blob/main/instructions/your-tech/ai.md",
  "lastUpdated": "2025-01-19",
  "contributors": ["your-github-username"]
}
```

## 🏗️ Built With

- **Angular 20+** - Modern web framework with signals
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe JavaScript
- **Lucide Angular** - Beautiful icons
- **RxJS** - Reactive programming

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

## 🌟 Star History

If you find this project helpful, please consider giving it a star! ⭐
