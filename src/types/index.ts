export interface Education {
  id: string;
  course: string;
  institution: string;
  passing_year: string;
  grade: string;
  key_focus?: string;
  display_order: number;
}

export interface Experience {
  id: string;
  type: 'internship' | 'leadership' | 'volunteering';
  title: string;
  organization: string;
  start_date: string;
  end_date: string;
  description: string[];
  certificate_url?: string;
  display_order: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tools_used: string[];
  project_url?: string;
  display_order: number;
}

export interface Publication {
  id: string;
  title: string;
  type: string;
  year: string;
  publication_url: string;
  display_order: number;
}

export interface Reference {
  id: string;
  name: string;
  designation: string;
  organization: string;
  letter_url: string;
  display_order: number;
}

export interface ContactSubmission {
  name: string;
  email: string;
  subject: string;
  message: string;
}
