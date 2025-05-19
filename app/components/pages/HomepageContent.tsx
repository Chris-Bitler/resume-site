import { Box, Typography, Container } from '@mui/material';

const HomepageContent = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ width: '50%' }}>
          <Typography variant="h3" component="h1" sx={{ mb: 3, color: 'text.primary', fontWeight: 'bold' }}>
            Welcome
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
            I am a software engineer with seven years of experience,
            specializing in delivering high-quality software solutions. Proven
            in tackling complex challenges and building innovative features to
            enhance user experience. Committed to continuous learning and
            growth, with a focus on advancing to Senior Software Engineer.
            Excels in collaboration, driving successful project completion
            through teamwork and communication. Detail-oriented engineer who
            keeps projects on track by identifying potential issues early. Uses
            analytical thinking to solve complex problems and develop innovative
            solutions.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default HomepageContent; 