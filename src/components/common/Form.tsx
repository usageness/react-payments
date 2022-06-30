import React from "react";
import styled from "styled-components";

interface formComponent extends React.PropsWithChildren {
  onSubmit: (e: React.FormEvent) => void;
}

export const Form = ({ onSubmit, children }: formComponent) => {
  return <FormStyle onSubmit={onSubmit}>{children}</FormStyle>;
};

const FormStyle = styled.form``;
