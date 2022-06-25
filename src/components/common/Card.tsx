import styled from "styled-components";
import { COLORS } from "constants/color";
import { cardType, cardNumbers, expireDate, ownerName } from "types";

interface cardComponent {
  cardType: cardType;
  cardNumbers: cardNumbers;
  expireDate: expireDate;
  ownerName: ownerName;
  handleModalVisible?: () => void;
}

export const Card = ({
  cardType,
  cardNumbers,
  expireDate,
  ownerName,
  handleModalVisible,
}: cardComponent) => {
  const formattedCardNumbers = Object.values(cardNumbers)
    .map((number: string, idx: number) =>
      idx <= 1 ? number : "•".repeat(number.length)
    )
    .join(" ");

  return (
    <CardBox>
      <SmallCard backgroundColor={cardType.color} onClick={handleModalVisible}>
        <CardTop>
          <CardText>{cardType.name && cardType.name + "카드"}</CardText>
        </CardTop>
        <CardMiddle>
          <SmallCardChip />
        </CardMiddle>
        <CardBottom>
          <CardBottomNumber>
            <CardNumbersText>{formattedCardNumbers}</CardNumbersText>
          </CardBottomNumber>
          <CardBottomInfo>
            <CardText>{ownerName || "NAME"}</CardText>
            <CardText>
              {expireDate.month || "MM"}/{expireDate.year || "YY"}
            </CardText>
          </CardBottomInfo>
        </CardBottom>
      </SmallCard>
    </CardBox>
  );
};

const CardBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${COLORS.GRAY_300};

  margin: 10px 0;
`;

const SmallCard = styled.div<{ backgroundColor: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 208px;
  height: 130px;

  background: ${(props) => props.backgroundColor || COLORS.WHITE_200};

  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  cursor: pointer;
`;

const SmallCardChip = styled.div`
  width: 40px;
  height: 26px;
  left: 95px;
  top: 122px;

  background: ${COLORS.YELLOW_100};
  border-radius: 4px;
`;

const CardTop = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
`;

const CardMiddle = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 30px;

  display: flex;
  align-items: center;
`;

const CardBottom = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardBottomNumber = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardBottomInfo = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
`;

const CardText = styled.span`
  margin: 0 16px;
  max-width: 50%;

  font-size: 12px;
  line-height: 16px;
  vertical-align: middle;
  font-weight: 400;
  word-break: break-all;
`;

const CardNumbersText = styled(CardText)`
  max-width: 100%;
  font-size: 14px;
  letter-spacing: 2px;
`;
