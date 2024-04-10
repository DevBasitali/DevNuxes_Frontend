import React from "react";
import DevCard from "../Cards/DevCard";
import PricingCard from "../Cards/PricingCard";
import website_icon from "../Images/Icons/web.svg";

const WebsiteDevelopment = () => {
  return (
    <>
      <div className=" bg-gray-950 h-5/6 pb-32">
        <h2 className="text-center font-bold text-3xl text-white pt-28">WEB DEVELOPMENT</h2>
        <p className="text-center text-xl text-white mt-8 mx-20">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
          totam laudantium illo eveniet dignissimos voluptatem eum commodi
          perferendis quam sed vitae praesentium, alias deserunt at dolore, ab
          odio. Culpa, minima!
        </p>
      </div>

      <PricingCard 
      Title1="Basic"
      Pricing1="$70"
      SubH_1="Single Page"
      SubH_2="Landing Pages"
      SubH_3="Responsive"
      SubH_4="Static"
      SubH_5="Dynamic"
      SubH_6="{6}"
      
      Title2="Standard"
      Pricing2="$100"
      SubH_7="{7}"
      SubH_8="{8}"
      SubH_9="{9}"
      SubH_10="{10}"
      SubH_11="{11}"
      SubH_12="{12}"
      
      Title3="Premium"
      Pricing3="$150"
      SubH_13="{13}"
      SubH_14="{14}"
      SubH_15="{15}"
      SubH_16="{16}"
      SubH_17="{17}"
      SubH_18="{18}"
      />



      {/* <div className=" h-screen bg-gray-950">
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
          Title="Website Development"
          imgUrl={website_icon}
          Cardtitle1="Front-end"
          Cardtitle2="Back-end"
          Cardtitle3="MERN Stack"
          pricing1="$75"
          pricing2="$100"
          pricing3="$150"
        />
      </div> */}
    </>
  );
};

export default WebsiteDevelopment;
