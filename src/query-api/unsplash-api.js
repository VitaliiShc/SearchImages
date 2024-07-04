import axios from "axios";

const ACCESS_KEY = "jnwJyc0Mf5ZG-lbpZCbHZL9YTZ5_c24IVsW9aVXn8zk";
axios.defaults.baseURL = "https://api.unsplash.com/";

export const getImgs = async (searchQuery, page) => {
  const response = await axios.get("/search/photos", {
    params: {
      query: searchQuery,
      per_page: 12,
      page,
    },
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
    },
  });

  const { total, total_pages, results } = response.data;

  const requiredValues = await results.map((item) => {
    return {
      id: item.id,
      srcSmall:
        item.urls.small ||
        "https://dummyimage.com/600x400/a9a9a9/00008b.jpg&text=No+Image+Available",
      alt: item.alt_description,
      srcRegular:
        item.urls.regular ||
        "https://dummyimage.com/600x400/a9a9a9/00008b.jpg&text=No+Image+Available",
      description: item.description,
      likes: item.likes,
      user: item.user.name,
      urlUserPage: item.user.links.html,
    };
  });

  const requiredData = { total, total_pages, results: requiredValues };

  return requiredData;
};
