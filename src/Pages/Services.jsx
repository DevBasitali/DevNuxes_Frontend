import React from "react";
import "./Services.css";
import DevCard from "../Cards/DevCard";
import website_icon from "../Images/Icons/web.svg";
import Android_icon from "../Images/Icons/mble.svg";

const Services = () => {
  return (
    <div className="services-bg  flex flex-col">
      <div className="services mx-20 my-20 justify-center">
        <h3 className="text-center font-semibold text-3xl text-white relative mt-8">
          OUR SERVICES
          <p className="text-center text-xl text-white relative mt-8">
          Discover the pinnacle of digital innovation with DevNuxes. Explore our Services page to unlock expert solutions in website development, design, Android development, and SEO. Elevate your online presence with our tailored strategies and cutting-edge technologies, tailored to your unique business needs</p>
        </h3>
      </div>

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
      <div className="mt-10">
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
          imgUrl={Android_icon}
          Cardtitle1="Front-end"
          Cardtitle2="Back-end"
          Cardtitle3="Full App"
          pricing1="$75"
          pricing2="$100"
          pricing3="$170"
        />
      </div>      
      <div className="mt-10">
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
          Title="Website Development"
          imgUrl={website_icon}
          Cardtitle1="Front-end"
          Cardtitle2="Back-end"
          Cardtitle3="MERN Stack"
          pricing1="$75"
          pricing2="$100"
          pricing3="$150"
        />
      </div>      
      <div className="mt-10 mb-10">
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
          Title="Website Development"
          imgUrl={website_icon}
          Cardtitle1="Front-end"
          Cardtitle2="Back-end"
          Cardtitle3="MERN Stack"
          pricing1="$75"
          pricing2="$100"
          pricing3="$150"
        />
      </div>
    </div>
  );
};

export default Services;
