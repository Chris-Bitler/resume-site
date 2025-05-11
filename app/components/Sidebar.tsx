'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="min-h-screen p-4 text-white text-center sticky top-0">
      <h2 className="text-xl font-bold mb-1">Christopher Bitler</h2>
      <p className="text-xs text-white/80 mb-4">Senior Software Engineer</p>
      <div className="w-20 h-0.5 bg-white/20 mx-auto mb-4"></div>
      <img 
        src="/chris.png" 
        alt="Christopher Bitler" 
        className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
      />
      <nav>
        <ul className="space-y-2">
          <li>
            <Link 
              href="/" 
              className={`block hover:text-gray-300 ${pathname === '/' ? 'font-bold' : ''}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/experience" 
              className={`block hover:text-gray-300 ${pathname === '/experience' ? 'font-bold' : ''}`}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link 
              href="/blog" 
              className={`block hover:text-gray-300 ${pathname === '/blog' ? 'font-bold' : ''}`}
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar; 