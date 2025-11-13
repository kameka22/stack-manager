# CLAUDE.md - AI Assistant Guide for Stack Manager

**Last Updated**: 2025-11-13
**Repository**: stack-manager
**Status**: New Project

---

## Project Overview

**Stack Manager** is a tool for managing technology stacks, infrastructure, and deployment configurations. This document serves as a comprehensive guide for AI assistants working on this codebase.

### Purpose

This project aims to provide:
- Stack configuration management
- Infrastructure orchestration
- Dependency tracking and management
- Deployment automation
- Stack versioning and rollback capabilities

---

## Repository Structure

```
stack-manager/
├── .git/                    # Git version control
├── CLAUDE.md               # This file - AI assistant guide
├── README.md               # Project documentation (to be created)
├── package.json            # Node.js dependencies (to be created)
├── tsconfig.json           # TypeScript configuration (to be created)
├── src/                    # Source code directory
│   ├── cli/               # Command-line interface
│   ├── core/              # Core business logic
│   ├── config/            # Configuration management
│   ├── utils/             # Utility functions
│   ├── types/             # TypeScript type definitions
│   └── index.ts           # Main entry point
├── tests/                  # Test files
│   ├── unit/              # Unit tests
│   ├── integration/       # Integration tests
│   └── fixtures/          # Test fixtures and mocks
├── docs/                   # Additional documentation
├── examples/              # Example configurations
└── scripts/               # Build and utility scripts
```

---

## Development Workflow

### Branch Strategy

- **Main Branch**: `main` (production-ready code)
- **Feature Branches**: `claude/claude-md-*` for AI-assisted development
- **Current Branch**: `claude/claude-md-mhxxzo79u4602hla-01Ay4z6pba4j3M3rR7TmQfUB`

### Git Practices

1. **Commits**: Write clear, descriptive commit messages
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

---

## Technology Stack

### Expected Technologies

- **Runtime**: Node.js (v18+ recommended)
- **Language**: TypeScript
- **Testing**: Jest or Vitest
- **Linting**: ESLint
- **Formatting**: Prettier
- **Package Manager**: npm or pnpm

### Key Dependencies (To Be Added)

- **CLI Framework**: commander, yargs, or oclif
- **Configuration**: yaml, dotenv
- **Validation**: zod or joi
- **File System**: fs-extra
- **Logging**: winston or pino

---

## Coding Conventions

### TypeScript Guidelines

1. **Type Safety**
   - Always use explicit types for function parameters and return values
   - Avoid `any` - use `unknown` if type is truly unknown
   - Use strict mode in tsconfig.json

2. **Naming Conventions**
   - PascalCase: Classes, Interfaces, Types
   - camelCase: Functions, variables, methods
   - UPPER_SNAKE_CASE: Constants
   - Prefix interfaces with 'I' only when necessary for clarity

3. **File Organization**
   - One primary export per file
   - Group related functionality in directories
   - Use index.ts for public API exports

### Code Style

```typescript
// Good: Clear, typed, documented
interface StackConfig {
  name: string;
  version: string;
  services: Service[];
}

/**
 * Loads and validates stack configuration
 * @param path - Path to configuration file
 * @returns Validated stack configuration
 */
async function loadStackConfig(path: string): Promise<StackConfig> {
  // Implementation
}

// Bad: Unclear types, no documentation
function load(p: any) {
  // Implementation
}
```

### Error Handling

- Use custom error classes for domain-specific errors
- Always provide meaningful error messages
- Handle errors at appropriate levels
- Log errors with context

```typescript
class StackConfigError extends Error {
  constructor(message: string, public readonly path: string) {
    super(message);
    this.name = 'StackConfigError';
  }
}
```

---

## Testing Strategy

### Test Organization

1. **Unit Tests**: Test individual functions/classes in isolation
   - Location: `tests/unit/`
   - Naming: `*.test.ts` or `*.spec.ts`

2. **Integration Tests**: Test component interactions
   - Location: `tests/integration/`
   - May use fixtures and test databases

3. **Test Coverage**: Aim for 80%+ coverage
   - Critical paths: 100%
   - Utilities: 90%+
   - UI/CLI: 70%+

### Test Patterns

```typescript
describe('StackManager', () => {
  describe('loadConfig', () => {
    it('should load valid configuration', async () => {
      const config = await loadConfig('./fixtures/valid.yml');
      expect(config.name).toBe('test-stack');
    });

    it('should throw error for invalid configuration', async () => {
      await expect(loadConfig('./invalid.yml'))
        .rejects
        .toThrow(StackConfigError);
    });
  });
});
```

---

## Security Considerations

### Best Practices

1. **Input Validation**
   - Validate all external input (CLI args, config files)
   - Sanitize file paths to prevent directory traversal
   - Use schema validation for configuration

2. **Dependency Security**
   - Regular dependency audits: `npm audit`
   - Keep dependencies updated
   - Review security advisories

3. **Secrets Management**
   - Never commit secrets or credentials
   - Use environment variables or secure vaults
   - Add sensitive files to .gitignore

4. **Command Injection Prevention**
   - Sanitize inputs before shell execution
   - Use parameterized commands
   - Avoid direct shell interpolation

---

## Performance Guidelines

1. **Async Operations**
   - Use async/await for I/O operations
   - Parallelize independent operations with Promise.all()
   - Implement proper error handling for concurrent operations

2. **Resource Management**
   - Close file handles and streams
   - Implement cleanup in try/finally blocks
   - Monitor memory usage for large operations

3. **Caching**
   - Cache frequently accessed configurations
   - Implement cache invalidation strategies
   - Use memoization for expensive computations

---

## AI Assistant Guidelines

### When Working on This Project

1. **Read Before Writing**
   - Always read existing files before editing
   - Understand the current implementation
   - Check for similar patterns in the codebase

2. **Use Specialized Tools**
   - Read tool for file contents (not cat)
   - Edit tool for modifications (not sed)
   - Write tool only for new files
   - Grep for code search
   - Glob for file pattern matching

3. **Task Management**
   - Use TodoWrite for multi-step tasks
   - Mark todos as in_progress before starting
   - Complete todos immediately after finishing
   - One task in_progress at a time

4. **Testing**
   - Write tests for new functionality
   - Run tests before committing
   - Fix any failing tests immediately

5. **Documentation**
   - Update documentation for API changes
   - Add JSDoc comments for public functions
   - Keep CLAUDE.md current with major changes

### Common Workflows

#### Adding a New Feature

1. Create todo list for the feature
2. Read related code to understand context
3. Implement the feature with tests
4. Update documentation
5. Commit with clear message
6. Push to the current branch

#### Fixing a Bug

1. Reproduce the bug
2. Write a failing test
3. Fix the implementation
4. Verify test passes
5. Commit the fix

#### Refactoring

1. Ensure tests exist and pass
2. Make incremental changes
3. Run tests after each change
4. Keep commits focused and atomic

---

## Configuration Files

### package.json (Template)

```json
{
  "name": "stack-manager",
  "version": "0.1.0",
  "description": "Technology stack management tool",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "tsc",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "lint": "eslint src/**/*.ts",
    "format": "prettier --write \"src/**/*.ts\"",
    "dev": "ts-node src/index.ts"
  },
  "keywords": ["stack", "infrastructure", "deployment"],
  "license": "MIT",
  "engines": {
    "node": ">=18.0.0"
  }
}
```

### tsconfig.json (Template)

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "lib": ["ES2022"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "tests"]
}
```

---

## Common Patterns

### Configuration Loading

```typescript
import { readFile } from 'fs/promises';
import { parse } from 'yaml';
import { z } from 'zod';

const StackConfigSchema = z.object({
  name: z.string(),
  version: z.string(),
  services: z.array(z.object({
    name: z.string(),
    type: z.string(),
    config: z.record(z.unknown())
  }))
});

async function loadStackConfig(path: string): Promise<StackConfig> {
  const content = await readFile(path, 'utf-8');
  const raw = parse(content);
  return StackConfigSchema.parse(raw);
}
```

### CLI Command Pattern

```typescript
import { Command } from 'commander';

const program = new Command();

program
  .name('stack-manager')
  .description('Manage your technology stacks')
  .version('0.1.0');

program
  .command('deploy <stack>')
  .description('Deploy a stack')
  .option('-e, --env <environment>', 'Target environment')
  .action(async (stack, options) => {
    // Implementation
  });

program.parse();
```

### Error Handling Pattern

```typescript
class StackManagerError extends Error {
  constructor(
    message: string,
    public readonly code: string,
    public readonly context?: Record<string, unknown>
  ) {
    super(message);
    this.name = 'StackManagerError';
  }
}

function handleError(error: unknown): never {
  if (error instanceof StackManagerError) {
    logger.error(error.message, { code: error.code, context: error.context });
    process.exit(1);
  }

  logger.error('Unexpected error', { error });
  process.exit(1);
}
```

---

## Troubleshooting

### Common Issues

1. **TypeScript Compilation Errors**
   - Check tsconfig.json settings
   - Verify all dependencies are installed
   - Ensure @types packages are installed

2. **Test Failures**
   - Check for environment-specific issues
   - Verify test fixtures are up to date
   - Ensure proper cleanup in tests

3. **Git Push Failures**
   - Verify branch name starts with 'claude/'
   - Check network connectivity
   - Retry with exponential backoff

---

## Resources

### Documentation

- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Node.js Documentation](https://nodejs.org/docs/)
- [Jest Testing Framework](https://jestjs.io/)

### Project-Specific Docs

- README.md - Project overview and setup
- docs/ - Detailed documentation (to be created)
- examples/ - Usage examples (to be created)

---

## Change Log

### 2025-11-13 - Initial Creation

- Created CLAUDE.md with comprehensive project guidelines
- Established directory structure
- Defined coding conventions and workflows
- Set up AI assistant guidelines

---

## Notes for AI Assistants

- This is a new project with no existing code yet
- Follow the conventions outlined in this document when creating new code
- Update this file as the project evolves and new patterns emerge
- Always commit changes to the designated claude/* branch
- Prioritize type safety, testing, and clear documentation
- Ask clarifying questions when requirements are ambiguous

---

**Remember**: This guide is a living document. Update it as the codebase grows and new patterns emerge.
