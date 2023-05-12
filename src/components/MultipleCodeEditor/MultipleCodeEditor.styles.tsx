import styled from "styled-components";

export const MultipleCodeEditorTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  resize: none;
`;

export const MultipleCodeEditorCodeSelectButton = styled.button<{
  selected?: boolean;
}>`
  padding: 4px 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  color: ${props => props.selected ? "#000" : "#999"};
  background-color: ${props => props.selected ? "#ddd" : "#fff"};
  cursor: pointer;
  transition: all 250ms ease;

  &:hover {
    color: #333;
    background-color: #ddd;
  }
`;

export const MultipleCodeEditorHeader = styled.div`
  display: flex;
  gap: 12px;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

export const MultipleCodeEditorLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 47%;
  height: 100%;
  border-radius: 8px;
  border: 1px solid black;
  overflow: hidden;
`;
