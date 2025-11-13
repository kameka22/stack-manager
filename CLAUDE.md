# CLAUDE.md - AI Assistant Guide for Stack Manager

**Last Updated**: 2025-11-13
**Repository**: stack-manager
**Status**: New Project
**Application Type**: Local Desktop Application

---

## Project Overview

**Stack Manager** is a local desktop application for managing technology stacks, infrastructure, and deployment configurations. This document serves as a comprehensive guide for AI assistants working on this codebase.

### Architecture

**Cross-Platform Desktop Application** built with:
- **Backend**: Rust (business logic, file system operations, system integration)
- **Frontend**: Tauri + React + Radix UI (modern, clean UI)
- **Runtime**: Local only - no remote servers required
- **Platforms**: macOS, Linux, Windows
- **Internationalization**: Full i18n support with translations

### Purpose

This project aims to provide:
- Stack configuration management
- Infrastructure orchestration
- Dependency tracking and management
- Deployment automation
- Stack versioning and rollback capabilities
- Modern, clean desktop interface

---

## Core Principles

### 1. Language Requirements

**CRITICAL: English Only**

- **ALL** code must be written in English
  - Variable names: English
  - Function names: English
  - Comments: English
  - Documentation: English
  - Error messages: English
  - UI text: English
  - Logs: English

```rust
// ✅ CORRECT
fn load_stack_config(path: &str) -> Result<StackConfig, Error> {
    // Load configuration from path
}

// ❌ INCORRECT
fn charger_config_stack(chemin: &str) -> Result<StackConfig, Error> {
    // Charger la configuration
}
```

```typescript
// ✅ CORRECT
const loadConfiguration = async () => {
  // Implementation
};

// ❌ INCORRECT
const chargerConfiguration = async () => {
  // Implémentation
};
```

### 2. Local-First Architecture

- No remote API calls required for core functionality
- All data stored locally on user's machine
- Fast, responsive, works offline
- Direct file system access via Tauri

### 3. Modern & Clean UI

- Use Radix UI components for consistency
- Follow modern design principles
- Responsive and accessible
- Clean, minimalist interface

---

## Repository Structure

```
stack-manager/
├── .git/                       # Git version control
├── CLAUDE.md                   # This file - AI assistant guide
├── README.md                   # Project documentation
├── Cargo.toml                  # Rust dependencies and workspace config
├── package.json                # Node.js/Frontend dependencies
├── tauri.conf.json             # Tauri configuration
│
├── src-tauri/                  # Rust Backend
│   ├── Cargo.toml             # Backend dependencies
│   ├── build.rs               # Build script
│   ├── tauri.conf.json        # Tauri app config
│   ├── icons/                 # Application icons
│   └── src/
│       ├── main.rs            # Application entry point
│       ├── lib.rs             # Library exports
│       ├── commands/          # Tauri commands (IPC)
│       │   ├── mod.rs
│       │   ├── stack.rs       # Stack management commands
│       │   └── config.rs      # Configuration commands
│       ├── core/              # Core business logic
│       │   ├── mod.rs
│       │   ├── stack.rs       # Stack domain logic
│       │   ├── config.rs      # Configuration management
│       │   └── validator.rs   # Validation logic
│       ├── models/            # Data models
│       │   ├── mod.rs
│       │   └── stack.rs
│       ├── utils/             # Utility functions
│       │   ├── mod.rs
│       │   ├── file.rs        # File operations
│       │   └── error.rs       # Error handling
│       └── tests/             # Rust tests
│           ├── mod.rs
│           └── integration.rs
│
├── src/                        # React Frontend
│   ├── main.tsx               # React entry point
│   ├── App.tsx                # Root component
│   ├── vite-env.d.ts          # Vite types
│   ├── styles/                # Global styles
│   │   └── globals.css
│   ├── locales/               # i18n translations
│   │   ├── en/               # English translations
│   │   │   └── translation.json
│   │   ├── fr/               # French translations
│   │   │   └── translation.json
│   │   ├── es/               # Spanish translations
│   │   │   └── translation.json
│   │   └── index.ts          # i18n configuration
│   ├── components/            # React components
│   │   ├── ui/               # Radix UI components
│   │   │   ├── button.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── select.tsx
│   │   │   └── ...
│   │   ├── layout/           # Layout components
│   │   │   ├── AppLayout.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   └── Header.tsx
│   │   └── features/         # Feature-specific components
│   │       ├── stacks/
│   │       └── config/
│   ├── hooks/                 # Custom React hooks
│   │   ├── useStack.ts
│   │   └── useTauri.ts
│   ├── services/              # Frontend services
│   │   └── tauri.ts          # Tauri IPC calls
│   ├── types/                 # TypeScript types
│   │   └── stack.ts
│   └── utils/                 # Frontend utilities
│       └── format.ts
│
├── tests/                      # Integration tests
│   └── integration/
│
├── docs/                       # Documentation
│   ├── architecture.md
│   └── api.md
│
└── scripts/                    # Build and utility scripts
    └── setup.sh
```

---

## Technology Stack

### Backend (Rust)

**Core Technologies**:
- **Rust**: Latest stable version (1.75+)
- **Tauri**: Desktop application framework
- **serde**: Serialization/deserialization
- **tokio**: Async runtime (if needed)
- **anyhow/thiserror**: Error handling

**Key Dependencies**:
```toml
[dependencies]
tauri = "1.5"
serde = { version = "1.0", features = ["derive"] }
serde_json = "1.0"
anyhow = "1.0"
thiserror = "1.0"
tokio = { version = "1.35", features = ["full"] }
```

### Frontend (React + Tauri)

**Core Technologies**:
- **React**: 18+ with TypeScript
- **Vite**: Build tool and dev server
- **TypeScript**: Strict mode enabled
- **Radix UI**: Component library for modern UI
- **Tailwind CSS**: Utility-first styling

**Key Dependencies**:
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "@tauri-apps/api": "^1.5.0",
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-dropdown-menu": "^2.0.6",
    "@radix-ui/react-select": "^2.0.0",
    "@radix-ui/react-tabs": "^1.0.4",
    "react-i18next": "^13.5.0",
    "i18next": "^23.7.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.0",
    "typescript": "^5.3.0",
    "vite": "^5.0.0",
    "tailwindcss": "^3.4.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0"
  }
}
```

### Testing

- **Rust**: Built-in test framework + `cargo test`
- **React**: Vitest + React Testing Library
- **E2E**: Tauri's built-in testing tools

### Internationalization (i18n)

**Core i18n Stack**:
- **react-i18next**: React integration for i18next
- **i18next**: Translation framework

**Translation Structure**:
```
src/locales/
├── en/
│   └── translation.json
├── fr/
│   └── translation.json
├── es/
│   └── translation.json
└── index.ts
```

**Usage Example**:
```typescript
import { useTranslation } from 'react-i18next';

export function MyComponent() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('welcome.title')}</h1>
      <p>{t('welcome.description')}</p>
    </div>
  );
}
```

**Translation File Example** (`src/locales/en/translation.json`):
```json
{
  "welcome": {
    "title": "Welcome to Stack Manager",
    "description": "Manage your technology stacks with ease"
  },
  "actions": {
    "create": "Create",
    "edit": "Edit",
    "delete": "Delete",
    "save": "Save",
    "cancel": "Cancel"
  }
}
```

**Important i18n Rules**:
- ALL user-facing text must go through i18n
- NO hardcoded strings in components
- Translation keys must be in English
- Support minimum: English, French, Spanish
- Add new languages easily via locale files

---

## Development Workflow

### Branch Strategy

- **Main Branch**: `main` (production-ready code)
- **Feature Branches**: `claude/claude-md-*` for AI-assisted development
- **Current Branch**: `claude/claude-md-mhxxzo79u4602hla-01Ay4z6pba4j3M3rR7TmQfUB`

### Git Practices

1. **Commits**: Write clear, descriptive commit messages in **English**
   - Format: `<type>: <description>`
   - Types: feat, fix, docs, refactor, test, chore
   - Example: `feat: add stack configuration parser`

2. **Pushing Changes**:
   ```bash
   git push -u origin <branch-name>
   ```
   - Branch must start with 'claude/' and end with matching session ID
   - Retry on network errors: up to 4 times with exponential backoff (2s, 4s, 8s, 16s)

3. **Pulling Changes**:
   ```bash
   git fetch origin <branch-name>
   git pull origin <branch-name>
   ```

### Development Commands

```bash
# Install dependencies
npm install
cargo build

# Development mode (hot reload)
npm run tauri dev

# Build for production
npm run tauri build

# Run tests
cargo test                    # Rust tests
npm run test                  # Frontend tests
npm run test:e2e             # End-to-end tests

# Linting
cargo clippy                  # Rust linting
npm run lint                  # Frontend linting

# Formatting
cargo fmt                     # Rust formatting
npm run format                # Frontend formatting
```

---

## Coding Conventions

### Rust Guidelines

1. **Naming Conventions**
   - **snake_case**: Functions, variables, modules
   - **PascalCase**: Types, structs, enums, traits
   - **SCREAMING_SNAKE_CASE**: Constants
   - **English names only**

2. **Code Style**
   ```rust
   // ✅ GOOD: Clear, typed, documented, English
   /// Loads and validates stack configuration
   ///
   /// # Arguments
   /// * `path` - Path to configuration file
   ///
   /// # Returns
   /// Validated stack configuration
   pub fn load_stack_config(path: &str) -> Result<StackConfig, StackError> {
       // Implementation
   }

   // ❌ BAD: No docs, unclear, not English
   pub fn charger(p: &str) -> Result<Config, Error> {
       // Implementation
   }
   ```

3. **Error Handling**
   ```rust
   use thiserror::Error;

   #[derive(Error, Debug)]
   pub enum StackError {
       #[error("Configuration file not found: {0}")]
       ConfigNotFound(String),

       #[error("Invalid configuration: {0}")]
       InvalidConfig(String),

       #[error("IO error: {0}")]
       Io(#[from] std::io::Error),
   }
   ```

4. **Tauri Commands**
   ```rust
   use tauri::command;

   #[command]
   pub async fn load_stack(path: String) -> Result<StackConfig, String> {
       match stack::load(&path) {
           Ok(config) => Ok(config),
           Err(e) => Err(e.to_string()),
       }
   }
   ```

### TypeScript/React Guidelines

1. **Naming Conventions**
   - **PascalCase**: Components, interfaces, types
   - **camelCase**: Functions, variables, hooks
   - **UPPER_SNAKE_CASE**: Constants
   - **English names only**

2. **Component Structure**
   ```typescript
   // ✅ GOOD: Typed, documented, English
   interface StackCardProps {
     stack: Stack;
     onSelect: (id: string) => void;
   }

   /**
    * Displays a stack configuration card
    */
   export function StackCard({ stack, onSelect }: StackCardProps) {
     return (
       <div onClick={() => onSelect(stack.id)}>
         <h3>{stack.name}</h3>
         <p>{stack.description}</p>
       </div>
     );
   }

   // ❌ BAD: No types, French names
   export function CarteStack({ pile, surSelection }) {
     return <div onClick={() => surSelection(pile.id)}>{pile.nom}</div>;
   }
   ```

3. **Radix UI Integration**
   ```typescript
   import * as Dialog from '@radix-ui/react-dialog';
   import { Button } from '@/components/ui/button';

   export function CreateStackDialog() {
     return (
       <Dialog.Root>
         <Dialog.Trigger asChild>
           <Button>Create Stack</Button>
         </Dialog.Trigger>
         <Dialog.Portal>
           <Dialog.Overlay className="dialog-overlay" />
           <Dialog.Content className="dialog-content">
             <Dialog.Title>Create New Stack</Dialog.Title>
             <Dialog.Description>
               Configure your new technology stack
             </Dialog.Description>
             {/* Form content */}
           </Dialog.Content>
         </Dialog.Portal>
       </Dialog.Root>
     );
   }
   ```

4. **Tauri IPC Communication**
   ```typescript
   import { invoke } from '@tauri-apps/api/tauri';

   export async function loadStack(path: string): Promise<Stack> {
     try {
       const stack = await invoke<Stack>('load_stack', { path });
       return stack;
     } catch (error) {
       console.error('Failed to load stack:', error);
       throw new Error(`Failed to load stack: ${error}`);
     }
   }
   ```

### File Organization

**Rust**:
- One module per file
- Public API in `lib.rs`
- Group related functionality in modules
- Tests in same file or `tests/` directory

**TypeScript/React**:
- One component per file
- Export from index files for clean imports
- Co-locate tests with components
- Separate hooks, utilities, and types

---

## Testing Strategy

### Rust Tests

```rust
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_load_valid_config() {
        let config = load_stack_config("./fixtures/valid.yml");
        assert!(config.is_ok());
    }

    #[test]
    fn test_load_invalid_config() {
        let config = load_stack_config("./fixtures/invalid.yml");
        assert!(config.is_err());
    }

    #[tokio::test]
    async fn test_async_operation() {
        let result = async_operation().await;
        assert!(result.is_ok());
    }
}
```

### React Tests

```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { StackCard } from './StackCard';

describe('StackCard', () => {
  it('should render stack information', () => {
    const stack = {
      id: '1',
      name: 'Test Stack',
      description: 'Test description'
    };

    render(<StackCard stack={stack} onSelect={() => {}} />);

    expect(screen.getByText('Test Stack')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
  });
});
```

### Test Coverage Goals

- **Rust**: 80%+ coverage
  - Core logic: 100%
  - Commands: 90%+
  - Utils: 80%+

- **React**: 70%+ coverage
  - Critical components: 90%+
  - UI components: 70%+
  - Utilities: 80%+

---

## Security Considerations

### Tauri Security

1. **Capability System**
   - Only enable required Tauri features
   - Restrict file system access
   - Validate all IPC commands

2. **Content Security Policy**
   ```json
   {
     "tauri": {
       "security": {
         "csp": "default-src 'self'; style-src 'self' 'unsafe-inline'"
       }
     }
   }
   ```

3. **Input Validation**
   ```rust
   #[command]
   pub fn save_config(path: String, config: StackConfig) -> Result<(), String> {
       // Validate path to prevent directory traversal
       if path.contains("..") {
           return Err("Invalid path".to_string());
       }

       // Validate config
       validate_config(&config)?;

       // Save
       save_to_file(&path, &config)
   }
   ```

### Best Practices

- **Never** store sensitive data in plain text
- **Always** validate user input
- **Use** Rust's type system for safety
- **Sanitize** file paths and commands
- **Keep** dependencies updated

---

## Performance Guidelines

### Rust Performance

1. **Avoid Unnecessary Clones**
   ```rust
   // ✅ GOOD: Use references
   fn process_stack(stack: &Stack) -> Result<()> {
       // Process without cloning
   }

   // ❌ BAD: Unnecessary clone
   fn process_stack(stack: Stack) -> Result<()> {
       // Forces clone at call site
   }
   ```

2. **Use Async for I/O**
   ```rust
   #[tokio::main]
   async fn main() {
       let config = load_config_async().await;
   }
   ```

### React Performance

1. **Memoization**
   ```typescript
   import { useMemo, useCallback } from 'react';

   export function StackList({ stacks }: StackListProps) {
     const sortedStacks = useMemo(
       () => stacks.sort((a, b) => a.name.localeCompare(b.name)),
       [stacks]
     );

     const handleSelect = useCallback((id: string) => {
       // Handle selection
     }, []);

     return <div>{/* Render */}</div>;
   }
   ```

2. **Lazy Loading**
   ```typescript
   import { lazy, Suspense } from 'react';

   const StackEditor = lazy(() => import('./StackEditor'));

   export function App() {
     return (
       <Suspense fallback={<div>Loading...</div>}>
         <StackEditor />
       </Suspense>
     );
   }
   ```

---

## UI/UX Guidelines

### Design Principles

1. **Clean & Minimal**: Avoid clutter, focus on essentials
2. **Consistent**: Use Radix UI components consistently
3. **Responsive**: Adapt to window resizing
4. **Accessible**: Follow WCAG guidelines
5. **Fast**: Optimize for performance

### Radix UI Components

Use Radix UI primitives for:
- **Dialogs/Modals**: `@radix-ui/react-dialog`
- **Dropdowns**: `@radix-ui/react-dropdown-menu`
- **Selects**: `@radix-ui/react-select`
- **Tabs**: `@radix-ui/react-tabs`
- **Tooltips**: `@radix-ui/react-tooltip`

### Color Scheme

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96.1%;
  --accent: 210 40% 96.1%;
  --destructive: 0 84.2% 60.2%;
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... */
}
```

---

## AI Assistant Guidelines

### Critical Rules

1. **Language**: ALL code, comments, and messages in **English only**
2. **Architecture**: Respect the Rust backend + React frontend separation
3. **UI Library**: Always use Radix UI for new components
4. **Local-First**: No remote API calls unless explicitly required
5. **Internationalization**: ALL user-facing text must use i18n (react-i18next)
6. **Cross-Platform**: Test and ensure compatibility with macOS, Linux, and Windows
7. **Feature Documentation**: When user defines new features, add them to Feature Roadmap section

### When Working on This Project

1. **Read Before Writing**
   - Always read existing files before editing
   - Understand the Tauri IPC patterns
   - Check Radix UI documentation for components

2. **Use Specialized Tools**
   - Read tool for file contents
   - Edit tool for modifications
   - Write tool only for new files
   - Grep for code search

3. **Task Management**
   - Use TodoWrite for multi-step tasks
   - Mark todos as in_progress before starting
   - Complete todos immediately after finishing

4. **Testing**
   - Write tests for Rust commands
   - Test React components
   - Run tests before committing

### Common Workflows

#### Adding a New Tauri Command

1. Create Rust command in `src-tauri/src/commands/`
2. Add command to `main.rs`
3. Create TypeScript wrapper in `src/services/tauri.ts`
4. Add types in `src/types/`
5. Test the command
6. Update documentation

#### Creating a New UI Component

1. Create component in `src/components/`
2. Use Radix UI primitives
3. Add TypeScript types
4. Style with Tailwind CSS
5. Write component tests
6. Document props and usage

#### Implementing a Feature

1. Design the API (Rust commands)
2. Implement Rust backend logic
3. Create frontend UI components
4. Wire up IPC communication
5. Add error handling
6. Write tests
7. Update documentation

#### Documenting a New Feature

When the user defines a new feature:

1. Add entry to Feature Roadmap section
2. Use the provided template
3. Include all requirements and technical details
4. Update TODO list with specific tasks
5. Mark feature status (Planned/In Progress/Completed)
6. Update changelog when feature is implemented

**Example**:
```markdown
#### 2. Import/Export Functionality
**Status**: Planned
**Description**: Allow users to import and export stack configurations
**Requirements**:
- Support JSON and YAML formats
- Validate imported files
- Export with user-defined templates

**Technical Details**:
- Rust: serde for serialization
- Frontend: File picker dialog
- Tauri commands: import_stack, export_stack

**UI/UX Considerations**:
- Drag-and-drop support
- Format selection dialog
- Progress indicator for large files

**Testing Requirements**:
- Test various file formats
- Test error handling for corrupted files
- Cross-platform file path compatibility
```

---

## Configuration Files

### Cargo.toml (Rust Workspace)

```toml
[workspace]
members = ["src-tauri"]

[workspace.package]
version = "0.1.0"
edition = "2021"
license = "MIT"

[workspace.dependencies]
tauri = "1.5"
serde = { version = "1.0", features = ["derive"] }
serde_json = "1.0"
```

### package.json (Frontend)

```json
{
  "name": "stack-manager",
  "version": "0.1.0",
  "description": "Local desktop application for managing technology stacks",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "tauri": "tauri",
    "tauri:dev": "tauri dev",
    "tauri:build": "tauri build",
    "test": "vitest",
    "test:ui": "vitest --ui",
    "lint": "eslint . --ext ts,tsx",
    "format": "prettier --write \"src/**/*.{ts,tsx}\""
  },
  "keywords": ["stack", "infrastructure", "desktop", "tauri"],
  "license": "MIT"
}
```

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### tauri.conf.json

```json
{
  "build": {
    "beforeDevCommand": "npm run dev",
    "beforeBuildCommand": "npm run build",
    "devPath": "http://localhost:1420",
    "distDir": "../dist"
  },
  "package": {
    "productName": "Stack Manager",
    "version": "0.1.0"
  },
  "tauri": {
    "allowlist": {
      "all": false,
      "fs": {
        "all": false,
        "readFile": true,
        "writeFile": true,
        "readDir": true,
        "scope": ["$APPDATA/*"]
      },
      "dialog": {
        "all": false,
        "open": true,
        "save": true
      }
    },
    "windows": [
      {
        "title": "Stack Manager",
        "width": 1200,
        "height": 800,
        "minWidth": 800,
        "minHeight": 600,
        "resizable": true,
        "fullscreen": false
      }
    ]
  }
}
```

---

## Troubleshooting

### Common Issues

1. **Rust Compilation Errors**
   - Run `cargo clean` and rebuild
   - Check Rust version: `rustc --version`
   - Update dependencies: `cargo update`

2. **Tauri Build Failures**
   - Ensure Rust and Node.js are installed
   - Check tauri.conf.json syntax
   - Verify all dependencies are installed

3. **Frontend Build Issues**
   - Clear node_modules: `rm -rf node_modules && npm install`
   - Check TypeScript errors: `npm run type-check`
   - Verify Vite config

4. **IPC Communication Problems**
   - Check command names match
   - Verify types are correct
   - Check Tauri allowlist permissions

---

## Resources

### Documentation

- [Tauri Documentation](https://tauri.app/)
- [Rust Book](https://doc.rust-lang.org/book/)
- [React Documentation](https://react.dev/)
- [Radix UI](https://www.radix-ui.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Project-Specific Docs

- README.md - Project overview and setup
- docs/architecture.md - Architecture details
- docs/api.md - API documentation

---

## Project TODO List

### Phase 1: Foundation & Setup ✅ In Progress

#### Infrastructure
- [x] Create CLAUDE.md documentation
- [ ] Initialize Tauri project structure
- [ ] Set up Rust workspace (Cargo.toml)
- [ ] Configure frontend build (Vite + React)
- [ ] Set up TypeScript configuration
- [ ] Configure Tailwind CSS
- [ ] Set up ESLint and Prettier
- [ ] Configure Rust clippy and rustfmt
- [ ] Create .gitignore
- [ ] Set up CI/CD pipeline (GitHub Actions)

#### Internationalization
- [ ] Install i18next and react-i18next
- [ ] Create translation structure (src/locales)
- [ ] Set up English translations
- [ ] Set up French translations
- [ ] Set up Spanish translations
- [ ] Create i18n configuration
- [ ] Add language switcher component
- [ ] Test i18n across all platforms

#### UI Foundation
- [ ] Install Radix UI components
- [ ] Create base UI component library
  - [ ] Button component
  - [ ] Dialog component
  - [ ] Select component
  - [ ] Tabs component
  - [ ] Tooltip component
  - [ ] Dropdown Menu component
- [ ] Set up color scheme (light/dark mode)
- [ ] Create app layout structure
  - [ ] Main layout component
  - [ ] Sidebar component
  - [ ] Header component
  - [ ] Footer component
- [ ] Implement dark mode toggle

### Phase 2: Core Features 🔄 Pending

#### Stack Management
- [ ] Define Stack data model (Rust)
- [ ] Create Stack CRUD operations (Rust)
  - [ ] Create stack
  - [ ] Read stack
  - [ ] Update stack
  - [ ] Delete stack
- [ ] Implement stack validation
- [ ] Create Tauri commands for stack operations
- [ ] Build Stack list view (React)
- [ ] Build Stack detail view (React)
- [ ] Build Stack creation form (React)
- [ ] Build Stack edit form (React)
- [ ] Add stack search/filter functionality
- [ ] Add stack sorting options

#### Configuration Management
- [ ] Define configuration schema
- [ ] Implement configuration parser (YAML/JSON)
- [ ] Create configuration validation
- [ ] Build configuration editor UI
- [ ] Add configuration import/export
- [ ] Implement configuration templates

#### File System Integration
- [ ] Implement file operations (Rust)
- [ ] Add file picker dialog (Tauri)
- [ ] Create file watcher for live updates
- [ ] Implement auto-save functionality
- [ ] Add backup/restore functionality

### Phase 3: Advanced Features 🔄 Pending

#### Deployment Automation
- [ ] Design deployment workflow
- [ ] Implement deployment commands
- [ ] Add deployment status tracking
- [ ] Create deployment history view
- [ ] Add rollback functionality
- [ ] Implement deployment notifications

#### Stack Versioning
- [ ] Design versioning system
- [ ] Implement version control (Rust)
- [ ] Create version comparison UI
- [ ] Add version history view
- [ ] Implement version rollback

#### Infrastructure Orchestration
- [ ] Define infrastructure models
- [ ] Implement orchestration logic
- [ ] Create orchestration UI
- [ ] Add dependency graph visualization

### Phase 4: Testing & Quality 🔄 Pending

#### Unit Tests
- [ ] Write Rust unit tests
  - [ ] Test stack models
  - [ ] Test configuration parser
  - [ ] Test validation logic
  - [ ] Test file operations
- [ ] Write React unit tests
  - [ ] Test UI components
  - [ ] Test hooks
  - [ ] Test utilities

#### Integration Tests
- [ ] Test Tauri IPC communication
- [ ] Test end-to-end workflows
- [ ] Test file system operations
- [ ] Test i18n integration

#### Cross-Platform Testing
- [ ] Test on macOS
- [ ] Test on Linux
- [ ] Test on Windows
- [ ] Fix platform-specific issues

### Phase 5: Documentation & Polish 🔄 Pending

#### Documentation
- [ ] Write README.md
- [ ] Create architecture documentation
- [ ] Write API documentation
- [ ] Create user guide
- [ ] Add code comments
- [ ] Create contribution guide

#### Polish & UX
- [ ] Add loading states
- [ ] Improve error messages
- [ ] Add keyboard shortcuts
- [ ] Implement drag-and-drop
- [ ] Add animations/transitions
- [ ] Optimize performance
- [ ] Add accessibility features (ARIA labels, keyboard navigation)

#### Build & Release
- [ ] Configure production builds
- [ ] Create installers for all platforms
  - [ ] macOS (.dmg)
  - [ ] Linux (.AppImage, .deb)
  - [ ] Windows (.msi, .exe)
- [ ] Set up auto-update mechanism
- [ ] Create release workflow
- [ ] Test installation on all platforms

---

## Feature Roadmap

This section documents all features as they are defined. Each feature should be detailed here before implementation.

### Core Features (Defined)

#### 1. Stack Management
**Status**: Planned
**Description**: Core functionality for creating, editing, and managing technology stacks
**Requirements**:
- Create/Read/Update/Delete stacks
- Stack validation
- Search and filter stacks
- Sort stacks by various criteria

**Technical Details**: TBD

---

### Future Features (To Be Defined)

*New features will be added here as they are defined by the user*

**Template for Adding New Features**:
```markdown
#### [Feature Number]. [Feature Name]
**Status**: [Planned/In Progress/Completed]
**Description**: [Brief description]
**Requirements**:
- [Requirement 1]
- [Requirement 2]

**Technical Details**:
- [Technical detail 1]
- [Technical detail 2]

**UI/UX Considerations**:
- [Consideration 1]

**Testing Requirements**:
- [Test requirement 1]
```

---

## Change Log

### 2025-11-13 - Added Cross-Platform Support, i18n, and TODO List

- Added cross-platform support (macOS, Linux, Windows)
- Integrated internationalization (i18n) with react-i18next
- Created comprehensive project TODO list with 5 phases
- Added Feature Roadmap section for tracking feature development
- Updated dependencies to include i18n libraries
- Added i18n guidelines and examples
- Created template for documenting new features

### 2025-11-13 - Updated to Tauri + Rust + React Architecture

- Switched to Rust backend with Tauri framework
- Added React + Radix UI frontend
- Emphasized English-only requirement
- Defined local-first desktop architecture
- Updated all code examples and conventions

### 2025-11-13 - Initial Creation

- Created CLAUDE.md with project guidelines

---

## Notes for AI Assistants

- **CRITICAL**: Use English ONLY - no other languages in code
- **CRITICAL**: ALL user-facing text must use i18n (no hardcoded strings)
- This is a cross-platform local desktop application (Tauri)
  - Must work on macOS, Linux, and Windows
- Respect the Rust/React architecture separation
- Always use Radix UI for new components
- Test both Rust and React code on all platforms
- **Update Feature Roadmap** when user defines new features
- **Update TODO List** with specific tasks for new features
- Update this file as patterns emerge
- Commit to designated claude/* branch
- Ask for clarification when requirements are unclear

---

**Remember**: This guide is a living document. Update it as the codebase grows and new patterns emerge.
