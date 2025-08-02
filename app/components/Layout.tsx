"use client";

import React from "react";
import Sidebar from "./sidebar/Sidebar";
import { createTheme, ThemeProvider } from "@mui/material/styles";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Use default MUI theme
  return (
    <ThemeProvider theme={createTheme()}>
      <div className="flex flex-col min-h-screen">
        <Sidebar />
        <div className="flex-1">
          <div className="max-w-6xl mx-auto px-4">
            {children}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
