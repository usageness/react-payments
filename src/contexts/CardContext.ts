import React from "react";
import { card } from "types/context.interface";

export const cards: card = {
  id: 0,
  list: [],
};

export const CardContext = React.createContext(cards);
