import BlogTable from "@/components/tables/blogTable/blogTable.index";
import SectionNavigation from "@/components/sectionNavigation/sectionNavigation.index";
import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBlog } from "@/globalStates/actions/blogActions";

const AdminHomePage = () => {
  const allBlogs = useSelector((state) => state.blog.allBlogs);
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
  return (
    <section className="container mx-auto">
      <SectionNavigation
        title={"All blogs"}
        titlePosition="!text-left !mb-0"
        titleClassname="!text-2xl"
      />
      <BlogTable blogs={allBlogs} />
    </section>
  );
};

export default AdminHomePage;
