import React from 'react';
import { Link } from 'react-router';

class Photo extends React.Component {
  render() {
    const { photo, i } = this.props;
    return (
      <div className='col-md-4 col-sm-6 col-xs-12'>
        <div className='block-photo'>
          <div className='block-photo-img'>
            <Link to={`/view/${photo.id}/${i}`}>
              <img src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} alt={`${photo.title}`} />
            </Link>
            <p className='block-photo-caption'>{photo.server}</p>
          </div>
          <p className='block-photo-author'>{photo.title}</p>
        </div>
      </div>
    );
  }
}

export default Photo;
