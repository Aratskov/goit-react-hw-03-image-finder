import { Component, createRef } from 'react';
import { getSearchImages } from 'components/service/serviceApi';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Button } from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';

import { ColorRing } from 'react-loader-spinner';
import { Circle, Title } from './ImageGallery.styled';

export class ImageGallery extends Component {
  static getDerivedStateFromProps(props, state) {
    if (state.query !== props.searchValue) {
      return { page: 1, query: props.searchValue };
    }
    return null;
  }

  state = {
    image: [],
    page: 1,
    query: '',
    totalImages: 0,
    status: 'idle',
    modalData: null,
  };

  imagesItemRef = createRef(null);

  async componentDidUpdate(prevProps, prevState) {
    const { page, image } = this.state;

    if (prevProps.searchValue !== this.props.searchValue) {
      this.setState({ status: 'pending' });
      this.setImages();
    }

    if (prevState.page !== page && page !== 1) {
      // this.setState({ status: 'pending' });
      this.setImages();
    }

    if (prevState.image !== image) {
      this.imagesItemRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  setImages = async () => {
    const { page } = this.state;
    const { searchValue } = this.props;

    try {
      const data = await getSearchImages(searchValue, page);
      if (data.hits.length === 0) {
        throw new Error('No news data');
      }
      this.setState(prevState => ({
        image: page === 1 ? data.hits : [...prevState.image, ...data.hits],
        totalImages: data.total,
        status: 'resolved',
      }));
    } catch (error) {
      this.setState({ status: 'rejected' });
    }
  };

  loadMorePage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  openModal = modalData => {
    this.setState({ modalData });
  };

  closeModal = () => {
    this.setState({ modalData: null });
  };

  render() {
    const { image, totalImages, status, modalData } = this.state;

    if (status === 'idle') {
      return <Title>What do you want to find?</Title>;
    }

    if (status === 'pending') {
      return (
        <Circle>
          <ColorRing
            visible={true}
            height="120"
            width="120"
            ariaLabel="blocks-loading"
          />
          ;
        </Circle>
      );
    }

    if (status === 'rejected') {
      return <Title>Sorry, no such request</Title>;
    }

    if (status === 'resolved') {
      return (
        <>
          <ImageGalleryItem
            image={this.state.image}
            openModal={this.openModal}
            imagesScroll={this.imagesItemRef}
          />

          {modalData && (
            <Modal imgModal={modalData} closeModal={this.closeModal} />
          )}
          {totalImages - image.length > 0 && (
            <Button onClick={this.loadMorePage} />
          )}
        </>
      );
    }
  }
}
