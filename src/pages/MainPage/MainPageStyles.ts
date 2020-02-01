import styled from "styled-components";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { FullScreenWrapper } from "../../components/FullScreenWrapper/FullScreenWrapper";
import Background from "../../assets/nikisz.png";

export const MPWrapper = styled(FullScreenWrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const MPBackground = styled(FullScreenWrapper)`
  position: absolute;

  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  filter: blur(5px);
  z-index: -1;
`;

export const MPBox = styled.div`
  margin: auto;
  width: 50%;
  height: 30vh;
  border: solid 2px white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: darkgray;
`;

export const MPAboutUs = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: darkgray;
`;

export const MPArrowsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MPArrow = styled(ExpandMoreIcon)`
  width: 30px;
  height: 30px;
`;
