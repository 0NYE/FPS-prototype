import React, { useState, useRef } from "react";

import { useAtom } from "jotai/react";

import { htmlAtom, cssAtom, jsAtom } from "@/atoms/languages";
import {
  MultipleCodeEditorLayout,
  MultipleCodeEditorHeader,
  MultipleCodeEditorCodeSelectButton,
  MultipleCodeEditorTextArea,
} from "@/components/MultipleCodeEditor/MultipleCodeEditor.styles";

type Language = "HTML" | "CSS" | "JS";

const MultipleCodeEditor = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>("HTML");
  const [html, setHtml] = useAtom(htmlAtom);
  const [css, setcss] = useAtom(cssAtom);
  const [js, setJs] = useAtom(jsAtom);
  const textArea = useRef<HTMLTextAreaElement>(null);

  const getLanguage = (lang: Language) => {
    if (lang === "HTML") return html;
    else if (lang === "CSS") return css;
    else if (lang === "JS") return js;
    else return "";
  }

  const setLanguage = (lang: Language, text: string) => {
    if (lang === "HTML") setHtml(text);
    else if (lang === "CSS") setcss(text);
    else if (lang === "JS") setJs(text);
  }

  const HeaderClickHandler: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.target instanceof HTMLButtonElement) {
      // 선택 언어 변경
      const clickedLanguage = e.target.textContent as Language;
      setSelectedLanguage(clickedLanguage);

      // 저장된 언어 작성 내용 불러오기
      if (textArea.current) {
        textArea.current.value = getLanguage(clickedLanguage);
      }
    }
  }

  const textAreaChangeHandler: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setLanguage(selectedLanguage, e.target.value);
  }

  return <MultipleCodeEditorLayout>
    <MultipleCodeEditorHeader onClick={HeaderClickHandler}>
      <MultipleCodeEditorCodeSelectButton selected={selectedLanguage === "HTML"}>HTML</MultipleCodeEditorCodeSelectButton>
      <MultipleCodeEditorCodeSelectButton selected={selectedLanguage === "CSS"}>CSS</MultipleCodeEditorCodeSelectButton>
      <MultipleCodeEditorCodeSelectButton selected={selectedLanguage === "JS"}>JS</MultipleCodeEditorCodeSelectButton>
    </MultipleCodeEditorHeader>
    <MultipleCodeEditorTextArea ref={textArea} onChange={textAreaChangeHandler} ></MultipleCodeEditorTextArea>
  </MultipleCodeEditorLayout>;
};

export default MultipleCodeEditor;
