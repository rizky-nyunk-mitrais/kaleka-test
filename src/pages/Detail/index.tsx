import {useEffect, useState} from 'react'

import {
  Header,
  Banner,
  Map
} from '../../components'

function Detail() {
  const [locations, setLocations] = useState<any>([])

  useEffect(() => {
    let localCoor = localStorage.getItem('detailCoordinate')
    if (localCoor) {
      let splittedCoordinate = localCoor.split('+')
      setLocations([
        {
          coordinates: [parseFloat(splittedCoordinate[0]), parseFloat(splittedCoordinate[1])]
        }
      ])
    }
  }, [])

  return (
    <div className='container w-screen'>
      <Header/>
      <Banner label={'DETAIL COORDINATE'}/>
      <Map locations={locations}/>
    </div>
  )
}

export default Detail