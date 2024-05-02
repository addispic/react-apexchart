import {Routes,Route} from 'react-router-dom'
// components
import Header from './components/Header';
// pages
import Home from './pages/Home';

const App = () => {
  return <div className='w-screen h-screen overflow-x-hidden'>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}></Route>
    </Routes>
  </div>;
};

export default App;
