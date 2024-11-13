import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./blog.style.css";
import { useParams } from "react-router-dom";
import ImageElement from "@/components/ImageElement";
import VideoPlayer from "@/components/videoPlayer/videoPlayer.index";
import { fetchSingleBlog, clearBlog } from "@/globalStates/actions/blogActions";
import CustomLoader from "@/layouts/skeletonLoaders";
import NoDataFoundMessage from "@/constants/NoDataFoundMessage";

function ViewBlog() {
  const dispatch = useDispatch();
  const { id } = useParams(); // Assuming you have the id in the URL
  const { blogDetails, error } = useSelector((state) => state.blog);

  let {
    title = "Sample Blog Title",
    description = "This is a sample blog description.",
    author_name = "Author Name",
    category = "Category",
    country_name = "Country",
    state_name = "State",
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
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{title}</h1>

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
                src={media?.file}
                alt="Blog media"
                className="w-full h-auto rounded-lg"
                loading="lazy" // Implement lazy loading for images
              />
            )}
          </div>
        )}

        {/* Blog Content */}
        <div className="my-10">
          {content?.blocks?.map((block, index) => {
            switch (block.type) {
              case "header":
                return <Header key={index} block={block} />;
              case "paragraph":
                return <Paragraph key={index} block={block} />;
              case "List":
                return <List key={index} block={block} />;
              case "image":
                return <ImageBlock key={index} block={block} />;
              case "embed":
                return <EmbedBlock key={index} block={block} />;
              default:
                return null;
            }
          })}
        </div>
      </section>
    </>
  );
}

const Header = ({ block }) => {
  const { level, text } = block.data;
  const headingClass = `font-bold my-4 ${
    level === 1
      ? "text-5xl"
      : level === 2
        ? "text-4xl"
        : level === 3
          ? "text-3xl"
          : "text-2xl"
  }`;

  return (
    <div>
      <h1 className={headingClass} dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
};

const Paragraph = ({ block }) => {
  return (
    <p
      className="my-4 text-gray-700"
      dangerouslySetInnerHTML={{ __html: block.data.text }}
    />
  );
};

const List = ({ block }) => {
  return (
    <ul className="list-disc list-inside my-4 pl-5">
      {block.data.items.map((item, i) => (
        <li key={i}>
          <span dangerouslySetInnerHTML={{ __html: item.content }} />
          {item.items.length > 0 && (
            <ul className="list-disc list-inside pl-5 mt-2">
              {item.items.map((subItem, j) => (
                <li
                  key={j}
                  dangerouslySetInnerHTML={{ __html: subItem.content }}
                />
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

const ImageBlock = ({ block }) => {
  return (
    <div className="my-4">
      <ImageElement
        src={block.data.file.image}
        alt="Blog image"
        className="w-full rounded-lg"
        loading="lazy"
      />
      {block.data.caption && (
        <p className="text-center my-2 text-sm text-gray-600">
          {block.data.caption}
        </p>
      )}
    </div>
  );
};

const EmbedBlock = ({ block }) => {
  return (
    <div className="my-4">
      <iframe
        width="100%"
        height="315"
        src={block.data.embed}
        title={block.data.caption || "Embedded Content"}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      {block.data.caption && (
        <p className="text-center my-2 text-sm text-gray-600">
          {block.data.caption}
        </p>
      )}
    </div>
  );
};

export default ViewBlog;
