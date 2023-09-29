import { HashRouter, Route, Routes } from "react-router-dom";
import Homepage from "../../pages/homepage/homepage";
import Summary from "../../pages/summary/summary";
import Basic from "../../pages/basic-html/basic-html";
import IntroCSS from "../../pages/intro-css/intro-css";
import CSSText from "../../pages/css-text/css-text";
import CSSColors from "../../pages/css-colors/css-colors";
import BoxModel from "../../pages/box-model/box-model";
import Flexbox from "../../pages/flexbox/flexbox";
import FlexboxPractice from "../../pages/flexbox-in-practice/flexbox-in-practice";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/basic-html" element={<Basic />} />
        <Route path="/intro-css" element={<IntroCSS />} />
        <Route path="/css-text" element={<CSSText />} />
        <Route path="/css-colors" element={<CSSColors />} />
        <Route path="/box-model" element={<BoxModel />} />
        <Route path="/flexbox" element={<Flexbox />} />
        <Route path="/flexbox-practice" element={<FlexboxPractice />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
