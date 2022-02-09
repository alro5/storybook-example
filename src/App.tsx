import './styles/main.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import { Header } from './components/header';
import { Footer } from './components/footer';
import Users from './pages/users';
import Contact from './pages/contact';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<Users />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
