# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is "Jootang Vuetify Vue.js Admin Template" - a Vue 3 + Vuetify 3 admin dashboard template built with TypeScript, using Vite as the build tool and PNPM as the package manager.

## Development Commands

### Setup
```bash
pnpm install
```

### Development
```bash
pnpm dev          # Start dev server on port 3000
pnpm preview      # Preview production build on port 5050
```

### Build and Test
```bash
pnpm build        # Build for production
pnpm typecheck    # Run TypeScript type checking
pnpm lint         # Run ESLint with auto-fix
```

### Build Tasks
```bash
pnpm build:icons  # Build iconify icons
pnpm msw:init     # Initialize Mock Service Worker
```

## Architecture Overview

### Directory Structure
- `src/@core/` - Core template functionality (components, utils, styles)
- `src/@layouts/` - Layout system (vertical nav, horizontal nav, components)
- `src/components/` - Application-specific components
- `src/views/pages/` - Page components (index, about, news, services, etc.)
- `src/plugins/` - Vue plugins (router, pinia, vuetify, i18n, iconify)
- `src/assets/` - Static assets (images, styles)

### Key Architectural Patterns

#### Plugin System
The app uses a Nuxt-like plugin registration system. All files in `src/plugins/*.ts` or `src/plugins/*/index.ts` are auto-registered during app initialization. Plugins are loaded in alphabetical order (note the `1.router/` and `2.pinia.ts` naming for order control).

#### Layout System
- Configurable layout system with horizontal/vertical navigation
- Theme configuration in `themeConfig.ts`
- Layout components in `@layouts/` directory
- Supports multiple navigation types: sticky, static, hidden

#### Auto-imports
- Vue APIs, VueUse, and Vue Router are auto-imported
- Components from `src/@core/components`, `src/views/demos`, and `src/components` are auto-imported
- Utilities from `@core/utils`, `@core/composable`, and `src/composables` are auto-imported

### Path Aliases
```typescript
@/*              → ./src/*
@core/*          → ./src/@core/*
@layouts/*       → ./src/@layouts/*
@images/*        → ./src/assets/images/*
@styles/*        → ./src/assets/styles/*
@themeConfig     → ./themeConfig.ts
```

## Technology Stack

### Frontend Framework
- **Vue 3** with Composition API
- **Vuetify 3** for UI components
- **TypeScript** for type safety
- **Vite** for build tooling
- **PNPM** for package management

### Key Libraries
- **Pinia** for state management
- **Vue Router** with auto-route generation
- **Vue I18n** for internationalization (supports zh-cn, en, zh-hk)
- **@iconify** for icons (Remix Icons only, per ESLint rules)
- **Chart.js** and **ApexCharts** for data visualization
- **TipTap** for rich text editing
- **Mock Service Worker (MSW)** for API mocking

### Development Tools
- **ESLint** with @antfu/eslint-config-vue and extensive custom rules
- **Stylelint** for SCSS linting
- **Vue DevTools** integration

## Code Guidelines

### ESLint Rules
- Use only **Remix Icons** (`ri-*`), other icon libraries are forbidden
- No semicolons (enforced by ESLint)
- 2-space indentation
- camelCase naming convention
- Path aliases must be used: `@images` instead of `@/assets/images`
- `@core` imports are forbidden in `@layouts` modules
- `useLayouts` composable only allowed in `@core` & `@layouts` directories

### Architecture Constraints
- Core template code (`@core/`) should be layout-agnostic
- Layouts (`@layouts/`) cannot depend on core template code
- Components are auto-imported, no manual imports needed for common components
- Use path aliases consistently

### Styling
- SCSS with Vuetify's theming system
- Global styles in `@core/scss/template/index.scss`
- Component-specific styles should use scoped CSS
- Vuetify component defaults configured in `src/plugins/vuetify/defaults.ts`

## Internationalization
- Default locale: `zh-cn` (Chinese Simplified)
- Supported locales: `zh-cn`, `en`, `zh-hk`
- Locale files in `src/plugins/i18n/locales/`
- I18n is enabled by default in theme config

## Running Single Tests
This project doesn't appear to have a test suite configured. Consider adding testing with Vitest for unit tests and Cypress or Playwright for e2e tests.

## Docker Support
- Development: `docker-compose -f docker-compose.dev.yml up`
- Production: `docker-compose -f docker-compose.prod.yml up`
- Nginx configuration in `nginx.conf` and `nginx/nginx.conf`
