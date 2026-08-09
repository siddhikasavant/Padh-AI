export interface Subject {
  code: string;
  name: string;
  slug: string;
  semester: number;

  syllabusPdf: string;

  notes: {
    id: number;
    file: string;
  }[];

  pyqs: {
    year: string;
    season: "Summer" | "Winter";
    file: string;
  }[];
}

export interface Semester {
  semester: number;
  title: string;
  subjects: Subject[];
}