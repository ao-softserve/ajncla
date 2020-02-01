import React from "react";

import {
  MPWrapper,
  MPBackground,
  MPBox,
  MPAboutUs,
  MPArrowsWrapper,
  MPArrow
} from "./MainPageStyles";
import { Typography } from "@material-ui/core";

export const MainPage: React.FC = () => {
  return (
    <MPWrapper>
      <MPBackground />
      <MPBox>
        <Typography variant="h2">Geszeft z Nikisza</Typography>
        <Typography variant="h4">Bo skąd byście chcieli</Typography>
      </MPBox>
      <MPAboutUs>
        <Typography variant="h4">Trocha o nos</Typography>
        <MPArrowsWrapper>
          <MPArrow />
        </MPArrowsWrapper>
      </MPAboutUs>
    </MPWrapper>
  );
};
