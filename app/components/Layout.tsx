'use client';

import React from 'react';
import Sidebar from './Sidebar';

type LayoutProps = {
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <div className="w-1/5 bg-[#084c41] min-h-screen">
        <Sidebar />
      </div>
      <div className="w-4/5">
        {children}
      </div>
    </div>
  );
};

export default Layout; 