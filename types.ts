
export enum ProgramStatus {
  ENROLLED = 'Enrolled',
  PAYMENT_PENDING = 'Payment Pending',
  INTERVIEW_SCHEDULED = 'Interview Scheduled',
  NO_SHOW = 'No Show',
  COMPLETED = 'Completed'
}

export interface Program {
  id: string;
  title: string;
  university: string;
  duration: string;
  startDate: string;
  status: ProgramStatus;
  logo: string;
  progress: number;
  applicationId: string;
}

export interface Achievement {
  id: string;
  title: string;
  category: 'Academic' | 'Leadership' | 'Project' | 'Competition' | 'Service' | 'Certificate';
  organization: string;
  date: string;
  description: string;
  status: 'Verified' | 'Pending Verification';
}
