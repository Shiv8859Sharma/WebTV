import ImageElement from '@/components/ImageElement';
import NavigatePage from '../../components/navigatePage';
import TimeAgo from '../../components/timeAgo';

const NewsFeeds = ({ }) => {
  const newsData = [
    {
      category: "OPINION",
      title: "Greta Thunberg – still making all the right enemies",
      description:
        "They say she is using ‘the climate movement’ to throw her support behind the Palestinians. Well, good on her.",
      image: "https://facts.net/wp-content/uploads/2023/07/36-facts-about-kaduna-1688455183.jpeg",
      author: "Andrew Mitrovica",
      date: "22 Oct 2024",
    },
    {
      category: "",
      title: "Israel kills over 40 in Gaza, attacks Lebanon's Beirut again",
      description:
        "These were the updates on Israel’s attacks on Lebanon and the war on Gaza for Tuesday, October 22.",
      image: "https://facts.net/wp-content/uploads/2023/07/36-facts-about-kaduna-1688455183.jpeg",
      date: "22 Oct 2024",
    },
    {
      category: "From: NewsFeed",
      title: "Israel’s siege on north Gaza intensifies as thousands trapped",
      description:
        "The Israeli military’s weeks long siege of northern Gaza is pushing the area to the point of starvation.",
      image: "https://facts.net/wp-content/uploads/2023/07/36-facts-about-kaduna-1688455183.jpeg",
      date: "21 Oct 2024",
      time: "02:48",
    },
    {
      category: "EXPLAINER",
      title:
        "As Israel’s siege on north Gaza continues, how are people coping?",
      description:
        "Israeli forces launched an operation in the north on October 6, laying siege to hundreds of thousands of people.",
      image: "https://facts.net/wp-content/uploads/2023/07/36-facts-about-kaduna-1688455183.jpeg",
      date: "21 Oct 2024",
    },
  ];
  return (
    <section className="container mx-auto py-8">
      <div className='w-2/3'>
        {newsData.map((news, index) => (
          <NewsFeedItem
            key={index}
            category={news?.category}
            title={news?.title}
            description={news?.description}
            image={news?.image}
            author={news?.author}
            date={news?.date}
            time={news?.time}
            url={news?.link}
          />
        ))}
        <div className="text-center mt-6">
          <button className="bg-black text-white px-4 py-2">Show more</button>
        </div>
      </div>

    </section>
  )
}

export default NewsFeeds;

const NewsFeedItem = ({ category, title, description, image, author, date, time, url }) => {
  return (
    <NavigatePage url={url} className="flex border-b py-6">
      <article className="w-3/4 pr-4">
        <header>
          <p className="text-sm text-gray-600 uppercase">{category}</p>
          <h2 className="text-lg font-bold">{title}</h2>
        </header>
        <p className="text-gray-700 mt-2">
          {description}
        </p>
        <footer className="flex items-center text-gray-500 mt-4">
          {
            author && (
              <>
                <span>{author}</span>
                <span className="mx-2">|</span>
              </>
            )
          }
          <time dateTime="2024-10-22"><TimeAgo date={date} /></time>
        </footer>
      </article>
      <figure className="w-1/4">
        <ImageElement src={image} alt={title} className="w-full h-auto object-cover" />
        {/* <figcaption>Image caption describing the photo</figcaption> */}
      </figure>
    </NavigatePage>
  )
}
