import React from "react";
import { Typography as ITypography } from "material-ui/styles/typography";
import Typography from "@material-ui/core/Typography";

export const H1: React.FC<ITypography> = props => (
  <Typography variant="h1" {...props} />
);

export const H2: React.FC<ITypography> = props => (
  <Typography variant="h2" {...props}>
    {props.children}
  </Typography>
);

export const H3: React.FC<ITypography> = props => (
  <Typography variant="h3" {...props}></Typography>
);

export const H4: React.FC<ITypography> = props => (
  <Typography variant="h4" {...props}></Typography>
);

export const H5: React.FC<ITypography> = props => (
  <Typography variant="h5" {...props}></Typography>
);

export const H6: React.FC<ITypography> = props => (
  <Typography variant="h6" {...props}></Typography>
);

export const Body1: React.FC<ITypography> = props => (
  <Typography variant="body1" {...props} />
);

export const Body2: React.FC<ITypography> = props => (
  <Typography variant="body2" {...props}></Typography>
);
