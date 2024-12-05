import {
  AFRIKA_PAGE_ARTICLES,
  AFRIKA_REGION_MAIN_SECTION_ARTICLES,
  AFRIKA_REGION_NEWS_FEED_SECTION_ARTICLES,
  DUNIYA_PAGE_ARTICLES,
  HOME_PAGE_ARTICLES,
  KASAR_HAUSA_PAGE_ARTICLES,
  KASUWANCI_PAGE_ARTICLES,
  WASANNI_PAGE_ARTICLES,
  WASANNI_PAGE_NEWS_FEEDS_ARTICLES,
  YANAYI_PAGE_ARTICLES,
} from "../actions/actionsType";

import {
  formatHomeArticleData,
  formatAfricaArticleData,
  formatWasanniArticleData,
} from "@/utills/dataFormatter/articleDataformatter";

const initialState = {
  home: {},
  kasarHausa: {},
  afrika: {},
  duniya: {},
  kasuwanci: {},
  wasanni: {},
  yanayi_a_yau: {},
  afrikaRegionMainArticles: [],
  afrikaRegionNewsFeedArticles: [],
  afirkaRegionBasedData: {},
  wasanniFeeds: [],
};

const ArticlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${HOME_PAGE_ARTICLES}_SUCCESS`:
      return { ...state, home: formatHomeArticleData(action.payload) };
    case `${KASAR_HAUSA_PAGE_ARTICLES}_SUCCESS`:
      return { ...state, kasarHausa: action.payload };
    case `${AFRIKA_PAGE_ARTICLES}_SUCCESS`:
      return { ...state, afrika: formatAfricaArticleData(action.payload) };
    case `${DUNIYA_PAGE_ARTICLES}_SUCCESS`:
      return { ...state, duniya: action.payload };
    case `${KASUWANCI_PAGE_ARTICLES}_SUCCESS`:
      return { ...state, kasuwanci: action.payload };
    case `${AFRIKA_REGION_MAIN_SECTION_ARTICLES}_SUCCESS`:
      return { ...state, afrikaRegionMainArticles: action.payload };
    case `${AFRIKA_REGION_NEWS_FEED_SECTION_ARTICLES}_SUCCESS`:
      return { ...state, afrikaRegionNewsFeedArticles: action.payload };
    case `${WASANNI_PAGE_ARTICLES}_SUCCESS`:
      return { ...state, wasanni: formatWasanniArticleData(action.payload) };
    case `${WASANNI_PAGE_NEWS_FEEDS_ARTICLES}_SUCCESS`: {
      let { count = 0, rows = [] } = action.payload?.allArticle || {};
      const existingRows =
        (state.wasanniFeeds && state.wasanniFeeds.rows) || []; // Safe fallback
      return {
        ...state,
        wasanniFeeds: {
          ...state.wasanniFeeds,
          count,
          rows: [...existingRows, ...rows], // Spread the new rows correctly
        },
      };
    }
    case `${YANAYI_PAGE_ARTICLES}_SUCCESS`:
      return { ...state, yanayi_a_yau: action.payload };
    default:
      return state;
  }
};

export default ArticlesReducer;
