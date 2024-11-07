import ImageElement from '@/components/ImageElement';
import ArticleMeta from '@/components/articleMeta/articleMeta';
import ArticleHeading from '@/components/article/articleHeading';
import ArticleTitle from '@/components/article/articleTitle';

const WasanniHeroSection = () => {
  const mainArticle = {
    image: 'https://www.aljazeera.com/wp-content/uploads/2024/11/AFP__20241104__36LC4EW__v1__HighRes__CricketAusPak-1730716874.jpg?resize=770%2C513&quality=80',
    title: "Cummins leads Australia to nervy win after Pakistan fight back in first ODI",
    description: 'Cummins’s all-round performance took Australia to a two-wicket win in Melbourne for 1-0 lead in the three-match series.'
  };

  const sideArticles = [
    {
      image: 'https://www.aljazeera.com/wp-content/uploads/2024/01/2024-01-23T151550Z_629021567_UP1EK1N16ECG4_RTRMADP_3_SOCCER-ASIANCUP-HKG-PSE-REPORT-1706525289.jpg?resize=770%2C513&quality=80',
      title: 'Palestine sets sights on FIFA World Cup 2026 despite Israel’s war on Gaza',
      date: new Date('10-21-2024 18:14'),
      category: 'Football'
    },
    {
      image: 'https://www.aljazeera.com/wp-content/uploads/2024/11/AFP__20241101__36LC288__v2__HighRes__TopshotCricketIndNzlTest-1730627925.jpg?resize=770%2C513&quality=80',
      title: 'India vs New Zealand – talking points: Rohit, Kohli, Ravindra, Patel, Gill',
      date: new Date('10-21-2024 17:14'),
      category: 'Cricket'
    }
  ];

  const listArticles = [
    {
      title: 'Boba tea company apologises over Canada Dragon\'s Den row',
      description: 'Marvel actor Simu Liu accused Canadian entrepreneurs of culturally appropriating the Taiwanese drink.',
      date: new Date('10-20-2024 18:14')
    },
    {
      title: 'Boba tea company apologises over Canada Dragon\'s Den row',
      description: 'Marvel actor Simu Liu accused Canadian entrepreneurs of culturally appropriating the Taiwanese drink.',
      date: new Date('10-19-2024 18:14')
    },
    {
      title: 'Boba tea company apologises over Canada Dragon\'s Den row',
      description: 'Marvel actor Simu Liu accused Canadian entrepreneurs of culturally appropriating the Taiwanese drink.',
      date: new Date('09-14-2024 18:14')
    },
    {
      title: 'Boba tea company apologises over Canada Dragon\'s Den row',
      description: 'Marvel actor Simu Liu accused Canadian entrepreneurs of culturally appropriating the Taiwanese drink.',
      date: new Date('08-14-2024 18:14')
    },
    // Add more list articles...
  ];
  return (
    <section className="container mx-auto  md:mt-5 pb-10">
      <div className="flex flex-col md:flex-row items-stretch gap-3">

        {/* Main Article */}
        <div className="w-full lg:w-2/4">
          <article className="flex flex-col h-full">
            <div>
              <ImageElement src={mainArticle.image} className="w-full aspect-video rounded-md" />
            </div>
            <div className="flex flex-col gap-4 h-full">
              <ArticleHeading
                heading={mainArticle.title}
                className='text-4xl font-extrabold'
              />
              <ArticleTitle
                title={mainArticle.description}
                className='line-clamp-2'
              />
            </div>
          </article>
        </div>

        {/* Side Articles */}
        <div className="w-full md:w-1/4">
          <div className="flex flex-col gap-2 h-full">
            {sideArticles.map((article, index) => (
              <div key={index} className="flex flex-col gap-2 flex-grow">
                <div>
                  <ImageElement src={article.image} className="w-full aspect-video rounded-md" />
                </div>
                <div className="flex flex-col gap-2">
                  <ArticleHeading
                    heading={article.title}
                    className='text-xl font-bold'
                  />
                  <ArticleMeta date={article.date} category={article.category} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* List Articles */}
        <div className="w-full md:w-1/4">
          <div className="flex flex-col gap-2 h-full">
            {listArticles.map((article, index) => (
              <div key={index} className={`px-3 flex flex-col gap-2 py-2 flex-grow ${listArticles.length === (index + 1) ? '' : 'border-b-2 border-gray-500'} pb-3`}>
                <ArticleHeading
                  heading={article.title}
                  className='font-bold text-xl'
                />
                <ArticleTitle
                  title={article.description}
                  className='line-clamp-1'
                />
                <ArticleMeta date={article.date} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WasanniHeroSection;