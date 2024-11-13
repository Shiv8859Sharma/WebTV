
const paths = {
	HOME: '/',
	LOGIN: '/login',
	// Main category route
	CATEGORY_NEWS: (categoryName = ':categoryName') => `/news/${categoryName}`,

	// Subcategory route
	SUBCATEGORY_NEWS: (categoryName = ':categoryName', subCategory = ':subCategory') => `/news/${categoryName}/${subCategory}`,

	// Article detail can be nested further if needed
	ARTICLE_DETAIL: (categoryName = ':categoryName', subCategory = undefined, slug = ':slug') => {
		return subCategory
			? `/article/${categoryName}/${subCategory}/${slug}`
			: `/article/${categoryName}/${slug}`;
	},

	// admin routes
	CREATE_BLOG: '/create-blog',
	VIEW_BLOG: (id = ':id') => `/view-blog/${id}`,
	EDIT_BLOG: (id = ':id') => `/edit-blog/${id}`
};


export default paths
