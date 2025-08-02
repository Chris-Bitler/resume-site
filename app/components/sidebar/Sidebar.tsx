"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { usePathname } from "next/navigation";
import styles from "./Sidebar.module.css";

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const [openOnMobile, setOpenOnMobile] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDropdownToggle = () => {
    setOpenOnMobile(!openOnMobile);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenOnMobile(false);
      }
    };

    if (openOnMobile) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openOnMobile]);

  return (
    <header className={styles.navbar}>
      <div className={styles.navbarContent}>
        <div className={styles.leftSection}>
          <img
            src="/chris.png"
            alt="Christopher Bitler"
            className={styles.navProfileImage}
          />
          <div className={styles.nameSection}>
            <h1 className={styles.navName}>Christopher Bitler</h1>
            <p className={styles.navTitle}>Senior Software Engineer</p>
          </div>
        </div>

        <nav className={styles.desktopNav}>
          <ul className={styles.navList}>
            <li>
              <Link
                href="/"
                className={`${styles.navLink} ${
                  pathname === "/" ? styles.activeLink : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/experience"
                className={`${styles.navLink} ${
                  pathname === "/experience" ? styles.activeLink : ""
                }`}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={`${styles.navLink} ${
                  pathname === "/blog" ? styles.activeLink : ""
                }`}
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.rightSection}>
          <div className={styles.socialLinks}>
            <a
              href="https://github.com/Chris-Bitler"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="GitHub Profile"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/cbitler/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon />
            </a>
          </div>
          <Link href="mailto:cbitler@cbitler.io" className={styles.emailLink}>
            cbitler@cbitler.io
          </Link>
        </div>

        <div className={styles.mobileMenuContainer} ref={dropdownRef}>
          <IconButton
            color="inherit"
            aria-label="open menu"
            edge="start"
            onClick={handleDropdownToggle}
            className={styles.mobileMenuButton}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {openOnMobile && (
            <div className={styles.mobileDropdown}>
              <nav className={styles.mobileNav}>
                <Link
                  href="/"
                  className={`${styles.mobileNavLink} ${
                    pathname === "/" ? styles.activeLink : ""
                  }`}
                  onClick={() => setOpenOnMobile(false)}
                >
                  Home
                </Link>
                <Link
                  href="/experience"
                  className={`${styles.mobileNavLink} ${
                    pathname === "/experience" ? styles.activeLink : ""
                  }`}
                  onClick={() => setOpenOnMobile(false)}
                >
                  Experience
                </Link>
                <Link
                  href="/blog"
                  className={`${styles.mobileNavLink} ${
                    pathname === "/blog" ? styles.activeLink : ""
                  }`}
                  onClick={() => setOpenOnMobile(false)}
                >
                  Blog
                </Link>
              </nav>
              
              <div className={styles.mobileSocialRow}>
                <a
                  href="https://github.com/Chris-Bitler"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="GitHub Profile"
                >
                  <GitHubIcon />
                </a>
                <a
                  href="https://www.linkedin.com/in/cbitler/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="LinkedIn Profile"
                >
                  <LinkedInIcon />
                </a>
              </div>
              
              <div className={styles.mobileEmailRow}>
                <Link
                  href="mailto:cbitler@cbitler.io"
                  className={styles.mobileEmailLink}
                  onClick={() => setOpenOnMobile(false)}
                >
                  cbitler@cbitler.io
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Sidebar;
