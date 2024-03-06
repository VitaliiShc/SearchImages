import axios from 'axios';

const ACCESS_KEY = 'jnwJyc0Mf5ZG-lbpZCbHZL9YTZ5_c24IVsW9aVXn8zk';
axios.defaults.baseURL = 'https://api.unsplash.com/';

export const getImgs = async (searchQuery, page) => {
  const response = await axios.get('/search/photos', {
    params: {
      query: searchQuery,
      per_page: 12,
      page,
    },
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
    },
  });
  return response.data;
};
