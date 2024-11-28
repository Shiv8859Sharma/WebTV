import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./blog.style.css";
import { useParams } from "react-router-dom";
import ImageElement from "@/components/ImageElement";
import VideoPlayer from "@/components/videoPlayer/videoPlayer.index";
import { fetchSingleBlog, clearBlog } from "@/globalStates/actions/blogActions";
import CustomLoader from "@/layouts/skeletonLoaders";
import NoDataFoundMessage from "@/constants/NoDataFoundMessage";
import RenderContent from "@/components/renderContent/renderContent.index";

function ViewBlog() {
  const dispatch = useDispatch();
  const { id } = useParams(); // Assuming you have the id in the URL
  const { blogDetails, error } = useSelector((state) => state.blog);

  let {
    title = "Sample Blog Title",
    description = "This is a sample blog description.",
    // author_name = "Author Name",
    // category = "Category",
    // country_name = "Country",
    // state_name = "State",
    media,
    content = {},
  } = blogDetails;

  const isLoading = useSelector((state) => state?.loader?.isLoading);

  const fetchBlogById = async () => {
    if (id) {
      await dispatch(fetchSingleBlog(id));
    }
  };

  useEffect(() => {
    if (id) fetchBlogById();
    return () => dispatch(clearBlog()); // Clear form data on unmount
    // eslint-disable-next-line
  }, [id, dispatch]);

  if (isLoading) {
    return <CustomLoader name="BlogEditorViewLoader" />;
  }

  if (error) {
    return <NoDataFoundMessage message="Something went wrong!" />;
  }

  return (
    <>
      {/* Blog Section */}
      <section className="container max-w-5xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg blog-container">
        {/* Blog Title */}
        <h1 className="text-5xl font-bold text-gray-800 mb-4">{title}</h1>

        {/* Blog Metadata */}
        {/* <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
          <p><span className="font-semibold">Author:</span> {author_name}</p>
          <p><span className="font-semibold">Category:</span> {category}</p>
          <p><span className="font-semibold">Location:</span> {country_name?.name}, {state_name?.name}</p>
        </div> */}

        {/* Blog Description */}
        <p className="text-lg text-gray-700 mb-8">{description}</p>

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
          {/* {content?.blocks?.map((block, index) => {
            switch (block.type) {
              case "header":
                return <Header key={index} block={block} />;
              case "paragraph":
                return <Paragraph key={index} block={block} />;
              // case "List":
              //   return <List key={index} block={block} />;
              case "image":
                return <ImageBlock key={index} block={block} />;
              case "embed":
                return <EmbedBlock key={index} block={block} />;
              default:
                return null;
            }
          })} */}
          <RenderContent content={content} />
        </div>
      </section>
    </>
  );
}

export default ViewBlog;
