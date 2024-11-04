import ArticleGrid from "@/components/article/articleGrid";

const categoriesData = [
  {
    title: 'AFIRKA',
    articles: [
      { title: 'UK interest rate cut hopes raised as wage growth slows', date: new Date('10-14-2023 18:14'), category: 'News' },
      { title: 'American equal pay icon Lilly Ledbetter dies aged 86', date: new Date('10-14-2022 18:14'), category: 'US & Canada' },
      { title: '‘I lost £165k to fraud in an hour’ - customers say they were let down by Revolut', date: new Date('10-14-2024 18:14'), category: 'News' },
    ],
  },
  {
    title: 'Kasuwanci-Duniya',
    articles: [
      { title: 'UK interest rate cut hopes raised as wage growth slows', date: new Date('10-14-2024 18:14'), category: 'Sport' },
      { title: 'American equal pay icon Lilly Ledbetter dies aged 86', date: new Date('10-14-2024 18:14'), category: 'Sport' },
      { title: '‘I lost £165k to fraud in an hour’ - customers say they were let down by Revolut', date: new Date('10-14-2024 18:14'), category: 'Sport' },
    ],
  },
  {
    title: 'Kasuawanci-Kasar Hausa',
    articles: [
      { title: 'UK interest rate cut hopes raised as wage growth slows', date: new Date('10-21-2024 19:19'), category: 'Business' },
      { title: 'American equal pay icon Lilly Ledbetter dies aged 86', date: new Date(), category: 'US & Canada' },
      { title: '‘I lost £165k to fraud in an hour’ - customers say they were let down by Revolut', date: new Date('10-21-2024 19:15'), category: 'Business' },
    ],
  },
];

export default function KasuwanciHeroGrid() {
  return <ArticleGrid
    categories={categoriesData}
    gridClassName='grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
  />;
}