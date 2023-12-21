import {useState, useEffect} from 'react';
import { MapContainer, TileLayer, Popup, CircleMarker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import {useNavigate, useLocation} from 'react-router-dom';

import useScreenSize from '../../helpers/UseScreenSize';

function CustomMap(_props: any) {
  const location = useLocation()
  const navigate = useNavigate()
  const [isOnDetail] = useState<boolean>(location.pathname === '/detail')

  const {width} = useScreenSize()


  const onClickPopup = (coordinate: number[]) => {
    localStorage.setItem('detailCoordinate', coordinate.join("+"))
    navigate('/detail')
  }

  return (
    <div className={`flex flex-col w-screen items-center justify-center ${ width < 1280 ? 'py-8' : 'py-20'}`}>
      <MapContainer center={{ lat: -2.200000, lng: 115.816666 }} zoom={ width < 1280 ? 4 : 4.5}>
        <TileLayer 
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
          attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        {
          _props.locations && _props.locations.map((loc: {coordinates: number[]}, id:string) => (
            <CircleMarker key={id} center={[loc.coordinates[1], loc.coordinates[0]]} pathOptions={{ fillColor: 'blue' }} radius={20}>
              {
                !isOnDetail &&
                <Popup>
                  <span 
                    className={'cursor-pointer text-xs text-red-600 font-bold'}
                    onClick={() => onClickPopup(loc.coordinates)}
                  >
                    LIHAT DETAIL
                  </span>
                </Popup>
              }
            </CircleMarker>
          ))
        }
      </MapContainer>
      {
        isOnDetail && _props.locations[0] && _props.locations[0].coordinates &&
        <p className='text-xl font-bold pt-8'>
          {
            width < 1280 ?
            <>
              <p>Coordinates Details:</p>
              <p>{_props.locations[0].coordinates[0]}</p>
              <p>{_props.locations[0].coordinates[1]}</p>
            </>
            :
            <span>Coordinates Details: {_props.locations[0].coordinates[0]}, {_props.locations[0].coordinates[1]}</span>
          }
        </p>
      }
    </div>
  )
}

export default CustomMap;