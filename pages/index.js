
import HomeSlider from '../components/HomeSlider';
import HomeContent from '../components/HomeContent'; 
import Layout from '../components/layout'
import { getPrimaryMenu,getHomeBySlug  } from '../lib/api'
 
export default function Index({preview,menuItems,getPageContent }) { 
 
  return (
    <Layout preview={preview}  menuItems={menuItems}>  
      <HomeSlider homePageSlider={getPageContent?.homePageSlider}  />
      <HomeContent homepageService={getPageContent?.homepageService} homePageContent={getPageContent?.homePageContent} />  
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  
  const menuItems = await getPrimaryMenu(); 
  const getPageContent = await getHomeBySlug('home');  
  return {
    props: {preview,menuItems,getPageContent },
  }
}
