# Stack Manager

A local desktop application for managing technology stacks, infrastructure, and deployment configurations.

## Architecture

**Cross-Platform Desktop Application** built with:
- **Backend**: Rust (business logic, file system operations, system integration)
- **Frontend**: Tauri + React + Radix UI (modern, clean UI)
- **Runtime**: Local only - no remote servers required
- **Platforms**: macOS, Linux, Windows
- **Internationalization**: Full i18n support (English, French)

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **pnpm**
- **Rust** (latest stable version)
- **System dependencies for Tauri**:
  - **Linux**: `sudo apt-get install libwebkit2gtk-4.0-dev build-essential curl wget libssl-dev libgtk-3-dev libayatana-appindicator3-dev librsvg2-dev`
  - **macOS**: Xcode Command Line Tools
  - **Windows**: Microsoft Visual Studio C++ Build Tools

For detailed Tauri prerequisites, see: https://tauri.app/v1/guides/getting-started/prerequisites

## Getting Started

### 1. Install Dependencies

```bash
# Install frontend dependencies
npm install

# Rust dependencies will be installed automatically when running Tauri
```

### 2. Development

Run the application in development mode with hot-reload:

```bash
npm run tauri:dev
```

This will:
1. Start the Vite development server (frontend)
2. Compile the Rust backend
3. Launch the Tauri application window

### 3. Build for Production

Create optimized production builds for your platform:

```bash
npm run tauri:build
```

The built application will be in `src-tauri/target/release/`.

## Project Structure

```
stack-manager/
├── src/                    # React frontend
│   ├── components/         # React components
│   ├── locales/           # i18n translations (EN/FR)
│   ├── styles/            # Global styles
│   ├── App.tsx            # Root component
│   └── main.tsx           # Entry point
├── src-tauri/             # Rust backend
│   ├── src/
│   │   ├── commands/      # Tauri commands (IPC)
│   │   ├── main.rs        # Application entry
│   │   └── lib.rs         # Library exports
│   ├── Cargo.toml         # Rust dependencies
│   └── tauri.conf.json    # Tauri configuration
├── package.json           # Node.js dependencies
└── CLAUDE.md             # AI assistant development guide
```

## Available Scripts

- `npm run dev` - Start Vite development server
- `npm run build` - Build frontend for production
- `npm run tauri:dev` - Run Tauri app in development mode
- `npm run tauri:build` - Build Tauri app for production
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm test` - Run tests

## Features

### Current
- ✅ Cross-platform desktop application (macOS, Linux, Windows)
- ✅ Modern UI with Tailwind CSS and dark mode
- ✅ Internationalization (English and French)
- ✅ Tauri IPC for frontend-backend communication
- ✅ TypeScript for type safety
- ✅ Radix UI component library ready

### Planned
- Stack configuration management
- Infrastructure orchestration
- Deployment automation
- Version control for stacks
- And more! (See CLAUDE.md for full roadmap)

## Development Guidelines

This project follows strict conventions for AI-assisted development. See [CLAUDE.md](./CLAUDE.md) for:
- Architecture details
- Coding conventions
- Development workflows
- Feature roadmap
- Testing strategies

### Key Principles

1. **Language**: All code, comments, and documentation in English only
2. **i18n**: All user-facing text must use react-i18next (no hardcoded strings)
3. **UI**: Use Radix UI components for consistency
4. **Cross-platform**: Ensure compatibility with macOS, Linux, and Windows

## Internationalization

Switch languages using the language toggle in the UI. To add translations:

1. Edit `src/locales/en/translation.json` (English)
2. Edit `src/locales/fr/translation.json` (French)

Use translations in components:

```typescript
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();
  return <h1>{t('common.welcome')}</h1>;
}
```

## Contributing

1. Read [CLAUDE.md](./CLAUDE.md) for development guidelines
2. Create a feature branch
3. Make your changes following the conventions
4. Test on your platform
5. Submit a pull request

## License

MIT

## Support

For issues and questions, please open an issue on GitHub.
