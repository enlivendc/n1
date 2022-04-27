import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../components/container'
import Header from '../components/Header'
import Layout from '../components/layout'
import { getAllPagesWithSlugs, getPageBySlug,getPrimaryMenu } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
 console.log(Header);

export default function Page({ page,menuItems}) {
    
    console.log("menuItems",menuItems);
    const router = useRouter()
    return (
        <Layout >
        <Head>
        <title>{CMS_NAME}</title> 
      </Head>
      <Header menuItems={menuItems} />
          <Container>
        
            {router.isFallback ? (
              <PostTitle>Loading…</PostTitle>
            ) : (
              <>
                <article>
                  <Head>
                    <title>
                      {page?.title} | Next.js Blog Example with {CMS_NAME}
                    </title>
                   
                  </Head>
                  <div
                  className='text-base text-grey-darker'
                  dangerouslySetInnerHTML={{ __html: page.content }}
                ></div>
                 
                  <footer>
                    
                  </footer>
                </article>
    
                
              </>
            )}
          </Container>
        </Layout>
      )
}



export async function getStaticProps({ params }) {
    const page = await getPageBySlug(params.slug);
     const menuItems = await getPrimaryMenu(); 
   
    return {
        props: {
            page,
            menuItems   
        },
    }
}

export async function getStaticPaths() {
    const pagesWithSlugs = await getAllPagesWithSlugs();
    return {
      paths: pagesWithSlugs.edges.map(({ node }) => `/${node.slug}`) || [],
      fallback: true,
    };
  }

//export default Page;