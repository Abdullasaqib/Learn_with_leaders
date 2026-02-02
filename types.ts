export type ProgramStatus = 'applied' | 'interview_scheduled' | 'payment_pending' | 'enrolled' | 'completed' | 'no_show';

export interface Profile {
  id: string;
  email: string | null;
  full_name: string | null;
  avatar_url: string | null;
  role: 'student' | 'admin';
}

export interface Program {
  id: string;
  title: string;
  university: string;
  description: string | null;
  tags: string[];
  badges: string[];
  date_text: string | null;
  seats_text: string | null;
  rating: number | null;
  students_count_text: string | null;
  price_text: string | null;
  image_url: string | null;
}

export interface Application {
  id: string;
  user_id: string;
  program_id: string;
  status: ProgramStatus;
  applied_at: string;
  program?: Program; // For join queries
}

export interface Achievement {
  id: string;
  user_id: string;
  title: string;
  category: 'Academic' | 'Leadership' | 'Project' | 'Competition' | 'Service' | 'Certificate';
  organization: string | null;
  date_earned: string | null;
  description: string | null;
  status: 'Verified' | 'Pending Verification';
  image_url: string | null;
}
