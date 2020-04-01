import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Bio from './Bio'
import './sidebar.css'

// import SocialLinks from "./SocialLinks"
import TechTags from './TechTags'


const Sidebar = () => (
  <StaticQuery
    query={graphql`
                query SiteBioQuery {
                    site {
                        siteMetadata {
                            title
                            tagline
                            author
                            contacts {
                                linkedin
                                stackoverflow
                                freecodecamp
                                twitter
                            }
                            labels {
                                tag
                                tech
                                name 
                                size 
                                color
                            }
                        }
                    }
                    allMarkdownRemark(
                        limit: 10
                        sort: { fields: [frontmatter___date], order: DESC }
                        filter: { frontmatter: { published: { eq: true } } }
                    ) {
                        edges {
                            node {
                                frontmatter {
                                    tags
                                }
                            }
                        }
                    }
                }
            `}
    render={(data) => (
      <>
        <div className="sidebar-main border-right">
          <Bio author={data.site.siteMetadata.author} tagline={data.site.siteMetadata.tagline} />
          <div className="page-links">
            <Link to="/">
              <div>
                <span className="link-text text-dark">主页</span>
              </div>
            </Link>
            <Link to="/about">
              <div>
                <span className="link-text text-dark">关于我</span>
              </div>
            </Link>
            <Link to="/archive">
              <span className="link-text text-dark">归档</span>
            </Link>
          </div>
          <div className="tech-tags mt-4">
            <TechTags labels={data.site.siteMetadata.labels} posts={data.allMarkdownRemark.edges} />
          </div>
        </div>
      </>
    )}
  />
)

export default Sidebar
