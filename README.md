# Professional Finance Portfolio

A modern, responsive portfolio website built for finance and accounting professionals. Features a clean design, smooth interactions, and scalable architecture for future expansion.

## Features

- **Professional Design**: Clean, modern aesthetic with slate/charcoal color scheme
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Database-Driven**: Content managed through Supabase
- **Contact Form**: Integrated form submissions stored securely
- **Smooth Animations**: Professional transitions and micro-interactions
- **Easy to Update**: Simple content management through database

## Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Hosting**: Vercel (recommended)
- **Icons**: Lucide React

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Navigation.tsx  # Sticky navigation with smooth scroll
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About/Who Am I section
│   ├── Education.tsx   # Education timeline
│   ├── Experience.tsx  # Experience cards (organized by type)
│   ├── Projects.tsx    # Portfolio projects
│   ├── Publications.tsx # Research papers, articles
│   ├── References.tsx  # Professional references
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer with links
├── lib/
│   └── supabase.ts     # Supabase client configuration
├── types/
│   └── index.ts        # TypeScript type definitions
├── App.tsx             # Main app component
├── index.css           # Global styles
└── main.tsx            # Entry point
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Supabase account (free tier available)

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file (copy from `.env.example`):
```bash
cp .env.example .env
```

4. Add your Supabase credentials to `.env`:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

5. Start development server:
```bash
npm run dev
```

6. Open http://localhost:5173 in your browser

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` directory.

## Database Schema

The project uses Supabase with the following tables:

- **education**: Educational qualifications
- **experience**: Work experience (internships, leadership, volunteering)
- **projects**: Portfolio projects
- **publications**: Research papers, articles, blogs
- **professional_references**: Professional references
- **contact_submissions**: Contact form submissions

All tables have Row Level Security (RLS) enabled for data protection.

## Managing Content

### Add a Project

```sql
INSERT INTO projects (title, description, tools_used, project_url, display_order)
VALUES (
  'Project Name',
  'Project description',
  ARRAY['Tool1', 'Tool2'],
  'https://project-link.com',
  1
);
```

### Add a Publication

```sql
INSERT INTO publications (title, type, year, publication_url, display_order)
VALUES (
  'Publication Title',
  'research',
  '2024',
  'https://publication-link.com',
  1
);
```

### Add a Reference

```sql
INSERT INTO professional_references (name, designation, organization, letter_url, display_order)
VALUES (
  'Name',
  'Position',
  'Organization',
  'https://link-to-letter.pdf',
  1
);
```

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "Add New" → "Project"
4. Import your GitHub repository
5. Add environment variables:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
6. Click "Deploy"

Your site will be live instantly!

### Netlify

1. Go to [Netlify](https://netlify.com)
2. Click "New site from Git"
3. Choose your GitHub repository
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Add environment variables and deploy

### GitHub Pages

1. Update `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/portfolio/',
})
```

2. Add deploy script to `package.json`:
```json
"deploy": "npm run build && gh-pages -d dist"
```

3. Install gh-pages: `npm install --save-dev gh-pages`
4. Run: `npm run deploy`

## Customization

### Change Colors
Colors are defined in Tailwind classes. Main accent color is `slate-800`. Search and replace to change the color scheme.

### Update Contact Info
Edit in `src/components/Contact.tsx` and `src/components/Footer.tsx`

### Update Profile Photo
Replace the placeholder in `src/components/About.tsx`

### Update LinkedIn URL
Update in `src/components/Footer.tsx`

## Environment Variables

Required variables:
- `VITE_SUPABASE_URL`: Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY`: Your Supabase anonymous key

See `.env.example` for template.

## Security

- `.env` file is excluded from git (see `.gitignore`)
- Supabase RLS policies protect all data
- Contact form submissions are secure and private
- No sensitive data is exposed to the frontend

## Performance

- Optimized Vite build
- Tailwind CSS purged for production
- Lazy loading of components
- Responsive images and assets

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

MIT License - feel free to use this template for your own portfolio

## Contributing

Feel free to fork and customize for your own use!

## Support

For issues or questions, please refer to:
- [Supabase Documentation](https://supabase.com/docs)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)

---

Built with React, TypeScript, Tailwind CSS, and Supabase
