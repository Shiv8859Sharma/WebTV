
const paths = {
	HOME: '/',

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
};


export default paths
