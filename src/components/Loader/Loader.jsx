import { Audio } from 'react-loader-spinner'
import { SpinnerContainer } from './Loader.styled';

export function Loader() {
    return (
        <SpinnerContainer>
            <Audio height="80" width="80" radius="9" color='#1b145c' ariaLabel='three-dots-loading' />
        </SpinnerContainer>
    );
};