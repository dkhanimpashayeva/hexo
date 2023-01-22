import React from 'react'

const Infrucsture = () => {
  return (
    <div>
        <style>
            {
                `
                .infracture{
                    padding: 70px 0;
                    line-height: 40px;
                }
                    h3{
                        font-size: 45px;
                        margin: 30px 0;
                        font-weight: 400;
                    }
                
                   
                    p{
                        color:#767E86;
                        font-size: 20px;
                        font-weight: 400;
                    }
                img{
                    object-fit: cover;
                    width: 100%;
                }
                
                hr{
                   margin:15px ;
                    background-color:orange;
                 height: 2px;
                 width: 30px;
                 display: inline-block;
                }
                
                
                `
            }
        </style>
  <section className="infracture">
          <div className="container">
            <div className="row">
            <div className="col-5">
         <div className="inracture-right-top">
        <div className="d-felx align-items-center">
        <span>01</span>    <hr />
          
          <span>INFRASTRUCTURE</span> 
        </div>
         </div>
                <h3> Let's Build <br />
                   Together</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean</p>
                </div>
              <div className="col-7">
                <img    src="https://preview.colorlib.com/theme/hexa/images/img_1_long.jpg" alt="infracture" />
              </div>
           
            </div>
          </div>
        </section>

    </div>
  )
}

export default Infrucsture