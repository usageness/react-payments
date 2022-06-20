import { cardData } from "./card.interface";

interface card {
  id: number;
  list: Array<cardData>;
}

interface errorState {
  errorMessage: string;
}

export type { errorState, card };
