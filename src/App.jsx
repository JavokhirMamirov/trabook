import './App.css'
import About from './Pages/About'
import Blog from './Pages/Blog'
import Comment from './Pages/Comment'
import Destination from './Pages/Destination'
import Footer from './Pages/Footer'
import Form from './Pages/Form'
import Home from './Pages/Home'
import Tour from './Pages/Tour'

function App() {

  return (
    <div>
      <Home />
      <About/>
      <Destination />
      <Tour />
      <Comment/>
      <Blog/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default App
