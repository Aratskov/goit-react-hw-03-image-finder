import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    searchValue: '',
  };

  resultSearch = search => {
    this.setState({ searchValue: search });
  };
  render() {
    return (
      <>
        <Searchbar onSubmit={this.resultSearch} />
        <ImageGallery searchValue={this.state.searchValue} />
      </>
    );
  }
}
