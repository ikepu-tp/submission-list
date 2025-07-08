import { Box, Button, Paper, Typography } from "@mui/material";
import { StudentResource } from "../types";

export type SelectedStudentProps = {
  currentStudent: StudentResource;
  onSelect: (student: StudentResource | null) => void;
};
export default function SelectedStudent({
  currentStudent,
  onSelect,
}: SelectedStudentProps): React.ReactNode {
  function removeStudent(): void {
    onSelect(null);
  }
  return (
    <Paper sx={{ padding: 2, margin: 2 }} elevation={3}>
      <Typography variant="h6" component="h2">
        選択された生徒
      </Typography>
      <Box sx={{ my: 2 }}>
        <Typography component="span">
          {currentStudent[1]} ({currentStudent[2]})
        </Typography>
        <Button
          type="button"
          variant="contained"
          sx={{ ml: 2 }}
          onClick={removeStudent}
        >
          生徒を削除
        </Button>
      </Box>
    </Paper>
  );
}
