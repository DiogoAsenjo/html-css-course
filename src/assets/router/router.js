import { HashRouter, Route, Routes } from "react-router-dom";
import Homepage from "../../pages/homepage/homepage";
import Summary from "../../pages/summary/summary";
import Basic from "../../pages/basic-html/basic-html";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/basic-html" element={<Basic />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
