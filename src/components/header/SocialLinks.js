import React, { Component } from "react"
import {
    FaLinkedin,
    FaGithubSquare,
    FaStackOverflow,
    FaFreeCodeCamp,
    FaTwitterSquare,
    FaMoon,
    FaSun
} from "react-icons/fa"
import ThemeContext from '../../context/ThemeContext'

export default class SocialLinks extends Component {
    static contextType = ThemeContext
    render () {
        const theme = this.context
        console.log(theme.toggleDark, 999912)
        return (
         <div className="social-links float-right mr-4">
          <button className="link-btn" onClick={theme.toggleDark}>
          {theme.dark ? (
            <span>
              <FaMoon size={26} style={{ color: "#FCC21B" }} />
            </span>
           ) : (
            <span>
              <FaSun size={26} style={{ color: "#FCC21B" }} />
            </span>
            )}
          </button>
         </div>
    )
    }
}
// const SocialLinks = ({ contacts }) => {
//     return (
//         <div className="social-links float-right mr-4">
//             <a className=" text-primary">
//                 <span title="Linked In">
//                     <FaMoon size={26} style={{ color: "#FCC21B" }} />
//                     <FaSun size={26} style={{ color: "#FCC21B" }} />
//                 </span>
//             </a>
//             <a className="text-primary ml-4"
//                 href={contacts.linkedin}>
//                 <span title="Linked In">
//                     <FaLinkedin size={40} style={{ color: "primary" }} />
//                 </span>
//             </a>
//             <a className="text-light ml-4"
//                 href={contacts.github}>
//                 <span title="GitHub">
//                     <FaGithubSquare size={40} style={{ color: "light" }} />
//                 </span>
//             </a>
//             <a className="text-warning ml-4"
//                 href={contacts.stackoverflow}>
//                 <span title="Stack Overflow">
//                     <FaStackOverflow size={40} style={{ color: "warning" }} />
//                 </span>
//             </a>
//             <a className="text-success ml-4"
//                 href={contacts.freecodecamp}>
//                 <span title="freeCodeCamp">
//                     <FaFreeCodeCamp size={40} style={{ color: "success" }} />
//                 </span>
//             </a>
//             <a className="text-info ml-4"
//                 href={contacts.twitter}>
//                 <span title="Twitter">
//                     <FaTwitterSquare size={40} style={{ color: "info" }} />
//                 </span>
//             </a>
//         </div>
//     )
// }
