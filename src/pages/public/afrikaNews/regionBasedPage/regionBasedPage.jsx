import Pagination from "../../../../components/pagination/paginationUI";
import RegionBasedPageHeroSection from "./regionBasedPage.heroSection";
import NumberWiseArticleCard from "@/components/cards/numberWiseArticleCard";
import NewsFeedRegionBased from "./regionBasedPage.newsFeed";

const RegionBasedPage = () => {

  const articles = [
    {
      title: "Muna tattaunawa da Tinubu don shiga gwamnatinsa - Kwankwaso",
      description: "The head of the UN health agency says the world's attention to Sudan is 'really low' and race is a factor.",
      imgSrc: "https://ichef.bbci.co.uk/news/480/cpsprodpb/a5a0/live/8fa1fdc0-74dc-11ef-8eeb-fb4751416701.jpg.webp",
      link: ''
    },
    {
      title: "Kotu ta ayyana Gawuna a matsayin wanda ya lashe zaɓen gwamnan Kano",
      description: "The head of the UN health agency says the world's attention to Sudan is 'really low' and race is a factor.",
      imgSrc: "https://ichef.bbci.co.uk/news/480/cpsprodpb/a5a0/live/8fa1fdc0-74dc-11ef-8eeb-fb4751416701.jpg.webp",
      link: ''
    },
    {
      title: "Me ke haddasa tsananin mutuwar aure a Kano?",
      description: "The head of the UN health agency says the world's attention to Sudan is 'really low' and race is a factor.",
      imgSrc: "https://ichef.bbci.co.uk/news/480/cpsprodpb/a5a0/live/8fa1fdc0-74dc-11ef-8eeb-fb4751416701.jpg.webp",
    },
    {
      title: "Siyasar Kano: APC da NNPP sun koma ga Allah kafin hukuncin kotu ",
      description: "The head of the UN health agency says the world's attention to Sudan is 'really low' and race is a factor.",
      imgSrc: "https://ichef.bbci.co.uk/news/480/cpsprodpb/a5a0/live/8fa1fdc0-74dc-11ef-8eeb-fb4751416701.jpg.webp",
    },
    {
      title: "Ma'anar unguwar 'Tudunwada' da yadda ta samo asali",
      description: "The head of the UN health agency says the world's attention to Sudan is 'really low' and race is a factor.",
      imgSrc: "https://ichef.bbci.co.uk/news/480/cpsprodpb/a5a0/live/8fa1fdc0-74dc-11ef-8eeb-fb4751416701.jpg.webp",
    },
    {
      title: "Me ke haddasa tsananin mutuwar aure a Kano?",
      description: "The head of the UN health agency says the world's attention to Sudan is 'really low' and race is a factor.",
      imgSrc: "https://ichef.bbci.co.uk/news/480/cpsprodpb/a5a0/live/8fa1fdc0-74dc-11ef-8eeb-fb4751416701.jpg.webp",
    },
    {
      title: "Siyasar Kano: APC da NNPP sun koma ga Allah kafin hukuncin kotu ",
      description: "The head of the UN health agency says the world's attention to Sudan is 'really low' and race is a factor.",
      imgSrc: "https://ichef.bbci.co.uk/news/480/cpsprodpb/a5a0/live/8fa1fdc0-74dc-11ef-8eeb-fb4751416701.jpg.webp",
    },
    {
      title: "Ma'anar unguwar 'Tudunwada' da yadda ta samo asali",
      description: "The head of the UN health agency says the world's attention to Sudan is 'really low' and race is a factor.",
      imgSrc: "https://ichef.bbci.co.uk/news/480/cpsprodpb/a5a0/live/8fa1fdc0-74dc-11ef-8eeb-fb4751416701.jpg.webp",
    },
    {
      title: "Me ke haddasa tsananin mutuwar aure a Kano?",
      description: "The head of the UN health agency says the world's attention to Sudan is 'really low' and race is a factor.",
      imgSrc: "https://ichef.bbci.co.uk/news/480/cpsprodpb/a5a0/live/8fa1fdc0-74dc-11ef-8eeb-fb4751416701.jpg.webp",
    },
    {
      title: "Siyasar Kano: APC da NNPP sun koma ga Allah kafin hukuncin kotu ",
      description: "The head of the UN health agency says the world's attention to Sudan is 'really low' and race is a factor.",
      imgSrc: "https://ichef.bbci.co.uk/news/480/cpsprodpb/a5a0/live/8fa1fdc0-74dc-11ef-8eeb-fb4751416701.jpg.webp",
    },
    {
      title: "Ma'anar unguwar 'Tudunwada' da yadda ta samo asali",
      description: "The head of the UN health agency says the world's attention to Sudan is 'really low' and race is a factor.",
      imgSrc: "https://ichef.bbci.co.uk/news/480/cpsprodpb/a5a0/live/8fa1fdc0-74dc-11ef-8eeb-fb4751416701.jpg.webp",
    },
    {
      title: "Me ke haddasa tsananin mutuwar aure a Kano?",
      description: "The head of the UN health agency says the world's attention to Sudan is 'really low' and race is a factor.",
      imgSrc: "https://ichef.bbci.co.uk/news/480/cpsprodpb/a5a0/live/8fa1fdc0-74dc-11ef-8eeb-fb4751416701.jpg.webp",
    }
  ];

  return (
    <div>
      <RegionBasedPageHeroSection />
      <NewsFeedRegionBased />
    </div>
  )
}

export default RegionBasedPage;