import PropTypes from 'prop-types';
import { Image } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ item, onClick }) => {
    return (
        <li>
            <Image src={item.webformatURL} alt={item.tag} onClick={() => onClick(item.largeImageURL)} />
        </li>
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