import React from "react";
import Card from "../../companents/Card";
import Sliderhero from "../../companents/Sliderhero";
import Helmet from "helmet";
import "./Home.scss";
import Infohero from "../../companents/Infohero";
import Infrucsture from "../../companents/Infrucsture";
import Collabration from "../../companents/Collabration";
import Projects from "../../companents/Projects";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      
        <Sliderhero />
        <Infohero />
        <Infrucsture />
        <Collabration />
        <Projects/>
        <Card />
     
    </>
  );
};

export default Home;
