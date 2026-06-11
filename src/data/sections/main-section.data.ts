import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github, linkedin } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/image.jpeg'),
  fullName: 'Bartosz Kasperczak',
  role: 'Senior Reporting Analyst',
  details: [
    { label: 'Phone', value: '+48 508 905 717', url: 'tel:+48 508 905 717' },
    { label: 'Email', value: 'kasperczakbartosz.bi@gmail.com', url: 'mailto:kasperczakbartosz.bi@gmail.com' },
    { label: 'From', value: 'Poznań, Poland' },
    { label: 'Contract type', value: 'B2B/Permanent employment' },
  ],
  pdfDetails: [
    { label: 'Phone', value: '+48 508 905 717' },
    { label: 'Email', value: 'kasperczakbartosz.bi@gmail.com' },
    { label: 'LinkedIn', value: 'in/bartoszkasperczak/', url: 'https://www.linkedin.com/in/bartoszkasperczak/' },
    { label: 'GitHub', value: '/Ciachula', url: 'https://github.com/Ciachula' },
    { label: 'Website', value: 'bkdata.dev', url: '/', fullRow: true },
  ],
  description:
    'I’m a BI Developer with 3 years of experience turning complex data into clear, actionable insights. I specialize in designing and maintaining advanced Power BI dashboards, building scalable solutions using analytical tools, and automating processes to improve efficiency. I enjoy collaborating with business stakeholders, sharing knowledge with colleagues, and contributing to innovative data projects. My goal is to deliver high-quality BI solutions that help organizations make informed decisions and drive growth.',
  tags: [{ name: 'Open for freelance' }, { name: 'Available for mentoring' }, { name: 'Open for work in product companies' }],
  action: {
    label: 'Download CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV-Bartosz_Kasperczak.pdf',
  },
  links: [github({ url: 'https://github.com/Ciachula' }), linkedin({ url: 'https://www.linkedin.com/in/bartoszkasperczak/#' })],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
