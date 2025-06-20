import React from 'react'
import './MainContent.css'
import ContentItem from '../ContentItem/ContentItem'

const MainContent = () => {
  return (
    <div className='maincontent-container'>
      <h2 className='subreddit-title'><span className='subreddit-r'>r/</span>Reddit</h2>
      <ContentItem />
      <ContentItem />
      <ContentItem />
      <ContentItem />
      <ContentItem />
    </div>
  )
}

export default MainContent