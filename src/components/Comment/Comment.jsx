import React from 'react'
import './Comment.css'

const Comment = () => {
  return (
    <div className='comment-container'>
        <div className="comment-firstline">
            u/user<span className="dot">•</span>5 minutes ago
        </div>
        <div className="comment-content">
            If you’re using python you need to install it (eg black) and activate it in settings.json. If its a simpler file eg html json yaml, extensions like prettier will make do. Sorry the command is for linux specifically, on windows and mac its different: Shift alt F - https://code.visualstudio.com/docs/languages/json#:~:text=Formatting,Document%20from%20the%20context%20menu. Let me know if you don’t figure it out or need to provide more info, eg language.
        </div>
    </div>
  )
}

export default Comment