type StudentResource = [string, string, string]; //[id, name, email]
type TeacherResource = [string, string]; //[name, email]
type UserType = "teacher" | "student" | "unknown";
type SubmissionCondtionStyle = "none" | "yes_no";
type SubmissionConditionResource = {
  name: string | number;
  style: SubmissionCondtionStyle;
  condition?: string | number;
};
type SubmissionResource = {
  name: string;
  lists: SubmissionConditionResource[];
};
