import React, { useRef } from "react";

import { RULE_INPUT } from "constants/constants";
import {
  InputBasic,
  InputBox,
  InputTitle,
  InputContainer,
  Dot,
} from "components/common";

interface cardPasswordInputComponent {
  isValid: boolean;
  handleCardPasswordCheck: (isCompletePassword: boolean) => void;
}

export const CardPasswordInput = ({
  isValid,
  handleCardPasswordCheck,
}: cardPasswordInputComponent) => {
  const passwordInputRefs = useRef<Array<HTMLInputElement>>([]);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number.isNaN(e.target.value)) {
      e.target.value = "";
      return;
    }

    const isCompletePassword = passwordInputRefs.current.every((number, i) => {
      if (number.value) {
        passwordInputRefs.current[i + 1]?.focus();
        return true;
      }
      return false;
    });

    handleCardPasswordCheck(isCompletePassword);
  };

  return (
    <InputContainer>
      <InputTitle isValid={isValid}>카드 비밀번호</InputTitle>
      <InputBox
        width="50%"
        backgroundColor="transparent"
        justifyContent={"space-between"}
      >
        {Array.from({ length: 2 }).map((_, i) => (
          <InputBasic
            key={i}
            id={`input_password-${i}`}
            onChange={(e) => handlePasswordChange(e)}
            inputRef={(elem) => (passwordInputRefs.current[i] = elem)}
            type="password"
            width="20%"
            pattern={RULE_INPUT.PASSWORD_RULE}
            maxLength={1}
          />
        ))}
        <Dot />
        <Dot />
      </InputBox>
    </InputContainer>
  );
};
