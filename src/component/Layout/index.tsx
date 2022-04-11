import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from '../Home'
import "./index.scss";

const Layout: React.FC = () => {
  return (
    <div className="layout">
        <Routes>
            <Route path="/*" element={<Home />} />
            {/* <Route path="/kiosk" element={<Kiosk />} /> */}
        </Routes>
    </div>
  );
};

export default Layout;
