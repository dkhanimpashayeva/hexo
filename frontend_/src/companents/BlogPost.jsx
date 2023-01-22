import React from 'react'

const BlogPost = () => {
  return (
    <div>
<style>
{
    `
    .blog-posts {
        padding:70px 0;
       
    }
    
    
    .blog-title{
        text-align:center;
    }
    .blog-posts img{
    width:150px;
    height:100px;
    margin-right:20px;
    }
    .blog-posts h4{
        color:red;
        font-size:20px;
      
    }
    .blog-posts h2{
        font-size:40px;
        margin:20px 0;
    }
    .blog-posts p{
font-size:15px;
    }
    .blog-posts span{
        color:gray;
    }
    .blog-posts button{
        border:none;
        color:white;
        background-color:red;
        padding:2px 10px;
        border-radius:5px;
    }
    
    
    
    
    `
}


</style>



<section className="blog-posts">
<div className="container">
<div className="blog-title">
    <h2>Blog Posts</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde impedit, necessitatibus, soluta sit quam minima expedita atque corrupti reiciendis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, iure.</p>
  </div>
  <div className="row">
    <div className="col-6 ">
<div className="d-flex">
<img src="https://preview.colorlib.com/theme/hexa/images/img_1.jpg" alt="img" />
<div className="blog-info">
<span>FEB 26TH, 2018
</span>
<h4>Free Website Template at Free-Template.co</h4>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam minus ipsa earum nemo consectetur cupiditate necessitatibus suscipit assumenda perspiciatis provident.</p>
<button>READ MORE</button>
</div>
</div>
    </div>

    <div className="col-6 ">
<div className="d-flex">
<img src="https://preview.colorlib.com/theme/hexa/images/img_2.jpg" alt="img" />
<div className="blog-info">
<span>FEB 26TH, 2018
</span>
<h4>Free Website Template at Free-Template.co</h4>

<button>READ MORE</button>
</div>
</div>
<div className="d-flex">
<img src="https://preview.colorlib.com/theme/hexa/images/img_3.jpg" alt="img" />
<div className="blog-info">
<span>FEB 26TH, 2018
</span>
<h4>Free Website Template at Free-Template.co</h4>

<button>READ MORE</button>
</div>
</div>
    </div>
  </div>
</div>

</section>



    </div>
  )
}

export default BlogPost