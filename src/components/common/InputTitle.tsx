import { COLORS } from "constants/color";
import React from "react";
import styled from "styled-components";

interface InputTitleComponent extends React.PropsWithChildren {
  isValid?: boolean;
  htmlFor?: string;
}

export const InputTitle = ({
  children,
  isValid,
  htmlFor,
}: InputTitleComponent) => {
  return (
    <InputTitleStyle htmlFor={htmlFor}>
      {children} <ValidChecker isValid={isValid}>✔️</ValidChecker>
    </InputTitleStyle>
  );
};

const InputTitleStyle = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 12px;
  line-height: 14px;

  margin-bottom: 4px;

  color: ${COLORS.GRAY_300};
`;

const ValidChecker = styled.span<{ isValid: boolean }>`
  display: ${(props) => (props.isValid ? "inline" : "none")};
  margin: "0 10px";
`;
