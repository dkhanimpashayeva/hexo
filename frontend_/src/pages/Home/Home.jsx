import React from "react";
import Card from "../../companents/Card/Card";
import Sliderhero from "../../companents/Sliderhero";
import "./Home.scss";
import Infohero from "../../companents/Infohero";
import Infrucsture from "../../companents/Infrucsture";
import Collabration from "../../companents/Collabration";
import Projects from "../../companents/Projects";
import BlogPost from "../../companents/BlogPost";
const Home = () => {
  return (
    <>
     
      
        <Sliderhero />
        <Infohero />
        <Infrucsture />
        <Collabration />
        <Projects/>
        <Card />
       
     <BlogPost/>
    </>
  );
};

export default Home;
