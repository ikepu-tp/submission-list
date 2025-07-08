import { GASClient } from "gas-client";
import { SubmissionResource } from "../types";
import { isDevelopmentMode } from "../utils";

export default async function fetchSubmissions(): Promise<
  SubmissionResource[]
> {
  const { serverFunctions } = new GASClient();

  if (isDevelopmentMode)
    return [
      {
        name: "Sample Submission",
        lists: [
          { name: "Condition 1", style: "yes_no", condition: "yes" },
          { name: "Condition 2", style: "yes_no", condition: "no" },
          { name: "Condition 3", style: "yes_no", condition: undefined },
          { name: "Condition 4", style: "none", condition: 3 },
          { name: "Condition 5", style: "none", condition: undefined },
        ],
      },
    ];
  try {
    const students = await serverFunctions.getSubmissions();
    return students;
  } catch (error) {
    console.error("Failed to fetch submissions:", error);
    throw error;
  }
}
