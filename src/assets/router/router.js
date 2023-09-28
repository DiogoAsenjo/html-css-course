import { HashRouter, Route, Routes } from "react-router-dom";
import Homepage from "../../pages/homepage/homepage";
import Summary from "../../pages/summary/summary";
import Basic from "../../pages/basic-html/basic-html";
import IntroCSS from "../../pages/intro-css/intro-css";
import CSSText from "../../pages/css-text/css-text";
import CSSColors from "../../pages/css-colors/css-colors";

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
      </Routes>
    </HashRouter>
  );
};

export default Router;
