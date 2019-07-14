import React,{useEffect} from 'react'
import { Map } from 'react-amap';

function MapGD() {
  useEffect(() => {
    console.log('地图组件');
    
  }, [])


  return (
    // eslint-disable-next-line react/style-prop-object
    <Map version={'1.4.12'} amapkey={process.env.REACT_APP_MAP_KEY}></Map>
  )
}

export default MapGD