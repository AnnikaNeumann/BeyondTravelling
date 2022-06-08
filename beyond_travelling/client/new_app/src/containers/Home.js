import React , { useState } from 'react';
import './Home.css';
import Wheelchair from '../access_icons/wheelchair.png';
// import Sign from '../access_icons/sign.png';
import Signinghello from '../access_icons/signinghello.gif';

import BSL from '../components/bsl/BSL';
import AccessibleHotels from '../components/wheelchair/AccessibleHotels';


function Home () {
  const [wheelchair, setWheelchair] = useState(false);
  const [bsl, setBsl] = useState(false); 

  if (wheelchair === false && bsl === false) {

return (
  <>
  {/* <Header /> */}
    <div className='title'>
    <h2>YOUR TRAVEL APP FOR ACCESSIBLE HOLIDAYS</h2>
    </div>
    <div className='homeButtons'>
    <img className = "homeImage" onClick = { () => {setWheelchair(true)} } src={Wheelchair} alt='wheelchairimg' width="500" height="450"/>
    <img className = "homeImage" onClick = { () => {setBsl(true)} } src={Signinghello} alt='signimg' width="500" height="450" margin-bottom='0%'/>
    </div>
  </>

  );

} else if (wheelchair === true) {

  return (
      <>
      {/* <Header /> */}
      <AccessibleHotels />
      </>
  
      );

}else if (bsl === true) {
    return (
      <>
      <BSL />
      </>
    )
}

};
export default Home;