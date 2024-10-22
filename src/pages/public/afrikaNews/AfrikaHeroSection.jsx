import ImageElement from '@/components/ImageElement';
import ArticleMeta from '@/components/articleMeta/articleMeta';
import ArticleHeading from '@/components/article/articleHeading';
import ArticleTitle from '@/components/article/articleTitle';

const AfrikaHeroSection = () => {
  const mainArticle = {
    image: 'https://ichef.bbci.co.uk/ace/standard/1024/cpsprodpb/db34/live/7c90ca90-8a08-11ef-b6b0-c9af5f7f16e4.jpg.webp',
    title: 'Amazon Shoppers Are Ditching Designer Belts for This Best-Selling',
    description: 'Hurricanes are ranked by wind speed, which leaves out the cause of 90% of deaths during extreme storms. Scientists are racing to update the imperfect system we rely on to warn just how deadly a storm will be.'
  };

  const sideArticles = [
    {
      image: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/c7c2/live/a060ce30-7053-11ef-8724-35406148d765.png.webp',
      title: 'African nations race to put satellites in space',
      date: new Date('10-21-2024 18:14'),
      category: 'Afirka'
    },
    {
      image: 'https://ichef.bbci.co.uk/ace/standard/640/cpsprodpb/c7ee/live/09856460-8a6d-11ef-8936-1185f9e7d044.jpg.webp',
      title: 'Kolo Muani scores twice as France edge Belgium',
      date: new Date('10-21-2024 17:14'),
      category: 'Afirka'
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
    <section className="container mx-auto md:mt-5 pb-10">
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

export default AfrikaHeroSection;