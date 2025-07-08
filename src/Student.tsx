import { Box, Button, Paper, Typography } from "@mui/material";
import { JSX, useEffect, useState } from "react";
import DisplaySubmissions from "./components/DisplaySubmissions";
import fetchActiveUser from "./models/fetchActiveUser";
import fetchSubmissions from "./models/fetchSubmissions";
import { StudentResource, SubmissionResource } from "./types";

export default function Student(): JSX.Element {
  const [Student, setStudent] = useState<StudentResource | undefined>();
  const [Show, setShow] = useState<boolean>(false);
  const [submissionConditions, setSubmissionConditions] = useState<
    SubmissionResource[]
  >([]);

  useEffect(() => {
    getActiveUser();
  }, []);
  useEffect(() => {
    if (!Student) return setShow(false);
    getSubmissions();
  }, [Student]);

  async function getActiveUser() {
    const active_user = await fetchActiveUser();
    if (!Array.isArray(active_user) || active_user.length !== 3) {
      setStudent(undefined);
      throw new Error("You are not logged in or registered as a student.");
    }
    setStudent(active_user);
  }

  async function getSubmissions() {
    if (!Student) return;
    const submissions = await fetchSubmissions(Student[0]);
    setSubmissionConditions(submissions);
  }

  function handleShow(): void {
    setShow(!Show);
  }

  if (!Student) return <></>;
  if (!Show)
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Paper sx={{ padding: 3, width: "600px", maxWidth: "80vw" }}>
          <Typography component={"h2"} variant="h4" sx={{ mb: 2 }}>
            提出状況確認
          </Typography>
          <Typography component={"p"}>
            あなたは「{Student[1]}さん」で間違いないですか？
          </Typography>
          <Typography component={"p"}>
            間違いがなければ「結果を表示する」ボタンをクリックしてください。
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <Button type="button" variant="contained" onClick={handleShow}>
              結果を表示する
            </Button>
          </Box>
        </Paper>
      </Box>
    );
  return (
    <Box>
      <Paper sx={{ padding: 2, margin: 2 }} elevation={3}>
        <Typography variant="h6" component="h2">
          {Student[1]}さんの提出状況
        </Typography>
        <Box sx={{ my: 2 }}>
          {submissionConditions.length > 0 ? (
            <DisplaySubmissions submissionConditions={submissionConditions} />
          ) : (
            <Typography component="span">
              {Student[1]}さんの提出状況はまだありません。
            </Typography>
          )}
        </Box>
      </Paper>
    </Box>
  );
}
