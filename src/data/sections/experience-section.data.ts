import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, instagram, linkedin, twitter, website } from '../helpers/links';
import {
  postgreSql,
  Excel,
  sql,
  powerQuery,
  powerBI,
  ssrs,
  sqlServer,
  ssms,
  azureSqlDatabase,
  dax,
  ssis,
  excelVBA,
  tableau,
  python,
  pyspark,
  r,
  powerAutomate,
  powerApps,
  docker,
  oracle,
  microsoftFabric,
  microsoftAzure,
  azureDevOps,
  figma,
  powerpoint,
} from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Work experience',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'Senior Reporting Analyst',
      company: 'Carlsberg Shared Services',
      image: import('@/assets/logos/carlsberg.jpg'),
      dates: [new Date('2026-01'), null],
      description: `
        - <b>Developing and Maintaining Reports</b>: designed, enhanced and maintaining advanced PowerBI report to provide data-driven insights for business stakeholders.
        - <b>Process Automation</b>: Building scalable solutions that significantly increased operational efficiency by using Fabric tools and Pyspark language.
        - <b>Stakeholder Collaboration</b>: Communicating with finance stakeholders to ensure alignment with evolving business requirements.
        - <b>Training and Development</b>: Conducted training sessions on Power BI basics, enabling users to effectively learn new tool and analyze data.
        - <b>Mentoring</b>: Mentored newly onboarded team members and actively participated in technical recruitment processes, assessing candidates technical competencies.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [powerBI(), dax(), microsoftFabric(), oracle(),excelVBA(),powerQuery(),powerpoint(),powerAutomate(), python(), pyspark(),azureSqlDatabase(),azureDevOps()],
      },
      links: [linkedin({ url: 'https://www.linkedin.com/company/carlsbergsharedservices' }), website({ url: 'https://www.carlsberggroup.com/who-we-are/about-the-carlsberg-group/carlsberg-shared-services/' })],
    },
    {
      role: 'Reporting Analyst',
      company: 'Carlsberg Shared Services',
      image: import('@/assets/logos/carlsberg.jpg'),
      dates: [new Date('2024-11'), new Date('2026-01')],
      description: `
        - <b>Developing & Enhancing</b>: Building new, insightful reports and implementing smart improvements to existing dashboards.
        - <b>Business Partnering</b>: Collaborating closely with operational and financial teams to gather, translate, and deliver on their reporting requirements.
        - <b>Automation focus</b>: Participating in the automation of reporting processes.
        - <b>Ensuring Quality</b>: Performing robust data validation to guarantee accuracy and consistency the reports.
        - <b>Documentation</b>: Maintaining reporting documentation to ensure knowledge sharing across the team.
        - <b>User Empowerment</b>: Supporting in training sessions to help end-users maximize the value of analytical tools.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [powerBI(), dax(), microsoftFabric(), oracle(),excelVBA(),powerQuery(),powerpoint(),powerAutomate()],
      },
      links: [linkedin({ url: 'https://www.linkedin.com/company/carlsbergsharedservices' }), website({ url: 'https://www.carlsberggroup.com/who-we-are/about-the-carlsberg-group/carlsberg-shared-services/' })],
    },
    {
      role: 'Junior Wholesale Analysis Specialist',
      company: 'Imperial Tobacco Polska S.A',
      image: import('@/assets/logos/imperial2.png'),
      dates: [new Date('2024-04'), new Date('2024-11')],
      description: `
        - Creating visualizations according to the company profile and optimizing measures using DAX language.
        - Creating data models and their relationships from various sources.
        - Taking a practical approach to translating business requirements into technical solutions by actively participating in internal projects.
        - Providing support to the department in daily tasks related to collaborating with Sales and Marketing areas in the analysis of sales data.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [powerBI(), dax(), sqlServer(), ssrs(),ssis(),excelVBA()],
      },
      links: [linkedin({ url: 'https://www.linkedin.com/company/imperial-tobacco-polska' }), website({ url: 'https://imperial-tobacco.pl/' })],
    },
    {
      role: 'Internship in the Sales Operations Department',
      company: 'Imperial Tobacco Polska S.A',
      image: import('@/assets/logos/imperial2.png'),
      dates: [new Date('2023-01'), new Date('2024-04')],
      description: `
        - Gaining and expanding knowledge in the field of analyzing large volumes of data.
        - Practical use of the following tools: SQL Server, Power BI, Oracle Business Intelligence.
        - Actively participating in departmental projects and carrying out tasks under the supervision of a mentor.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [powerBI(), dax(), sqlServer(), ssrs(),Excel()],
      },
      links: [linkedin({ url: 'https://www.linkedin.com/company/imperial-tobacco-polska' }), website({ url: 'https://imperial-tobacco.pl/' })],
    },
    {
      role: 'Finance Assistant',
      company: 'Łazienkaplus.pl',
      image: import('@/assets/logos/lazienkaplus.png'),
      dates: [new Date('2021-07'), new Date('2022-12')],
      description: `
        - Administrative support during budget preparation.
        - Creating reports for the company's needs using BI tools.
        - Conducting ad‑hoc analyses of data and participating in internal projects.
        - Preparation of statements and reports in the area of controlling with their presentation
      `,
      tagsList: {
        title: 'Technologies',
        tags: [Excel(), excelVBA(), powerpoint()],
      },
      links: [linkedin({ url: 'https://www.linkedin.com/company/%C5%82azienkaplus-pl' }), website({ url: 'https://www.lazienkaplus.pl/' })],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
