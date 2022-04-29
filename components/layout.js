import Alert from '../components/alert'
import Header from '../components/Header';
import Footer from '../components/footer'
import Meta from '../components/meta'


export default function Layout({ preview, children,menuItems }) {
  return (
    <>
      <Meta /> 
      <Header  menuItems={menuItems} />  
        <Alert preview={preview} />
        <div>
          <main>{children}</main>
        </div>
      <Footer />
      
    </>
  )
}

 