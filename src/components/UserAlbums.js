import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Pagination from './Pagination';

const UserAlbums = ({ getAlbumPhotos }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [albumPerPage] = useState(3);

  const albums = useSelector(state => state.albums)

  const indexOfLastAlbum = currentPage * albumPerPage;
  const indexOfFirstAlbum = indexOfLastAlbum - albumPerPage;
  const currentAlbums = albums.data.slice(indexOfFirstAlbum, indexOfLastAlbum);

  useEffect(() => {
    setCurrentPage(1)
  }, [albums])

  return (
    <div className='albums-section'>
      {albums.loading && "getting albums"}
      {albums.error && albums.error}
      {
        albums.data.length > 0 && (
          <div>
            <h1 className='section-title'>Albums</h1>
            {currentAlbums.map((album) => (
              <div className='section-item' key={album.id} onClick={() => getAlbumPhotos(album.id)}>
                <h4 className='item-title'>{album.title}</h4>
              </div>
            ))}
            <Pagination
              itemsPerPage={albumPerPage}
              totalItems={albums.data.length}
              currentPage={currentPage}
              paginate={(pageNumber) => setCurrentPage(pageNumber)} />
          </div>
        )}
    </div>
  )
}

export default UserAlbums