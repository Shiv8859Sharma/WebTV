import NewsBlock from "./newsBlock"
import paths from "@/routes/paths";

const AfricaNews = () => {

  const africaArticles = [
    {
      title: "Starvation in war-hit Sudan 'almost everywhere' - WHO",
      description: "The head of the UN health agency says the world's attention to Sudan is 'really low' and race is a factor.",
      imgSrc: "https://ichef.bbci.co.uk/news/480/cpsprodpb/a5a0/live/8fa1fdc0-74dc-11ef-8eeb-fb4751416701.jpg.webp",
      category: "afrika",
      link: paths.ARTICLE_DETAIL('africa-news', '89ik-u789r@-uhyt79')
    },
    {
      title: "Starvation in war-hit Sudan 'almost everywhere' - WHO",
      description: "The head of the UN health agency says the world's attention to Sudan is 'really low' and race is a factor.",
      imgSrc: "https://ichef.bbci.co.uk/news/480/cpsprodpb/a5a0/live/8fa1fdc0-74dc-11ef-8eeb-fb4751416701.jpg.webp",
      category: "afrika"
    },
    {
      title: "Starvation in war-hit Sudan 'almost everywhere' - WHO",
      description: "The head of the UN health agency says the world's attention to Sudan is 'really low' and race is a factor.",
      imgSrc: "https://ichef.bbci.co.uk/news/480/cpsprodpb/a5a0/live/8fa1fdc0-74dc-11ef-8eeb-fb4751416701.jpg.webp",
      category: "afrika"
    },
    {
      title: "Starvation in war-hit Sudan 'almost everywhere' - WHO",
      description: "The head of the UN health agency says the world's attention to Sudan is 'really low' and race is a factor.",
      imgSrc: "https://ichef.bbci.co.uk/news/480/cpsprodpb/a5a0/live/8fa1fdc0-74dc-11ef-8eeb-fb4751416701.jpg.webp",
      category: "afrika"
    }
  ];

  return <NewsBlock
    sectionTitle="Afirka"
    articles={africaArticles}
    reverseLayout={false}
    veiwAllURL={`${paths.CATEGORY_NEWS('afrika')}`}
  />

}

export default AfricaNews;