import { memo } from "react";
import ImageElement from "@/components/ImageElement";
import ArticleMeta from "@/components/articleMeta/articleMeta";
import ArticleHeading from "@/components/article/articleHeading";
import ArticleTitle from "@/components/article/articleTitle";
import { PlayCircleIcon } from "@heroicons/react/16/solid";

const Yanayi_a_yau_hero_section = () => {
  const mainArticle = {
    image:
      "https://ichef.bbci.co.uk/ace/standard/1024/cpsprodpb/db34/live/7c90ca90-8a08-11ef-b6b0-c9af5f7f16e4.jpg.webp",
    title: "Amazon Shoppers Are Ditching Designer Belts for This Best-Selling",
    description:
      "Hurricanes are ranked by wind speed, which leaves out the cause of 90% of deaths during extreme storms. Scientists are racing to update the imperfect system we rely on to warn just how deadly a storm will be.",
  };
  const listArticles = [
    {
      title: "Boba tea company apologises over Canada Dragon's Den row",
      description:
        "Marvel actor Simu Liu accused Canadian entrepreneurs of culturally appropriating the Taiwanese drink.",
      date: new Date("10-14-2024 18:14"),
    },
    {
      title: "Boba tea company apologises over Canada Dragon's Den row",
      description:
        "Marvel actor Simu Liu accused Canadian entrepreneurs of culturally appropriating the Taiwanese drink.",
      date: new Date("10-14-2024 18:14"),
    },
    {
      title: "Boba tea company apologises over Canada Dragon's Den row",
      description:
        "Marvel actor Simu Liu accused Canadian entrepreneurs of culturally appropriating the Taiwanese drink.",
      date: new Date("10-14-2024 18:14"),
    },
    {
      title: "Boba tea company apologises over Canada Dragon's Den row",
      description:
        "Marvel actor Simu Liu accused Canadian entrepreneurs of culturally appropriating the Taiwanese drink.",
      date: new Date("10-14-2024 18:14"),
    },
    // Add more list articles...
  ];
  const categoriesData = [
    {
      title: "News",
      articles: [
        {
          title: "UK interest rate cut hopes raised as wage growth slows",
          date: new Date("10-14-2024 18:14"),
          category: "News",
        },
        {
          title: "American equal pay icon Lilly Ledbetter dies aged 86",
          date: new Date("10-14-2024 18:14"),
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
      title: "Sport",
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
      title: "Business",
      articles: [
        {
          title: "UK interest rate cut hopes raised as wage growth slows",
          date: new Date("10-14-2024 18:14"),
          category: "Business",
        },
        {
          title: "American equal pay icon Lilly Ledbetter dies aged 86",
          date: new Date("10-14-2024 18:14"),
          category: "US & Canada",
        },
        {
          title:
            "‘I lost £165k to fraud in an hour’ - customers say they were let down by Revolut",
          date: new Date("10-14-2024 18:14"),
          category: "Business",
        },
      ],
    },
    {
      title: "Innovation",
      articles: [
        {
          title: "Why there's a rush of African satellite launches",
          date: new Date("10-14-2024 18:14"),
          category: "Africa",
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
  return (
    <section className="container mx-auto md:mt-10">
      <div className="flex flex-col md:flex-row items-stretch gap-3">
        {/* Main Article */}
        <div className="w-full md:w-2/3">
          <article className="flex flex-col h-full">
            <div className="relative">
              <PlayCircleIcon className="h-20 w-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white opacity-80" />
              <ImageElement
                src={mainArticle.image}
                className="w-full aspect-video rounded-md"
              />
            </div>
            <div className="flex flex-col gap-4 h-full">
              <ArticleHeading
                heading={mainArticle.title}
                className="text-4xl font-extrabold"
              />
              <ArticleTitle
                title={mainArticle.description}
                className="line-clamp-2"
              />
            </div>
          </article>
        </div>

        {/* List Articles */}
        <div className="w-full md:w-1/3">
          <div className="flex flex-col gap-2 h-full">
            {listArticles.map((article, index) => (
              <div
                key={index}
                className={`px-3 flex flex-col gap-2 py-2 flex-grow ${listArticles.length === index + 1
                    ? ""
                    : "border-b-2 border-gray-500"
                  } pb-3`}
              >
                <ArticleHeading
                  heading={article.title}
                  className="font-bold text-xl"
                />
                <ArticleTitle
                  title={article.description}
                  className="line-clamp-1"
                />
                <ArticleMeta date={article.date} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default memo(Yanayi_a_yau_hero_section);
