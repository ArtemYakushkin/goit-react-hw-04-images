import PropTypes from 'prop-types';
import { BtnLoadMore } from './Button.styled';

const Button = ({ onLoadMore, isLoading }) => {
    return (
        <BtnLoadMore type='button' onClick={onLoadMore} disabled={isLoading}>Load more</BtnLoadMore>
    );
};

export default Button;

Button.propTypes = {
    onLoadMore: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired
};