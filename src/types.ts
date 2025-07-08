export type StudentResource = [string, string, string]; //[id, name, email]
export type TeacherResource = [string, string]; //[name, email]
export type UserType = "teacher" | "student" | "unknown";
export type SubmissionCondtionStyle = "none" | "yes_no";
export type SubmissionConditionResource = {
  name: string | number;
  style: SubmissionCondtionStyle;
  condition?: string | number;
};
export type SubmissionResource = {
  name: string;
  lists: SubmissionConditionResource[];
};
