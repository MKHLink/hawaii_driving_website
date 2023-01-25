import './App.css';
import Header from './components/Header';
import About from './components/About';
import DirverPackages from './components/DriverPackages';
import { Button } from 'antd';




function App() {
  return (
    <div>
      <Header></Header>
      <About></About>
      <div className='homeBtns'>
      <Button style={{marginRight: '10px'}}type="primary" shape="round" size={'large'}>
          Call Us
      </Button>
      </div>
      <DirverPackages></DirverPackages>
    </div>
  );
}

export default App;
