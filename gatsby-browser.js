/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from 'react'
import { ThemeProvider } from './src/context/ThemeContext'

// require("./src/templates/codeblock.css")

export const wrapRootElement = ({ element }) => <ThemeProvider>{element}</ThemeProvider>
