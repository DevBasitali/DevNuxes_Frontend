import React from 'react';
import AndroidDev  from "../Images/Icons/mble.svg";
import DevCard from "../Cards/DevCard";

const AndroidDevelopment = () => {
  return (
    <div className='bg-gray-950'>
      <DevCard
          skill1="FLUTTER"
          skill2="REACT NATIVE"
          skill3="XAMARIN"
          skill4="JAVASCRIPT"
          skill5="NODE JS"
          skill6="EXPRESS"
          skill7="PHP"
          skill8="LARAVEL"
          skill9="PHP"
          skill10="MONGO DB"
          skill11="MARIA DB"
          skill12="SQL"
          Title="Android Development"
          imgUrl={AndroidDev}
          Cardtitle1="Front-end"
          Cardtitle2="Back-end"
          Cardtitle3="Full App"
          pricing1="$75"
          pricing2="$100"
          pricing3="$170"
        />
    </div>
  );
}

export default AndroidDevelopment;
