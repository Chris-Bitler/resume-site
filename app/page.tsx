import { Box } from '@mui/material';
import Layout from "./components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="h-full p-8 flex justify-center items-center">
        <Box sx={{ width: { xs: '100%', md: '70%' }, textAlign: 'center' }}>
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome</h1>
          <div className="prose prose-lg mx-auto">
            <p className="text-gray-700">
              Senior software engineer specializing in rapidly decoding and
              navigating unfamiliar codebases across diverse technology stacks
              and organizational boundaries. Expert at proactively debugging
              complex, system-wide issues spanning multiple teams and platforms.
              Known for breaking down silos by diving deep into legacy systems,
              third-party integrations, and cross-platform architectures to
              deliver high-impact solutions. Repeatedly recognized for
              automating workflows, improving developer productivity, and
              shipping innovative solutions ahead of schedule through
              exceptional cross-team technical versatility
            </p>
          </div>
        </Box>
      </div>
    </Layout>
  );
}
