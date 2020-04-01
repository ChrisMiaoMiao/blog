import React from 'react';
import {
//   FaLinkedin,
//   FaGithubSquare,
//   FaStackOverflow,
//   FaFreeCodeCamp,
//   FaTwitterSquare,
  FaMoon,
} from 'react-icons/fa'
// import PropTypes from 'prop-types'
import '../layout.css'

const MobileSocialLinks = () => (
  <div className="bottom-bar py-1">
    <a className="text-primary" href="https://www.baidu.com">
      <span title="Linked In">
        <FaMoon size={26} style={{ color: '#FCC21B' }} />
      </span>
    </a>
  </div>
)

export default MobileSocialLinks;
