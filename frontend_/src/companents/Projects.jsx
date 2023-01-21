import React from 'react'

const Projects = () => {
  return (
    <>
    <style>
{
    `
    .projects{
        text-align:center;
    }
    .projects p{
        font-size:16px;
        padding:40px 0;
    }
    .projects-card-container{
        paddding:0;
        // position:relative
        
    }
     img{
        tranform:scale(1);
    }
     img:hover{
        tranform:scale(1.5);
    }


    // .hover-card:hover{
    //     opacity:1;
    // }
// .hover-card{
//     background-color:rgba(0,0,0,0.5);
//     color:white;
//     display:flex;
//     flex-direction:column;
//     position:absolute;
//     top:0;
//     left:0;
//     width:100%;
//     height:100%;
//     padding-top:50px;
//     line-height:40px;
//     opacity:0;
//     transition:0.3s ease-in-out;
// }
.hover-card i{
    color:white;
}
    `
}

    </style>
<section className="projects">
<div className="titleOfprojects">
<div className="h3">Projects</div>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde impedit, necessitatibus, soluta sit quam  
    <br/>s
    minima expedita reiciendis Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, beatae.s
    .</p>
</div>
<div className="projects-cards">
<div className="row m-3">
    <div className="col-4 p-0">
<div className="projects-card-container">
<img src="https://preview.colorlib.com/theme/hexa/images/img_1.jpg.webp" alt="projects" />
</div>
{/* <div className="hover-card">
<i class="fa-sharp fa-solid fa-plus"></i>
<span>Project name1</span>
</div> */}

    </div>
    <div className="col-4 p-0">
<div className="projects-card-container">
<img src="https://preview.colorlib.com/theme/hexa/images/img_2.jpg" alt="projects" />

</div>

    </div>
    <div className="col-4 p-0">
<div className="projects-card-container">
<img src="https://preview.colorlib.com/theme/hexa/images/img_3.jpg" alt="projects" />

</div>

    </div>
    <div className="col-4 p-0">
<div className="projects-card-container">
<img src="https://preview.colorlib.com/theme/hexa/images/img_4.jpg" alt="projects" />

</div>

    </div>
    <div className="col-4 p-0">
<div className="projects-card-container">
<img src="https://preview.colorlib.com/theme/hexa/images/img_5.jpg" alt="projects" />

</div>

    </div>
    <div className="col-4 p-0">
<div className="projects-card-container">
<img src="https://preview.colorlib.com/theme/hexa/images/img_6.jpg" alt="projects" />

</div>

    </div>
</div>


</div>


</section>
</>

    
  )
}

export default Projects