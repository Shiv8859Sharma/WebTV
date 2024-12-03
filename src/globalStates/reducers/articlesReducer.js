import { formatHeroSection } from "../../utills/dataFormatter/articleDataformatter";
import {
  AFRIKA_PAGE_ARTICLES,
  AFRIKA_TA_YAMMA_PAGE_ARTICLES,
  AREWACIN_AFRIKA_PAGE_ARTICLES,
  DUNIYA_PAGE_ARTICLES,
  GABASHIN_AFRIKA_PAGE_ARTICLES,
  HOME_PAGE_ARTICLES,
  KASAR_HAUSA_PAGE_ARTICLES,
  KASUWANCI_PAGE_ARTICLES,
  KUDANCIN_AFRIKA_PAGE_ARTICLES,
  WASANNI_PAGE_ARTICLES,
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
  kudancinAfirka: {},
  arewacinAfirka: {},
  afirkaTaYamma: {},
  gabashinAfirka: {},
  afirkaRegionBasedData: {},
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
    case `${KUDANCIN_AFRIKA_PAGE_ARTICLES}_SUCCESS`:
      return {
        ...state,
        afirkaRegionBasedData: formatHeroSection(action.payload),
      };
    case `${AREWACIN_AFRIKA_PAGE_ARTICLES}_SUCCESS`:
      return {
        ...state,
        afirkaRegionBasedData: formatHeroSection(action.payload),
      };
    case `${AFRIKA_TA_YAMMA_PAGE_ARTICLES}_SUCCESS`:
      return {
        ...state,
        afirkaRegionBasedData: formatHeroSection(action.payload),
      };
    case `${GABASHIN_AFRIKA_PAGE_ARTICLES}_SUCCESS`:
      return {
        ...state,
        afirkaRegionBasedData: formatHeroSection(action.payload),
      };
    case `${WASANNI_PAGE_ARTICLES}_SUCCESS`:
      return { ...state, wasanni: formatWasanniArticleData(action.payload) };
    case `${YANAYI_PAGE_ARTICLES}_SUCCESS`:
      return { ...state, yanayi_a_yau: action.payload };
    default:
      return state;
  }
};

export default ArticlesReducer;
