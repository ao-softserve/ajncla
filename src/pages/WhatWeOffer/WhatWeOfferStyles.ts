import styled from "styled-components";

import Jars from "../../assets/jars.jpg";
import Szyby from "../../assets/szyby.jpg";
import { FullScreenWrapper } from "../../components/FullScreenWrapper/FullScreenWrapper";

export const WWOFullScreen = styled(FullScreenWrapper)`
  display: flex;
  justify-content: center;
`;
export const WWOWrapper = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const WWOPhotoWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 40%;
`;

export const WWOJarsDesc = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const WWOJars = styled.div`
  width: 50%;
  height: 100%;

  background-image: url(${Jars});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
export const WWOSzyby = styled.div`
  width: 50%;
  height: 100%;

  background-image: url(${Szyby});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
export const WWOSzybyDesc = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
