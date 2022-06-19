interface card {
  id: number;
  list: Array<cardData>;
}

interface cardData {
  id: any;
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

interface cardNumbers {
  firstNumber: string;
  secondNumber: string;
  thirdNumber: string;
  fourthNumber: string;
}

interface cardNumberInputObject {
  name: cardNumberInputName;
  type: "text" | "password";
}

interface expireDate {
  month: string;
  year: string;
}

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
  card,
  cardType,
  cardInputName,
  cardNumbers,
  cardNumberInputName,
  cardNumberInputObject,
  expireDate,
  ownerName,
};
