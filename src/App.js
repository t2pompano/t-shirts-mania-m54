import { Route, Routes } from 'react-router-dom';
import './App.css';
import GrandPa from './components/GrandPa/GrandPa';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import OrderReview from './components/OrderReview/OrderReview';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/orderreview' element={<OrderReview></OrderReview>}></Route>
        <Route path='/grandpa' element={<GrandPa></GrandPa>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
