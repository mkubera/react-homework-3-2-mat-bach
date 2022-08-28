import React from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Searchbar from './Searchbar/Searchbar';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Gallery from './ImageGallery/ImageGallery';
import styles from './App.module.css';

import Button from './Button/Button';
import fetchImage from './Services/fetchImage';

export class App extends React.Component {
  state = { query: '', page: 1, image: [], helpState: 'whatever' };
  // componentDidMount() {
  //   this.renderGallery();
  // }
  async componentDidUpdate() {
    this.renderGallery();
  }
  async renderGallery() {
    const response = await fetchImage(this.state.query, this.state.page);
    if (this.state.helpState === 'whatever') {
      if (this.state.image.length < 1) {
        Notify.failure('No results');
      }
      if (this.state.page === 1) {
        this.setState({ image: response.hits });
      }
      if (this.state.page > 1) {
        this.setState({ image: [...this.state.image, ...response.hits] });
      }
      this.setState({ helpState: '' });

      console.log(this.state.image);
    }
  }

  handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const query = form.elements.query.value;
    this.setState({ query: query });
    this.setState({ page: 1 });
    this.setState({ helpState: 'whatever' });
    form.reset();
  };
  loadMore = () => {
    this.setState({ helpState: 'whatever' });
    this.setState({ page: this.state.page + 1 });
  };
  render() {
    return (
      <div className={styles.App}>
        <Searchbar submitForm={this.handleSubmit} />
        <Gallery>
          <ImageGalleryItem imgArray={this.state.image} />
        </Gallery>
        <Button click={this.loadMore} />
      </div>
    );
  }
}
