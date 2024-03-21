import React from 'react';
import DevCard from "../Cards/DevCard"
import Seo from "../Images/Icons/seo.svg";

const SEO = () => {
  return (
    <div className='bg-gray-950'>
      <DevCard
          skill1="INTERNAL LINKS"
          skill2="CONTENT OPTIMIZATION"
          skill3="URL's"
          skill4="LINK BUILDING"
          skill5="CONTENT MARKETING"
          skill6="GUEST POSTING"
          skill7="KEYWORD OPTIMIZATION"
          skill8="QUALITY"
          // skill9=""
          Title="Search Engine Optimization"
          imgUrl={Seo}
          Cardtitle1="On-page Seo"
          Cardtitle2="Off-page Seo"
          Cardtitle3="Content Writing"
          pricing1="$75"
          pricing2="$100"
          pricing3="$150"
        />
    </div>
  );
}

export default SEO;
