import { Box } from "@mui/material";
import { JSX, useEffect, useState } from "react";
import SelectStudent from "./components/SelectStudent";
import fetchStudents from "./models/fetchStudents";
import { StudentResource } from "./types";

/**
 *
 * @returns A React component that renders a box for the teacher view.
 */
export default function Teacher(): JSX.Element {
  const [students, setStudents] = useState<StudentResource[]>([]);
  const [currentStudent, setCurrentStudent] = useState<StudentResource | null>(
    null
  );

  useEffect(() => {
    fetchStudents().then((fetchedStudents) => {
      setStudents(fetchedStudents);
    });
  }, []);
  return (
    <Box>
      {!currentStudent && (
        <SelectStudent students={students} onSelect={setCurrentStudent} />
      )}
    </Box>
  );
}
