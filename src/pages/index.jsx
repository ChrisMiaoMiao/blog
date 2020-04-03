/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable implicit-arrow-linebreak */
import React from 'react'
import { graphql } from 'gatsby'
// import { Link, graphql } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.css'
import './index.scss'
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css'
import Layout from '../components/layout'
import SEO from '../components/seo'
// import Sidebar from '../components/sidebar/Sidebar'
import TechTag from '../components/tags/TechTag'
import ContentCard from '../components/contentCard/ContentCard'
import TagCard from '../components/tagCard/index'

const IndexPage = ({ data }) => {
  // const posts = data.allMarkdownRemark.edges
  // const { labels } = data.site.siteMetadata
  // const currentPage = 1
  // const nextPage = (currentPage + 1).toString()

  // const getTechTags = (tags) => {
  //   const techTags = []
  //   tags.forEach((tag, i) => {
  //     labels.forEach((label) => {
  //       if (tag === label.tag) {
  // eslint-disable-next-line max-len
  //         techTags.push(<TechTag key={i} tag={label.tag} tech={label.tech} name={label.name} size={label.size} color={label.color} />)
  //       }
  //     })
  //   })
  //   return techTags
  // }

  const params = {
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    //   renderBullet: (index, className) => `<span className="${className}">${index + 1}</span>`,
    // },
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 30,
  }
  return (
    <Layout>
      <SEO title="Home" keywords={['gatsby', 'javascript', 'react', 'web development', 'blog', 'graphql']} />
      <div className="banner">
        <Swiper {...params}>
          <div>
            <a>
              <img src="https://cdn.sspai.com/article/90fd7972-602c-090f-c7cc-6141b22a4d9d.jpg?imageMogr2/quality/95/thumbnail/!2880x620r/gravity/Center/crop/2880x620/interlace/1" alt="" className="banner-item" />
            </a>
          </div>
          <div>
            <a>
              <img src="https://cdn.sspai.com/article/ecd9cfba-a6fd-9278-3250-b9003651cbf8.jpg?imageMogr2/quality/95/thumbnail/!2880x620r/gravity/Center/crop/2880x620/interlace/1" alt="" className="banner-item" />
            </a>
          </div>
        </Swiper>
      </div>
      <div className="index-main p-4">
        <div className="container_content">
          <ContentCard />
          <ContentCard />
          <ContentCard />
          <ContentCard />
          <ContentCard />
          <ContentCard />
        </div>
        <div className="container_nav">
          <div style={{
            marginBottom: 10,
          }}
          >
            <TagCard />
          </div>
          <div style={{
            marginBottom: 10,
          }}
          >
            <TagCard />
          </div>
          <div style={{
            marginBottom: 10,
          }}
          >
            <TagCard />
          </div>
          <div className="choice_wrap">
            <div className="choice_title">
              <img src="" alt="" />
              <span>精选文章</span>
            </div>
            <div className="choice_list">
              <div className="choice_item">
                记账神器 Beancount 教程
              </div>
              <div className="choice_item">
                记账神器 Beancount 教程
              </div>
              <div className="choice_item">
                记账神器 Beancount 教程
              </div>
            </div>
          </div>
        </div>
        {/* <div className="sidebar px-4 py-2">
          <Sidebar />
        </div> */}
        {/* <div className="post-list-main">
          {posts.map((post) => {
            const tags = post.node.frontmatter.tags
            return (
              <div key={post.node.id} className="container mt-5">
                <Link
                  to={post.node.fields.slug}
                  className="text-dark"
                >
                  <h2 className="title">{post.node.frontmatter.title}</h2>
                </Link>
                <small className="d-block text-info"><i>Posted on {post.node.frontmatter.date}</i>
                </small>
                <p className="mt-3 d-inline">{post.node.excerpt}</p>
                <div className="d-block">
                  {getTechTags(tags)}
                </div>
              </div>
            )
          })}
          <div className="mt-4 text-center">
            <Link to={nextPage} rel="next" style={{ textDecoration: `none` }}>
              <span className="text-dark">Next Page →</span>
            </Link>
          </div>
        </div> */}
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
         query IndexQuery {
           site {
             siteMetadata {
               title 
               author
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
             limit: 3
             sort: { fields: [frontmatter___date], order: DESC }
             filter: { frontmatter: { published: { eq: true } } }
           ) {
             totalCount
             edges {
               node {
                 excerpt(pruneLength: 200)
                 html
                 id
                 frontmatter {
                   title
                   date(formatString: "MMMM DD, YYYY")
                   tags
                 }
                 fields {
                   slug
                 }
               }
             }
           }
         }
       `

export default IndexPage
