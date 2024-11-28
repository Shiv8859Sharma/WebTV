import ImageElement from "@/components/ImageElement";
import NavigatePage from "@/components/navigatePage";
import TimeAgo from "@/components/timeAgo";
import staticData from "@/static/staticData.json";
import paths from "@/routes/paths";

const NewsFeeds = ({ feeds = [] }) => {
  return (
    <section className="container mx-auto py-8">
      <div className="w-3/4">
        {[...(feeds.length ? feeds : staticData?.newsFedd || [])].map(
          (news, index) => (
            <NewsFeedItem
              key={index}
              category={news?.category || "OPINION"}
              title={news?.title}
              description={news?.description}
              image={news?.image}
              author={news?.author}
              date={news?.createdAt || new Date()}
              time={news?.time}
              url={paths.VIEW_BLOG(news?.id)}
            />
          )
        )}
        <div className="text-center mt-6">
          <button className="bg-black text-white px-4 py-2">Show more</button>
        </div>
      </div>
    </section>
  );
};

export default NewsFeeds;

const NewsFeedItem = ({
  category,
  title,
  description,
  image,
  author,
  date,
  url,
}) => {
  return (
    <NavigatePage url={url} className="flex border-b py-6">
      <article className="w-3/4 pr-4">
        <header>
          <p className="text-sm text-gray-600 uppercase">{category}</p>
          <h2 className="text-lg font-bold">{title}</h2>
        </header>
        <p className="text-gray-700 mt-2">{description}</p>
        <footer className="flex items-center text-gray-500 mt-4">
          {author && (
            <>
              <span>{author}</span>
              <span className="mx-2">|</span>
            </>
          )}
          <time dateTime="2024-10-22">
            <TimeAgo date={date} />
          </time>
        </footer>
      </article>
      <figure className="w-1/4">
        <ImageElement
          src={image}
          alt={title}
          className="w-full h-auto object-cover"
        />
        {/* <figcaption>Image caption describing the photo</figcaption> */}
      </figure>
    </NavigatePage>
  );
};
