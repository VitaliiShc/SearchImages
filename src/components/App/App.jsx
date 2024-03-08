import { useEffect, useState, useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import css from './App.module.css';
import { getImgs } from '../../unsplash-api.js';

import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageGallery from '../ImageGallery/ImageGallery';
import ImageModal from '../ImageModal/ImageModal';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import Loader from '../Loader/Loader';
import SearchBar from '../SearchBar/SearchBar';

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  const loadMoreBtn = useRef();

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    async function fetchImgs() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await getImgs(searchQuery, page);

        if (data.total === 0) {
          return toast.error('No images available for your request', {
            icon: '🤷‍♂️',
          });
        }
        setTotalPages(data.total_pages);
        setImages((prevImages) => {
          return [...prevImages, ...data.results];
        });
      } catch (error) {
        setError(true);
        // return toast.error('Error! Reload the page!', {});
      } finally {
        setIsLoading(false);
      }
    }
    fetchImgs();
  }, [searchQuery, page]);

  useEffect(() => {
    let dims = loadMoreBtn.current.getBoundingClientRect();
    window.scrollTo({
      top: dims.bottom,
      behavior: 'smooth',
    });
  }, [images, page]);

  const handleSearh = (newQuery) => {
    if (newQuery === searchQuery) {
      return;
    }
    setSearchQuery(newQuery);
    setPage(1);
    setTotalPages(0);
    setImages([]);
    setError(false);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const showModal = (itemImg) => {
    if (!isModalOpen) {
      setSelectedImg(itemImg);
      setIsModalOpen(true);
    }
  };

  const hideModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <SearchBar onSearch={handleSearh} />
      <main className={css.mainContainer} ref={loadMoreBtn}>
        {images.length > 0 && (
          <ImageGallery items={images} showModal={showModal} />
        )}
        {totalPages > page && !isLoading && !error && (
          <LoadMoreBtn onClick={handleLoadMore} />
        )}
        {error && <ErrorMessage />} {isLoading && <Loader />}
      </main>
      <ImageModal
        isModalOpen={isModalOpen}
        selectedImg={selectedImg}
        hideModal={hideModal}
      />
      <Toaster position="top-center" containerStyle={{ top: 40 }} />
    </>
  );
};

export default App;
