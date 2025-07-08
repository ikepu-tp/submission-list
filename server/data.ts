function getStudentDatas(): StudentResource[] {
  if (!isTeacher()) throw new Error("Teachers only can access student datas");

  return getStudents();
}

/**
 * 提出状況取得
 *
 * @param {string} studentId
 * @return {*}  {SubmissionResource[]}
 */
function getSubmissions(studentId: string): SubmissionResource[] {
  const submissionSheets = getSubmissionSheets();
  const submissions: SubmissionResource[] = [];
  submissionSheets.forEach((sheet) => {
    const data = sheet.getDataRange().getValues() as (string | number)[][];

    const studentRowIndex = data.find((row) => row[0] === studentId);
    if (!studentRowIndex) return;

    let conditions: SubmissionConditionResource[] = [];
    data[0].forEach((style, index) => {
      if (index < 2) return; // Skip first two columns (ID and Name)
      let value = studentRowIndex[index];
      if (value === "") value = undefined;
      conditions.push({
        name: data[1][index],
        style: style === "○△×" ? "yes_no" : "none",
        condition: value || undefined,
      });
    });

    submissions.push({
      name: sheet.getName(),
      lists: conditions,
    });
  });

  return submissions;
}

/**
 * ログインユーザー情報取得
 *
 * @return {*}  {(StudentResource | TeacherResource)}
 */
function getActiveUser(): StudentResource | TeacherResource {
  const userEmail = getUserEmail();
  const teachers = getTeachers();

  const students = getStudents();
  const student = students.find(([_, _$, email]) => email === userEmail);
  if (student) return student;

  const teacher = teachers.find(([_, email]) => email === userEmail);
  if (teacher) return teacher;

  throw new Error("User not found.");
}
