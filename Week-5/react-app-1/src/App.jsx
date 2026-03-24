import './App.css'
import Navbar from './components/Navbar'
import UserList from './components/UserList'
import Footer from './components/Footer'

function App(){
//state

return(
  <div>
    <Navbar/>
    <div className="m-12 min-h-screen"><UserList/></div>
    <Footer/>
    
  </div>
)
}

export default App;