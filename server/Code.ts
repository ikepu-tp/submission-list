function doGet() {
  let userType: UserType = getUserType();

  const template = HtmlService.createTemplateFromFile("index");
  template.userType = userType;
  return template
    .evaluate()
    .setTitle(`Submission List for ${userType || "Unknown"}`);
}

function getUserType(): UserType {
  if (isTeacher()) return "teacher";
  if (isStudent()) return "student";
  return "unknown";
}
