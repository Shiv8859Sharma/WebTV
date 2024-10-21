import ArticleGrid from "@/components/article/articleGrid";

const categoriesData = [
  {
    title: 'News',
    articles: [
      { title: 'UK interest rate cut hopes raised as wage growth slows', date: new Date('10-14-2024 18:14'), category: 'News' },
      { title: 'American equal pay icon Lilly Ledbetter dies aged 86', date: new Date('10-14-2024 18:14'), category: 'US & Canada' },
      { title: '‘I lost £165k to fraud in an hour’ - customers say they were let down by Revolut', date: new Date('10-14-2024 18:14'), category: 'News' },
    ],
  },
  {
    title: 'Sport',
    articles: [
      { title: 'UK interest rate cut hopes raised as wage growth slows', date: new Date('10-14-2024 18:14'), category: 'Sport' },
      { title: 'American equal pay icon Lilly Ledbetter dies aged 86', date: new Date('10-14-2024 18:14'), category: 'Sport' },
      { title: '‘I lost £165k to fraud in an hour’ - customers say they were let down by Revolut', date: new Date('10-14-2024 18:14'), category: 'Sport' },
    ],
  },
  {
    title: 'Business',
    articles: [
      { title: 'UK interest rate cut hopes raised as wage growth slows', date: new Date('10-14-2024 18:14'), category: 'Business' },
      { title: 'American equal pay icon Lilly Ledbetter dies aged 86', date: new Date('10-14-2024 18:14'), category: 'US & Canada' },
      { title: '‘I lost £165k to fraud in an hour’ - customers say they were let down by Revolut', date: new Date('10-14-2024 18:14'), category: 'Business' },
    ],
  },
  {
    title: 'Innovation',
    articles: [
      { title: 'Why there\'s a rush of African satellite launches', date: new Date('10-14-2024 18:14'), category: 'Africa' },
      { title: 'Elon Musk accused of copying designs by I, Robot director', date: new Date('10-14-2024 18:14'), category: 'Technology' },
      { title: 'What may lurk in alien oceans?', date: new Date('10-14-2024 18:14'), category: 'Future' },
    ],
  },
];

export default function HeroGrid() {
  return <ArticleGrid categories={categoriesData} />;
}