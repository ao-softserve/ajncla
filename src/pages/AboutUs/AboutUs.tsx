import React from "react";
import {
  AUWrapper,
  AUContent,
  AUDescWrapper,
  AUDescContent
} from "./AboutUsStyle";
import Typography from "@material-ui/core/Typography";

const DESCRIPTIONS = [
  {
    title: "Skąd my dokładnie som",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim id sapien quis viverra. "
  },
  {
    title: "Jaki jest nosz cel",
    desc:
      "Quisque et est tempus sem venenatis efficitur. Curabitur ultricies nisl nunc, ac vestibulum mi aliquet ac. "
  },
  {
    title: "Czymu Nikisz?",
    desc:
      "Sed et metus non arcu tincidunt egestas. Donec leo odio, ornare in dui a, eleifend posuere ipsum.  "
  },
  {
    title: "Wto my som?",
    desc:
      "liquam fringilla luctus leo tempus scelerisque. Aliquam eleifend eros eget tincidunt blandit. "
  }
];

export const AboutUs: React.FC = () => {
  const header = (
    <Typography variant="h3" align="center">
      O Nos
    </Typography>
  );

  const descTitle = (subtitle: string) => (
    <Typography variant="h4" align="center">
      {subtitle}
    </Typography>
  );
  const descContent = (content: string) => (
    <Typography variant="body1" align="center">
      {content}
    </Typography>
  );

  const content = (
    <AUContent>
      {DESCRIPTIONS.map(description => (
        <AUDescWrapper>
          <AUDescContent>
            {descTitle(description.title)}
            {descContent(description.desc)}
          </AUDescContent>
        </AUDescWrapper>
      ))}
    </AUContent>
  );

  return (
    <AUWrapper>
      {header}
      {content}
    </AUWrapper>
  );
};
