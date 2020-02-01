import React from "react";

import {
  WWOPhotoWrapper,
  WWOWrapper,
  WWOFullScreen,
  WWOJars,
  WWOJarsDesc,
  WWOSzyby,
  WWOSzybyDesc
} from "./WhatWeOfferStyles";
import { Typography } from "@material-ui/core";
import { Sections } from "../../constants/sections";

export const WhatWeOffer: React.FC = props => {
  const header = (
    <Typography variant="h2" align="center">
      {Sections.whatWeOffer}
    </Typography>
  );

  return (
    <WWOFullScreen>
      <WWOWrapper>
        {header}
        <WWOPhotoWrapper>
          <WWOJars />
          <WWOJarsDesc>
            <Typography variant="h4">Geszynki</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>{" "}
          </WWOJarsDesc>
        </WWOPhotoWrapper>
        <WWOPhotoWrapper>
          <WWOSzybyDesc>
            <Typography variant="h4">Oferta dlo Grubiorzy</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </WWOSzybyDesc>
          <WWOSzyby />
        </WWOPhotoWrapper>
      </WWOWrapper>
    </WWOFullScreen>
  );
};
