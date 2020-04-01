import React from 'react'

// import TechTag from '../tags/TechTag'

const TechTags = () => (
  <>
    <h4>分类主题: </h4>
    <div className="d-block">
      12234
      {/* {getTechTags(tags)} */}
    </div>
  </>
)
// const { labels } = props
// const { posts } = props

// const labelCount = labels.map((label) => {
//   let count = 0;
//   posts.forEach((post) => {
//     if (post.node.frontmatter.tags.includes(label.tag)) {
//       count += 1
//     }
//   })
//   return [label.tag, count]
// })

// const categories = labelCount.filter((label) => label[1] > 0)

// const tags = categories.map((category) => category[0])


// const getTechTags = (tags) => {
//   const techTags = []
//   tags.forEach((tag, i) => {
//     labels.forEach((label) => {
//       if (tag === label.tag) {
//         techTags.push(<TechTag key={i} tag={label.tag} tech={label.tech} name={label.name} size={label.size} color={label.color} />)
//       }
//     })
//   })
//   return techTags
// }


export default TechTags
