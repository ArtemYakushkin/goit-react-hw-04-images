import PropTypes from 'prop-types';
import { Li, Image } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ item, onClick }) => {
  return (
    <Li>
      <Image
        src={item.webformatURL}
        alt={item.tag}
        onClick={() => onClick(item.largeImageURL)}
      />
    </Li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  items: PropTypes.exact({
    id: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),
  onClick: PropTypes.func.isRequired,
};
