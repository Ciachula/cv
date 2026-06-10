import createSkillFactory from '@/data/_internals/create-skill-factory';

/*

Place where you can define all your skills.
This way, you can ensure one skill has the same name, icon, and URL among all resume sections.

Where skills are used:
- experience-section.data.ts
- portfolio-section.data.ts
- skills-section.data.ts

Usage examples:
skill() — returns skill object without any customizations.
skill({ level: 3 }) — returns a levelled-skill. It can be used only in skills-section.data.ts.
skill({ name: '...' }) — returns skill object with a custom name.
skill({ description: '...' }) — returns skill with a description displayed when user hovers over it.

*/


export const postgreSql = createSkillFactory({
  name: 'PostgreSQL',
  icon: 'simple-icons:postgresql',
  iconColor: '#4169E1',
  url: 'https://www.postgresql.org/',
});


export const Excel = createSkillFactory({
  name: 'Excel',
  icon: 'simple-icons:microsoftexcel',
  iconColor: '#217346',
  url: 'https://www.microsoft.com/microsoft-365/excel',
});
export const sql = createSkillFactory({
  name: 'SQL',
  icon: 'simple-icons:mysql',
  iconColor: '#4479A1',
  url: 'https://en.wikipedia.org/wiki/SQL',
});

export const powerQuery = createSkillFactory({
  name: 'Power Query',
  icon: 'simple-icons:microsoftexcel',
  iconColor: '#217346',
  url: 'https://learn.microsoft.com/power-query/',
});

export const powerBI = createSkillFactory({
  name: 'Power BI',
  icon: 'simple-icons:powerbi',
  iconColor: '#F2C811',
  url: 'https://powerbi.microsoft.com/',
});

export const ssrs = createSkillFactory({
  name: 'SSRS',
  icon: 'simple-icons:microsoftsqlserver',
  iconColor: '#CC2927',
  url: 'https://learn.microsoft.com/sql/reporting-services/',
});

export const sqlServer = createSkillFactory({
  name: 'Microsoft SQL Server',
  icon: 'simple-icons:microsoftsqlserver',
  iconColor: '#CC2927',
  url: 'https://www.microsoft.com/sql-server',
});

export const dax = createSkillFactory({
  name: 'DAX',
  icon: 'simple-icons:powerbi',
  iconColor: '#F2C811',
  url: 'https://learn.microsoft.com/dax/',
});

export const ssis = createSkillFactory({
  name: 'SSIS',
  icon: 'simple-icons:microsoftsqlserver',
  iconColor: '#CC2927',
  url: 'https://learn.microsoft.com/sql/integration-services/',
});

export const excelVBA = createSkillFactory({
  name: 'Excel VBA & Macros',
  icon: 'simple-icons:microsoftexcel',
  iconColor: '#217346',
  url: 'https://learn.microsoft.com/office/vba/api/overview/excel',
});

export const tableau = createSkillFactory({
  name: 'Tableau',
  icon: 'simple-icons:tableau',
  iconColor: '#E97627',
  url: 'https://www.tableau.com/',
});

export const python = createSkillFactory({
  name: 'Python',
  icon: 'simple-icons:python',
  iconColor: '#3776AB',
  url: 'https://www.python.org/',
});

export const r = createSkillFactory({
  name: 'R',
  icon: 'simple-icons:r',
  iconColor: '#276DC3',
  url: 'https://www.r-project.org/',
});

export const powerAutomate = createSkillFactory({
  name: 'Power Automate',
  icon: 'simple-icons:microsoft',
  iconColor: '#0066FF',
  url: 'https://powerautomate.microsoft.com/',
});

export const powerApps = createSkillFactory({
  name: 'Power Apps',
  icon: 'simple-icons:microsoft',
  iconColor: '#742774',
  url: 'https://powerapps.microsoft.com/',
});

export const docker = createSkillFactory({
  name: 'Docker',
  icon: 'simple-icons:docker',
  iconColor: '#2496ED',
  url: 'https://www.docker.com/',
});

export const oracle = createSkillFactory({
  name: 'Oracle',
  icon: 'simple-icons:oracle',
  iconColor: '#F80000',
  url: 'https://www.oracle.com/',
});

export const microsoftFabric = createSkillFactory({
  name: 'Microsoft Fabric',
  icon: 'simple-icons:microsoft',
  iconColor: '#5E5E5E',
  url: 'https://www.microsoft.com/microsoft-fabric',
});

export const figma = createSkillFactory({
  name: 'Figma',
  icon: 'simple-icons:figma',
  iconColor: '#F24E1E',
  url: 'https://www.figma.com/',
});

export const powerpoint = createSkillFactory({
  name: 'Microsoft PowerPoint',
  icon: 'simple-icons:microsoftpowerpoint',
  iconColor: '#B7472A',
  url: 'https://www.microsoft.com/microsoft-365/powerpoint',
});
export const ssms = createSkillFactory({
  name: 'SSMS',
  icon: 'simple-icons:microsoftsqlserver',
  iconColor: '#CC2927',
  url: 'https://learn.microsoft.com/sql/ssms/',
});

export const azureSqlDatabase = createSkillFactory({
  name: 'Azure SQL Database',
  icon: 'simple-icons:microsoftazure',
  iconColor: '#0078D4',
  url: 'https://azure.microsoft.com/products/azure-sql/database/',
});

export const azureDevOps = createSkillFactory({
  name: 'Azure DevOps',
  icon: 'simple-icons:azuredevops',
  iconColor: '#0078D7',
  url: 'https://azure.microsoft.com/products/devops/',
});

export const microsoftAzure = createSkillFactory({
  name: 'Microsoft Azure',
  icon: 'simple-icons:microsoftazure',
  iconColor: '#0078D4',
  url: 'https://azure.microsoft.com/',
});

export const pyspark = createSkillFactory({
  name: 'PySpark',
  icon: 'simple-icons:apachespark',
  iconColor: '#E25A1C',
  url: 'https://spark.apache.org/docs/latest/api/python/',
});
export const snowflake = createSkillFactory({
  name: 'Snowflake',
  icon: 'simple-icons:snowflake',
  iconColor: '#29B5E8',
  url: 'https://www.snowflake.com/',
});