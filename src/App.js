import './App.css';
import {React, useState, useEffect} from 'react'
import Header from './components/Header';
import About from './components/About';
import DirverPackages from './components/DriverPackages';
import ExtraPackages from './components/ExtraPackages';
import Footer from './components/Footer';
import { Button } from 'antd';





function App() {

  const [extraSelected, setExtraSelected] = useState(false);

  useEffect(()=>{
    window.scrollTo(0,0)
  },[extraSelected]);

  return (
    <div>
      <Header></Header>
      <About></About>
      <div className='homeBtns'>
      <Button style={{marginRight: '10px'}}type="primary" shape="round" size={'large'}>
          <a href='tel: +1 (718) 307-9717'>Call Us</a>
      </Button>
      </div>
      {!extraSelected?(
        <>
          <DirverPackages></DirverPackages>
        </>
      ):extraSelected?(
        <>
          <ExtraPackages></ExtraPackages>
        </>
      ):(
        <></>
      )}

      <div className='homeBtns'>
      <Button style={{marginRight: '10px'}}type="primary" shape="round" size={'large'} onClick={()=>{{!extraSelected?(setExtraSelected(true)):(setExtraSelected(false))}}}>
          See More
      </Button>
      </div>

      <div>
        <p className='notice'>
          The *5 Hours Pre-License* course costs
          around $25 and is delivered online via Zoom by 
          a different provider who will notify you upon completition of the courses
        </p>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
