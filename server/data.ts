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
