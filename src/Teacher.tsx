import { Box } from "@mui/material";
import { GASClient } from "gas-client";
import { JSX, useEffect, useState } from "react";
import SelectStudent from "./components/SelectStudent";
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
  const { serverFunctions } = new GASClient();

  useEffect(() => {
    fetchStudents();
  }, []);

  async function fetchStudents(): Promise<void> {
    try {
      const students = await serverFunctions.getStudents();
      setStudents(students);
    } catch (error) {
      console.error("Failed to fetch students:", error);
      throw error;
    }
  }
  return (
    <Box>
      {!currentStudent && (
        <SelectStudent
          students={students}
          currentStudent={currentStudent}
          onSelect={setCurrentStudent}
        />
      )}
    </Box>
  );
}
