import React from "react";
import styled from "styled-components";
import { COLORS } from "constants/color";
import * as CSS from "csstype";

interface buttonComponent
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  textAlign?: CSS.Property.TextAlign;
}

export const Button = ({
  children,
  onClick,
  disabled,
  type,
  textAlign,
}: React.PropsWithChildren<buttonComponent>) => {
  return (
    <ButtonBox textAlign={textAlign}>
      <ButtonText onClick={onClick} type={type} disabled={disabled}>
        {children}
      </ButtonText>
    </ButtonBox>
  );
};

const ButtonBox = styled.div<{ textAlign: CSS.Property.TextAlign }>`
  width: 100%;
  text-align: ${(props) => (props.textAlign ? props.textAlign : "right")};
`;

const ButtonText = styled.button`
  color: ${COLORS.GREEN_100};
  background-color: transparent;
  border: none;
  font-weight: bold;
  cursor: pointer;

  &:disabled {
    color: ${COLORS.WHITE_100};
  }
`;
