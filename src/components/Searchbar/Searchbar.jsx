import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { MdOutlineSearch } from "react-icons/md"
import { Header, Form, BtnSearch, InputSearch } from './Searchbar.styled';
import { useState } from 'react';

const Searchbar = ({onSubmit}) => {

    const [searchRequest, setSearchRequest] = useState('');

    const handleRequestChange = event => {
        setSearchRequest(event.currentTarget.value.toLowerCase());
    };

    const handleSubmit = event => {
        event.preventDefault();

        if (searchRequest.trim() === '') {
            return toast.warning('Search field is empty!');
        }

        onSubmit(searchRequest);
        setSearchRequest('');
    };

    return (
        <Header>
            <Form onSubmit={handleSubmit}>
                <BtnSearch type="submit">
                    <MdOutlineSearch size={20} />
                </BtnSearch>
                <InputSearch
                    type="text"
                    name='searchRequest'
                    value={searchRequest}
                    onChange={handleRequestChange}
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </Form>
        </Header>
    );
};

export default Searchbar;

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};