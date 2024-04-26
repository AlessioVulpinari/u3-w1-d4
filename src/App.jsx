import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import "./Profile.css"
import Footer from "./components/Footer"
import HomePage from "./components/HomePage"
import MyNavBar from "./components/MyNavBar"
import { Container } from "react-bootstrap"
import Profile from "./components/Profile"

function App() {
  return (
    <div className='App'>
      <header>
        <MyNavBar />
      </header>
      <Container>
        {/* <HomePage /> */}
        <Profile />
        <Footer />
      </Container>
    </div>
  )
}

export default App
