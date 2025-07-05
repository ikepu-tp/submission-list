import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";
import { StudentResource } from "../types";

export type SelectStudentProps = {
  students: StudentResource[];
  currentStudent: StudentResource | null;
  onSelect: (student: StudentResource | null) => void;
};
export default function SelectStudent({
  students,
  currentStudent,
  onSelect,
}: SelectStudentProps): React.ReactNode {
  function handleChange(event: SelectChangeEvent): void {
    const selectedId = event.target.value as string;
    const selectedStudent = students.find((s) => s[0] === selectedId);
    if (selectedStudent) {
      onSelect(selectedStudent);
    }
  }
  return (
    <FormControl>
      <InputLabel id="select-student-label">Select Student</InputLabel>
      <Select
        labelId="select-student-label"
        id="select-student"
        label="Select Student"
        onChange={handleChange}
      >
        <MenuItem value="" disabled>
          Select a student
        </MenuItem>
        {students.map((student) => (
          <MenuItem key={student[0]} value={student[0]}>
            {student[1]} ({student[2]})
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
