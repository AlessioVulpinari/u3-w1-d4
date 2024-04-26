import { Component } from "react"
import avatar from "../assets/avatar.png"
import Dropdown from "react-bootstrap/Dropdown"
import DropdownButton from "react-bootstrap/DropdownButton"

class Profile extends Component {
  render() {
    return (
      <main>
        <div className='container text-light'>
          <h1 className='h1 border-bottom border-secondary'>Edit Profile</h1>
          <div className='d-flex border-bottom border-secondary pb-3'>
            <div className='image-container'>
              <img src={avatar} alt='netflix_logo' width='145' height='148' className='img' />
            </div>
            <div className='text-container w-100 ms-2'>
              <div className='mb-3 bg-secondary p-1 w-100'>
                <p className='mb-0'>Strive Student</p>
              </div>
              <section className='border-bottom border-secondary pb-3'>
                <p className='mb-1'>Language</p>

                <DropdownButton id='dropdown-basic-button' title='Dropdown button' variant='dark'>
                  <Dropdown.Item href='#/action-1'>English</Dropdown.Item>
                  <Dropdown.Item href='#/action-2'>Italian</Dropdown.Item>
                  <Dropdown.Item href='#/action-3'>Russian</Dropdown.Item>
                  <Dropdown.Item href='#/action-4'>Spanish</Dropdown.Item>
                  <Dropdown.Item href='#/action-5'>French</Dropdown.Item>
                </DropdownButton>
              </section>
              <section className='border-bottom border-secondary pb-4 mt-3'>
                <h3 className='h4'>Maturity Settings:</h3>
                <p className='bg-secondary bg-opacity-50 p-1'>ALL MATURITY RATINGS</p>
                <p>Show titles of all maturity ratings for this profile</p>
                <button type='button' className='btn btn-outline-secondary'>
                  Edit
                </button>
              </section>

              <section className='mt-3'>
                <h3 className='h4'>Autoplay controls</h3>
                <div className='form-check'>
                  <input
                    className='form-check-input text-bg-dark border border-secondary rounded-0 text-secondary'
                    type='checkbox'
                    value=''
                    id='defaultCheck1'
                  />
                  <label className='form-check-label' htmlFor='defaultCheck1'>
                    Autoplay next episode in a series on all devices.
                  </label>
                </div>
                <div className='form-check'>
                  <input
                    className='form-check-input text-bg-dark border border-secondary rounded-0 text-secondary'
                    type='checkbox'
                    value=''
                    id='defaultCheck2'
                  />
                  <label className='form-check-label' htmlFor='defaultCheck2'>
                    Autoplay prewievs while browsing on all devices
                  </label>
                </div>
              </section>
            </div>
          </div>
          <div className='mt-3'>
            <button type='button' className='btn btn-light fw-semibold rounded-0 me-2'>
              SAVE
            </button>
            <button type='button' className='btn btn-outline-secondary rounded-0 me-2'>
              CANCEL
            </button>
            <button type='button' className='btn btn-outline-secondary rounded-0'>
              DELETE PROFILE
            </button>
          </div>
        </div>
      </main>
    )
  }
}

export default Profile
