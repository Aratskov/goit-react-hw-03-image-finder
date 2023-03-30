import {
  GalleryContainer,
  Gallery,
  Item,
  Img,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ image, openModal, imagesScroll }) => {
  return (
    <GalleryContainer>
      <Gallery>
        {image.map(({ id, webformatURL, largeImageURL }, ind, arr) => (
          <Item
            key={id}
            ref={arr.length - 12 === ind && ind !== 0 ? imagesScroll : null}
            onClick={() => openModal({ largeImageURL })}
          >
            <Img src={webformatURL} alt="" />
          </Item>
        ))}
      </Gallery>
    </GalleryContainer>
  );
};
