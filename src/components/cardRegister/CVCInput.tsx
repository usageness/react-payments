import React from "react";

import { RULE_INPUT } from "constants/constants";
import {
  FlexWrapper,
  InputBasic,
  InputBox,
  InputTitle,
  InputContainer,
  TipButton,
} from "components/common";

interface CVCInputComponent {
  isValid: boolean;
  handleCardCVCCheck: (isValid: boolean) => void;
  handleModalVisible: () => void;
}

export const CVCInput = ({
  isValid,
  handleCardCVCCheck,
  handleModalVisible,
}: CVCInputComponent) => {
  const handleCVCChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (Number.isNaN(value)) {
      e.target.value = value.slice(0, value.length - 1);
      return;
    }

    handleCardCVCCheck(value.length === 3);
  };

  return (
    <InputContainer>
      <InputTitle htmlFor="input_CVC" isValid={isValid}>
        보안카드(CVC/CVV)
      </InputTitle>
      <FlexWrapper alignItems="baseline" gap="10px">
        <InputBox width="25%">
          <InputBasic
            type="password"
            id="input_CVC"
            maxLength="3"
            pattern={RULE_INPUT.CVC_RULE}
            onChange={handleCVCChange}
          />
        </InputBox>
        <TipButton onClick={handleModalVisible} contents="?" />
      </FlexWrapper>
    </InputContainer>
  );
};
