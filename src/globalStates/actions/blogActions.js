import {
  CLEAR_BLOG,
  CREATE_A_NEW_BLOG,
  FETCH_ALL_BLOG,
  SET_BLOG,
  FETCH_SINGLE_BLOG,
} from "./actionsType";

export const setBlog = (blog) => ({
  type: SET_BLOG,
  payload: blog,
});

export const clearBlog = () => ({
  type: CLEAR_BLOG,
});

export const createNewBlog = (payload) => ({
  type: CREATE_A_NEW_BLOG,
  method: "post",
  data: payload,
  URLEndPoint: CREATE_A_NEW_BLOG,
  axiosService: true,
  toaster: {
    loading: true,
  },
});

export const fetchAllBlog = (payload) => ({
  type: FETCH_ALL_BLOG,
  method: "post",
  data: payload,
  URLEndPoint: FETCH_ALL_BLOG,
  axiosService: true,
  toaster: {
    loading: true,
  },
});

export const fetchSingleBlog = (payload) => ({
  type: FETCH_SINGLE_BLOG,
  method: "post",
  params: { id: payload },
  URLEndPoint: FETCH_SINGLE_BLOG,
  axiosService: true,
  toaster: {
    loading: true,
  },
});
