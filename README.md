# AI Instructions Hub

Community-driven collection of AI coding instructions and best practices for popular frameworks, programming languages, and development tools. Get your AI assistant configured with expert knowledge for better code generation.

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
│   └── technology-list.json  # List of technology directories to show
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
2. Create `instructions/technology-name/ai.md` with AI instructions
3. Add your technology's metadata to `public/data/technology-list.json` (see below)
4. Submit a pull request

### Adding a New Technology

1. Create your instructions in `instructions/your-tech/ai.md`
2. Add your technology's metadata to `public/data/technology-list.json` as shown below:

```json
{
  "technologies": [
    {
      "id": "your-tech",
      "type": "Framework|Language|Runtime|Styling|Tool|Other",
      "contributors": ["your-github-username"],
      "resources": ["https://link-to-resource.com"],
      "lastUpdated": "2025-07-20",
      "isVerified": false
    }
    // ...other technologies
  ]
}
```

> **Note:** If you add more than 4 contributors or resources, only the first 4 will be shown on the card by default. A "+N more" button will appear to expand the full list. This keeps the UI clean and readable.

3. That's it! The app will auto-generate the logo and environment name using [Simple Icons](https://simpleicons.org/) and your directory name. No manual logo upload required.
4. Submit a pull request.

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
