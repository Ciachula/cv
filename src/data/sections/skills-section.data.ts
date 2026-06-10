import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  postgreSql,
  Excel,
  powerQuery,
  powerBI,
  ssrs,
  sqlServer,
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
  oracle,
  microsoftFabric,
  microsoftAzure,
  azureDevOps,
  figma,
  powerpoint,
  snowflake,
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Skills',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: 'I already know',
      skills: [
        powerBI({level: 5,}),
        dax({level: 5,}),
        microsoftFabric({level: 5,}),
        Excel({ level: 5 }),
        powerQuery({ level: 5 }),
        excelVBA({ level: 5 }),
        powerApps({ level: 2 }),
        powerAutomate({ level: 4 }),
        sqlServer({ level: 4 }),
        ssrs({ level: 5 }),
        ssis({ level: 2 }),
        oracle({ level: 3 }),
        tableau({ level: 2 }),
        figma({ level: 3 }),
        powerpoint({ level: 4 }),
        azureDevOps({ level: 2 }),
        python({ level: 3 }),
        pyspark({ level: 3 }),
        azureSqlDatabase({ level: 2 }),
        r({ level: 1 }),
      ],
    },
    {
      title: 'I want to learn',
      skills: [postgreSql(), microsoftAzure(), snowflake()],
    },
    {
      title: 'I speak',
      skills: [
        { icon: 'circle-flags:pl', name: 'Polish - native' },
        { icon: 'circle-flags:us', name: 'English - B2' },
        { icon: 'circle-flags:es-variant', name: 'Spanish - B1' },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
