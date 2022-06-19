import React from "react";
import styled from "styled-components";
import { cardType } from "types";
import { COLORS } from "constants/color";

interface CardSelectModalComponent {
  cardTypes: Array<cardType>;
  handleVisible: () => void;
  handleCardType: React.Dispatch<React.SetStateAction<cardType>>;
  handleCardTypeCheck: (state: boolean) => void;
}

export const CardSelectModal = ({
  cardTypes,
  handleVisible,
  handleCardType,
  handleCardTypeCheck,
}: CardSelectModalComponent) => {
  const handleCardTypeSelect = (card: cardType) => {
    handleCardType(card);
    handleCardTypeCheck(true);
    handleVisible();
  };

  return (
    <GridColumnsStyle>
      {cardTypes.map((card) => (
        <ModalItemContainerStyle
          key={card.name}
          onClick={() => handleCardTypeSelect(card)}
        >
          <ModalItemDotStyle backgroundColor={card.color} />
          <ModalItemNameStyle>{card.name} 카드</ModalItemNameStyle>
        </ModalItemContainerStyle>
      ))}
    </GridColumnsStyle>
  );
};

const GridColumnsStyle = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

const ModalItemContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ModalItemDotStyle = styled.div<{ backgroundColor: string }>`
  margin: 0.5rem 1rem;
  border-radius: 50%;
  width: 2.8rem;
  height: 2.8rem;
  background-color: ${(props) => props.backgroundColor || COLORS.GREEN_200};
  cursor: pointer;
`;

const ModalItemNameStyle = styled.span`
  font-size: 12px;
  letter-spacing: -0.085rem;
  cursor: pointer;
`;
