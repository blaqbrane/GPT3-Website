import {Brand, CTA, Navbar, Feature } from './Components';
import {Blog,Footer,Header,Possibility,WhatGPT3} from './Containers'

function App() {
  return(
    
    <div>
      <div>
        <Navbar/>
        <Header/>
        <Feature/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}
export default App;