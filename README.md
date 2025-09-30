# Sudiksha Hospital Website

A professional, production-ready website for Sudiksha Hospital featuring Dr. Priyanka Sharma as the chief ophthalmologist. Built with modern web technologies and optimized for performance, SEO, and user conversion.

## 🏥 About

Sudiksha Hospital is a leading healthcare provider in Patna, Bihar, specializing in comprehensive eye care and neuropsychiatry services. Our website showcases our expert medical team, advanced treatments, and provides a seamless appointment booking experience.

## ✨ Features

- **Mobile-First Design**: Responsive layout optimized for all devices
- **SEO Optimized**: Complete meta tags, Open Graph, Twitter cards, and JSON-LD structured data
- **Appointment Booking**: Full-featured booking system with form validation and email notifications
- **WhatsApp Integration**: Instant communication with prefilled messages
- **Google Analytics**: Comprehensive event tracking for user interactions
- **Performance Optimized**: Fast loading with optimized images and code splitting
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

## 🛠 Tech Stack

### Frontend
- **Next.js 14+** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Radix UI** for accessible components
- **React Hook Form + Zod** for form validation
- **Wouter** for client-side routing
- **TanStack Query** for data fetching

### Backend
- **Express.js** API routes
- **SendGrid** for email notifications
- **In-memory storage** with option to upgrade to database

### Analytics & SEO
- **Google Analytics 4** integration
- **JSON-LD** structured data
- **Sitemap** and robots.txt generation

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Required for email notifications
SENDGRID_API_KEY=your_sendgrid_api_key_here
EMAIL_TO=hospitalsudiksha@gmail.com
EMAIL_FROM=noreply@sudikshahospital.com

# Required for analytics (client-side)
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Optional WhatsApp number
WHATSAPP_NUMBER=919117217024
