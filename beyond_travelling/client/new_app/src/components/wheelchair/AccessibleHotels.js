import React, { useState, useEffect } from 'react';
// import HotelList from '../components/bsl/HotelList';
// import HotelDetail from '../components/bsl/HotelDetail';
import HotelList from './HotelList';
import HotelDetail from './HotelDetail';
// import './MainPage.css';


const AccessibleHotels = () => {
    const [region, setRegions] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState(null);

    useEffect(() => {
        getRegions();
    }, [])

    const getRegions = function(){
        console.log('fetch');
        fetch('http://localhost:8080/countries')
        .then(res => res.json())
        .then(regions => setRegions(regions))
    }

    const onRegionClick = function(region){
        setSelectedRegion(region);
    }

    // const onHotelSelected = function(hotel){
    //     setSelectedHotel(hotel);
    // }

    return (
        <div className="main-container">
            <HotelList regions={region} onRegionClick={onRegionClick} />
            {selectedRegion ? <HotelDetail selectedRegion={selectedRegion} /> : null}
            
        </div>
    )
}

export default AccessibleHotels;



