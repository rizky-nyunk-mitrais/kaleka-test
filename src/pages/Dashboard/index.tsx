import {useState, useEffect} from 'react';

import {
  Header,
  Banner,
  Map
} from '../../components'

function Dashboard() {
  const [locations, setLocations] = useState([])

  const fetchLocations = () => {
    fetch('https://run.mocky.io/v3/07e88d94-b1de-4e13-89c3-1851cc16019b')
    .then(response => {
      //handle response
      return response.json() 
    })
    .then(parsedResponse => {
      //handle data
      setLocations(parsedResponse.data)
    })
    .catch(error => {
      //handle error
      console.log('error :>> ', error);
    });

  }

  useEffect(() => {
    fetchLocations()
  }, [])
  
  return (
    <div className='container w-screen'>
      <Header/>
      <Banner label={null}/>
      <Map locations={locations}/>
    </div>
  )
}

export default Dashboard