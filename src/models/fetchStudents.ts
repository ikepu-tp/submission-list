import { GASClient } from "gas-client";
import { StudentResource } from "../types";
import { isDevelopmentMode } from "../utils";

export default async function fetchStudents(): Promise<StudentResource[]> {
  const { serverFunctions } = new GASClient();

  if (isDevelopmentMode)
    return [
      ["1", "Alice Smith", "example@example.com"],
      ["2", "Bob Johnson", "example@example.jp"],
    ];
  try {
    const students = await serverFunctions.getStudents();
    return students;
  } catch (error) {
    console.error("Failed to fetch students:", error);
    throw error;
  }
}
