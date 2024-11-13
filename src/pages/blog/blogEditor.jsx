import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SectionNavigation from "@/components/sectionNavigation/sectionNavigation.index";
import InputField from "@/components/formFields/input";
import InitiEditorjs from "@/constants/editorjs/initializeEditorjs";
import CustomLoader from '@/layouts/skeletonLoaders'
import { useDispatch, useSelector } from "react-redux";
import {
  setBlog,
  createNewBlog,
  // updateExistingBlog,
  fetchSingleBlog,
  clearBlog,
} from "@/globalStates/actions/blogActions";
import AutocompleteField from "@/components/formFields/autocomplete";
import TextAreaField from "@/components/formFields/textarea";
import { convertFileToBase64URL } from "@/utills/helpers/base64Url";
import { fetchLocationCategory } from "@/globalStates/actions/cateGoryAction";

function BlogEditor() {
  const { id } = useParams(); // Get blog ID from URL if editing
  const dispatch = useDispatch();
  const formData = new FormData();
  const blogData = useSelector((state) => state.blog.blogDetails);
  const isLoading = useSelector(state => state?.loader?.isLoading)

  // Local State
  const [locationCategory, setLocationCategory] = useState([]);
  const [subLocationCategoryList, setSubLocationCategoryList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);

  // Fetch Categories (Countries, States, etc.)
  const fetchCategory = async (id) => {
    let category = await dispatch(fetchLocationCategory(id));
    if (category?.status === 200 && category?.data?.success) {
      return category?.data?.data;
    } else {
      return [];
    }
  };

  // Fetch data if editing an existing blog
  const fetchBlogById = async () => {
    if (id) {
     await dispatch(fetchSingleBlog(id)); 
    }
  };

  // Handle form data conversion for file uploads
  function appendFormData(formData, data, parentKey = "") {
    if (data && typeof data === "object" && !Array.isArray(data)) {
      Object.keys(data).forEach((key) => {
        appendFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
      });
    } else if (Array.isArray(data)) {
      data.forEach((value, index) => {
        appendFormData(formData, value, `${parentKey}[${index}]`);
      });
    } else {
      formData.append(parentKey, data);
    }
  }

  // Load categories when component mounts
  useEffect(() => {
    fetchCategory(0).then((result) => {
      const filteredCategories = result.filter((cate) => cate.name !== "Gida");
      setLocationCategory(filteredCategories);
    });
  }, []);

  // Fetch blog data if `id` exists
  useEffect(() => {
    if (id) fetchBlogById();
    return () => dispatch(clearBlog()); // Clear form data on unmount
  }, [id, dispatch]);

  // Handle posting or updating the blog
  async function handlePostOrUpdateBlog(e) {
    e.preventDefault();
    await appendFormData(formData, blogData);

    if (id) {
      // Update an existing blog
      // await dispatch(updateExistingBlog(id, formData));
    } else {
      // Create a new blog
      await dispatch(createNewBlog(formData));
    }
  }

  // Handle form input changes and file uploads
  const handleSetBlog = async (e) => {
    let { name, value, type, files } = e.target;
    if (type === "file") {
      let file = files[0];
      const fileType = file.type.startsWith("video/") ? "video" : "image";
      const fileURL = await convertFileToBase64URL(file);
      dispatch(setBlog({
        media: {
          type: fileType,
          url: fileURL,
        },
      }));
    } else {
      dispatch(setBlog({ [name]: value }));
    }

    // Adjust the height of textarea dynamically
    if (type === "textarea") {
      const textarea = e.target;
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight + 5}px`;
    }
  };
  
  if(isLoading){
    return <CustomLoader name='BlogEditorFormLoader' />
  }
  return (
    <section className="container max-w-5xl mx-auto md:mt-5 pb-10 px-4">
      <SectionNavigation 
      title={id ? "Edit Blog" : "Create Blog"}
       titlePosition='!text-left !mb-0'
        titleClassname='!text-2xl'
      />

      <div className="pt-0 bg-white p-6 rounded-lg shadow-lg">
        <form onChange={handleSetBlog} onSubmit={handlePostOrUpdateBlog} className="space-y-6">
          {/* Title */}
          <div>
            <label htmlFor="title" className="text-[#17181C] font-bold ">
              Title
            </label>
            <InputField
              type="text"
              name="title"
              placeholder="Write your blog title"
              className="w-full mt-1"
              defaultValue={blogData?.title}
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="text-[#17181C] font-bold">
              Description
            </label>
            <TextAreaField
              name="description"
              placeholder="Write your blog description"
              className="w-full mt-1"
              defaultValue={blogData?.description}
            />
          </div>

          {/* Author Name */}
          <div>
            <label htmlFor="author" className="text-[#17181C] font-bold">
              Author Name
            </label>
            <InputField
              type="text"
              name="author"
              placeholder="Write your author name"
              className="w-full mt-1"
              defaultValue={blogData?.author}
            />
          </div>

          {/* Country Autocomplete */}
          <div>
            <AutocompleteField
              label="Location category"
              name="location_category_name"
              options={locationCategory}
              title="name"
              value="name"
              defaultOption={true}
              defaultOptionLabel="Select country"
              showCheck={false}
              selected={blogData?.location_category_name}
              onSelect={async (value) => {
                handleSetBlog({ target: { value, name: "location_category_name", type: "select" } });
                let state = value?.id ? await fetchCategory(value.id) : [];
                setSubLocationCategoryList(state);
                handleSetBlog({ target: { value: "", name: "location_sub_category_name", type: "select" } });
              }}
            />
          </div>

          {/* State Autocomplete */}
          {subLocationCategoryList.length > 0 && (
            <div>
              <AutocompleteField
                label="Sub location category"
                name="location_sub_category_name"
                options={subLocationCategoryList}
                title="name"
                value="name"
                defaultOption={true}
                defaultOptionLabel="Select State"
                showCheck={false}
                selected={blogData?.location_sub_category_name}
                onSelect={async (value) => {
                  handleSetBlog({ target: { value, name: "location_sub_category_name" } });
                  let categoryList = await fetchCategory(value.id);
                  setCategoryList(categoryList);
                  handleSetBlog({ target: { value: "", name: "category", type: "select" } });
                }}
              />
            </div>
          )}

          {/* Category */}
          {categoryList.length > 0 && (
            <div>
              <AutocompleteField
                label="Category"
                name="category"
                title="name"
                value="name"
                options={categoryList}
                selected={blogData?.category}
                onSelect={(value) => handleSetBlog({ target: { value, name: "category" } })}
                placeholder="Select blog category"
                className="w-full mt-1"
              />
            </div>
          )}

          {/* Media Upload */}
          <div>
            <label htmlFor="media" className="block text-sm font-medium text-gray-700 cursor-pointer">
              Media
              <div className="bg-slate-500 aspect-video flex justify-center items-center text-4xl text-white mt-2 rounded-lg overflow-hidden">
                {!blogData.media ? (
                  <div>Select Image or Video</div>
                ) : blogData.media.type === "video" ? (
                  <video
                    controls
                    src={blogData.media.url}
                    className="aspect-video object-cover"
                  />
                ) : (
                  <img
                    src={blogData.media.url}
                    alt="Selected preview"
                    className="aspect-video object-cover"
                  />
                )}
              </div>
            </label>

            <input
              className="hidden"
              id="media"
              name="media"
              type="file"
              accept=".png, .jpeg, .jpg, .mp4, .mov"
            />
          </div>

          {/* EditorJS */}
          <div>
            <InitiEditorjs />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          >
            {id ? "Update blog" : "Post blog"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default BlogEditor;
