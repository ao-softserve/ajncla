import React from "react";

import {
  HeaderWrapper,
  LeftSideLinks,
  RightSideLinks,
  Logo,
  HeaderLink
} from "./HeaderStyles";
import { Sections } from "../../constants/sections";
import { Typography } from "@material-ui/core";

export const Header: React.FC = () => {
  const genericLink = (section: Sections) => (
    <HeaderLink>
      <Typography variant="body1">{section}</Typography>
    </HeaderLink>
  );

  const leftsideLinks = (
    <LeftSideLinks>
      {genericLink(Sections.mainPage)}
      {genericLink(Sections.aboutUs)}
      {genericLink(Sections.whatWeOffer)}
    </LeftSideLinks>
  );
  const logo = <Logo>AJNCLA</Logo>;
  const rightSideLinks = (
    <RightSideLinks>
      {genericLink(Sections.aboutNikisz)}
      {genericLink(Sections.quiz)}
      {genericLink(Sections.localization)}
    </RightSideLinks>
  );

  return (
    <HeaderWrapper>
      {leftsideLinks}
      {logo}
      {rightSideLinks}
    </HeaderWrapper>
  );
};
