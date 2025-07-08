function getUserEmail(): string {
  const user = Session.getActiveUser();
  return user.getEmail();
}

function getTeachers(): TeacherResource[] {
  const settingSheet = getSettingSheet();
  const teachersRange = settingSheet.getRange("G:H");
  const teachersValues = teachersRange.getValues() as TeacherResource[];
  return teachersValues.filter((row, idx) => idx && row[0] && row[1]); // Filter out empty rows
}

function getStudents(): StudentResource[] {
  if (!isTeacher()) throw new Error("Only teachers can access student data.");

  const settingSheet = getSettingSheet();
  const studentsRange = settingSheet.getRange("J:L");
  const studentsValues = studentsRange.getValues() as StudentResource[];
  return studentsValues.filter((row, idx) => idx && row[0] && row[1] && row[2]);
}

function isTeacher(): boolean {
  const userEmail = getUserEmail();
  const teachers = getTeachers();
  return teachers.some(([_, email]) => email === userEmail);
}

function isStudent(): boolean {
  const userEmail = getUserEmail();
  const students = getStudents();
  return students.some(([_, _$, email]) => email === userEmail);
}
