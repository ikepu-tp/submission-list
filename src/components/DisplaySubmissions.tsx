import {
  Box,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { SubmissionCondtionStyle, SubmissionResource } from "../types";

export type DisplaySubmissionsProps = {
  submissionConditions: SubmissionResource[];
};
export default function DisplaySubmissions({
  submissionConditions,
}: DisplaySubmissionsProps): React.ReactNode {
  const [TabValue, setTabValue] = useState<number>(0);

  function handleTabValue(e: React.SyntheticEvent, newValue: number): void {
    setTabValue(newValue);
  }
  return (
    <Box sx={{ padding: 2, margin: 2 }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={TabValue} onChange={handleTabValue}>
          {submissionConditions.map((condition, index) => (
            <Tab
              label={condition.name}
              key={index}
              value={index}
              sx={{ mb: 1 }}
            />
          ))}
        </Tabs>
      </Box>
      {submissionConditions.map((condition, index) => (
        <TabPanel
          value={TabValue}
          index={index}
          key={index}
          condition={condition}
        />
      ))}
    </Box>
  );
}

function TabPanel({
  condition,
  children,
  value,
  index,
}: {
  condition: SubmissionResource;
  children?: React.ReactNode;
  value: number;
  index: number;
}): React.ReactNode {
  return (
    <Box hidden={value !== index} sx={{ padding: 2 }}>
      {condition.name}
      <TableContainer component={Box} sx={{ mt: 2, width: "auto" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>提出物名・日付</TableCell>
              <TableCell>提出状況</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {condition.lists.map((list) => (
              <TableRow key={list.name}>
                <TableCell>{list.name}</TableCell>
                <TableCell>
                  <Condition condition={list.condition} style={list.style} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {children}
    </Box>
  );
}
function Condition({
  condition,
  style,
}: {
  condition?: string | number;
  style: SubmissionCondtionStyle;
}): React.ReactNode {
  if (condition === undefined) return <Typography color="info">-</Typography>;

  switch (style) {
    case "yes_no":
      switch (condition) {
        case 0:
        case "0":
        case "no":
          return <Typography color="error">×</Typography>;

        case "0.5":
        case 0.5:
          return <Typography color="warning">△</Typography>;

        case 1:
        case "1":
        case "yes":
          return <Typography color="success">〇</Typography>;

        default:
          return condition;
      }
    case "none":
    default:
      return condition;
  }
}
