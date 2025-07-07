"use client";

import React, { useState } from 'react';
import {
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  KeyboardArrowDown as KeyboardArrowDownIcon,
  PictureAsPdf as PdfIcon,
  Description as DocIcon,
} from '@mui/icons-material';
import styles from './Experience.module.css';

const ResumeDropdown: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDownload = (format: 'pdf' | 'docx') => {
    const url = format === 'pdf' ? '/resume.pdf' : '/resume.docx';
    const link = document.createElement('a');
    link.href = url;
    link.download = `Christopher_Bitler_Resume.${format}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    handleClose();
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        className={styles.resumeButton}
      >
        Download Resume
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={() => handleDownload('pdf')}>
          <ListItemIcon>
            <PdfIcon className={styles.pdfIcon} />
          </ListItemIcon>
          <ListItemText>PDF Version</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => handleDownload('docx')}>
          <ListItemIcon>
            <DocIcon className={styles.docxIcon} />
          </ListItemIcon>
          <ListItemText>DOCX Version</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
};

export default ResumeDropdown; 