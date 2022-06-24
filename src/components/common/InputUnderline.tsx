import React from "react";
import styled from "styled-components";
import { COLORS } from "constants/color";

interface inputUnderlineComponent
  extends React.InputHTMLAttributes<HTMLInputElement> {
  inputRef?: React.RefObject<HTMLInputElement>;
}

export const InputUnderline = ({
  type,
  placeholder,
  value,
  onChange,
  id,
  width,
  pattern,
  inputRef,
  maxLength,
}: inputUnderlineComponent) => {
  return (
    <InputUnderlineStyle
      width={width}
      type={type}
      ref={inputRef}
      placeholder={placeholder}
      value={value}
      id={id}
      pattern={pattern}
      maxLength={maxLength}
      onChange={onChange}
    />
  );
};

const InputUnderlineStyle = styled.input`
  background-color: transparent;
  color: ${COLORS.BLACK_100};
  height: 45px;
  width: ${(props) => props.width || "100%"};
  text-align: center;
  outline: 2px solid transparent;
  outline-offset: 2px;
  font-size: 16px;
  border-color: ${COLORS.GRAY_250};
  border-style: none none solid none;
  border-width: 1.5px;
`;
