import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getUsers } from '../redux/usersSlice'
import { getPosts } from '../redux/postsSlice'
import { getAlbums } from '../redux/albumsSlice'
import { getComments } from '../redux/commentsSlice'
import { getPhotos } from '../redux/photosSlice'
import UserSearch from "./UserSearch"
import UserPosts from './UserPosts'
import UserAlbums from './UserAlbums'
import PostComments from './PostComments'
import AlbumPhotos from './AlbumPhotos'
import PhotoDetail from './PhotoDetail'
import "../css/style.css"

const Main = () => {
  const [showImage, setShowImage] = useState(false)
  const [image, setImage] = useState(null)
  const dispatch = useDispatch()
  dispatch(getUsers())

  const changeUserHandler = (userId) => {
    dispatch(getPosts(userId))
    dispatch(getAlbums(userId))
    dispatch(getComments(null))
    dispatch(getPhotos(null))
    //dispatch(setUserId(userId))
  }

  const getPostComments = (postId = null) => {
    dispatch(getComments(postId))
    dispatch(getPhotos(null))
  }

  const getAlbumPhotos = (albumId = null) => {
    dispatch(getComments(null))
    dispatch(getPhotos(albumId))
  }

  useEffect(() => {
    if (image !== null) {
      setShowImage(true)
    } else {
      setShowImage(false)
    }
  }, [image])

  const handleShowImage = (image) => {
    setImage(image)
  }

  const handleHideImage = () => {
    setImage(null)
  }

  return (
    <div className='main'>
      <UserSearch changeUserHandler={changeUserHandler} />
      <div className='content'>
        <div className='sections'>
          <UserPosts getPostComments={getPostComments} />
          <UserAlbums getAlbumPhotos={getAlbumPhotos} />
        </div>
        <div className='details'>
          <PostComments />
          <AlbumPhotos showImage={handleShowImage} />
        </div>
      </div>
      {showImage && <PhotoDetail img={image} closeDetails={handleHideImage} />}
    </div>
  )
}

export default Main