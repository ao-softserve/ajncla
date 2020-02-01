import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: fixed;
  width: 100%;
  height: 50px;
  background-color: rgba(211, 211, 211, 0.8);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LeftSideLinks = styled.div`
  display: flex;
  margin-right: 20px;
`;
export const RightSideLinks = styled.div`
  display: flex;
  margin-left: 20px;
`;
export const Logo = styled.h2`
  margin: 0;
  color: white;
`;
export const HeaderLink = styled.div`
  color: grey;
  text-decoration: none;
  padding: 0 20px;
`;
