import React from 'react';
import FontAwesome from 'react-fontawesome';
import Photo from './Photo';
import Spinner from './commons/Spinner';
import ButtonMorePhoto from './commons/ButtonMorePhoto';

class GalleryGrid extends React.Component {
  state = {
    searchValue: '',
  };

  render() {
    const { photos, page } = this.props;
    return (
      <div>
        <div className='search-form'>
          <input type='text' placeholder='Search..' name='search' onChange={(e) => this.props.updateSearch(e.target.value)} />
          <button type='submit' onClick={this.handleClick}>
            <FontAwesome name='search' />
          </button>
          <label>
            Sort :
            <select name='food_or_beverage' id='fob' onChange={(e) => this.props.updateSort(e.target.value)}>
              <option value='date-taken-desc'>date-taken-desc</option>
              <option value='date-posted-asc'> date-posted-asc</option>
              <option value='date-posted-desc'> date-posted-desc</option>
              <option value='date-taken-asc'>date-taken-asc</option>
              <option value='interestingness-desc'>interestingness-desc</option>
              <option value='interestingness-asc'>interestingness-asc</option>
              <option value='relevance'>relevance</option>
              <option value='beverage'>Beverage</option>
              <option value='beverage'>Beverage</option>
            </select>
          </label>
        </div>
        <div className='text-center padding-bottom-20p'>
          <div className='row'>
            {photos.map((photo, i) => (
              <Photo {...this.props} key={i} i={i} photo={photo} />
            ))}
          </div>
          {page.loading ? <Spinner /> : <ButtonMorePhoto {...this.props} />}
        </div>
      </div>
    );
  }
}

export default GalleryGrid;
