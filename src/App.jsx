import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Footer from "./components/Footer"
import HomePage from "./components/HomePage"
import MyNavBar from "./components/MyNavBar"
import { Container } from "react-bootstrap"

function App() {
  return (
    <div className='App'>
      <header>
        <MyNavBar />
      </header>
      <Container>
        <HomePage />
        <Footer />
      </Container>
    </div>
  )
}

export default App
