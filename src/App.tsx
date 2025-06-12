import './App.css'
import ContactUs from './Components/ContactUs'
import Footer from './Components/Footer'
import Agent from './Pages/Agent'
import Landing from './Pages/Landing'
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/agent" element={<Agent />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
    </>
  )
}

export default App
