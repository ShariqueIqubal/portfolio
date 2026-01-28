/*
  # Portfolio Website Database Schema

  ## Overview
  Creates the complete database structure for a professional portfolio website including education, experience, projects, publications, references, and contact form submissions.

  ## New Tables Created

  ### 1. `education`
  Stores educational qualifications and academic history
  - `id` (uuid, primary key) - Unique identifier
  - `course` (text) - Course/degree name
  - `institution` (text) - Name of educational institution
  - `passing_year` (text) - Year of completion or "Pursuing"
  - `grade` (text) - CGPA/Percentage achieved
  - `key_focus` (text, nullable) - Key focus areas or achievements
  - `display_order` (integer) - Order for display (lower numbers first)
  - `created_at` (timestamptz) - Record creation timestamp

  ### 2. `experience`
  Stores all types of professional experience (internships, leadership, volunteering)
  - `id` (uuid, primary key) - Unique identifier
  - `type` (text) - Category: 'internship', 'leadership', or 'volunteering'
  - `title` (text) - Role/position title
  - `organization` (text) - Organization name
  - `start_date` (text) - Start month and year
  - `end_date` (text) - End month and year or "Present"
  - `description` (text array) - Array of responsibility/achievement bullet points
  - `certificate_url` (text, nullable) - Link to certificate/offer letter
  - `display_order` (integer) - Order for display within type
  - `created_at` (timestamptz) - Record creation timestamp

  ### 3. `projects`
  Stores portfolio projects and work samples
  - `id` (uuid, primary key) - Unique identifier
  - `title` (text) - Project name
  - `description` (text) - Short project description
  - `tools_used` (text array) - Array of tools/technologies used
  - `project_url` (text, nullable) - Link to project (PDF, website, GitHub, etc.)
  - `display_order` (integer) - Order for display
  - `created_at` (timestamptz) - Record creation timestamp

  ### 4. `publications`
  Stores research papers, articles, and blog posts
  - `id` (uuid, primary key) - Unique identifier
  - `title` (text) - Publication title
  - `type` (text) - Type: 'research', 'article', 'blog', etc.
  - `year` (text) - Publication year
  - `publication_url` (text) - Link to the publication
  - `display_order` (integer) - Order for display
  - `created_at` (timestamptz) - Record creation timestamp

  ### 5. `professional_references`
  Stores professional references
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text) - Reference name
  - `designation` (text) - Their job title/position
  - `organization` (text) - Their organization
  - `letter_url` (text) - Link to reference letter
  - `display_order` (integer) - Order for display
  - `created_at` (timestamptz) - Record creation timestamp

  ### 6. `contact_submissions`
  Stores contact form submissions
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text) - Sender's name
  - `email` (text) - Sender's email
  - `subject` (text) - Message subject
  - `message` (text) - Message content
  - `created_at` (timestamptz) - Submission timestamp

  ## Security
  - RLS enabled on all tables
  - Public read access for portfolio content tables
  - Authenticated-only write access for portfolio content
  - Contact submissions: anyone can insert, only authenticated can read
*/

-- Create education table
CREATE TABLE IF NOT EXISTS education (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  course text NOT NULL,
  institution text NOT NULL,
  passing_year text NOT NULL,
  grade text NOT NULL,
  key_focus text,
  display_order integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create experience table
CREATE TABLE IF NOT EXISTS experience (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  type text NOT NULL CHECK (type IN ('internship', 'leadership', 'volunteering')),
  title text NOT NULL,
  organization text NOT NULL,
  start_date text NOT NULL,
  end_date text NOT NULL,
  description text[] NOT NULL DEFAULT '{}',
  certificate_url text,
  display_order integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  tools_used text[] NOT NULL DEFAULT '{}',
  project_url text,
  display_order integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create publications table
CREATE TABLE IF NOT EXISTS publications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  type text NOT NULL,
  year text NOT NULL,
  publication_url text NOT NULL,
  display_order integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create professional_references table
CREATE TABLE IF NOT EXISTS professional_references (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  designation text NOT NULL,
  organization text NOT NULL,
  letter_url text NOT NULL,
  display_order integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE education ENABLE ROW LEVEL SECURITY;
ALTER TABLE experience ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE publications ENABLE ROW LEVEL SECURITY;
ALTER TABLE professional_references ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- RLS Policies for education (public read)
CREATE POLICY "Anyone can view education"
  ON education FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert education"
  ON education FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update education"
  ON education FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete education"
  ON education FOR DELETE
  TO authenticated
  USING (true);

-- RLS Policies for experience (public read)
CREATE POLICY "Anyone can view experience"
  ON experience FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert experience"
  ON experience FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update experience"
  ON experience FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete experience"
  ON experience FOR DELETE
  TO authenticated
  USING (true);

-- RLS Policies for projects (public read)
CREATE POLICY "Anyone can view projects"
  ON projects FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert projects"
  ON projects FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update projects"
  ON projects FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete projects"
  ON projects FOR DELETE
  TO authenticated
  USING (true);

-- RLS Policies for publications (public read)
CREATE POLICY "Anyone can view publications"
  ON publications FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert publications"
  ON publications FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update publications"
  ON publications FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete publications"
  ON publications FOR DELETE
  TO authenticated
  USING (true);

-- RLS Policies for professional_references (public read)
CREATE POLICY "Anyone can view references"
  ON professional_references FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert references"
  ON professional_references FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update references"
  ON professional_references FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete references"
  ON professional_references FOR DELETE
  TO authenticated
  USING (true);

-- RLS Policies for contact_submissions (public insert, authenticated read)
CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view submissions"
  ON contact_submissions FOR SELECT
  TO authenticated
  USING (true);