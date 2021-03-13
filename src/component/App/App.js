import React from 'react';
import Header from '../Header'
import Footer from '../Footer'
import Main from '../Route'

const App = (props) =>{
  return(
    <div>
      <Header/>
        <Main/>
      <Footer/>
    </div>
  )
}

export default App