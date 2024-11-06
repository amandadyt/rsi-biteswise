import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LandingPage from './pages/LandingPage'
import Login from './pages/Login';
import Register from './pages/Register';
import Kalkulator from './pages/Kalkulator';
import Keranjang from './pages/Keranjang';
import Katalog from './pages/Katalog';
import Detail from './pages/Detail';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/kalkulator' element={<Kalkulator/>}></Route>
          <Route path='/keranjang' element={<Keranjang/>}></Route>
          <Route path='/katalog' element={<Katalog/>}></Route>
          <Route path='/detail' element={<Detail/>}></Route>
        </Routes>
      </Router>
    )
}

export default App;
