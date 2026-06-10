import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Education',
    slug: 'education',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: 'Finance and Accounting',
      institution: 'Poznań University of Economics and Business',
      image: import('@/assets/logos/poznan-university-of-economics.jpg'),
      dates: [new Date('2021.09'), new Date('2023.07')],
      description: 'Master degree. Specialization in Finance and Accounting of the enterprises.',
      links: [website({ url: '#' })],
    },
    {
      title: 'Finance and Accounting',
      institution: 'Poznań University of Economics and Business',
      image: import('@/assets/logos/poznan-university-of-economics.jpg'),
      dates: [new Date('2018.09'), new Date('2021.07')],
      description: "Bachelor's degree. Specialization in Finance and Accounting of the enterprises.",
      links: [website({ url: '#' })],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;
