import LatestNewsSection from "@/components/latestNewsSection/latestNewsSection";
import PopularArticlesList from "@/components/lists/popularArticleList";
import paths from "@/routes/paths";

const AfrikaLatestNews = () => {
  const africaArticles = [
    {
      title: "Down into the ocean's 'twilight zone' with Boaty McBoatface",
      description: "Whilst Europe grapples with how to deal with growing wolf populations, this mountainous region of Portugal has coexisted with the predators for centuries.",
      imgSrc: "https://ichef.ci.co.uk/images/ic/1920x1080/p0jx6t83.jpg.webp",
      category: "KUDANCIN AFIRKA"
    },
    {
      title: "Down into the ocean's 'twilight zone' with Boaty McBoatface",
      description: "Whilst Europe grapples with how to deal with growing wolf populations, this mountainous region of Portugal has coexisted with the predators for centuries.",
      imgSrc: "",
      category: "AFIRKA TA YAMMA"
    },
    {
      title: "Down into the ocean's 'twilight zone' with Boaty McBoatface",
      description: "Whilst Europe grapples with how to deal with growing wolf populations, this mountainous region of Portugal has coexisted with the predators for centuries.",
      imgSrc: "",
      category: "KUDANCIN AFIRKA"
    },
    {
      title: "Down into the ocean's 'twilight zone' with Boaty McBoatface",
      description: "Whilst Europe grapples with how to deal with growing wolf populations, this mountainous region of Portugal has coexisted with the predators for centuries.",
      imgSrc: "https://ichef.ci.co.uk/images/ic/1920x1080/p0jx6t83.jpg.webp",
      category: "AREWACIN AFIRKA"
    },
    {
      title: "Down into the ocean's 'twilight zone' with Boaty McBoatface",
      description: "Whilst Europe grapples with how to deal with growing wolf populations, this mountainous region of Portugal has coexisted with the predators for centuries.",
      imgSrc: "",
      category: "GABASHIN AFIRKA"
    },
    {
      title: "Down into the ocean's 'twilight zone' with Boaty McBoatface",
      description: "Whilst Europe grapples with how to deal with growing wolf populations, this mountainous region of Portugal has coexisted with the predators for centuries.",
      imgSrc: "",
      category: "AREWACIN AFIRKA"
    }
  ];
  return (
    <LatestNewsSection
      sectionTitle="Labaran Yanzu"
      articles={africaArticles}
      hasRightContent
      veiwAllURL=''
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
    </LatestNewsSection>
  )
}

export default AfrikaLatestNews;

