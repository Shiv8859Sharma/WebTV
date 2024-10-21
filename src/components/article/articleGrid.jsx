import ArticleMeta from "../articleMeta/articleMeta";
import ArticleHeading from "./articleHeading";

const ArticleCategory = ({ title, articles }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold border-t-2 border-gray-400 pt-4 mb-4">{title}</h2>
      {articles.map((article, index) => (
        <div key={index} className="mb-6 flex flex-col gap-3">
          <ArticleHeading
            heading={article.title}
            className='text-xl font-medium text-gray-800'
          />
          <ArticleMeta date={article?.date} category={article.category} />
        </div>
      ))}
    </div>
  );
};

const ArticleGrid = ({ categories }) => {
  return (
    <section className="pt-16">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <ArticleCategory key={index} title={category.title} articles={category.articles} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticleGrid