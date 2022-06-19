import React from "react";
import styled from "styled-components";
import { inputType } from "types";
import { COLORS } from "constants/color";

interface InputBasicComponent {
  type?: inputType;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  dataTestId?: string;
  pattern?: string;
  width?: string;
  inputRef?:
    | React.RefObject<HTMLInputElement>
    | ((element: HTMLInputElement) => HTMLInputElement);
  maxLength?: string | number;
}

export const InputBasic = ({
  type,
  placeholder,
  value,
  onChange,
  onBlur,
  id,
  dataTestId,
  pattern,
  width,
  inputRef,
  maxLength,
}: InputBasicComponent) => {
  return (
    <InputBasicStyle
      width={width}
      type={type}
      ref={inputRef as React.RefObject<HTMLInputElement>}
      placeholder={placeholder}
      value={value}
      id={id}
      pattern={pattern}
      maxLength={Number(maxLength)}
      onChange={onChange}
      onBlur={onBlur}
      data-testId={dataTestId}
    />
  );
};

const InputBasicStyle = styled.input<{
  width: string;
  maxLength: string | number;
}>`
  background-color: ${COLORS.WHITE_100};
  color: ${COLORS.GREEN_100};
  height: 45px;
  width: ${(props) => props.width || "100%"};
  text-align: center;
  outline: 2px solid transparent;
  outline-offset: 2px;
  font-size: 16px;
  border-color: ${COLORS.GRAY_200};
  border: none;
  border-radius: 0.25rem;
  font-weight: bold;

  &:invalid {
    color: ${COLORS.RED_200};
  }
`;
