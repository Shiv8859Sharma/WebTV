import ArticleGrid from "@/components/article/articleGrid";

const categoriesData = [
  {
    title: "Turai",
    articles: [
      {
        title: "UK interest rate cut hopes raised as wage growth slows",
        date: new Date("10-14-2023 18:14"),
        category: "News",
      },
      {
        title: "American equal pay icon Lilly Ledbetter dies aged 86",
        date: new Date("10-14-2022 18:14"),
        category: "US & Canada",
      },
      {
        title:
          "‘I lost £165k to fraud in an hour’ - customers say they were let down by Revolut",
        date: new Date("10-14-2024 18:14"),
        category: "News",
      },
    ],
  },
  {
    title: "Amurka",
    articles: [
      {
        title: "UK interest rate cut hopes raised as wage growth slows",
        date: new Date("10-14-2024 18:14"),
        category: "Sport",
      },
      {
        title: "American equal pay icon Lilly Ledbetter dies aged 86",
        date: new Date("10-14-2024 18:14"),
        category: "Sport",
      },
      {
        title:
          "‘I lost £165k to fraud in an hour’ - customers say they were let down by Revolut",
        date: new Date("10-14-2024 18:14"),
        category: "Sport",
      },
    ],
  },
  {
    title: "Asiya-Pacific",
    articles: [
      {
        title: "UK interest rate cut hopes raised as wage growth slows",
        date: new Date("10-21-2024 19:19"),
        category: "Business",
      },
      {
        title: "American equal pay icon Lilly Ledbetter dies aged 86",
        date: new Date(),
        category: "US & Canada",
      },
      {
        title:
          "‘I lost £165k to fraud in an hour’ - customers say they were let down by Revolut",
        date: new Date("10-21-2024 19:15"),
        category: "Business",
      },
    ],
  },
  {
    title: "Gabas ta Tsakiya",
    articles: [
      {
        title: "Why there's a rush of African satellite launches",
        date: new Date("10-14-2024 18:14"),
        category: "Afirka",
      },
      {
        title: "Elon Musk accused of copying designs by I, Robot director",
        date: new Date("10-14-2024 18:14"),
        category: "Technology",
      },
      {
        title: "What may lurk in alien oceans?",
        date: new Date("10-14-2024 18:14"),
        category: "Future",
      },
    ],
  },
];

export default function WasaGrid() {
  return (
    <div className="flex justify-center">
      <div className="max-w-5xl w-full bg-white shadow-md rounded-lg overflow-hidden">
        <ArticleGrid categories={categoriesData} className="" />
      </div>
    </div>
  );
}
