import React from 'react'
import './tagCard.scss'
import test123 from '../../images/123.jpg'


const TagCard = () => (
  <div className="tag-card-wrap">
    <img src={test123} alt="" className="tag-card-icon" />
    <span className="tag-card-title">前端开发</span>
    <div className="tag-card-mask" />
  </div>
)

export default TagCard
