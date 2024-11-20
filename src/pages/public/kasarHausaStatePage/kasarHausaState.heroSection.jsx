import { kanoStateArticle } from "@/static";
import RenderContent from "../../../components/renderContent/renderContent.index";
import ImageElement from "@/components/ImageElement";
import VideoPlayer from "@/components/videoPlayer/videoPlayer.index";

const KasarHausaStateHeroSection = ({ currentTab = "" }) => {
  let { media, content = {} } = kanoStateArticle[currentTab];
  return (
    <section className="container max-w-5xl mx-auto pt-0 p-6 bg-white shadow-lg rounded-lg blog-container">
      {/* Blog Title */}
      {/* <h1 className="text-5xl font-bold text-gray-800 mb-4">{title}</h1> */}
      {/* Media Preview */}
      {media && (
        <div className="mb-8">
          {media.type === "video" ? (
            <VideoPlayer
              src={media?.url}
              className="w-full h-auto rounded-lg"
            />
          ) : (
            <ImageElement
              src={media?.url}
              alt="Blog media"
              className="w-full h-auto rounded-lg aspect-video object-cover"
              loading="lazy" // Implement lazy loading for images
            />
          )}
        </div>
      )}

      {/* Blog Content */}
      <div className="my-10 mx-7">
        <RenderContent content={content} />
      </div>
    </section>
  );
};

export default KasarHausaStateHeroSection;
