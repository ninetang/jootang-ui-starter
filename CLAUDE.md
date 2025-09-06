# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Vue 3 + Vuetify admin template built with TypeScript and Vite. It's configured as "Jootang Vuetify VueJS Admin Template" and appears to be customized for "Belling EEL" - a certification and testing services company website.

## Development Commands

```bash
# Install dependencies (use legacy peer deps)
npm install --legacy-peer-deps

# Start development server (runs on port 3000)
npm run dev

# Build for production
npm run build

# Preview production build (runs on port 5050)
npm run preview

# Type checking
npm run typecheck

# Lint and fix issues
npm run lint

# Build icons
npm run build:icons
```

## Architecture Overview

### Core Structure
- **@core**: Core framework components, composables, and utilities
  - Components: Reusable UI components like cards, form elements
  - Composables: Shared Vue composables for common functionality
  - SCSS: Base styling framework and theme variables
  - Utils: Helper functions, formatters, validators
  
- **@layouts**: Layout system with vertical/horizontal navigation
  - Components: Navigation components (VerticalNav, HorizontalNav)
  - Stores: Layout configuration state management
  - Types & enums for layout configuration

### Key Features
- **Multi-language support**: Chinese (Simplified/Traditional) and English via vue-i18n
- **Theme system**: Light/dark themes with Vuetify integration
- **Navigation**: Both vertical and horizontal nav layouts
- **Auto-imports**: Components and composables are auto-imported
- **Icon system**: Custom icon build process using Iconify
- **Mock API**: MSW (Mock Service Worker) integration

### Project Structure
- `src/pages/`: File-based routing (unplugin-vue-router)
- `src/components/`: Global components and dialogs
- `src/layouts/`: Layout templates (default.vue, blank.vue)
- `src/navigation/`: Navigation menu configuration
- `src/plugins/`: Plugin configurations (Vuetify, i18n, router, etc.)
- `src/assets/`: Static assets, styles, and images
- `src/views/`: Page-specific components
- `themeConfig.ts`: Main theme and layout configuration

### Configuration Files
- **themeConfig.ts**: Main theme configuration including branding, navigation type, i18n settings
- **vite.config.ts**: Build configuration with auto-imports, component resolution, and aliases
- Auto-import directories: `@core/utils`, `@core/composable`, `composables`, `utils`

### Styling
- SCSS-based with Vuetify theme integration
- Variables defined in `src/assets/styles/variables/_vuetify.scss`
- Custom font stack configured in `styles.scss`
- Theme switching capability built-in

### Special Considerations
- Uses file-based routing with kebab-case route names
- Custom ESLint rules in `eslint-internal-rules/`
- Docker support with dev/prod configurations
- Express backend server in `src/backend/` for file uploads
- Certificate and testing service domain-specific components

## Testing
No specific test framework is configured. Tests should be added as needed based on project requirements.

## Docker Support
- `dev.Dockerfile` and `prod.Dockerfile` available
- `docker-compose.dev.yml` and `docker-compose.prod.yml` for orchestration
- Nginx configuration in `nginx/` directory