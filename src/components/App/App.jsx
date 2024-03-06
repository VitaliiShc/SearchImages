import css from './App.module.css';

import { useEffect, useState } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageGallery from '../ImageGallery/ImageGallery';
// import ImageModal from '../ImageModal/ImageModal';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import Loader from '../Loader/Loader';
import SearchBar from '../SearchBar/SearchBar';
import { getImgs } from '../../unsplash-api.js';

// setShowBtn(total_pages && total_pages !== page);

// {
//   showBtn && <button> Load more ... </button>;
// }

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    async function fetchImgs() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await getImgs(searchQuery, page);
        console.log('data: ', data);
        setTotalPages(data.total_pages);
        setImages((prevImages) => {
          return [...prevImages, ...data.results];
        });
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchImgs();
  }, [searchQuery, page]);

  const handleSearh = (newQuery) => {
    setSearchQuery(newQuery);
    setPage(1);
    setTotalPages(0);
    setImages([]);
    setError(false);
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
        {totalPages > page && !isLoading && !error && (
          <LoadMoreBtn onClick={handleLoadMore} />
        )}
        {/* <ImageModal /> */}
      </main>
    </>
  );
};

export default App;
