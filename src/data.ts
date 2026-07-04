export const email = 'bijalvp@gmail.com';

export type Project = {
  slug: string;
  title: string;
  category: string;
  status: string;
  role: string;
  link: string;
  summary: string;
  context: string;
  angle: string;
  points: string[];
};

export const projects: Project[] = [];
export const skills: [string, string[]][] = [];
