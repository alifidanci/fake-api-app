import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Pagination from './Pagination';

const UserPosts = ({ getPostComments }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(3);

  const posts = useSelector(state => state.posts)
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.data.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    setCurrentPage(1)
  }, [posts])

  return (
    <div className='posts-section'>

      {posts.loading && "getting posts"}
      {posts.error && posts.error}
      {
        posts.data.length > 0 && (
          <div>
            <h1 className='section-title'>Posts</h1>
            {currentPosts.map((post) => (
              <div className='section-item' key={post.id} onClick={() => getPostComments(post.id)}>
                <h4 className='item-title'>{post.title}</h4>
                <p className='item-content'>{post.body}</p>
              </div>
            ))}
            <Pagination
              itemsPerPage={postPerPage}
              totalItems={posts.data.length}
              currentPage={currentPage}
              paginate={(pageNumber) => setCurrentPage(pageNumber)} />
          </div>
        )}

      


    </div>
  )
}

export default UserPosts