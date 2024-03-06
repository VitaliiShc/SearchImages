import axios from 'axios';

const accessKey = 'jnwJyc0Mf5ZG-lbpZCbHZL9YTZ5_c24IVsW9aVXn8zk';
axios.defaults.baseURL = 'https://api.unsplash.com/';

export const fetchImgs = async (searchQuery, page) => {
  const response = await axios.get('/search/photos', {
    params: {
      query: searchQuery,
      perPage: 12,
      page,
    },
    headers: {
      Authorization: `Client-ID ${accessKey}`,
    },
  });
  return response.data.results;
};
