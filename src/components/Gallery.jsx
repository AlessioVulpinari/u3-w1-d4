import { Component } from "react"
import { Image } from "react-bootstrap"

class Gallery extends Component {
  state = { arrayOfFilmsObj: [] }

  fetchFilms = (filmName) => {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=9d8765b4&s=${filmName}`)
      .then((response) => {
        if (response.ok) {
          console.log("La fetch riuscita")
          return response.json()
        } else {
          throw new Error("Errore")
        }
      })
      .then((data) => {
        const arrayOfFilmsObj = data.Search.splice(0, 6)
        this.setState({ arrayOfFilmsObj })
        console.log(arrayOfFilmsObj)
      })
      .catch((err) => {
        console.log(err)
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

  componentDidMount() {
    this.fetchFilms(this.props.film)
  }

  render() {
    return <>{this.state.arrayOfFilmsObj.length > 0 ? <this.createCardImg /> : console.log("Img ancora non disponibili")}</>
  }
}

export default Gallery
