export type LessonBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | {
      type: "callout";
      title: string;
      text: string;
      tone: "yellow" | "red" | "green" | "blue";
    }
  | { type: "quote"; text: string; note?: string }
  | { type: "chips"; items: string[] };

export type LessonSection = {
  heading: string;
  blocks: LessonBlock[];
};

export type LessonActivity = {
  type: "Warm Up" | "Skill Development" | "Game" | "Game Play";
  icon: string;
  title: string;
  sections: LessonSection[];
};

export type LearningObjectiveGroup = {
  heading: string;
  objectives: string[];
};

export type PELesson = {
  number: number;
  title: string;

  learningObjectives: string[];
  learningObjectiveGroups?: LearningObjectiveGroup[];

  terminology: string[];

  choreographicDevices?: string[];
  equipment?: string[];

  activities: LessonActivity[];

  coachingReference?: {
    title: string;
    points: string[];
  };

  learningQuestions?: string[];

  videoSupport?: {
    available: boolean;
    label?: string;
  };
};

export type DanceLesson = PELesson;