import styled from "styled-components";
import cvc from "assets/cvc.png";
import { modalContentsComponent } from "types/modalContents.interface";

const Image = styled.img`
  height: 150px;
`;

export const CVCHelperModal: modalContentsComponent = () => {
  return (
    <>
      <Image src={cvc} alt="cvc" />
      <p>카드 뒷면에서 CVC를 확인하세요!</p>
    </>
  );
};
