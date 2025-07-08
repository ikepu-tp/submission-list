import { Box } from "@mui/material";
import { JSX, useEffect, useState } from "react";
import SelectedStudent from "./components/SelectedStudent";
import SelectStudent from "./components/SelectStudent";
import fetchStudents from "./models/fetchStudents";
import fetchSubmissions from "./models/fetchSubmissions";
import { StudentResource, SubmissionResource } from "./types";

/**
 *
 * @returns A React component that renders a box for the teacher view.
 */
export default function Teacher(): JSX.Element {
  const [students, setStudents] = useState<StudentResource[]>([]);
  const [currentStudent, setCurrentStudent] = useState<StudentResource | null>(
    null
  );
  const [SubmissionCondition, setSubmissionCondition] = useState<
    SubmissionResource[]
  >([]);

  useEffect(() => {
    fetchStudents().then((fetchedStudents) => {
      setStudents(fetchedStudents);
    });
  }, []);
  useEffect(() => {
    if (currentStudent) {
      fetchSubmissions(currentStudent[0]).then((fetchedSubmissions) => {
        setSubmissionCondition(fetchedSubmissions);
      });
    } else {
      setSubmissionCondition([]);
    }
  }, [currentStudent]);
  return (
    <Box>
      {currentStudent ? (
        <SelectedStudent
          currentStudent={currentStudent}
          onSelect={setCurrentStudent}
          submissionConditions={SubmissionCondition}
        />
      ) : (
        <SelectStudent students={students} onSelect={setCurrentStudent} />
      )}
    </Box>
  );
}
