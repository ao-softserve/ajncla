import styled from "styled-components";

import { FullScreenWrapper } from "../../components/FullScreenWrapper/FullScreenWrapper";

export const AUWrapper = styled(FullScreenWrapper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AUContent = styled.div`
  width: 80%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const AUDescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 50%;
`;
export const AUDescContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;
