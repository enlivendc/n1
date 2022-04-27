import Head from 'next/head'
import Header from '../components/Header';
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome,getPrimaryMenu  } from '../lib/api'

import { CMS_NAME } from '../lib/constants'



export default function Index({ allPosts: { edges }, preview,menuItems }) {
  const heroPost = edges[0]?.node
  const morePosts = edges.slice(1)

  return (
    <Layout preview={preview}>
      <Head>
        <title>{CMS_NAME}</title> 
      </Head>
      <Header menuItems={menuItems} />
      <Container>
        <Intro />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.featuredImage?.node?.sourceUrl}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  const menuItems = await getPrimaryMenu();


  return {
    props: { allPosts, preview,menuItems },
  }
}
