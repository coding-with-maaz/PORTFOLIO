# Design Guidelines for Developer Portfolio Website

## Design Approach
**Reference-Based Approach**: Modern developer portfolio inspired by minimalist, professional developer sites with focus on clarity, technical credibility, and smooth user experience. Clean, readable layouts with strategic use of animations.

## Visual Design System

### Color Palette
- **Primary**: Blue gradient (primary-600 to primary-800) for CTAs, highlights, and accents
- **Light Mode**: White and light gray backgrounds, dark gray/black text
- **Dark Mode**: Dark gray/black backgrounds, light gray/white text
- **Status Colors**: Success green, error red for form feedback

### Typography
- Clean, modern sans-serif font family throughout
- Clear hierarchy with distinct section titles, subtitles, and body text
- Responsive font scaling across breakpoints
- High readability with proper line spacing

### Layout System
**Spacing**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm (p-4, mb-8, space-y-12, etc.)

## Component Design

### Cards
- Rounded corners (rounded-xl, rounded-2xl)
- Subtle shadows with enhanced hover states
- Border treatment for dark mode visibility
- Gradient overlays on hover for interactive cards
- Clean padding hierarchy

### Buttons
- **Primary**: Gradient backgrounds with smooth hover scale/shadow effects
- **Secondary**: Outlined style with fill transition on hover
- Consistent padding and rounded corners
- Clear active/disabled states

### Forms
- Clean input fields with focus ring indicators
- Proper dark mode contrast
- Styled placeholders
- Clear validation states and error messages
- Loading states with spinners

## Section Layouts

### Hero Section
- Full-width introduction with generous vertical spacing
- Animated name/title with staggered entry
- Social media links prominently displayed
- Quick stats cards in grid layout (3 columns on desktop, stack on mobile)
- Primary and secondary CTAs
- Subtle scroll indicator at bottom

### About Section
- Two-column layout on desktop (personal info + feature cards)
- Feature cards in 3-column grid showing development strengths
- Statistics banner spanning full width
- Balanced text and visual hierarchy

### Skills Section
- Tech stack organized in clear category groups
- Icon + label cards in responsive grid (4-5 columns desktop, 2-3 mobile)
- Hover effects revealing technology names
- Visual grouping by category headers

### Projects Section
- Showcase cards in 2-column grid (desktop) / 1-column (mobile)
- Each card includes: title, description, status badges, tech stack tags, category icons
- Gradient borders/overlays on hover
- GitHub and demo link buttons
- Call-to-action banner at section bottom

### Experience Section
- Vertical timeline with connecting line
- Professional cards offset from timeline
- Job title, company, location, period clearly displayed
- Technology tags and category icons with color coding
- Alternating card positioning for visual interest

### Contact Section
- Two-column layout (form + contact info cards)
- Form with name, email, message fields
- Clear success/error feedback states
- Contact method cards (Email, GitHub, LinkedIn) with icons

### Footer
- Three-column layout (developer info, quick links, social media)
- Subtle background differentiation from main content
- Copyright and branding information

## Navigation
- Fixed header with subtle background on scroll
- Smooth scroll behavior to sections
- Mobile hamburger menu with slide-in animation
- Theme toggle button (sun/moon icon) with rotation animation
- Logo/name on left, nav links centered/right

## Animations & Interactions
- **Scroll Animations**: Fade-in with slight Y-axis translation using Framer Motion
- **Stagger**: Children elements animate in sequence with 0.1s delays
- **Hover Effects**: Subtle scale (1.02-1.05), shadow enhancement, gradient reveals
- **Theme Toggle**: Smooth color transitions (300ms), icon rotation/fade
- **Page Load**: Staggered section reveals creating polished first impression
- **Button Hovers**: Scale, shadow, and background transitions
- Maintain 60fps smoothness throughout

## Responsive Behavior
- **Mobile (< 640px)**: Stack all columns, larger touch targets, simplified navigation
- **Tablet (640-1024px)**: 2-column grids, adjusted spacing
- **Desktop (1024px+)**: Full multi-column layouts, enhanced spacing
- Maximum content width: 1280px (centered)

## Images
**Hero Image**: Optional decorative background or profile image with gradient overlay. If used, ensure text readability with blur effects on overlapping buttons and appropriate contrast.

## Accessibility
- Semantic HTML structure throughout
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus visible states on all interactive elements
- Sufficient color contrast ratios (WCAG AA minimum)
- Screen reader friendly descriptions

## Dark Mode Specifics
- System preference detection on first load
- Toggle persists via localStorage
- All components implement dark: variants
- Smooth 300ms color transitions
- Enhanced borders/shadows for depth in dark mode
- Adjusted opacity values for visual hierarchy