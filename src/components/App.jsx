import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from './App.styled';

import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import Button from './Button/Button';
import { Loader } from './Loader/Loader';
import loadImg from 'services/API';
import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {

  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState('');

  useEffect(() => {

    if (!query) {
      return;
    }

    setIsLoading(true);

    loadImg(page, query)
      .then(dataImages => {
        setItems(prevState => [...prevState, ...dataImages.hits]);
        setIsLoading(false);
        if (dataImages.hits.length === 0) {
          toast.warning("Sorry, we can't find anyting for your request. Please, enter another request");
        };
      })
      .catch(error => {
        setError(error.message);
      });
    
  }, [page, query]);

  const onOpenModalWithLargeImage = url => {
    setShowModal(url);
  };

  const onModalClose = () => {
    setShowModal('');
  };

  const handleSearchSubmit = query => {
    setQuery(query);
    setPage(1);
    setItems([]);
  };

  const onLoadMoreButton = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <Container>
      <Searchbar onSubmit={handleSearchSubmit} />
      {error && <p>{error}</p>}
      {items.length > 0 && <ImageGallery items={items} onClick={onOpenModalWithLargeImage} />}
      {isLoading && <Loader />}
      {items.length > 0 && (<Button onLoadMore={onLoadMoreButton} isLoading={isLoading} />)}
      {showModal && (<Modal onModalClose={onModalClose} url={showModal} />)}
      <ToastContainer autoClose={3000} />
    </Container>
  );
}

export default App;