import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import "./Settings.css"
// import "./Profile.css"
import Footer from "./components/Footer"
import HomePage from "./components/HomePage"
import MyNavBar from "./components/MyNavBar"
import { Container } from "react-bootstrap"
import Profile from "./components/Profile"
import Settings from "./components/Settings"

function App() {
  return (
    <div className='App'>
      <header>
        <MyNavBar />
      </header>
      <Container>
        <Settings />
        {/* <HomePage /> */}
        {/* <Profile /> */}
        <Footer />
      </Container>
    </div>
  )
}

export default App
