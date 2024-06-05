import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/';

export const getImageGallery = async (topic, currentPage) => {
  const response = await axios.get('/search/photos', {
    params: {
      query: topic,
      page: currentPage,
      per_page: 12,
      client_id: 'KjDIsgBCRQFc8bk42FNkPh8nD-Kf9Y7Q_8TKQDxW5As',
    },
  });
  return response.data;
};
