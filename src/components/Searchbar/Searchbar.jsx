import { Component } from 'react';
import { Form, BtnSearch, Input } from './Searchbar.styled';
import '../../index.css';

export class Searchbar extends Component {
  state = {
    searchValue: '',
  };

  handleChange = event => {
    const { value } = event.currentTarget;
    this.setState({ searchValue: value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.searchValue.trim() === '') return;
    this.props.onSubmit(this.state.searchValue);
    this.setState({
      searchValue: '',
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          type="text"
          value={this.state.searchValue}
          onChange={this.handleChange}
          placeholder="Search images and photos"
        />

        <BtnSearch type="submit">Search</BtnSearch>
      </Form>
    );
  }
}
