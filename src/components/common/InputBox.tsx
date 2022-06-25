import { COLORS } from "constants/color";
import React from "react";
import styled from "styled-components";
import * as CSS from "csstype";

interface inputBoxComponent extends React.PropsWithChildren {
  width?: string;
  color?: string;
  backgroundColor?: string;
  justifyContent?: CSS.Property.JustifyContent;
  padding?: string;
}

export const InputBox = ({
  children,
  width,
  color,
  backgroundColor,
  justifyContent,
  padding,
}: inputBoxComponent) => {
  return (
    <InputBoxStyle
      width={width}
      color={color}
      backgroundColor={backgroundColor}
      justifyContent={justifyContent}
      padding={padding}
    >
      {children}
    </InputBoxStyle>
  );
};

const InputBoxStyle = styled.div<{
  backgroundColor: string;
  width: string;
  justifyContent: CSS.Property.JustifyContent;
  padding: string;
}>`
  display: flex;
  align-items: center;
  margin-top: 0.375rem;
  color: ${(props) => props.color || COLORS.WHITE_150};
  border-radius: 0.25rem;
  background-color: ${(props) => props.backgroundColor || COLORS.WHITE_100};
  width: ${(props) => props.width || "unset"};
  justify-content: ${(props) => props.justifyContent || "unset"};
  padding: ${(props) => props.padding || "0"};
`;
