/* eslint-disable no-nested-ternary */
/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './header/header'
import './layout.css'
import '../styles/main.scss'
// import ThemeContext from '../context/ThemeContext'

export default class Layout extends Component {
  // static contextType = ThemeContext
  render() {
    const { dark, notFound } = this.context
    const { children } = this.props

    return (
      <StaticQuery
        query={graphql`
        query SiteTitleQuery {
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
            }
          }
        }
      `}
        render={(data) => (
          <>
            <Helmet
              bodyAttributes={{
                class: `theme ${dark && !notFound ? 'dark' : '' || notFound ? 'not-found' : ''}`,
              }}
            >
              <meta name="description" content="淼淼的博客" />
              <link rel="shortcut icon" type="image/png" />
            </Helmet>
            <Header
              siteTitle={data.site.siteMetadata.title}
              tagline={data.site.siteMetadata.tagline}
              author={data.site.siteMetadata.author}
              contacts={data.site.siteMetadata.contacts}
            />
            <div
              style={{
                margin: '0 auto',
                padding: '0px 1.0875rem 1.45rem',
                paddingTop: 0,
              }}
            >
              <main>{children}</main>
              <footer className="text-center">
                <hr />
                <div>
                  <p className="d-inline">
                    ©
                    {' '}
                    {new Date().getFullYear()}
                    {' '}
                    <a className="text-info" href="https://xiongzixiao.github.io/">淼淼真人</a>
                    , All Rights Reserved.
                  </p>
                  <p className="mt-5 text-muted d-inline">
                    <i>
                      {' '}
                      Built with
                      {' '}
                      <a className="text-info" href="https://www.gatsbyjs.org">Gatsby</a>
                    </i>
                  </p>
                </div>
                <a href="http://www.beian.miit.gov.cn/" className="beian-href">浙ICP备19034990号</a>
              </footer>
            </div>
          </>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
