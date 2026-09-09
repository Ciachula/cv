import type { TestimonialsSection } from '@/types/sections/testimonials-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { linkedin, website } from '../helpers/links';

const testimonialsSectionData = {
  config: {
    title: 'Courses',
    slug: 'Courses',
    icon: 'fa6-solid:trophy',
    visible: true,
  },
  testimonials: [
        {
      image: import('@/assets/testimonials/course8.jpg'),
      author: 'Python for Data Analysis',
      relation: 'Crappy Data',
      content:
        'This intensive 6-month Python program covered data analysis and visualization (Pandas, Matplotlib, Seaborn), statistics, and introductory machine learning with Scikit-learn.',
      links: [website({ url: 'https://certificate.certesto.com/2d7940cb-b162-4402-9259-bd2e0c5b1e13' })],
    },
    {
      image: import('@/assets/testimonials/course7.png'),
      author: 'Fabric Data Engineer Associate',
      relation: 'Microsoft',
      content:
        'Skills measured: Implement and manage an analytics solution, Ingest and transform data, Monitor and optimize an analytics solution',
      links: [website({ url: 'https://learn.microsoft.com/en-us/users/bartoszkasperczak-0442/credentials/30cf24a49b460905' })],
    },
    {
      image: import('@/assets/testimonials/course6.png'),
      author: 'Fabric Analytics Engineer Associate',
      relation: 'Microsoft',
      content:
        'Skills measured: Maintain a data analytics solution, Prepare data, Implement and manage a semantic models',
      links: [website({ url: 'https://learn.microsoft.com/api/credentials/share/en-us/BartoszKasperczak-0442/439FFB11130F186C' })],
    },
      {
      image: import('@/assets/testimonials/course5.png'),
      author: 'Power BI Data Analyst Associate',
      relation: 'Microsoft',
      content:
        'Skills measured: Prepare the data, Model the data, Visualize and analyze the data, Manage and secure Power BI',
      links: [website({ url: 'https://learn.microsoft.com/en-us/users/bartoszkasperczak-0442/credentials/4cfc9548210808a1' })],
    },/*
    {
      image: import('@/assets/testimonials/course5.png'),
      author: 'Python in Data Analysis',
      relation: 'Crappy Data',
      content:
        'Praesent nec congue elit. Vestibulum lobortis congue ipsum, a gravida mi tempus ac. Mauris aliquet purus nibh, vel varius turpis tempus non. Nullam eget ultricies orci. Quisque nulla ante, auctor eget varius ac, imperdiet nec magna.',
      links: [website({ url: '#' })],
    },*/
    {
      image: import('@/assets/testimonials/course1.jpg'),
      author: 'Advanced DAX',
      relation: 'Maven Analytics',
      content:
        'The course teaches advanced DAX in Microsoft Power BI through hands-on projects, where you analyze real-world business data, optimize performance, and deliver data-driven insights.',
      links: [website({ url: 'https://certificates.mavenanalytics.io/0df5ca9b-23f7-425a-b911-230ef46b510f#acc.SGRJmDeb' })],
    },
     {
      image: import('@/assets/testimonials/course3.jpg'),
      author: 'B2 Business Vantage',
      relation: 'English Club - British Council Examinations Centre',
      content:
        'One of the Cambridge English Qualifications based on everyday work and business tasks which is designed to develop business English skills.',
      links: [website({ url: 'https://www.cambridgeenglish.org/' })],
    },
     {
      image: import('@/assets/testimonials/course4.png'),
      author: 'Low-code Maker Course Completion',
      relation: 'Microsoft Power Up Program',
      content:
        'Program about fundamentals of Microsoft Power Platform.',
      links: [website({ url: 'https://www.credly.com/badges/c9d0339b-2510-4160-97ed-c8a0ca66706b' })],
    },
    {
      image: import('@/assets/testimonials/course2.png'),
      author: 'Google Data Analytics Professional Certificate',
      relation: 'Google Career Certificate',
      content:
        'Certificate to start path to become data analyst in the future.',
      links: [website({ url: 'https://www.credly.com/badges/94d8eb79-74b1-4a54-a6d0-e3d54b038961' })],
    },
  ],
} as const satisfies ReadonlyDeep<TestimonialsSection>;

export default testimonialsSectionData;
