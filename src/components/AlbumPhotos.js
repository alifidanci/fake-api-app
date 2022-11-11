import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import Pagination from './Pagination';
import { FaSearchPlus } from 'react-icons/fa';

const AlbumPhotos = ({ showImage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [photoPerPage] = useState(12);

  const photos = useSelector(state => state.photos)

  const indexOfLastPhoto = currentPage * photoPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photoPerPage;
  const currentPhotos = photos.data.slice(indexOfFirstPhoto, indexOfLastPhoto);

  useEffect(() => {
    setCurrentPage(1)
  }, [photos])

  return (
    <div className='photos-section'>
      {photos.loading && "getting albums"}
      {photos.error && photos.error}
      {
        photos.data.length > 0 && (
          <div>
            <h1 className='section-title'>Photos</h1>
            <div className='photos'>
              {currentPhotos.map((photo) => (
                <div className='photo-container'>
                  <LazyLoadImage
                    className='photo'
                    key={photo.id}
                    src={photo.url}
                    height={150}
                    width={150}
                    effect="blur"
                    placeholderSrc={photo.thumbnailUrl}
                  />
                  <div
                    className='show-photo'
                    onClick={() => showImage(photo)}
                  >
                    <FaSearchPlus />
                  </div>
                </div>
              ))}
            </div>
            <Pagination
              itemsPerPage={photoPerPage}
              totalItems={photos.data.length}
              currentPage={currentPage}
              paginate={(pageNumber) => setCurrentPage(pageNumber)} />
          </div>
        )
      }
    </div>
  )
}

export default AlbumPhotos