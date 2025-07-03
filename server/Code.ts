type UserType = "teacher" | "student" | null;
function doGet() {
  let userType: UserType = null;
  if (isTeacher()) userType = "teacher";
  if (isStudent()) userType = "student";

  const template = HtmlService.createTemplateFromFile("index");
  template.userType = userType;
  return template
    .evaluate()
    .setTitle(`Submission List for ${userType || "Unknown"}`);
}
