import { Component } from "react"
import { Image } from "react-bootstrap"
import Alert from "react-bootstrap/Alert"
import Spinner from "react-bootstrap/Spinner"

class Gallery extends Component {
  state = { arrayOfFilmsObj: [], isError: false, errorMsg: "", isLoading: true }

  fetchFilms = (filmName) => {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=9d8765b4&s=${filmName}`)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          if (response.status === 400) {
            throw new Error("400: Bad Request")
          }
          if (response.status === 401) {
            throw new Error("401: Unauthorized")
          }
          if (response.status === 402) {
            throw new Error("402: Payment Required")
          }
          if (response.status === 403) {
            throw new Error("403: Forbidden")
          }
          if (response.status === 404) {
            throw new Error("404: Not Found")
          }
          if (response.status === 405) {
            throw new Error("405: Method Not Allowed")
          }
          if (response.status === 406) {
            throw new Error("406: Not Acceptable")
          }
          if (response.status === 407) {
            throw new Error("407: Proxy Authentication Required")
          }
          if (response.status === 408) {
            throw new Error("408: Request Timeout")
          }
          if (response.status === 500) {
            throw new Error("500: Server Error")
          }

          throw new Error("Generic Fetch Error")
        }
      })
      .then((data) => {
        if (!data.Search) {
          this.setState({ isError: true })
          throw new Error("No film finded")
        } else {
          const arrayOfFilmsObj = data.Search.splice(0, 6)
          this.setState({ arrayOfFilmsObj })
          console.log(arrayOfFilmsObj)
        }
      })
      .catch((err) => {
        this.setState({ errorMsg: err.name + " : " + err.message })
        this.setState({ isError: true })
      })
      .finally(() => {
        this.setState({ isLoading: false })
      })
  }

  createCardImg = () =>
    this.state.arrayOfFilmsObj.map((film) => {
      return (
        <div className='col mb-2 text-center px-1' key={film.imdbID}>
          <Image className='img-fluid' src={film.Poster} alt={film.Title} />
        </div>
      )
    })

  createAlert = (errorMsg) => {
    return (
      <Alert variant='danger'>
        <Alert.Heading>WARNING!</Alert.Heading>
        <p>{errorMsg}</p>
      </Alert>
    )
  }

  componentDidMount() {
    this.fetchFilms(this.props.film)
  }

  render() {
    return (
      <>
        {this.state.isLoading && !this.state.isError ? (
          <Spinner animation='border' role='status' variant='light' className='mx-auto'>
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
        ) : (
          console.log("Ciao")
        )}
        {this.state.isError ? this.createAlert(this.state.errorMsg) : console.log("Nessun errore")}
        {this.state.arrayOfFilmsObj.length > 0 && !this.state.isError ? (
          <this.createCardImg />
        ) : (
          console.log("Img ancora non disponibili")
        )}
      </>
    )
  }
}

export default Gallery
