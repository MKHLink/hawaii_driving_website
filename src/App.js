import './App.css';
import {React} from 'react'
import Header from './components/Header';
import About from './components/About';
import DirverPackages from './components/DriverPackages';
import ExtraPackages from './components/ExtraPackages';
import Footer from './components/Footer';
import { Button } from 'antd';





function App() {

  

  return (
    <div>
      <Header></Header>
      <About></About>
      <div className='homeBtns'>
      <Button style={{marginRight: '10px'}}type="primary" shape="round" size={'large'}>
          <a href='tel: +1 (718) 307-9717'>(718) 307-9717</a>
      </Button>
      </div>
      <h2 className = 'headlines'>Driver Packages</h2>
      <DirverPackages></DirverPackages>
      <h2 className = 'headlines'>Extra Packages</h2>
      <ExtraPackages></ExtraPackages>
      
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

