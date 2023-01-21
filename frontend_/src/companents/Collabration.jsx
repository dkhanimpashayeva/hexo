import React from 'react'

const Collabration = () => {
  return (
    <div>
       <style>
        {
            `
            .collaborate{
                margin: 50px 0;
                padding: 50px 0;
                line-height: 40px;
                background-color:#F8F9FA;
            }
                h3{
                    font-size: 45px;
                    margin: 30px 0;
                    font-weight: 400;
                }
                
                p{
                    color:#767E86;
                    font-size: 20px;
                }
                img{
                    object-fit: cover;
                    width: 100%;
                }
                hr{
                    margin:10px ;
                     background-color:orange;
                  height: 2px;
                  width: 15px;
                  display: inline-block;
                 
            }
            `
        }
        
        </style> 
        <section className="collaborate">
  <div className="container">
    <div className="row">
      <div className="col-7">
        <img src="https://preview.colorlib.com/theme/hexa/images/img_2_long.jpg" alt="collaborate" />
      </div>
      <div className="col-5">
      <div className="inracture-right-top">
        <div className="d-felx align-items-center">
        <span>02</span>    <hr />
          
          <span>COLLABORATE</span> 
        </div>
         </div>
                <h3>Open for <br />
                Collaboration</h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
      </div>
    </div>
  </div>
</section>
    
    
    </div>
  )
}

export default Collabration