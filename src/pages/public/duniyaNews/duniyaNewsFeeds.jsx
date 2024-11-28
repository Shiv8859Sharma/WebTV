import NewsFeeds from "../../newsFeeds/newsFeeds";

const DuniyaNewsFeeds = ({ articles = [] }) => {
  return <NewsFeeds feeds={articles} />;
};

export default DuniyaNewsFeeds;
