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
      <div className="flex min-h-screen">
        <Sidebar />
        <div>{children}</div>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
