# Muhammad Maaz - Developer Portfolio

A modern, responsive portfolio website showcasing full-stack development skills, projects, and experience.

## Overview

This is a professional single-page portfolio website built with React, TypeScript, and Express.js. It features a polished UI with dark/light theme toggle, smooth scroll animations, and a functional contact form with backend email integration.

## Recent Changes

**November 18, 2025** - Initial portfolio website build completed
- Implemented all frontend sections: Hero, About, Skills, Projects, Experience, Contact, Footer
- Built dark/light theme toggle with localStorage persistence (SSR-safe)
- Created contact form with react-hook-form + Zod validation
- Integrated backend email service using Nodemailer with Gmail SMTP
- Added comprehensive animations using Framer Motion
- Verified all features with end-to-end testing

## Project Architecture

### Frontend
- **Framework**: React 18 with TypeScript, Vite build tool
- **Styling**: Tailwind CSS with custom blue gradient design tokens
- **Animations**: Framer Motion for scroll-triggered and hover animations
- **Forms**: react-hook-form with zodResolver for validation
- **Theme**: Dark/light mode via ThemeContext with localStorage persistence
- **Icons**: Lucide React + React Icons (Simple Icons)
- **Routing**: Wouter for client-side routing

### Backend
- **Server**: Express.js
- **Email**: Nodemailer with Gmail SMTP (verified on startup)
- **Validation**: Zod schemas for request validation
- **Storage**: In-memory (no database required)

### Key Features
1. **Theme Toggle**: Dark/light mode with SSR-safe localStorage persistence
2. **Smooth Animations**: Framer Motion scroll-triggered and hover effects
3. **Contact Form**: Client-side validation with backend email delivery
4. **Responsive Design**: Mobile-first with adaptive navigation
5. **SEO Optimized**: Meta tags, Open Graph tags, semantic HTML

### API Endpoints
- `POST /api/contact` - Contact form submission with email delivery
  - Request body: `{ name: string, email: string, message: string }`
  - Validates with Zod schema (min 2 chars for name, min 10 chars for message)
  - Sends email via Nodemailer to configured address
  - Gracefully handles missing email configuration with console logging

## User Preferences

### Personal Information
- **Name**: Muhammad Maaz
- **Title**: Full-Stack Developer & Mobile App Developer
- **Email**: muhamamdmaaz65@gmail.com
- **GitHub**: @coding-with-maaz

### Featured Projects
1. **ASIAN2DAY** - Advanced streaming platform featuring live content delivery, user authentication, and real-time interactions (Production)
2. **Medzfitt E-commerce** - Complete Laravel-based e-commerce platform for medical wear and scrubs with product management, shopping cart, and admin dashboard (Production)
3. **TAGIQ - AI Keyword Generator** - Intelligent keyword and hashtag generator tool that scrapes trending keywords from Google, YouTube, TikTok, Bing, and Amazon (Active)
4. **Flutter Ads Pro** - Comprehensive Flutter ads integration package with easy-to-reuse setup for all major ad networks, supporting multiple platforms (Active)

### Technical Skills
- **Frontend & Mobile**: Flutter, Dart, React, JavaScript, TypeScript, HTML/CSS
- **Backend & APIs**: Laravel, PHP, Node.js, Express, Python, RESTful APIs
- **Databases & Tools**: MySQL, PostgreSQL, Git, Firebase, Postman

### Design Preferences
- Color scheme: Blue gradient accents (#2563eb primary)
- Typography: Clean, modern sans-serif
- Layout: Generous whitespace, card-based sections
- Interactions: Subtle hover elevations, smooth transitions
- Dark mode: Professional with proper contrast

## Environment Variables

Required for production email functionality:
- `MAIL_HOST` - SMTP server hostname
- `MAIL_PORT` - SMTP server port
- `MAIL_USERNAME` - SMTP authentication username
- `MAIL_PASSWORD` - SMTP authentication password
- `MAIL_FROM_ADDRESS` - Sender email address
- `MAIL_FROM_NAME` - Sender display name
- `SESSION_SECRET` - Session encryption secret

Note: If email variables are not configured, the contact form will log submissions to console instead of sending emails.

## Running the Project

The project runs on a single command:
```bash
npm run dev
```

This starts both the Express backend (serving API routes) and Vite frontend (serving React app) on port 5000.

The workflow "Start application" is pre-configured to run this command automatically.

## File Structure

```
├── client/
│   ├── src/
│   │   ├── components/      # All UI components
│   │   │   ├── Header.tsx   # Navigation + theme toggle
│   │   │   ├── Hero.tsx     # Landing section
│   │   │   ├── About.tsx    # About section
│   │   │   ├── Skills.tsx   # Skills showcase
│   │   │   ├── Projects.tsx # Project portfolio
│   │   │   ├── Experience.tsx # Work history
│   │   │   ├── Contact.tsx  # Contact form
│   │   │   └── Footer.tsx   # Footer section
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx # Theme state management
│   │   ├── pages/
│   │   │   └── Home.tsx     # Main page
│   │   ├── App.tsx          # Root component
│   │   └── index.css        # Global styles + theme tokens
├── server/
│   ├── routes.ts            # API endpoints (contact form)
│   └── index.ts             # Express server setup
├── shared/
│   └── schema.ts            # Zod schemas for validation
├── design_guidelines.md     # Design system documentation
└── tailwind.config.ts       # Tailwind configuration
```

## Testing

All features have been verified with end-to-end testing:
- ✅ Theme toggle (dark/light mode with localStorage)
- ✅ Smooth scroll navigation to all sections
- ✅ Contact form validation (client-side with react-hook-form)
- ✅ Contact form submission (with backend email)
- ✅ Responsive design (desktop and mobile)
- ✅ All animations and transitions
- ✅ Social media links and external navigation

## Next Steps for Production

1. **Email Configuration**: Ensure all MAIL_* environment variables are set
2. **Domain Setup**: Configure custom domain if desired
3. **Analytics**: Add Google Analytics or similar tracking
4. **Performance**: Optimize images and implement lazy loading
5. **Content**: Update projects and experience as needed
6. **Publishing**: Use Replit's publish feature to deploy

## Notes

- The contact form uses react-hook-form with zodResolver for robust client-side validation
- ThemeProvider safely handles localStorage with SSR-safe deferred loading
- Email transport is verified on server startup to catch configuration issues early
- All interactive elements have data-testid attributes for testing reliability
- Design follows design_guidelines.md for consistent visual quality
