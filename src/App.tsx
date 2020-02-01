import React from "react";

import { Header } from "./components/Header/Header";
import { GlobalStyles } from "./AppStyles";
import { MainPage } from "./pages/MainPage/MainPage";
import { AboutUs } from "./pages/AboutUs/AboutUs";
import { WhatWeOffer } from "./pages/WhatWeOffer/WhatWeffer";

const App: React.FC = () => {
  return (
    <GlobalStyles>
      <Header />
      <MainPage />
      <AboutUs />
      <WhatWeOffer />
    </GlobalStyles>
  );
};

export default App;
