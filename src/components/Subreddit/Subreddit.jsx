import React from 'react'
import { NavLink, useParams } from 'react-router'

const Subreddit = ( { subreddit } ) => {

  const params = useParams();

  return (
    <li><NavLink to={`subreddit/${subreddit}`} className={({isActive}) => isActive ? "active" : ""}>r/{subreddit}</NavLink></li>
  )
}

export default Subreddit