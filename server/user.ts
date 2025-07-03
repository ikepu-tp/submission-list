function getUserEmail() {
  const user = Session.getActiveUser();
  return user.getEmail();
}

function getTeachers() {
  const settingSheet = getSettingSheet();
  const teachersRange = settingSheet.getRange("G:H");
  const teachersValues = teachersRange.getValues() as [string, string][];
  return teachersValues.filter((row, idx) => idx && row[0] && row[1]); // Filter out empty rows
}

function getStudents() {
  const settingSheet = getSettingSheet();
  const studentsRange = settingSheet.getRange("J:L");
  const studentsValues = studentsRange.getValues() as [
    string,
    string,
    string
  ][];
  return studentsValues.filter((row, idx) => idx && row[0] && row[1] && row[2]);
}

function isTeacher() {
  const userEmail = getUserEmail();
  const teachers = getTeachers();
  return teachers.some(([_, email]) => email === userEmail);
}

function isStudent() {
  const userEmail = getUserEmail();
  const students = getStudents();
  return students.some(([_, _$, email]) => email === userEmail);
}
