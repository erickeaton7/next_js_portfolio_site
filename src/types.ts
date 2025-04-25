export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl?: string; // Optional image URL
  projectUrl?: string; // Link to live project
  repoUrl?: string;    // Link to code repository
  tags: string[];      // Relevant technologies/skills
}

// Add type for Experience section
export interface ExperienceItem {
  id: number;
  company: string;
  location: string;
  title: string;
  dates: string;
  descriptionPoints: string[];
  technologies?: string[]; // Optional list of techs used
} 