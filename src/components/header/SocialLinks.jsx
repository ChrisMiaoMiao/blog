import React, { Component } from 'react'
import {
  // FaLinkedin,
  // FaGithubSquare,
  // FaStackOverflow,
  // FaFreeCodeCamp,
  // FaTwitterSquare,
  FaMoon,
  FaSun,
} from 'react-icons/fa'
// import ThemeContext from '../../context/ThemeContext'

export default class SocialLinks extends Component {
  // static contextType = ThemeContext
  render() {
    const theme = this.context
    return (
      <div className="social-links float-right mr-4">
        <button className="link-btn" onClick={theme.toggleDark} type="button">
          {theme.dark ? (
            <span>
              <FaMoon size={26} style={{ color: '#FCC21B' }} />
            </span>
          ) : (
            <span>
              <FaSun size={26} style={{ color: '#FCC21B' }} />
            </span>
          )}
        </button>
      </div>
    )
  }
}
