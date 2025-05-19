"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Box, Drawer, IconButton, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { usePathname } from "next/navigation";
import styles from "./Sidebar.module.css";
import { useTheme } from "@mui/material/styles";
import classNames from "classnames";

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const [openOnMobile, setOpenOnMobile] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const variant = isMobile ? "temporary" : "permanent";
  const open = isMobile ? openOnMobile : true;

  const handleDrawerToggle = () => {
    setOpenOnMobile(!openOnMobile);
  };

  const drawerButton = (
    <IconButton
      color="inherit"
      aria-label="open drawer"
      edge="start"
      onClick={handleDrawerToggle}
      className={styles.drawerButton}
    >
      <MenuIcon />
    </IconButton>
  );

  const drawerButtonWithContainer = (
    <Box className={styles.smallSidebar} sx={{ display: { sm: "none" } }}>
      {drawerButton}
    </Box>
  );

  const drawerContent = (
    <div className={styles.sidebarContainer}>
      <h2
        className={classNames(styles.name, {
          [styles["name-padding"]]: !isMobile,
        })}
      >
        Christopher Bitler
      </h2>
      <p className={styles.title}>Senior Software Engineer</p>
      <Link href="mailto:chris@cbitler.io">
        <p className={styles.email}>chris@cbitler.io</p>
      </Link>
      <div className={styles.divider}></div>
      <img
        src="/chris.png"
        alt="Christopher Bitler"
        className={styles.profileImage}
      />
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
      <nav>
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
    </div>
  );

  return (
    <div className={styles.sidebarContainer}>
      {isMobile && drawerButtonWithContainer}
      <Drawer
        variant={variant}
        open={open}
        onClose={() => setOpenOnMobile(false)}
        className={styles.sidebarDrawer}
        classes={{
          paper: styles.sidebarDrawerPaper,
        }}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
      >
        {isMobile && drawerButton}
        {drawerContent}
      </Drawer>
    </div>
  );
};

export default Sidebar;
