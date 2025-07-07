'use client';

import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Layout from '../components/Layout';

import styles from './Experience.module.css';
import ResumeDropdown from './ResumeDropdown';

const ExperienceSection = () => {
  return (
    <Layout>
      <div className={styles['page-padding']}>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Engineering Experience</h1>
      <div className={styles['download-button-container']}>
        <ResumeDropdown />
      </div>
      <Accordion defaultExpanded={true}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">
            Intuit – Software Engineer 2 (2021–2025), Software Engineer (2019–2021)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography paragraph>
          Consistently developed scalable features for QuickBooks Capital and QuickBooks Online, with a focus on improving small
          business access to capital and enhancing platform performance. Drove key initiatives including API integrations, microservices
          migration, and performance optimization. Collaborated with fellow agile teams and improved code quality through robust
          testing and mentorship. Earned 22 peer-nominated Spotlight Awards for project excellence over 4 years.
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Key Projects:
          </Typography>
          <List dense>
            <ListItem>
              <ListItemText
                primary="Mitigated production issues caused by breaking API changes by implementing an automatic OpenAPI schema to Typescript definition generation system via a build pipeline. Earned a Spotlight Award for delivering and presenting a solution that streamlined the development process."
                secondary="Technologies: Groovy, Jenkins CI/CD, OpenAPI Tooling"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Transformed QuickBooks Capital underwriting process by implementing generative AI that automatically analyzes loan applications, detects issues, and provides actionable remediation steps, reducing review times and enabling underwriters to process more applications while maintaining quality."
                secondary="Technologies: Typescript, React, Jest, Generative AI"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Spearheaded development of an AI-powered code migration tool that automatically converts JavaScript to TypeScript, eliminating manual conversion processes and saving engineering hours. Recognized with org-level award (1 of 4 teams to do so) for improving engineering efficiency."
                secondary="Technologies: Generative AI, Node.JS, Typescript"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Championed the redesign of the QuickBooks Line of Credit acceptance flow to boost loan approval rates and increase loan volume. Collaborated cross-functionally with other teams of engineers, designers, and project managers to enhance input error handling and reduce support tickets."
                secondary="Technologies: Typescript, React, React-Query, Playwright, Jest"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Increased line of credit signups among users who declined term loan offers by implementing backend service logic to trigger targeted marketing emails."
                secondary="Technologies: Java, Spring Boot, Camunda"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Led the UI implementation for the QuickBooks Crypto buy/sell/hold feature, delivering full-stack functionality enabling users to purchase, hold, or sell cryptocurrency via custodial wallet partners using funds from QuickBooks Checking."
                secondary="Technologies: Typescript, React, Kotlin, Playwright, Jest"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Initiated and developed the Feedback Service project, creating an integration layer between the UI for QuickBooks Online and the UserVoice platform to streamline feedback collection and enhance form implementation flexibility."
                secondary="Technologies: Java, Spring Boot"
              />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">
            Datto, Inc – Software Engineering Intern (2018)
          </Typography>
        </AccordionSummary>
        <AccordionDetails />
      </Accordion>
      </div>
    </Layout>
  );
};

export default ExperienceSection;