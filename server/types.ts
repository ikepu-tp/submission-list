type StudentResource = [string, string, string]; //[id, name, email]
type TeacherResource = [string, string]; //[name, email]
type UserType = "teacher" | "student" | "unknown";
type SubmissionConditionResource = {
  name: string | number;
  style: "none" | "yes_no";
  condition?: string | number;
};
type SubmissionResource = {
  name: string;
  lists: SubmissionConditionResource[];
};
