import React from "react";
import styled from "styled-components";
import { COLORS } from "constants/color";

interface inputBasicComponent
  extends React.InputHTMLAttributes<HTMLInputElement> {
  dataTestId: string;
  inputRef:
    | React.RefObject<HTMLInputElement>
    | ((element: HTMLInputElement) => HTMLInputElement);
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
}: Partial<inputBasicComponent>) => {
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
  width: string | number;
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
