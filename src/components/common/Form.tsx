import React from "react";
import styled from "styled-components";

interface FormComponent extends React.PropsWithChildren {
  onSubmit: (e: React.FormEvent) => void;
}

export const Form = ({ onSubmit, children }: FormComponent) => {
  return <FormStyle onSubmit={onSubmit}>{children}</FormStyle>;
};

const FormStyle = styled.form``;
