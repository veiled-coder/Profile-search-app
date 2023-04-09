import React from 'react'
import '../styles.css/search.css'

function Search({ user, setUser }) {
  function getUsername(e) {
    setUser(e.target.value)
  }
  return (
      <>
          <input value={user} onChange={getUsername}placeholder='Search by name' className='search-bar'></input>
    
    </>
  )
}

export default Search