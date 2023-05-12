import { useState } from "react";

import { useAtom } from "jotai/react";

import { htmlAtom, cssAtom, jsAtom } from "@/atoms/languages";
import { CodeResultFrameLayout } from "@/components/CodeResultFrame/CodeResultFrame.styles";

const CodeResultFrame = () => {
  const [src, setSrc] = useState("");
  const [html, setHtml] = useAtom(htmlAtom);
  const [css, setcss] = useAtom(cssAtom);
  const [js, setJs] = useAtom(jsAtom);

  const resultSourceCode = `
    <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
    </html>
  `;

  return (
    <CodeResultFrameLayout>
      <iframe
        srcDoc={resultSourceCode}
        title="output"
        sandbox="allow-scripts"
        width="100%"
        height="100%"
      />
    </CodeResultFrameLayout>
  );
};

export default CodeResultFrame;
