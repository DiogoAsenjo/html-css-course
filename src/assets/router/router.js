import { HashRouter, Route, Routes } from "react-router-dom";
import Homepage from "../../pages/homepage/homepage";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Homepage />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
