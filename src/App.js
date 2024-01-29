import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { FiSettings } from "react-icons/fi";

import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  Ecommerce,
  Orders,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
  Calendar,
} from "./pages";

export const App = () => {
  const activeMenu = true;
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hovver:drop-shodow-xl hover:bg-light-gray text-white"
                style={{ background: "blue", borderRadius: " 50%" }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={`dark:bg-main-bg bg-main-bg min-h-screen w-full
              ${activeMenu ? "md:ml-72" : "flex-2"}`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
          </div>
          <div>
            <Routes>
              <Route path="/" element={<Ecommerce />} />
              {/* Pages */}
              <Route path="/ecommerce" element={<Ecommerce />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/employess" element={<Employees />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/customers" element={<Customers />} />
              {/* Apps */}
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/calender" element={<Calendar />} />
              <Route path="/color-picker" element={<ColorPicker />} />
              {/* Charts */}
              <Route path="/Charts/line" element={<Line />} />
              <Route path="/Charts/area" element={<Area />} />
              <Route path="/Charts/bar" element={<Bar />} />
              <Route path="/Charts/pie" element={<Pie />} />
              <Route path="/Charts/financial" element={<Financial />} />
              <Route path="/Charts/stacked" element={<Stacked />} />
              <Route path="/Charts/ColorMapping" element={<ColorMapping />} />
              <Route path="/Charts/Pyramid" element={<Pyramid />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};
