export type UserType = "teacher" | "student" | null;
export function getUserType(): UserType {
  const meta = document.querySelector('meta[id="userType"]');
  const content = meta?.getAttribute("content");
  return content === "teacher" ? "teacher" : "student";
}
