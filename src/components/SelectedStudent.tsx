import { Box, Button, Paper, Typography } from "@mui/material";
import { StudentResource, SubmissionResource } from "../types";
import DisplaySubmissions from "./DisplaySubmissions";

export type SelectedStudentProps = {
  currentStudent: StudentResource;
  submissionConditions: SubmissionResource[];
  onSelect: (student: StudentResource | null) => void;
};
export default function SelectedStudent({
  currentStudent,
  submissionConditions,
  onSelect,
}: SelectedStudentProps): React.ReactNode {
  function removeStudent(): void {
    onSelect(null);
  }
  console.log(submissionConditions);
  return (
    <Box>
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
      <Paper sx={{ padding: 2, margin: 2 }} elevation={3}>
        <Typography variant="h6" component="h2">
          提出状況
        </Typography>
        <Box sx={{ my: 2 }}>
          {submissionConditions.length > 0 ? (
            <DisplaySubmissions submissionConditions={submissionConditions} />
          ) : (
            <Typography component="span">
              {currentStudent[1]}の提出状況はまだありません。
            </Typography>
          )}
        </Box>
      </Paper>
    </Box>
  );
}
