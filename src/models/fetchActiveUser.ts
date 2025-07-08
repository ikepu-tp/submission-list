import { GASClient } from "gas-client";
import { StudentResource, TeacherResource } from "../types";
import { isDevelopmentMode } from "../utils";

export default async function fetchActiveUser(): Promise<
  StudentResource | TeacherResource
> {
  const { serverFunctions } = new GASClient();

  if (isDevelopmentMode) return ["1", "Alice Smith", "example@example.com"];
  try {
    const students = await serverFunctions.getActiveUser();
    return students;
  } catch (error) {
    console.error("Failed to fetch active user:", error);
    throw error;
  }
}
