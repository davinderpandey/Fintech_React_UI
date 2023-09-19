import './App.css'
import Banner from './components/Banner'
import Experts from './components/Experts'
import Footer from './components/Footer'
import Header from './components/Header'
import NewsLetter from './components/NewsLetter'
import Plans from './components/Plans'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from 'react-router-dom'
import About from './components/pages/About'
import CreditScore from './components/pages/CreditScore'
import Resources from './components/pages/Resources'
import Login from './components/Login'
import Register from './components/Register'
import Logout from './components/Logout'
import NotFound from './components/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        {/* <Route path='/logout' element={Logout} /> */}
        <Route
          path='/home'
          element={
            <div>
              <Header />
              <Banner />
              <Experts />
              <NewsLetter />
              <Plans />
              <Footer />
            </div>
          }
        />
        <Route
          path='/logout'
          element={
            <div>
              <Logout />
              <Header />
              <Banner />
              <Experts />
              <NewsLetter />
              <Plans />
              <Footer />
            </div>
          }
        />

        <Route
          path='/about'
          element={
            <div>
              <Header />
              <About />
              <Footer />
            </div>
          }
        />
        <Route
          path='/checkcredit'
          element={
            <div>
              <Header />
              <CreditScore />
              <Footer />
            </div>
          }
        />
        <Route
          path='/resources'
          element={
            <div>
              <Header />
              <Resources />
              <Footer />
            </div>
          }
        />
        {/* Catch-all route for 404 errors */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
