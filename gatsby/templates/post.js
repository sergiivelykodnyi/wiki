import React from "react"
import Layout from "../components/layout"
import Title from "../components/title"

export default function Post({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <div>
        <Title>{post.frontmatter.title}</Title>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`