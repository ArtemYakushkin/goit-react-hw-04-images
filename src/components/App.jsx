import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from './App.styled';

import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import Button from './Button/Button';
import { Loader } from './Loader/Loader';
import * as API from "../services/API";

const { Component } = require("react");

class App extends Component {

  state = {
    page: 1,
    query: '',
    items: [],
    error: null,
    isLoading: false,
    showModal: '',
  }

  onOpenModalWithLargeImage = url => {
    this.setState({
      showModal: url,
    });
  };

  onModalClose = () => {
    this.setState({
      showModal: ''
    });
  };

  handleSearchSubmit = query => {
    this.setState({
      query,
      page: 1,
      items: [],
    })
  };

  addImages = async (query, page) => {
    try {
      this.setState({
        isLoading: true
      });
      const images = await API.loadImg(page, query);
      this.setState(prevState => ({
        items: [...prevState.items, ...images],
        isLoading: false,
      }));
      if (images.length === 0) {
        toast.warning("Sorry, we can't find anyting for your request. Please, enter another request");
      }
    } catch (error) {
      this.setState({
        error: error.mesage,
      });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  onLoadMoreButton = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  componentDidUpdate(_, prevState) {
    if (prevState.page !== this.state.page || prevState.query !== this.state.query) {
      this.addImages(this.state.query, this.state.page);
    }
  };

  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        {this.state.error && <p>{this.state.error}</p>}
        {this.state.items.length > 0 && <ImageGallery items={this.state.items} onClick={this.onOpenModalWithLargeImage} />}
        {this.state.isLoading && <Loader />}
        {this.state.items.length > 0 && (<Button onLoadMore={this.onLoadMoreButton} isLoading={this.state.isLoading}/>)}
        {this.state.showModal && (<Modal closeModal={this.onModalClose} url={this.state.showModal}/>)}
        <ToastContainer autoClose={3000} />
      </Container>
    )
  }
}

export default App;


