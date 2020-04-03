import React from 'react'
import { FaCheckCircle, FaCircle } from 'react-icons/fa'
import Layout from '../components/layout'
import SEO from '../components/seo'
import './index.scss'

import Sidebar from '../components/sidebar/Sidebar'
import TechTag from '../components/tags/TechTag'

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <div className="post-page-main">
      <div className="sidebar px-4 py-2">
        <Sidebar />
      </div>

      <div className="post-main">
        <SEO title="About" />
        <div className="mt-3">
          <h2 className="heading">关于我</h2>
          <p>
            <i>前端开发工程师/UX，敏捷爱好者，目前就职于丁香园。</i>
          </p>
          <p className="d-inline-block align-top">目前掌握的技术栈: </p>
          <div>
            <TechTag tag="react" tech="React" name="DiReact" size={20} color="deepskyblue" />
            <TechTag tag="nodejs" tech="Node.js" name="DiNodejsSmall" size={20} color="lightgreen" />
            <TechTag tag="vuejs" tech="VUE" name="FaVuejs" size={20} color="#3eaf7c" />
            <TechTag tag="javascript" tech="JavaScript" name="FaJs" size={20} color="yellow" />
          </div>
          <br />
          <h4>More:</h4>
          <div>
            <span className="text-success d-inline-block" title="blazing">
              <FaCheckCircle size={26} style={{ color: 'success' }} />
            </span>
            <p className="d-inline-block ml-3 w-75 align-top">
              <span role="img" aria-label="徒手健身">🏊</span>
              徒手健身者，目前基于囚徒健身体系进行身体锻炼。
            </p>
          </div>
          <div>
            <span className="text-success d-inline-block" title="prism">
              <FaCheckCircle size={26} style={{ color: 'success' }} />
            </span>
            <p className="d-inline-block ml-3 w-75 align-top">
              <span role="img" aria-label="冥想">🧘‍♂️</span>
              正念践行者，追求内心世界的平静。
            </p>
          </div>
          <div>
            <span className="text-success d-inline-block" title="prism">
              <FaCheckCircle size={26} style={{ color: 'success' }} />
            </span>
            <p className="d-inline-block ml-3 w-75 align-top">
              <span role="img" aria-label="晨间日记">📓</span>
              晨间日记践行者，4年积累1000篇日记
            </p>
          </div>
          <h4>正在做的事:</h4>
          <div>
            <span className="text-success d-inline-block" title="icons">
              <FaCircle size={26} style={{ color: 'grey' }} />
            </span>
            <p className="d-inline-block ml-3 w-75 align-top">
              基于TDD的前端开发
            </p>
          </div>
          <div>
            <span className="text-success d-inline-block" title="icons">
              <FaCircle size={26} style={{ color: 'grey' }} />
            </span>
            <p className="d-inline-block ml-3 w-75 align-top">
              公司中后台组件化
            </p>
          </div>
          <div>
            <span className="text-success d-inline-block" title="icons">
              <FaCircle size={26} style={{ color: 'grey' }} />
            </span>
            <p className="d-inline-block ml-3 w-75 align-top">
              每日的正念练习
            </p>
          </div>
          <div>
            <span className="text-success d-inline-block" title="icons">
              <FaCircle size={26} style={{ color: 'grey' }} />
            </span>
            <p className="d-inline-block ml-3 w-75 align-top">
              每月输出一篇文章（人生，技术，理想，科技）
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)


export default AboutPage
