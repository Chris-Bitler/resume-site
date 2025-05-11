import Layout from "../components/Layout";
import JobExperience from "../components/pages/experience/JobExperience";

export default function Experience() {
  return (
    <Layout>
      <div className="h-full p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Experience</h1>
        <JobExperience
          jobName="Software Engineer 2"
          companyName="Intuit"
          startDate={new Date("2021-05-01")}
          endDate={new Date("2025-05-01")}
          experience={[
            "Executed full-stack development, primarily focusing on front-end solutions for Quickbooks Capital within Quickbooks Online.",
            "Navigated complex compliance regulations in the capital lending sector, ensuring adherence to industry standards.",
            "Developed and maintained a tool for automatic generation of Typescript definitions from OpenAPI schemas, streamlining updates.",
            "Collaborated with cross-functional teams using Agile methodologies, driving feature implementation and enhancing user retention.",
            "Created and maintained features in the UI using React, Typescript, and SCSS that improved user experience and increased signup and loan volume.",
            "Created and enhanced tests on the UI using Jest and react-testing-library for unit tests and Playwright for functional/integration tests. Used JUnit and Mockito for backend unit tests and Karate for functional/integration tests,",
          ]}
        />
        <JobExperience
          jobName="Software Engineer 1"
          companyName="Intuit"
          startDate={new Date("2020-05-01")}
          endDate={new Date("2021-05-01")}
          experience={[
            "Developed front-end features for Quickbooks Checking in Quickbooks Online.",
            "Utilized React/Typescript/SCSS to implement features and fixes efficiently in the UI to improve our users' experiences, surface new insights to them, and increase user retention/signup volume.",
            "Created new tests and enhanced existing tests using Jest and react-testing-library, along with using Playwright for functional/integration testing.",
            "Participated in agile scrum team, driving projects forward through collaboration and communication.",
          ]}
        />
        <JobExperience
          jobName="Software Engineer Co-op"
          companyName="Intuit"
          startDate={new Date("2019-05-01")}
          endDate={new Date("2019-12-01")}
          experience={[
            "Developed front-end features for Payments Onboarding in Quickbooks Online.",
            "Utilized React/Typescript/SCSS to implement features and fixes efficiently in the UI to improve our users' experiences, streamline the user application process, and integrate with other existing features from other teams.",
            "Created new tests and enhanced existing tests using Jest and react-testing-library, along with using Webdriver for functional/integration testing.",
            "Participated in agile scrum team, driving projects forward through collaboration and communication.",
          ]}
        />
        <JobExperience
          jobName="Software Engineer Co-op"
          companyName="Datto"
          experience={[
            "Developed scalable software to run on a backup & disaster recovery appliance in PHP.",
            "Implemented backup appliance user interface with HTML/CSS/JavaScript.",
            "Created new tests and enhanced existing tests using Jest and react-testing-library, along with using Webdriver for functional/integration testing.",
            "Participated in agile scrum team, driving projects forward through collaboration and communication.",
          ]}
        />
      </div>
    </Layout>
  );
}
