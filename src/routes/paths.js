const paths = {
	HOME: '/',
	CATEGORY_NEWS: (categoryName = ':categoryName') => `/news/${categoryName}`, // Dynamic category-based path
	ARTICLE_DETAIL: (categoryName = ':categoryName', slug = ':slug') => `/news/${categoryName}/${slug}`,
	WORLD_NEWS: (slug = ':slug') => `/world-news/${slug}`,
	AFRICA_NEWS: (slug = ':slug') => `/africa-news/${slug}`,
	LATEST_NEWS: (slug = ':slug') => `/latest-news/${slug}`,
	// You can add more categories here
};

export default paths
