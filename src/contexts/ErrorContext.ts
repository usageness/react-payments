import React from "react";
import { errorState } from "types";

export const initErrorState: errorState = {
  errorMessage: "에러 메시지가 입력되지 않았습니다.",
};

export const ErrorContext = React.createContext(initErrorState);
