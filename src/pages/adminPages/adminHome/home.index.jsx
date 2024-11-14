import BlogTable from "@/components/tables/blogTable/blogTable.index";
import SectionNavigation from "@/components/sectionNavigation/sectionNavigation.index";
import { useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBlog } from "@/globalStates/actions/blogActions";
import { popupOpen } from "@/globalStates/actions/PopupAction";

const AdminHomePage = () => {
  const { allBlogs, successMessage, errorMessage } = useSelector(
    (state) => state.blog
  );
  const isLoading = useSelector((state) => state?.loader?.isLoading);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(
      fetchAllBlog({
        pagination: {
          page: 1,
          limit: 10,
        },
        filters: {},
      })
    );
  }, []);

  useEffect(() => {
    if (successMessage || errorMessage) {
      const messageType = successMessage ? "success" : "error";
      let message = successMessage || errorMessage;
      setTimeout(() => {
        dispatch(
          popupOpen({
            type: "ALERT_POPUP",
            open: true,
            details: { type: messageType, message },
            className: "w-[95%] md:w-[40%] xl:w-[30%] 3xl:w-[20%]",
          })
        );
      }, 1000);
    }
  }, [successMessage, errorMessage]);

  const handleDeleteBlog = (id) => {
    dispatch(
      popupOpen({
        type: "CONFIRM_DELETE_BLOG_POPUP",
        open: true,
        details: { id },
        className: "w-[95%] md:w-[40%] xl:w-[30%] 3xl:w-[20%]",
      })
    );
  };
  return (
    <section className="container mx-auto">
      <SectionNavigation
        title={"All blogs"}
        titlePosition="!text-left !mb-0"
        titleClassname="!text-2xl"
      />
      <BlogTable
        blogs={allBlogs}
        isLoading={isLoading}
        onDelete={handleDeleteBlog}
      />
    </section>
  );
};

export default AdminHomePage;
