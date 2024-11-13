import React from 'react';
import { PencilIcon, TrashIcon, EyeIcon } from '@heroicons/react/24/solid';
import NoDataFoundMessage from '@/constants/NoDataFoundMessage';
import NavigatePage from '@/components/navigatePage';
import paths from '@/routes/paths';

const BlogTable = ({ blogs = []}) => {
  if (blogs.length === 0) {
    return (
      <NoDataFoundMessage message='No blogs available. Please add a new article.' />
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg shadow-lg bg-white border border-gray-200">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-100 text-left text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6">Title</th>
            <th className="py-3 px-6">Author</th>
            <th className="py-3 px-6">Category</th>
            <th className="py-3 px-6">Date</th>
            <th className="py-3 px-6 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-700 text-sm font-light">
          {blogs.map((blog) => (
            <tr
              key={blog.id}
              className="border-b border-gray-200 hover:bg-gray-50 transition duration-200"
            >
              <td className="py-3 px-6 whitespace-nowrap">{blog.title}</td>
              <td className="py-3 px-6">{blog.author}</td>
              <td className="py-3 px-6">{blog.category}</td>
              <td className="py-3 px-6">{new Date(blog.updatedAt).toLocaleDateString()}</td>
              <td className="py-3 px-6 text-center">
                <div className="flex item-center justify-center space-x-4">
                  <NavigatePage
                    url={paths.VIEW_BLOG(blog.id)}
                    className="text-blue-500 hover:text-blue-700 transition-colors duration-150"
                  >
                    <EyeIcon className="w-5 h-5" />
                  </NavigatePage>

                  <NavigatePage
                    url={paths.EDIT_BLOG(blog.id)}
                    className="text-green-500 hover:text-green-700 transition-colors duration-150"
                  >
                    <PencilIcon className="w-5 h-5" />
                  </NavigatePage>
                  <button
                    className="text-red-500 hover:text-red-700 transition-colors duration-150"
                  >
                    <TrashIcon className="w-5 h-5" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlogTable;
