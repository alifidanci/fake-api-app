import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Pagination from './Pagination';

const PostComments = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [commentsPerPage] = useState(4);

  const comments = useSelector(state => state.comments)

  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = comments.data.slice(indexOfFirstComment, indexOfLastComment);

  useEffect(() => {
    setCurrentPage(1)
  }, [comments])


  return (
    <div className='comment-section'>
      {comments.loading && "getting albums"}
      {comments.error && comments.error}
      {
        comments.data.length > 0 && (
          <div>
            <h1 className='section-title'>Comments</h1>
            <div className='comments'>
              {currentComments.map((comment) => (
                <div className='section-item' key={comment.id}>
                  <div className='comment-header'>
                    {comment.name} - {comment.email}
                  </div>
                  <div className='comment-body'>
                    {comment.body}
                  </div>
                </div>
              ))}

              <Pagination
                itemsPerPage={commentsPerPage}
                totalItems={comments.data.length}
                currentPage={currentPage}
                paginate={(pageNumber) => setCurrentPage(pageNumber)} />
            </div>
          </div>
        )}

    </div>
  )
}

export default PostComments