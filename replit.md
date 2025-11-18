# Developer Portfolio Website

## Overview

This is a modern, responsive developer portfolio website built with React, TypeScript, and Tailwind CSS. The application showcases a full-stack developer's work, skills, and experience through an elegant, minimalist design with dark mode support. The portfolio features multiple sections including hero, about, skills, projects, experience, and contact, all built with smooth animations and professional UI components powered by shadcn/ui and Radix UI primitives.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18.2.0 with TypeScript for type-safe component development
- Vite 5.0.0 as the build tool and development server for fast HMR and optimized production builds
- Wouter for lightweight client-side routing

**UI Component System**
- shadcn/ui component library (New York style) with Radix UI primitives providing accessible, customizable components
- Tailwind CSS 3.3+ for utility-first styling with custom design tokens
- Component architecture follows atomic design with ui components in `client/src/components/ui/`
- Custom components in `client/src/components/` for section-based layouts (Hero, About, Skills, Projects, Experience, Contact, Header, Footer)

**Styling & Design System**
- CSS custom properties for theme variables supporting light/dark modes
- Design tokens defined in `client/src/index.css` with HSL color values
- Tailwind configuration in `tailwind.config.ts` with extended color palette, border radius, and spacing
- Responsive design with mobile-first approach using Tailwind breakpoints (sm: 640px, md: 768px, lg: 1024px, xl: 1280px, 2xl: 1536px)

**State Management & Data Fetching**
- React Context API for theme state management (ThemeContext)
- TanStack Query (React Query) v5 for server state management and API calls
- React Hook Form with Zod validation for form handling (contact form)
- Local storage for theme persistence

**Animations & Interactions**
- Framer Motion for scroll-based animations, page transitions, and micro-interactions
- Intersection Observer API (via Framer Motion's useInView) for triggering animations on scroll
- Smooth scrolling navigation between sections

### Backend Architecture

**Server Framework**
- Express.js server with TypeScript
- Development mode uses Vite middleware for HMR
- Production mode serves static assets from `dist/public`

**Email Service**
- Nodemailer integration for contact form submissions
- Environment-based configuration (MAIL_HOST, MAIL_PORT, MAIL_USERNAME, MAIL_PASSWORD)
- Fallback to console logging when email is not configured
- Form validation using Zod schemas from shared directory

**API Design**
- RESTful API endpoint: POST `/api/contact` for contact form submissions
- Request/response logging middleware for API routes
- JSON body parsing with raw body preservation for webhook support
- CORS and security handled via middleware chain

### Data Storage

**Schema Definition**
- Drizzle ORM configured for PostgreSQL (via Neon serverless driver)
- Schema definitions in `shared/schema.ts` using Zod for validation
- Type-safe data models exported for use across client and server

**Current Data Models**
- ContactFormData: Contact form validation schema
- Project: Portfolio project interface with metadata
- Experience: Work experience interface with timeline data
- Skill: Technology skill interface with categorization

**Storage Strategy**
- In-memory storage implementation (MemStorage) for user data with CRUD interface
- Database migration support via Drizzle Kit (`npm run db:push`)
- PostgreSQL connection configured via DATABASE_URL environment variable

### Project Structure

**Monorepo Layout**
- `/client` - React frontend application
  - `/src/components` - React components
  - `/src/pages` - Page components (Home, NotFound)
  - `/src/contexts` - React context providers
  - `/src/hooks` - Custom React hooks
  - `/src/lib` - Utility functions and query client
- `/server` - Express backend
  - `index.ts` - Server entry point with middleware setup
  - `routes.ts` - API route handlers
  - `storage.ts` - Data storage interface and implementation
  - `vite.ts` - Vite integration for development
- `/shared` - Shared types and schemas between client and server
- `/attached_assets` - Static assets and design documentation

**Configuration Files**
- `tsconfig.json` - TypeScript configuration with path aliases (@/, @shared/, @assets/)
- `vite.config.ts` - Vite build configuration with React plugin
- `tailwind.config.ts` - Tailwind CSS theming and customization
- `drizzle.config.ts` - Database ORM configuration
- `components.json` - shadcn/ui component configuration

## External Dependencies

### Third-Party UI Libraries
- **Radix UI** - Headless UI component primitives (accordion, dialog, dropdown, select, tabs, toast, etc.)
- **shadcn/ui** - Pre-built component library built on Radix UI
- **Framer Motion** - Animation library for React
- **React Icons** - Icon library (currently using Lucide icons via lucide-react)
- **class-variance-authority** - Utility for creating variant-based component APIs
- **cmdk** - Command menu component

### Form & Validation
- **React Hook Form** - Form state management
- **@hookform/resolvers** - Validation resolver integration
- **Zod** - Schema validation library
- **drizzle-zod** - Zod schema generation from Drizzle ORM schemas

### Backend Services
- **Nodemailer** - Email sending service for contact form
- **@neondatabase/serverless** - Neon PostgreSQL serverless driver
- **Drizzle ORM** - TypeScript ORM for SQL databases
- **connect-pg-simple** - PostgreSQL session store

### Development Tools
- **Replit Plugins** - Development environment enhancements (vite-plugin-runtime-error-modal, vite-plugin-cartographer, vite-plugin-dev-banner)
- **PostCSS & Autoprefixer** - CSS processing
- **esbuild** - Fast JavaScript bundler for production server build

### Email Configuration
Email functionality requires environment variables:
- `MAIL_HOST` - SMTP server hostname
- `MAIL_PORT` - SMTP server port
- `MAIL_USERNAME` - SMTP authentication username
- `MAIL_PASSWORD` - SMTP authentication password
- `MAIL_FROM_ADDRESS` - Sender email address
- `MAIL_FROM_NAME` - Sender display name

When not configured, the contact form logs submissions to console instead of sending emails.

### Database Configuration
PostgreSQL database connection via:
- `DATABASE_URL` - PostgreSQL connection string (required for Drizzle migrations)