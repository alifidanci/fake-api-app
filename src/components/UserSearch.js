import React from 'react'
import { useSelector } from 'react-redux'
import { FaSearch } from 'react-icons/fa';

const UserSearch = (props) => {

  const users = useSelector(state => state.users)

  const handleChange = (e) => {
    props.changeUserHandler(parseInt(e.target.value));
  }

  return (
    <div className='search-section'>
      {users.loading && "getting users"}
      {users.error && users.error}
      <div className='search-wrapper'>
        <span className='search-icon'><FaSearch /></span>
        <select className='search-user' onChange={handleChange}>
          <option key={-1} value={null} selected disabled>Select a user</option>
          {users.data.map((user) => (
            <option key={user.id} value={user.id}>{user.name}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default UserSearch