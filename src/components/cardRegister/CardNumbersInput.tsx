import React, { useEffect, useRef } from "react";

import { RULE_INPUT } from "constants/constants";
import {
  InputBasic,
  InputBox,
  InputTitle,
  InputContainer,
} from "components/common";
import {
  cardNumbers,
  cardNumberInputName,
  cardType,
  cardNumberInputObject,
} from "types";
import { COLORS } from "constants/color";

interface cardNumbersInputComponent {
  cardType: cardType;
  cardNumbers: cardNumbers;
  isValid: boolean;
  handleModalVisible: () => void;
  handleCardNumbersInput: (
    cardNumbers: cardNumbers | ((prevState: cardNumbers) => cardNumbers)
  ) => void;
  handleCardNumberCheck: (isCardNumbersCompleted: boolean) => void;
}

const DEFAULT_CARD_NUMBERS_TYPE: Array<cardNumberInputObject> = [
  { name: "firstNumber", type: "text" },
  { name: "secondNumber", type: "text" },
  { name: "thirdNumber", type: "password" },
  { name: "fourthNumber", type: "password" },
];

export const CardNumbersInput = ({
  cardType,
  cardNumbers,
  isValid,
  handleModalVisible,
  handleCardNumbersInput,
  handleCardNumberCheck,
}: cardNumbersInputComponent) => {
  const numberInputRefs = useRef<Array<HTMLInputElement>>([]);

  useEffect(() => {
    const isCardNumbersCompleted = Object.values(cardNumbers).every(
      (number, i) => {
        if (number.length === 4) {
          numberInputRefs.current[i + 1]?.focus();
          return true;
        }
        return false;
      }
    );

    handleCardNumberCheck(isCardNumbersCompleted);

    if (cardType.name === "" && isCardNumbersCompleted) {
      handleModalVisible();
    }
  }, [cardNumbers]);

  const handleNumberChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: cardNumberInputName
  ) => {
    const { value } = e.target;

    if (Number.isNaN(value)) {
      return;
    }

    handleCardNumbersInput((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <InputContainer>
      <InputTitle isValid={isValid}>카드 번호</InputTitle>
      <InputBox color={COLORS.GREEN_100} padding="0 5%">
        {DEFAULT_CARD_NUMBERS_TYPE.map(({ name, type }, i) => (
          <InputBasic
            key={name}
            id={`input_card_number-${i}`}
            inputRef={(elem) => (numberInputRefs.current[i] = elem)}
            value={cardNumbers?.[name]}
            onChange={(e) => handleNumberChange(e, name)}
            pattern={RULE_INPUT.CARD_NUMBER_RULE}
            maxLength={4}
            type={type}
          />
        )).reduce((prev, cur) => (
          <>
            {prev}-{cur}
          </>
        ))}
      </InputBox>
    </InputContainer>
  );
};
