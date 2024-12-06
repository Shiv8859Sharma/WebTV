import NewsFeeds from "../../newsFeeds/newsFeeds";

const DuniyaNewsFeeds = ({
  articles = [],
  showButton = true,
  onShowMore = () => {},
}) => {
  return (
    <NewsFeeds
      feeds={articles}
      showButton={showButton}
      onShowMore={onShowMore}
    />
  );
};

export default DuniyaNewsFeeds;
