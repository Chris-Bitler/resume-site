import Layout from './components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="h-full p-8 flex">
        <div className="w-1/2">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome</h1>
          <div className="prose">
            <p className="text-gray-700">
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
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
} 