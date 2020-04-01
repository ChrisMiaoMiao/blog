import React from 'react'
import './sidebar.css'

import chrisAvatar from '../../images/my-avatar.jpeg'

const Bio = () => (
  <div className="bio-main w-75">
    <img src={chrisAvatar} style={{ maxWidth: '150px' }} className="profile-img" alt="" />
    <div className="author-bio">&quot身在井隅，心向璀璨&quot</div>
  </div>
)

export default Bio
