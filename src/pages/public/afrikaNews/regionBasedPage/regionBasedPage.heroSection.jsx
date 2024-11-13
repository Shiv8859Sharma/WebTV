import ImageElement from "@/components/ImageElement";
import ArticleMeta from "@/components/articleMeta/articleMeta";
import ArticleHeading from "@/components/article/articleHeading";
import ArticleTitle from "@/components/article/articleTitle";

const RegionBasedPageHeroSection = () => {
  const mainArticle = {
    image:
      "https://static.euronews.com/articles/stories/08/82/95/88/738x415_cmsv2_624a3c87-e0b7-55e4-a9d0-2b7f51270f01-8829588.jpg",
    title:
      "At least 14 people die in lightning strike on refugee camp in Uganda",
    description:
      "At least 14 people, including several children, were killed in a lightning strike in a refugee camp in northern Uganda, police said Sunday. Officials say the victims were residents of the Palabek settlement camp, which primarily houses people displaced from South Sudan.",
  };

  const listArticles = [
    {
      title: "Boba tea company apologises over Canada Dragon's Den row",
      description:
        "Marvel actor Simu Liu accused Canadian entrepreneurs of culturally appropriating the Taiwanese drink.",
      date: new Date("10-20-2024 18:14"),
    },
    {
      title: "Boba tea company apologises over Canada Dragon's Den row",
      description:
        "Marvel actor Simu Liu accused Canadian entrepreneurs of culturally appropriating the Taiwanese drink.",
      date: new Date("10-19-2024 18:14"),
    },
    {
      title: "Boba tea company apologises over Canada Dragon's Den row",
      description:
        "Marvel actor Simu Liu accused Canadian entrepreneurs of culturally appropriating the Taiwanese drink.",
      date: new Date("09-14-2024 18:14"),
    },
    {
      title: "Boba tea company apologises over Canada Dragon's Den row",
      description:
        "Marvel actor Simu Liu accused Canadian entrepreneurs of culturally appropriating the Taiwanese drink.",
      date: new Date("08-14-2024 18:14"),
    },
    // Add more list articles...
  ];

  return (
    <section className="container max-w-7xl mx-auto !mt-12 pb-10">
      <div className="flex flex-col md:flex-row items-stretch gap-3">
        {/* Main Article */}
        <div className="">
          <article className="flex flex-col h-full">
            <div>
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
        <div className="">
          <div className="flex flex-col gap-2 h-full">
            {listArticles.map((article, index) => (
              <div
                key={index}
                className={`px-3 flex flex-col gap-2 py-2 flex-grow ${listArticles.length === index + 1 ? "" : "border-b-2 border-gray-500"} pb-3`}
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

export default RegionBasedPageHeroSection;
