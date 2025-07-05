import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React from "react";
import render from "./render";
import Student from "./Student";
import Teacher from "./Teacher";
import { getUserType } from "./utils/getUserType";

function App(): React.ReactNode {
  switch (getUserType()) {
    case "teacher":
      return <Teacher />;
    case "student":
      return <Student />;
    default:
      return <div>Unknown User Type</div>;
  }
}

render(<App />, "root", true);
