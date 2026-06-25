export type WebQuestPage = 'title' | 'intro' | 'task' | 'process' | 'evaluation' | 'conclusion';

export interface StudentDetails {
  studentName: string;
  teacherName: string;
  subject: string;
  date: string;
}

export interface ActivityState {
  activity1Evidence: string | null; // Base64 or mock file path
  activity2Answers: string[];
  activity3DiagramUrl: string | null;
  activity4Reflection: string;
}

export interface RubricScore {
  participation: 'Excellent' | 'Good' | 'Needs Improvement' | null;
  evidence: 'Excellent' | 'Good' | 'Needs Improvement' | null;
  understanding: 'Excellent' | 'Good' | 'Needs Improvement' | null;
  reflection: 'Excellent' | 'Good' | 'Needs Improvement' | null;
}
