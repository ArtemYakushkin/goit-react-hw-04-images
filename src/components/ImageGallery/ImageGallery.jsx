import PropTypes from 'prop-types';
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import { ListGallery, ContainerGallery } from './ImageGallery.styled';

const ImageGallery = ({ items, onClick }) => {
    return (
        <ContainerGallery>
            <ListGallery>
                {items.map(item => {
                    return <ImageGalleryItem key={item.id} item={item} onClick={onClick} />
                })}
            </ListGallery>
        </ContainerGallery>
    );
};

export default ImageGallery;

ImageGallery.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    onClick: PropTypes.func.isRequired,
};