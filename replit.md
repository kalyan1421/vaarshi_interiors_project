# Velanspaces Interior and constructions - Interior Design Portfolio Website

## Overview

This is a full-stack web application for Velanspaces Interior and constructions, a premium interior design company. The application serves as a business portfolio website showcasing their residential and modular interior design projects, with a focus on modern minimalist aesthetics. The site features a contact form for customer inquiries and displays the company's completed projects and services.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Bundler**: Vite for development and production builds
- **UI Framework**: Radix UI components with shadcn/ui component library
- **Styling**: Tailwind CSS with custom design tokens
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API**: RESTful endpoints for contact inquiries
- **Storage**: In-memory storage with interface for future database integration
- **Development**: Vite middleware integration for hot module reloading

## Key Components

### Data Layer
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Defined in `shared/schema.ts` with Zod validation
- **Storage Interface**: Abstract storage interface allowing multiple implementations
- **Current Implementation**: In-memory storage for development

### API Endpoints
- `POST /api/contact` - Submit contact inquiries
- `GET /api/contact` - Retrieve all contact inquiries (admin)

### UI Components
- **Design System**: shadcn/ui components with custom theming
- **Navigation**: Smooth scrolling navigation with mobile menu
- **Forms**: Contact form with validation and error handling
- **Portfolio**: Image gallery with lightbox functionality
- **Responsive Design**: Mobile-first approach with breakpoint optimization

## Data Flow

1. **User Interaction**: Users navigate the site and submit contact forms
2. **Form Submission**: React Hook Form validates data using Zod schemas
3. **API Request**: TanStack Query sends validated data to Express backend
4. **Data Processing**: Express validates and stores inquiry data
5. **Response Handling**: Frontend displays success/error messages via toast notifications
6. **State Management**: TanStack Query manages caching and synchronization

## External Dependencies

### UI and Styling
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **Embla Carousel**: Carousel component

### Form and Validation
- **React Hook Form**: Form state management
- **Zod**: Schema validation
- **@hookform/resolvers**: Form validation integration

### Database and Storage
- **Drizzle ORM**: Type-safe database toolkit
- **@neondatabase/serverless**: Neon database adapter
- **connect-pg-simple**: PostgreSQL session store

### Development Tools
- **Vite**: Build tooling and development server
- **TypeScript**: Type safety and developer experience
- **ESBuild**: Production bundling

## Deployment Strategy

### Development
- **Environment**: Replit development environment
- **Hot Reloading**: Vite middleware integrated with Express
- **Build Process**: Concurrent frontend and backend development

### Production Build
- **Frontend**: Vite builds static assets to `dist/public`
- **Backend**: ESBuild bundles server code to `dist/index.js`
- **Deployment**: Single deployment artifact with both frontend and backend

### Database Migration
- **Schema**: Drizzle migrations in `migrations/` directory
- **Commands**: `npm run db:push` for schema updates
- **Configuration**: Environment-based database URL configuration

## Changelog

```
Changelog:
- July 01, 2025. Initial setup
- July 01, 2025. Updated brand colors to exact specifications (#FEFEFE, #A39081, #2C2C2C)
- July 01, 2025. Enhanced "Velanspaces" branding with gradient text effects
- July 01, 2025. Added comprehensive animations across all sections (fade-in, slide-up, scale-up, bounce-in)
- July 01, 2025. Implemented staggered animation delays for sequential element appearance
- July 01, 2025. Added hover effects and interactive animations for enhanced user experience
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```