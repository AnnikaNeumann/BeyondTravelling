import React , { useState } from 'react';
import HotelDetail from './HotelDetail';
import Button from 'react-bootstrap/Button';

const HotelList = ({regions}) => {
  const [selectedRegion, setSelectedRegion] = useState(null);

      const regionsItems = regions.map((region, index) => {
        return <Button variant="light" onClick = {() => onRegionClick(region) }><img src= {region.img} alt= "" width = "200px" /></Button>
  
    })

        const onRegionClick = function(region){
        setSelectedRegion(region);
    }
    
  
  if (selectedRegion) {
    return (
      
      <div>
      <ul>
        <HotelDetail region={selectedRegion}/>
      </ul>
    </div>
    )

  } else if (!selectedRegion) {
    return (      
    <div>
    <ul>
    <h2>Please choose region</h2>
      {/* <h1>Hello from BSL hotel list</h1> */}
      {regionsItems}
    </ul>
  </div>
  
    )}
};

export default HotelList;