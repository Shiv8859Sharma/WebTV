import ImageElement from '@/components/ImageElement';
import ArticleMeta from '@/components/articleMeta/articleMeta';
import ArticleHeading from '@/components/article/articleHeading';
import ArticleTitle from '@/components/article/articleTitle';
import { memo } from 'react';
import NavigatePage from '../../../../components/navigatePage';
import { PlayCircleIcon } from '@heroicons/react/16/solid';

const HausaNewsSection = () => {
  let articles = [
    {
      title: "Starvation in war-hit Sudan 'almost everywhere' - WHO",
      description: "The head of the UN health agency says the world's attention to Sudan is 'really low' and race is a factor.",
      imgSrc: "https://ichef.bbci.co.uk/news/480/cpsprodpb/a5a0/live/8fa1fdc0-74dc-11ef-8eeb-fb4751416701.jpg.webp",
      category: "Afirka",
      link: ''
    },
    {
      title: "Starvation in war-hit Sudan 'almost everywhere' - WHO",
      description: "The head of the UN health agency says the world's attention to Sudan is 'really low' and race is a factor.",
      imgSrc: "https://ichef.bbci.co.uk/news/480/cpsprodpb/a5a0/live/8fa1fdc0-74dc-11ef-8eeb-fb4751416701.jpg.webp",
      category: "Afirka",
      link: ''
    },
    {
      title: "Starvation in war-hit Sudan 'almost everywhere' - WHO",
      description: "The head of the UN health agency says the world's attention to Sudan is 'really low' and race is a factor.",
      imgSrc: "https://ichef.bbci.co.uk/news/480/cpsprodpb/a5a0/live/8fa1fdc0-74dc-11ef-8eeb-fb4751416701.jpg.webp",
      category: "Afirka",
      link: ''
    },
    {
      title: "Starvation in war-hit Sudan 'almost everywhere' - WHO",
      description: "The head of the UN health agency says the world's attention to Sudan is 'really low' and race is a factor.",
      imgSrc: "https://ichef.bbci.co.uk/news/480/cpsprodpb/a5a0/live/8fa1fdc0-74dc-11ef-8eeb-fb4751416701.jpg.webp",
      category: "Afirka",
      link: ''
    }
  ];
  return (
    <section className="container mx-auto mt-10">
      <div className="flex flex-col md:flex-row gap-6">

        {/* Left Section */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <ArticleHeading heading='Labarai' className="text-2xl font-bold px-3" />

          {/* Article List */}
          <div className="h-full">
            {articles.map((article, index) => (
              <ArticleCard key={index} article={article} />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t-4 mx-2 my-6 md:my-0 md:border-l-2 border-gray-300"></div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <ArticleHeading heading='Maimaici Video' className="text-2xl font-bold px-3" />

          {/* Article List */}
          <div className="h-full">
            {articles.map((article, index) => (
              <ArticleCard key={index} article={article} isVideoContent />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Reusable ArticleCard component
const ArticleCard = ({ article, isVideoContent = false }) => (
  <div className="w-full px-3 pb-3 pt-3 sm:pt-0 border-b-2 border-dotted border-gray-100">
    <NavigatePage url={article?.link || '#'}>
      <div className={`flex flex-col lg:flex-row w-full ${isVideoContent ? '' : 'hover-img'}`}>
        {/* Responsive Image */}
        <div className='relative w-full lg:w-[40%] aspect-video overflow-hidden rounded-md aspect-video'>
          {/* Video play icon for video content */}
          {
            isVideoContent &&
            <div className='absolute inset-0 flex items-center justify-center bg-black/40'>
              <PlayCircleIcon className='w-12 h-12 text-white' />
            </div>
          }
          {/* Image Element */}
          <ImageElement
            className="w-full h-full object-cover rounded-md"
            src={article?.imgSrc || 'default-image.jpg'}
            alt={article?.title || 'article image'}
          />
        </div>

        {/* Article Content */}
        <div className="w-full lg:w-[60%] px-0 lg:px-3 mt-3 lg:mt-0 flex flex-col justify-between">
          <ArticleHeading heading={article?.title || 'Untitled'} className="text-lg font-bold line-clamp-1 md:line-clamp-2 lg:line-clamp-3" />
          <ArticleTitle title={article?.description || 'No description available'} className="line-clamp-2 md:line-clamp-3 lg:line-clamp-4" />
          <ArticleMeta date={article?.date || new Date()} category={article?.category || 'General'} />
        </div>
      </div>
    </NavigatePage>
  </div>
);

export default memo(HausaNewsSection);
