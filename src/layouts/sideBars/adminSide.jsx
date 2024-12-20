import NavigatePage from "@/components/navigatePage";
import paths from "@/routes/paths";

const AdminSidebar = () => {
  return (
    <aside className="sidebar fixed top-36  min-h-[calc(100vh-54.4dvh)] h-full lg:left-0 p-2 w-[300px] overflow-y-auto scrollbar text-center bg-gray-900">
      <SidebarItem label="Home" url={paths.HOME} />
      <SidebarItem label="Create blog" url={paths.CREATE_BLOG} />
    </aside>
  );
};

const SidebarItem = ({ label, url }) => (
  <div className="mt-3 flex items-center  duration-300 cursor-pointer hover:bg-blue-600 text-white">
    <NavigatePage
      url={url}
      className="text-[15px] p-2.5 px-4 w-full text-left text-gray-200 font-bold"
    >
      {label}
    </NavigatePage>
  </div>
);

export default AdminSidebar;
