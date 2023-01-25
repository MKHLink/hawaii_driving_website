import './App.css';
import Header from './components/Header';
import About from './components/About';
import DirverPackages from './components/DriverPackages';
import Footer from './components/Footer';
import { Button } from 'antd';





function App() {
  return (
    <div>
      <Header></Header>
      <About></About>
      <div className='homeBtns'>
      <Button style={{marginRight: '10px'}}type="primary" shape="round" size={'large'}>
          <a href='tel: +1 (718) 307-9717'>Call Us</a>
      </Button>
      </div>
      <DirverPackages></DirverPackages>

      <div>
        <p className='notice'>
          The *5 Hours Pre-License* course costs
          around $30 and is delivered online via Zoom by 
          a different provider who will notify you upon completition of the courses
        </p>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
