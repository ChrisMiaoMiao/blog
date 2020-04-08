import React, { Component } from 'react'
// import { Link } from 'gatsby'
// import PropTypes from 'prop-types'
import './contentCard.scss'
import { FaCheckCircle, FaCircle } from 'react-icons/fa'


export default class ContentCard extends Component {
  render() {
    return (
      <div>
        <a href="https://www.baidu.com" className="content-card-wrap">
          <div className="img-box">
            <img
              alt=""
              src="https://cdn.sspai.com/article/2fc72fe8-ed1b-3026-f2b6-624abedfde32.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400/interlace/1"
              className="card-image"
            />
          </div>
          <div className="card-content">
            <div className="title">
              如何做课堂笔记更高效？我的 iPad + Notability 使用经验分享
            </div>
            <div className="card-bottom pc-card">
              <div className="left">
                {/* <img src="https://cdn.sspai.com/2020/03/27/4ca175e07e34ef70999d7c068790dbde.jpg?imageMogr2/quality/95/thumbnail/!48x48r/gravity/Center/crop/48x48/interlace/1" alt="" className="header" /> */}
                {/* <span className="name">233字/约4分钟</span> */}
                <span className="name">233字/约4分钟</span>
                <span className="time">1天前</span>
              </div>
              <div className="right">
                {/* <div className="pic-box">
                  <FaCheckCircle size={12} style={{ color: 'success' }} />
                  <span className="name">177</span>
                </div> */}
                <div className="pic-box">
                  <span>前端</span>
                  <span>生活</span>
                  {/* <span className="name">233字/约4分钟</span> */}
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    )
  }
}
