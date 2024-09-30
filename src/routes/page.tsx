import "@arco-design/web-react/dist/css/arco.css";
import "./tailwind.css";

import Editor from "@monaco-editor/react";

export default function App() {
  return (
    <Editor
      height="40vh"
      width="60vw"
      defaultLanguage="javascript"
      defaultValue="// some comment"
    />
  );
}
