import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  const facilites = [
    {
      id: 1,
      name: "Facility 1",
      address: "1234 Post St, Folsom, CA 95630",
      npi: 123456789
    },
    {
      id: 2,
      name: "Facility 2",
      address: "1235 Post St, Folsom, CA 95630",
      npi: 123456781
    },
    {
      id: 3,
      name: "Facility 3",
      address: "1236 Post St, Folsom, CA 95630",
      npi: 123456782
    },
    {
      id: 4,
      name: "Facility 4",
      address: "1237 Post St, Folsom, CA 95630",
      npi: 123456783
    },
    {
      id: 5,
      name: "Facility 5",
      address: "1238 Post St, Folsom, CA 95630",
      npi: 123456784
    },
    {
      id: 6,
      name: "Facility 6",
      address: "1239 Post St, Folsom, CA 95630",
      npi: 123456785
    },
    {
      id: 7,
      name: "Facility 7",
      address: "1240 Post St, Folsom, CA 95630",
      npi: 123456786
    },
    
  ]
  //returns a list of of all facilites. currently these are hard coded
  // TODO implemnet database queries for this instead
  return (
    <div className='home'>
      <div className='facilities'>
        <div className='header'>
          <div className='header-item'>Facility Name</div>
          <div className='header-item'>Address</div>
          <div className='header-item'>NPI</div>
        </div>
        {facilites.map(facilites=>(
          <div className='facility' key={facilites.id}>
            <div className="content">
              <Link className='link' to={`/facility/${facilites.id}`}>
                <h1>{facilites.name}</h1>
              </Link>
              <p>{facilites.address}</p>
              <p>{facilites.npi}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home