import React, { useEffect } from "react";

import { currentDate } from "utils/currentDate";
import { RULE_INPUT } from "constants/constants";
import {
  InputBasic,
  InputBox,
  InputTitle,
  InputContainer,
} from "components/common";
import { expireDate } from "types";

interface cardExpireDateInputComponent {
  expireDate: expireDate;
  isValid: boolean;
  handleExpireDateInput: (
    state: expireDate | ((prevState: expireDate) => expireDate)
  ) => void;
  handleCardExpireCheck: (isValid: boolean) => void;
}

export const CardExpireDateInput = ({
  expireDate,
  isValid,
  handleExpireDateInput,
  handleCardExpireCheck,
}: cardExpireDateInputComponent) => {
  useEffect(() => {
    if (expireDate.year === "" || expireDate.month === "") {
      return;
    }

    const isValidate = isCardExpireDateValidate(expireDate);
    handleCardExpireCheck(isValidate);
  }, [expireDate]);

  const handleMonthInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const valueAsNumber = Number(value);

    if (Number.isNaN(valueAsNumber)) return;

    if (valueAsNumber > 12) return;

    handleExpireDateInput(
      (prev: expireDate): expireDate => ({
        ...prev,
        month: value,
      })
    );
  };

  const handleMonthBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (value.length === 1) {
      handleExpireDateInput((prev: expireDate) => ({
        ...prev,
        month: "0" + value,
      }));
      return;
    }

    handleExpireDateInput((prev: expireDate) => ({
      ...prev,
      month: value,
    }));
  };

  const handleYearInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (Number.isNaN(value)) {
      return;
    }

    handleExpireDateInput((prev: expireDate) => ({
      ...prev,
      year: value,
    }));
  };

  const handleYearBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (value.length === 1) {
      handleExpireDateInput((prev: expireDate) => ({
        ...prev,
        year: "0" + value,
      }));
      return;
    }

    handleExpireDateInput((prev: expireDate) => ({
      ...prev,
      year: value,
    }));
  };

  return (
    <InputContainer>
      <InputTitle isValid={isValid}>만료일</InputTitle>
      <InputBox width="50%" justifyContent="center">
        <InputBasic
          width="25%"
          id="input_expire_month"
          value={expireDate?.month}
          onChange={handleMonthInput}
          onBlur={handleMonthBlur}
          type="text"
          maxLength={2}
          pattern={RULE_INPUT.EXPIRE_DATE_RULE}
          placeholder="MM"
        />
        /
        <InputBasic
          width="25%"
          id="input_expire_year"
          value={expireDate?.year}
          onChange={handleYearInput}
          onBlur={handleYearBlur}
          type="text"
          maxLength={2}
          pattern={RULE_INPUT.EXPIRE_DATE_RULE}
          placeholder="YY"
        />
      </InputBox>
    </InputContainer>
  );
};

const { currentYear, currentMonth } = currentDate();

const isCardExpireDateValidate = (expireDate: expireDate) => {
  const year = Number(expireDate.year);
  const month = Number(expireDate.month);

  if (year < currentYear) {
    return false;
  }

  if (year === currentYear && month < currentMonth) {
    return false;
  }

  if (month > 12 || month < 1) {
    return false;
  }

  return true;
};
