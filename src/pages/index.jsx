import React from "react"
import { graphql } from "gatsby"
import { Cards, Hero, SiteMetadata } from "../components"
import { Layout } from "../layouts/Layout"

export default ({ data }) => {
  return (
    <Layout>
      <SiteMetadata
        title="パソコンのべんきょうのためのリンク"
        description="子どもたちがかんたんに　ぱそこんの　べんきょうができるように　いろいろなサイトを　あつめています"
        image={data.hero.url}
      />

      <Hero
        image={data.hero}
        tag="study ICT"
        title="パソコンのべんきょうのためのリンク"
        description="子どもたちがかんたんに　ぱそこんの　べんきょうができるように　いろいろなサイトを　あつめています"
      />

      <Cards nodes={data.items.nodes} />
    </Layout>
  )
}

export const query = graphql`
  query IndexQuery($tableName: String!) {
    hero: file(relativePath: { eq: "hero-travel.jpg" }) {
      ...HeroImageFragment
    }
    items: allAirtable(filter: { table: { eq: $tableName } }) {
      nodes {
        data {
          country
          image {
            ...CardImageFragment
          }
          name
          slug
          summary
          url
        }
      }
    }
  }
`
