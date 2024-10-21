import paths from "@/routes/paths";
import NewsBlock from "./newsBlock"
import PopularArticlesList from "./popularArticlesList";

const LetestNews = () => {

  const africaArticles = [
    {
      title: "Down into the ocean's 'twilight zone' with Boaty McBoatface",
      description: "Whilst Europe grapples with how to deal with growing wolf populations, this mountainous region of Portugal has coexisted with the predators for centuries.",
      imgSrc: "https://ichef.ci.co.uk/images/ic/1920x1080/p0jx6t83.jpg.webp",
      category: "India"
    },
    {
      title: "Down into the ocean's 'twilight zone' with Boaty McBoatface",
      description: "Whilst Europe grapples with how to deal with growing wolf populations, this mountainous region of Portugal has coexisted with the predators for centuries.",
      imgSrc: "",
      category: "Europe"
    },
    {
      title: "Down into the ocean's 'twilight zone' with Boaty McBoatface",
      description: "Whilst Europe grapples with how to deal with growing wolf populations, this mountainous region of Portugal has coexisted with the predators for centuries.",
      imgSrc: "",
      category: "Africa"
    }
  ];

  return (
    <section className="!relative">
      <NewsBlock
        sectionTitle="Latest News"
        articles={africaArticles}
        reverseLayout={true}
        hasRightContent
        coverDetails={
          {
            show: true,
            imgSrc: 'https://ichef.bbci.co.uk/images/ic/1920x1080/p0jx6t83.jpg.webp',
            title: 'Amazon Shoppers Are Ditching Designer Belts for This Best-Selling',
            description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This very helpfull for generate default content..',
            category: 'Africa'
          }
        }
        veiwAllURL={`${paths.CATEGORY_NEWS('latest-news')}`}
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

export default LetestNews;


