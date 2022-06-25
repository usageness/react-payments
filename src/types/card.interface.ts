interface cardData {
  id: string;
  cardCVC: string;
  cardNickname: string;
  cardNumbers: cardNumbers;
  cardPassword: string;
  cardType: cardType;
  expireDate: expireDate;
  ownerName: ownerName;
}

interface cardType {
  name: string;
  color: string;
}

type cardNumbers = Record<
  "firstNumber" | "secondNumber" | "thirdNumber" | "fourthNumber",
  string
>;

interface cardNumberInputObject {
  name: cardNumberInputName;
  type: "text" | "password";
}

type expireDate = Record<"month" | "year", string>;

type cardInputName =
  | "cardNumbers"
  | "cardExpireDate"
  | "cardCVC"
  | "cardPassword"
  | "cardType";

type cardNumberInputName =
  | "firstNumber"
  | "secondNumber"
  | "thirdNumber"
  | "fourthNumber";

type ownerName = string;

export type {
  cardData,
  cardType,
  cardInputName,
  cardNumbers,
  cardNumberInputName,
  cardNumberInputObject,
  expireDate,
  ownerName,
};
