import React from "react";

import { InputBox } from "../components/common/InputBox";
import { InputBasic } from "../components/common/InputBasic";

export default {
  title: "Example/InputBox",
  component: InputBox,
};

const Template = (args) => <InputBox {...args} />;

export const CardNumbers = Template.bind({});
CardNumbers.args = {
  children: (
    <>
      <InputBasic type="text" placeholder="test holder" />
      <InputBasic type="text" placeholder="test holder" />
      <InputBasic type="text" placeholder="test holder" />
      <InputBasic type="text" placeholder="test holder" />
    </>
  ),
};
