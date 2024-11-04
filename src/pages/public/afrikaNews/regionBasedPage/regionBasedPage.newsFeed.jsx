import NumberWiseArticleCard from "@/components/cards/numberWiseArticleCard";
import Pagination from "@/components/pagination/paginationUI";

const NewsFeedRegionBased = () => {

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
    <section className="container mx-auto">
      <div className="flex flex-row flex-wrap justify-center gap-10">
      <hr className="w-full h-0.5 my-8 max-w-7xl w-full bg-black border-0 rounded dark:bg-gray-700" />
        <div className="max-w-7xl w-full bg-white shadow-md rounded-lg overflow-hidden">
          <div className="flex flex-row flex-wrap -mx-3">
            {articles?.map((article, index) => (
              <NumberWiseArticleCard
                key={index}
                title={article.title}
                description={article.description}
                imgSrc={article.imgSrc}
                category={article.category}
                link={article.link}
                number={index + 1}
              />
            ))}
          </div>
          <div>
            <Pagination

            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsFeedRegionBased;