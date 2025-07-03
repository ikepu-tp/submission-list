import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React from "react";
import render from "./render";

function App(): React.ReactNode {
  return (
    <div>
      <h1>Submission List</h1>
      <p>This is a simple application to list submissions.</p>
      <p>Developed using React and Vite.</p>
    </div>
  );
}

render(<App />, "root", true);
