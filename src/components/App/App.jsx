import css from './App.module.css';

import { useEffect, useState } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageGallery from '../ImageGallery/ImageGallery';
// import ImageModal from '../ImageModal/ImageModal';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import Loader from '../Loader/Loader';
import SearchBar from '../SearchBar/SearchBar';
import { fetchImgs } from '../../unsplash-api.js';

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    async function getImgs() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchImgs(searchQuery, page);
        console.log('data: ', data);

        setImages((prevImages) => {
          return [...prevImages, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getImgs();
  }, [searchQuery, page]);

  const handleSearh = (newQuery) => {
    setSearchQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <>
      <SearchBar onSearch={handleSearh} />
      <main className={css.mainContainer}>
        {images.length > 0 && <ImageGallery items={images} />}
        {error && <ErrorMessage />}
        {isLoading && <Loader />}
        {images.length > 0 && !isLoading && (
          <LoadMoreBtn onClick={handleLoadMore} />
        )}

        {/* <ImageModal /> */}
      </main>
    </>
  );
};

export default App;
