import { HashRouter, Route, Routes } from "react-router-dom";
import Homepage from "../../pages/homepage/homepage";
import Summary from "../../pages/summary/summary";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Homepage />} />
        {/* <Route index element={<Summary />} /> */}
      </Routes>
    </HashRouter>
  );
};

export default Router;
