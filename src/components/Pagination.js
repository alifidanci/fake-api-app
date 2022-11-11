import React from 'react'

const Pagination = ({ itemsPerPage, totalItems, currentPage, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        totalItems > itemsPerPage &&
        <nav>
            <ul className='pagination'>
                <li>
                    {
                        currentPage === 1 ?
                            (<a
                                onClick={(event) => event.preventDefault()} href="javascript:;" className='page-link disabled'>
                                Prev
                            </a>) :
                            (<a
                                onClick={() => paginate(currentPage - 1)} href="javascript:;" className='page-link'>
                                Prev
                            </a>)
                    }
                </li>
                {
                    pageNumbers.map(number => (
                        <li key={number} className="page-item">
                            <a onClick={() => paginate(number)} href="javascript:;" className={number === currentPage ? "active page-link" : "page-link"}>
                                {number}
                            </a>
                        </li>
                    ))
                }
                <li>
                    {
                        currentPage === pageNumbers.length ?
                            (<a
                                onClick={(event) => event.preventDefault()} href="javascript:;" className='page-link disabled'>
                                Next
                            </a>) :
                            (<a
                                onClick={() => paginate(currentPage + 1)} href="javascript:;" className='page-link'>
                                Next
                            </a>)
                    }
                </li>
            </ul>
        </nav>
    )
}

export default Pagination