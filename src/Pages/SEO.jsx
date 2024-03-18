import React from 'react';
import DevCard from "../Cards/DevCard"
import Seo from "../Images/Icons/seo.svg";

const SEO = () => {
  return (
    <div className='bg-gray-950'>
      <DevCard
          skill1="HTML"
          skill2="CSS"
          skill3="JAVASCRIPT"
          skill4="REACT JS"
          skill5="ANGULAR"
          skill6="NEXT JS"
          skill7="NODE JS"
          skill8="EXPRESS JS"
          skill9="LARAVEL"
          skill10="MONGO DB"
          skill11="MARIA DB"
          skill12="SQL"
          skill13="MONGO DB"
          Title="Search Engine Optimization"
          imgUrl={Seo}
          Cardtitle1="Front-end"
          Cardtitle2="Back-end"
          Cardtitle3="MERN Stack"
          pricing1="$75"
          pricing2="$100"
          pricing3="$150"
        />
    </div>
  );
}

export default SEO;
