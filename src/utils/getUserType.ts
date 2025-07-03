export type UserType = "teacher" | "student" | "unknown";
export function getUserType(): UserType {
  const meta = document.querySelector('meta[id="userType"]');
  const content = meta?.getAttribute("content");
  if (content === "teacher") return "teacher";
  if (content === "student") return "student";
  return "unknown";
}
