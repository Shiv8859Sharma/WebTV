import paths from "@/routes/paths";
import NewsBlock from "./newsBlock"
import PopularArticlesList from "@/components/lists/popularArticleList";

const WorldNews = () => {

  const africaArticles = [
    {
      title: "How Italy's volcanoes are changing",
      description: "As volcanic activity continues at Mount Etna, Chris Baraniuk explores why Mount Etna and Mount Stromboli are becoming more lively.",
      imgSrc: "https://ichef.bbci.co.uk/images/ic/480x270/p0jgvswh.jpg.webp",
      category: "India"
    },
    {
      title: "How Italy's volcanoes are changing",
      description: "As volcanic activity continues at Mount Etna, Chris Baraniuk explores why Mount Etna and Mount Stromboli are becoming more lively.",
      imgSrc: "https://ichef.bbci.co.uk/images/ic/480x270/p0jgvswh.jpg.webp",
      category: "Europe"
    },
    {
      title: "How Italy's volcanoes are changing",
      description: "As volcanic activity continues at Mount Etna, Chris Baraniuk explores why Mount Etna and Mount Stromboli are becoming more lively.",
      imgSrc: "https://ichef.bbci.co.uk/images/ic/480x270/p0jgvswh.jpg.webp",
      category: "Afirka"
    },
    {
      title: "How Italy's volcanoes are changing",
      description: "As volcanic activity continues at Mount Etna, Chris Baraniuk explores why Mount Etna and Mount Stromboli are becoming more lively.",
      imgSrc: "https://ichef.bbci.co.uk/images/ic/480x270/p0jgvswh.jpg.webp",
      category: "Afirka"
    },
    {
      title: "How Italy's volcanoes are changing",
      description: "As volcanic activity continues at Mount Etna, Chris Baraniuk explores why Mount Etna and Mount Stromboli are becoming more lively.",
      imgSrc: "https://ichef.bbci.co.uk/images/ic/480x270/p0jgvswh.jpg.webp",
      category: "Afirka"
    },
    {
      title: "How Italy's volcanoes are changing",
      description: "As volcanic activity continues at Mount Etna, Chris Baraniuk explores why Mount Etna and Mount Stromboli are becoming more lively.",
      imgSrc: "https://ichef.bbci.co.uk/images/ic/480x270/p0jgvswh.jpg.webp",
      category: "Afirka"
    },
  ];

  return (
    <section className="!relative">
      <NewsBlock
        sectionTitle="Duniya"
        articles={africaArticles}
        reverseLayout={false}
        hasRightContent
        veiwAllURL={`${paths.CATEGORY_NEWS('duniya')}`}
        articlesWithImage={false}
      >
        <PopularArticlesList
          articles={[
            { text: "Why the world would end without political polls", link: "#" },
            { text: "Meet The Man Who Designed The Ducati Monster", link: "#" },
            { text: "2020 Audi R8 Spyder spy shots release", link: "#" },
            { text: "Lamborghini makes Huracán GT3 racer faster for 2019", link: "#" },
            { text: "ZF plans $14 billion autonomous vehicle push, concept van", link: "#" },
          ]}
        />

      </NewsBlock>
    </section>
  )

}

export default WorldNews;