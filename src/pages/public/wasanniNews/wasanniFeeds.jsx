import NewsFeeds from "@/pages/newsFeeds/newsFeeds";

const WasanniNewsFeeds = ({ articles = [] }) => {
  return <NewsFeeds feeds={articles} />;
};

export default WasanniNewsFeeds;
