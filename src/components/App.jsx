import React from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Gallery from './ImageGallery/ImageGallery';
import styles from './App.module.css';

import Button from './Button/Button';
import fetchImage from './Services/fetchImage';

export class App extends React.Component {
  state = { query: '', page: 1, image: [], helpState: 'whatever' };
  componentDidMount() {
    this.renderGallery();
    
    fetch("https://pixabay.com/api/?key=28406091-8008b7c1afae3beb3d4e940a7&q=&image_type=photo&orientation=horizontal&safesearch=true&page=1&per_page=12")
.then(r => r.json())
.then(console.log)
.catch(console.log)
  }
  async componentDidUpdate() {
    this.renderGallery();
  }
  async renderGallery() {
    const response = await fetchImage(this.state.query, this.state.page);
    if (this.state.helpState === 'whatever') {
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
