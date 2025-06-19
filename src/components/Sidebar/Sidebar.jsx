import React, { useState } from 'react'
import './Sidebar.css'
import Subreddit from '../Subreddit/Subreddit'

const Sidebar = () => {

  const [sidebarToggle, setSidebarToggle] = useState(0);

  return (
    <>
    <div className='sidebar-container'>
        <div className="sidebar-shape">
            <ul>
                <li><Subreddit subreddit={"r/bootstrap"} /></li>
                <li><Subreddit subreddit={"r/javascript"} /></li>
                <li><Subreddit subreddit={"r/reactjs"} /></li>
                <li><Subreddit subreddit={"r/webdev"} /></li>
                <li><Subreddit subreddit={"r/programming"} /></li>
                <li><Subreddit subreddit={"r/node"} /></li>
            </ul>
        </div>
    </div>

    <div className="sidebar-dropdown">
            <div className="dropdown-trigger" onClick={() => sidebarToggle === 1 ? setSidebarToggle(0) : setSidebarToggle(1)}>
              Show subreddits
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
              </svg>
            </div>
            {sidebarToggle === 1 ?
            <div className="dropdown-list ${}">
              <ul>
                  <li><Subreddit subreddit={"r/bootstrap"} /></li>
                  <li><Subreddit subreddit={"r/javascript"} /></li>
                  <li><Subreddit subreddit={"r/reactjs"} /></li>
                  <li><Subreddit subreddit={"r/webdev"} /></li>
                  <li><Subreddit subreddit={"r/programming"} /></li>
                  <li><Subreddit subreddit={"r/node"} /></li>
              </ul>
            </div> : ""}

      </div>
    </>
  )
}

export default Sidebar