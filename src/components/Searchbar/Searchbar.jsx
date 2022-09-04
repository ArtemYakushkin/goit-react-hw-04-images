import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { MdOutlineSearch } from "react-icons/md"
import { Header, Form, BtnSearch, InputSearch } from './Searchbar.styled';

const { Component } = require("react");

class Searchbar extends Component {

    state = {
        searchRequest: '',
    };

    handleRequestChange = event => {
        this.setState({ searchRequest: event.currentTarget.value.toLowerCase() });
    }

    handleSubmit = event => {
        event.preventDefault();

        if (this.state.searchRequest.trim() === '') {
            return toast.warning('Search field is empty!');
        }

        this.props.onSubmit(this.state.searchRequest);
        this.setState({ searchRequest: '' });
    }

    render() {
        return (
            <Header>
                <Form onSubmit={this.handleSubmit}>
                    <BtnSearch type="submit">
                        <MdOutlineSearch size={20} />
                    </BtnSearch>
                    <InputSearch
                        type="text"
                        name='searchRequest'
                        value={this.state.searchRequest}
                        onChange={this.handleRequestChange}
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </Form>
            </Header>
        );
    };
}

export default Searchbar;

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};