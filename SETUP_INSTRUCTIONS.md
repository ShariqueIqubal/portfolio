# Portfolio Website Setup Instructions

## Supabase Configuration

### 1. Get Your Supabase Credentials

1. Go to [Supabase](https://supabase.com) and sign in to your account
2. Navigate to your project's settings
3. Copy your **Project URL** and **Anon/Public Key**
4. Update the `.env` file with your credentials:

```env
VITE_SUPABASE_URL=your_project_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

### 2. Database is Ready

The database schema has been automatically created with the following tables:
- `education` - Educational qualifications
- `experience` - Internships, leadership roles, and volunteering
- `projects` - Portfolio projects
- `publications` - Research papers, articles, blogs
- `professional_references` - Professional references
- `contact_submissions` - Contact form submissions

### 3. Initial Data Populated

Your education and experience data from the PDF has been pre-populated in the database.

## Managing Content

### Adding Projects

To add projects, insert data into the `projects` table:

```sql
INSERT INTO projects (title, description, tools_used, project_url, display_order)
VALUES (
  'Project Name',
  'Project description',
  ARRAY['Tool1', 'Tool2', 'Tool3'],
  'https://link-to-project.com',
  1
);
```

### Adding Publications

To add publications:

```sql
INSERT INTO publications (title, type, year, publication_url, display_order)
VALUES (
  'Publication Title',
  'research',
  '2024',
  'https://link-to-publication.com',
  1
);
```

### Adding References

To add professional references:

```sql
INSERT INTO professional_references (name, designation, organization, letter_url, display_order)
VALUES (
  'Reference Name',
  'Their Position',
  'Their Organization',
  'https://link-to-reference-letter.pdf',
  1
);
```

### Adding Certificate URLs to Experiences

To add certificate/offer letter links to existing experiences:

```sql
UPDATE experience
SET certificate_url = 'https://link-to-certificate.pdf'
WHERE title = 'Experience Title';
```

## Running the Website

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Website Features

### Sections Included:
- **Home/Hero** - Professional headline with call-to-action buttons
- **About** - Professional introduction with key highlights
- **Education** - Timeline of educational qualifications
- **Experience** - Organized into Internships, Leadership, and Volunteering
- **Projects** - Interactive project cards with links
- **Publications** - List of publications with links
- **References** - Professional references with letter links
- **Contact** - Form that saves submissions to Supabase

### Design Features:
- Clean, professional design with slate/charcoal color scheme
- Smooth scrolling navigation
- Responsive layout (desktop, tablet, mobile)
- Hover effects and transitions
- Interactive cards
- Form validation and success messaging

## Customization

### Colors
The website uses a slate color palette. To change colors, update the Tailwind classes in the components. Main colors used:
- `slate-50` to `slate-900` for backgrounds and text
- `slate-800` for primary accent color

### Content
All content is managed through the Supabase database. You can:
- Add/edit/delete records through the Supabase dashboard
- Update the order of items using the `display_order` field
- Add links to certificates, projects, and publications

### Contact Information
Update contact details in:
- `src/components/Contact.tsx` - Contact section
- `src/components/Footer.tsx` - Footer section

## Need Help?

If you need to make any changes to the structure, styling, or functionality, please let me know!

## Next Steps

After setting up your Supabase credentials:
1. Add your projects
2. Add your publications
3. Add professional references
4. Add certificate/offer letter links to your experiences
5. Update LinkedIn URL in Footer component (currently placeholder)
6. Replace the placeholder profile photo in the About section with your actual photo
