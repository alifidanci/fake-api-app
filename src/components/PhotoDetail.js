import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

const PhotoDetail = ({ img, closeDetails }) => {
  return (
    <div className='photo-detail' onClick={() => closeDetails()}>
      <div className='detail-container'>
      <LazyLoadImage
        className='photo'
        key={img?.id}
        src={img?.url}
        effect="blur"
        placeholderSrc={img?.thumbnailUrl}
      />
      <h4 className='photo-title'>{img?.title}</h4>
      </div>
    </div>
  )
}

export default PhotoDetail