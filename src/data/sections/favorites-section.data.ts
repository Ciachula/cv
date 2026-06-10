import type { FavoritesSection } from '@/types/sections/favorites-section.types';
import type { ReadonlyDeep } from 'type-fest';

const favoritesSectionData = {
  config: {
    title: 'My favorites',
    slug: 'favorites',
    icon: 'fa6-solid:star',
    visible: true,
  },
  books: {
    title: 'Books I read',
    data: [
      {
        image: import('@/assets/favorites/books/book1.jpg'),
        title: 'Storytelling with Data',
        author: 'Cole Nussbaumer Knaflic',
        url: 'https://www.goodreads.com/book/show/26535513-storytelling-with-data',
      },
      {
        image: import('@/assets/favorites/books/book2.jpg'),
        title: 'SQL for Data Analysis',
        author: 'Cathy Tanimura',
        url: 'https://www.goodreads.com/book/show/58230353-sql-for-data-analysis',
      },
                  {
        image: import('@/assets/favorites/books/book5.jpg'),
        title: 'The Definitive Guide to DAX',
        author: 'Marco Russo, Alberto Ferrari',
        url: 'https://www.goodreads.com/book/show/51171375-the-definitive-guide-to-dax',
      },
      {
        image: import('@/assets/favorites/books/book4.jpg'),
        title: 'Extreme DAX',
        author: 'Michiel Rozema, Henk Vlootman',
        url: 'https://www.goodreads.com/book/show/60453924-extreme-dax',
      },
      {
        image: import('@/assets/favorites/books/book3.jpg'),
        title: 'Collect, Combine, and Transform Data Using Power Query in Excel and Power BI',
        author: 'Raviv Gil',
        url: 'https://www.goodreads.com/book/show/42123925-collect-combine-and-transform-data-using-power-query-in-excel-and-powe',
      },
            {
        image: import('@/assets/favorites/books/book6.jpg'),
        title: 'Extending Power BI with Python and R',
        author: 'Luca Zavarella',
        url: 'https://www.goodreads.com/book/show/59705965-extending-power-bi-with-python-and-r',
      },
            {
        image: import('@/assets/favorites/books/book8.jpg'),
        title: 'Expert Data Modeling with Power BI',
        author: 'Soheil Bakhshi',
        url: 'https://www.goodreads.com/book/show/58323802-expert-data-modeling-with-power-bi',
      },
                  {
        image: import('@/assets/favorites/books/book7.jpg'),
        title: 'Mastering Microsoft Power BI',
        author: 'Greg Deckler, Brett Powell',
        url: 'https://www.goodreads.com/book/show/62009776-mastering-microsoft-power-bi',
      },
    ],
  },
  people: {
    title: 'People I learn from',
    data: [
      {
        image: import('@/assets/favorites/people/person1.jpg'),
        name: 'Injae Park',
        url: 'https://www.linkedin.com/in/injae-park/',
      },
      {
        image: import('@/assets/favorites/people/person2.jpg'),
        name: 'Gustaw Dudek',
        url: 'https://www.linkedin.com/in/gustaw-dudek/',
      },
      {
        image: import('@/assets/favorites/people/person3.jpg'),
        name: 'Alex Freberg',
        url: 'https://www.linkedin.com/in/alex-freberg/',
      },
      {
        image: import('@/assets/favorites/people/person4.jpg'),
        name: 'Fernan Espejo',
        url: 'https://www.linkedin.com/in/fernan-espejo/',
      },
      {
        image: import('@/assets/favorites/people/person5.jpg'),
        name: 'Michel van Schaik',
        url: 'https://www.linkedin.com/in/michel-van-schaik/',
      },
      {
        image: import('@/assets/favorites/people/person6.jpg'),
        name: 'Adrian Chodkowski',
        url: 'https://www.linkedin.com/in/adriansql/',
      },
    ],
  },
  medias: {
    title: 'Media I follow',
    data: [
      {
        image: import('@/assets/favorites/media/media1.jpg'),
        title: 'Guy in a Cube',
        type: 'YouTube channel',
        url: 'https://www.youtube.com/@GuyInACube',
      },
      {
        image: import('@/assets/favorites/media/media2.jpg'),
        title: 'How to Power BI',
        type: 'YouTube channel',
        url: 'https://www.youtube.com/@HowtoPowerBI',
      },
      {
        image: import('@/assets/favorites/media/media3.jpg'),
        title: 'Enterprise DNA',
        type: 'YouTube channel',
        url: 'https://www.youtube.com/@EnterpriseDNA',
      },
      {
        image: import('@/assets/favorites/media/media4.png'),
        title: 'SQLBI',
        type: 'YouTube channel',
        url: 'https://www.youtube.com/@SQLBI',
      },
      {
        image: import('@/assets/favorites/media/media5.jpg'),
        title: 'Maven Analytics',
        type: 'YouTube channel',
        url: 'https://www.youtube.com/@MavenAnalytics',
      },
      {
        image: import('@/assets/favorites/media/media6.png'),
        title: 'Zebra BI',
        type: 'YouTube channel',
        url: 'https://www.youtube.com/@ZebraBI',
      },
    ],
  },
} as const satisfies ReadonlyDeep<FavoritesSection>;

export default favoritesSectionData;
