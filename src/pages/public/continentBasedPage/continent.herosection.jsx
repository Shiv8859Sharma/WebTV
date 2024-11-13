import NumberWiseArticleCard from "@/components/cards/numberWiseArticleCard";
import Pagination from "@/components/pagination/paginationUI";

const ContinentHeroSection = ({ currentTab = "" }) => {
  const articles = [
    {
      title: "Muna tattaunawa da Tinubu don shiga gwamnatinsa - Kwankwaso",
      description:
        "The head of the UN health agency says the world's attention to Sudan is 'really low' and race is a factor.",
      imgSrc:
        "https://ichef.bbci.co.uk/news/480/cpsprodpb/a5a0/live/8fa1fdc0-74dc-11ef-8eeb-fb4751416701.jpg.webp",
      link: "",
    },
    {
      title:
        "Kotu ta ayyana Gawuna a matsayin wanda ya lashe zaɓen gwamnan Kano",
      description:
        "The head of the UN health agency says the world's attention to Sudan is 'really low' and race is a factor.",
      imgSrc:
        "https://ichef.bbci.co.uk/news/480/cpsprodpb/a5a0/live/8fa1fdc0-74dc-11ef-8eeb-fb4751416701.jpg.webp",
      link: "",
    },
    {
      title: "Me ke haddasa tsananin mutuwar aure a Kano?",
      description:
        "The head of the UN health agency says the world's attention to Sudan is 'really low' and race is a factor.",
      imgSrc:
        "https://ichef.bbci.co.uk/news/480/cpsprodpb/a5a0/live/8fa1fdc0-74dc-11ef-8eeb-fb4751416701.jpg.webp",
    },
    {
      title: "Siyasar Kano: APC da NNPP sun koma ga Allah kafin hukuncin kotu ",
      description:
        "The head of the UN health agency says the world's attention to Sudan is 'really low' and race is a factor.",
      imgSrc:
        "https://ichef.bbci.co.uk/news/480/cpsprodpb/a5a0/live/8fa1fdc0-74dc-11ef-8eeb-fb4751416701.jpg.webp",
    },
    {
      title: "Ma'anar unguwar 'Tudunwada' da yadda ta samo asali",
      description:
        "The head of the UN health agency says the world's attention to Sudan is 'really low' and race is a factor.",
      imgSrc:
        "https://ichef.bbci.co.uk/news/480/cpsprodpb/a5a0/live/8fa1fdc0-74dc-11ef-8eeb-fb4751416701.jpg.webp",
    },
    {
      title: "Me ke haddasa tsananin mutuwar aure a Kano?",
      description:
        "The head of the UN health agency says the world's attention to Sudan is 'really low' and race is a factor.",
      imgSrc:
        "https://ichef.bbci.co.uk/news/480/cpsprodpb/a5a0/live/8fa1fdc0-74dc-11ef-8eeb-fb4751416701.jpg.webp",
    },
    {
      title: "Siyasar Kano: APC da NNPP sun koma ga Allah kafin hukuncin kotu ",
      description:
        "The head of the UN health agency says the world's attention to Sudan is 'really low' and race is a factor.",
      imgSrc:
        "https://ichef.bbci.co.uk/news/480/cpsprodpb/a5a0/live/8fa1fdc0-74dc-11ef-8eeb-fb4751416701.jpg.webp",
    },
    {
      title: "Ma'anar unguwar 'Tudunwada' da yadda ta samo asali",
      description:
        "The head of the UN health agency says the world's attention to Sudan is 'really low' and race is a factor.",
      imgSrc:
        "https://ichef.bbci.co.uk/news/480/cpsprodpb/a5a0/live/8fa1fdc0-74dc-11ef-8eeb-fb4751416701.jpg.webp",
    },
    {
      title: "Me ke haddasa tsananin mutuwar aure a Kano?",
      description:
        "The head of the UN health agency says the world's attention to Sudan is 'really low' and race is a factor.",
      imgSrc:
        "https://ichef.bbci.co.uk/news/480/cpsprodpb/a5a0/live/8fa1fdc0-74dc-11ef-8eeb-fb4751416701.jpg.webp",
    },
    {
      title: "Siyasar Kano: APC da NNPP sun koma ga Allah kafin hukuncin kotu ",
      description:
        "The head of the UN health agency says the world's attention to Sudan is 'really low' and race is a factor.",
      imgSrc:
        "https://ichef.bbci.co.uk/news/480/cpsprodpb/a5a0/live/8fa1fdc0-74dc-11ef-8eeb-fb4751416701.jpg.webp",
    },
    {
      title: "Ma'anar unguwar 'Tudunwada' da yadda ta samo asali",
      description:
        "The head of the UN health agency says the world's attention to Sudan is 'really low' and race is a factor.",
      imgSrc:
        "https://ichef.bbci.co.uk/news/480/cpsprodpb/a5a0/live/8fa1fdc0-74dc-11ef-8eeb-fb4751416701.jpg.webp",
    },
    {
      title: "Me ke haddasa tsananin mutuwar aure a Kano?",
      description:
        "The head of the UN health agency says the world's attention to Sudan is 'really low' and race is a factor.",
      imgSrc:
        "https://ichef.bbci.co.uk/news/480/cpsprodpb/a5a0/live/8fa1fdc0-74dc-11ef-8eeb-fb4751416701.jpg.webp",
    },
  ];

  let siyassaHeroArticle = {
    imgSrc:
      "https://ichef.bbci.co.uk/ace/ws/602/cpsprodpb/0948/live/9f53bea0-57ca-11ee-93bf-c758a853042c.jpg.webp",
    title: "Muna tattaunawa da Tinubu don shiga gwamnatinsa - Kwankwaso",
  };

  let addiniHeroArticle = {
    imgSrc:
      "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/6242/live/633d35e0-fc16-11ee-8369-47dc4454b972.jpg.webp",
    title: `Babban fasto ɗan Najeriya da ke sa jama'a su ƙyamaci rigakafin malaria`,
  };
  let wasaninHeroArticle = {
    imgSrc:
      "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/257c/live/2b773000-9484-11ef-9504-b516e8b5f45f.jpg.webp",
    title:
      "Premier League: West ham ta doke United, Chelsea ta yi nasara kan Newcastle",
  };
  let silmaHeroArticle = {
    imgSrc:
      "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/930B/production/_109234673_4936fea2-2b20-47b8-bf86-471caea61a06.jpg.webp",
    title: "Me ya sa mawaƙan Kudancin Najeriya suka fi na Arewa ɗaukaka?",
  };

  let yanayiAyou = {
    imgSrc:
      "https://c02.purpledshub.com/uploads/sites/77/2024/07/1ef4368b-74c5-6b22-96a8-f743f52572fc.png",
    title: "Schools close amid scrotching heat",
  };

  let mainArticle = {
    Siyassa: siyassaHeroArticle,
    Addini: addiniHeroArticle,
    Wasanin: wasaninHeroArticle,
    Kasawanci: silmaHeroArticle,
    "Yanayi a yau": yanayiAyou,
  };

  return (
    <section className="container mx-auto">
      <div className="flex flex-row flex-wrap justify-center gap-10">
        <div className="max-w-6xl w-full bg-white shadow-md rounded-lg overflow-hidden">
          <div className="relative">
            <img
              src={mainArticle[currentTab]?.imgSrc}
              alt="Pangolin Smuggling News"
              className="w-full h-[32rem]  aspect-video object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="absolute bottom-4 left-4 max-w-lg w-full bg-white rounded">
              <h2 className="text-2xl  font-bold p-3">
                {mainArticle[currentTab]?.title}
              </h2>
            </div>
          </div>
        </div>
        <div className="max-w-5xl w-full bg-white shadow-md rounded-lg overflow-hidden">
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
            <Pagination />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContinentHeroSection;
