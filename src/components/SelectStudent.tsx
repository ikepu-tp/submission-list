import {
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import React from "react";
import { StudentResource } from "../types";

export type SelectStudentProps = {
  students: StudentResource[];
  onSelect: (student: StudentResource | null) => void;
};
export default function SelectStudent({
  students,
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
    <Paper sx={{ padding: 2, margin: 2 }} elevation={3}>
      <Typography variant="h6" component="h2" sx={{ padding: 2 }}>
        提出状況を表示したい生徒を選択してください。
      </Typography>
      <FormControl fullWidth>
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
    </Paper>
  );
}
